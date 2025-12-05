import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DictionaryEntry } from '../data/dictionary';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { buildWordKey, encodeWordKeyForPath } from '../utils/wordKey';

interface PronunciationRow {
  id: string;
  audio_path: string;
  created_at: string;
  duration_seconds: number | null;
  notes: string | null;
  user_id: string | null;
}

interface PronunciationItem {
  id: string;
  url: string;
  notes: string | null;
  createdAt: string;
  durationSeconds: number | null;
  isOwner: boolean;
}

interface Props {
  entry: DictionaryEntry;
  onClose: () => void;
}

const formatDuration = (seconds?: number | null) => {
  if (!seconds || Number.isNaN(seconds)) return '';
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}m ${secs}s`;
};

export default function PronunciationModal({ entry, onClose }: Props) {
  const { user, isGuest } = useAuth();
  const wordKey = useMemo(() => buildWordKey(entry), [entry]);

  const [pronunciations, setPronunciations] = useState<PronunciationItem[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [durationSeconds, setDurationSeconds] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const startTimeRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const fetchPronunciations = useCallback(async () => {
    setLoadingList(true);
    const { data, error: fetchError } = await supabase
      .from('word_pronunciations')
      .select('*')
      .eq('word_key', wordKey)
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error(fetchError);
      setError('Failed to load pronunciations.');
      setLoadingList(false);
      return;
    }

    const items = (data as PronunciationRow[]).map((row) => {
      const { data: publicUrlData } = supabase.storage
        .from('pronunciations')
        .getPublicUrl(row.audio_path);

      return {
        id: row.id,
        url: publicUrlData.publicUrl,
        notes: row.notes,
        createdAt: row.created_at,
        durationSeconds: row.duration_seconds,
        isOwner: !!user && row.user_id === user.id,
      };
    });

    setPronunciations(items);
    setLoadingList(false);
  }, [wordKey, user]);

  useEffect(() => {
    fetchPronunciations();
  }, [fetchPronunciations]);

  useEffect(() => {
    return () => {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    if (!user || isGuest) {
      setError('Sign in (non-guest) to record audio.');
      return;
    }

    if (!navigator.mediaDevices?.getUserMedia) {
      setError('Microphone not supported in this browser.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm';

      const recorder = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        if (startTimeRef.current) {
          const elapsed = (Date.now() - startTimeRef.current) / 1000;
          setDurationSeconds(Number(elapsed.toFixed(1)));
        }
        chunksRef.current = [];
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      };

      recorder.start();
      startTimeRef.current = Date.now();
      mediaRecorderRef.current = recorder;
      setRecording(true);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError('Unable to access microphone.');
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current) return;
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const resetRecording = () => {
    setAudioBlob(null);
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setDurationSeconds(null);
  };

  const uploadRecording = async () => {
    if (!audioBlob) {
      setError('Record something before uploading.');
      return;
    }
    if (!user || isGuest) {
      setError('Sign in (non-guest) to upload audio.');
      return;
    }

    setUploading(true);
    setError(null);

    const filePath = `${encodeWordKeyForPath(wordKey)}/${user.id}/${Date.now()}.webm`;

    const { error: uploadError, data: uploadData } = await supabase.storage
      .from('pronunciations')
      .upload(filePath, audioBlob, { contentType: audioBlob.type || 'audio/webm' });

    if (uploadError) {
      console.error(uploadError);
      setError('Failed to upload audio.');
      setUploading(false);
      return;
    }

    const { error: insertError } = await supabase.from('word_pronunciations').insert({
      word_key: wordKey,
      word: entry.word,
      translation: entry.translation,
      phonetic: entry.phonetic,
      script: entry.script,
      user_id: user.id,
      audio_path: uploadData?.path || filePath,
      duration_seconds: durationSeconds,
      notes: notes.trim() || null,
    });

    if (insertError) {
      console.error(insertError);
      setError('Failed to save pronunciation metadata.');
      setUploading(false);
      return;
    }

    resetRecording();
    setNotes('');
    await fetchPronunciations();
    setUploading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-3xl rounded-2xl bg-gray-900 border border-gray-700 shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
          <div>
            <div className="text-sm uppercase tracking-wide text-blue-400">Community audio</div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">{entry.script}</h2>
              <span className="text-gray-400">{entry.word}</span>
              <span className="text-gray-500 text-sm">({entry.translation})</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Record a pronunciation</h3>
              {recording && (
                <span className="text-xs text-red-400 animate-pulse">Recording...</span>
              )}
            </div>
            <p className="text-sm text-gray-400">
              Native speakers: record yourself saying the word and optionally add a short note
              with corrections or dialect context.
            </p>

            <div className="flex items-center gap-3">
              {!recording ? (
                <button
                  onClick={startRecording}
                  className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-white hover:bg-blue-500 transition-colors"
                >
                  Start recording
                </button>
              ) : (
                <button
                  onClick={stopRecording}
                  className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-white hover:bg-red-500 transition-colors"
                >
                  Stop recording
                </button>
              )}
              <button
                onClick={resetRecording}
                className="rounded-xl border border-gray-700 px-4 py-3 text-sm text-gray-300 hover:border-gray-500"
              >
                Reset
              </button>
            </div>

            {audioUrl && (
              <div className="rounded-xl border border-gray-800 bg-gray-800 p-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Preview</span>
                  <span>{formatDuration(durationSeconds)}</span>
                </div>
                <audio controls src={audioUrl} className="w-full" />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Correction / context (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add dialect, pace, or correction notes for learners..."
                className="w-full rounded-xl border border-gray-800 bg-gray-800 p-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                rows={3}
              />
            </div>

            {error && <div className="text-sm text-red-400">{error}</div>}

            <button
              onClick={uploadRecording}
              disabled={uploading || !audioBlob || recording}
              className={`w-full rounded-xl px-4 py-3 font-semibold transition-colors ${
                uploading || !audioBlob || recording
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-500'
              }`}
            >
              {uploading ? 'Saving...' : 'Upload pronunciation'}
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Available recordings</h3>
              <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                {loadingList ? 'Loading...' : `${pronunciations.length} posted`}
              </span>
            </div>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
              {loadingList ? (
                <div className="rounded-xl border border-gray-800 bg-gray-800 p-4 text-gray-400">
                  Fetching community audio...
                </div>
              ) : pronunciations.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-800 bg-gray-800 p-4 text-sm text-gray-400">
                  No community recordings yet. Be the first to add one.
                </div>
              ) : (
                pronunciations.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border border-gray-800 bg-gray-800 p-4"
                  >
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                      <span>{new Date(p.createdAt).toLocaleString()}</span>
                      <span>{formatDuration(p.durationSeconds)}</span>
                    </div>
                    <audio controls src={p.url} className="w-full mb-2" />
                    {p.notes && (
                      <p className="text-sm text-gray-300">
                        {p.notes}
                      </p>
                    )}
                    {p.isOwner && (
                      <p className="mt-1 text-xs text-green-400">Recorded by you</p>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

