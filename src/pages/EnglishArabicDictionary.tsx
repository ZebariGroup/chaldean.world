import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface EnglishArabicEntry {
  id: string;
  english: string;
  arabic: string;
  arabic_romanized: string;
  arabic_phonetic: string;
  part_of_speech: string;
  context: string;
  frequency_rank: number;
}

interface TranslationResult {
  english: string;
  arabic: string;
  arabic_romanized: string;
  arabic_phonetic: string;
  confidence: number;
}

interface ChaldeanSuggestion {
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  similarity_score: number;
}

export default function EnglishArabicDictionary() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [entries, setEntries] = useState<EnglishArabicEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [translationInput, setTranslationInput] = useState('');
  const [translationResults, setTranslationResults] = useState<TranslationResult[]>([]);
  const [chaldeanSuggestions, setChaldeanSuggestions] = useState<ChaldeanSuggestion[]>([]);
  const [selectedArabic, setSelectedArabic] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [newEntry, setNewEntry] = useState({
    english: '',
    arabic: '',
    arabic_romanized: '',
    arabic_phonetic: '',
    part_of_speech: '',
    context: '',
    frequency_rank: 1000
  });

  useEffect(() => {
    checkAdmin();
    loadEntries();
  }, [user]);

  const checkAdmin = async () => {
    if (!user?.email) {
      setIsAdmin(false);
      return;
    }
    const { data } = await supabase
      .from('admin_users')
      .select('email')
      .eq('email', user.email)
      .maybeSingle();
    setIsAdmin(!!data);
  };

  const loadEntries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('english_arabic_dictionary')
        .select('*')
        .order('frequency_rank', { ascending: true })
        .limit(200);

      if (error) throw error;
      setEntries(data || []);
    } catch (error) {
      console.error('Error loading entries:', error);
      showMessage('Error loading dictionary');
    } finally {
      setLoading(false);
    }
  };

  const translateToArabic = async () => {
    if (!translationInput.trim()) return;

    try {
      const { data, error } = await supabase.rpc('translate_english_to_arabic', {
        input_text: translationInput.trim()
      });

      if (error) throw error;
      setTranslationResults(data || []);
      setChaldeanSuggestions([]);
      setSelectedArabic('');
    } catch (error) {
      console.error('Error translating:', error);
      showMessage('Error during translation');
    }
  };

  const findChaldeanSuggestions = async (arabicText: string) => {
    try {
      setSelectedArabic(arabicText);
      const { data, error } = await supabase.rpc('suggest_chaldean_from_arabic', {
        arabic_text: arabicText
      });

      if (error) throw error;
      setChaldeanSuggestions(data || []);
    } catch (error) {
      console.error('Error finding Chaldean suggestions:', error);
      showMessage('Error finding Chaldean words');
    }
  };

  const addEntry = async () => {
    if (!newEntry.english || !newEntry.arabic) {
      showMessage('English and Arabic are required');
      return;
    }

    try {
      const { error } = await supabase
        .from('english_arabic_dictionary')
        .insert([newEntry]);

      if (error) throw error;
      
      showMessage(`Added "${newEntry.english}" successfully`);
      setNewEntry({
        english: '',
        arabic: '',
        arabic_romanized: '',
        arabic_phonetic: '',
        part_of_speech: '',
        context: '',
        frequency_rank: 1000
      });
      setShowAddForm(false);
      loadEntries();
    } catch (error) {
      console.error('Error adding entry:', error);
      showMessage('Error adding entry');
    }
  };

  const deleteEntry = async (id: string, english: string) => {
    if (!confirm(`Delete "${english}"?`)) return;

    try {
      const { error } = await supabase
        .from('english_arabic_dictionary')
        .delete()
        .eq('id', id);

      if (error) throw error;
      showMessage(`Deleted "${english}"`);
      loadEntries();
    } catch (error) {
      console.error('Error deleting:', error);
      showMessage('Error deleting entry');
    }
  };

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const filteredEntries = entries.filter(entry =>
    entry.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.arabic.includes(searchTerm) ||
    entry.arabic_romanized?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.arabic_phonetic?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-2">
            English ↔ Arabic Dictionary
          </h1>
          <p className="text-gray-400">
            Base dictionary for auto-translation and building Chaldean vocabulary
          </p>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-blue-500/20 border border-blue-500 rounded-lg text-blue-300">
            {message}
          </div>
        )}

        {/* Auto-Translate Tool */}
        <div className="mb-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-4">🔄 Auto-Translate & Find Chaldean</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: English to Arabic */}
            <div>
              <h3 className="font-semibold mb-3">Step 1: English → Arabic</h3>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={translationInput}
                  onChange={(e) => setTranslationInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && translateToArabic()}
                  placeholder="Enter English word..."
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={translateToArabic}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors"
                >
                  Translate
                </button>
              </div>

              {translationResults.length > 0 && (
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 mb-2">Arabic translations:</div>
                  {translationResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => findChaldeanSuggestions(result.arabic)}
                      className="p-3 bg-gray-900 border border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-2xl mb-1" dir="rtl">{result.arabic}</div>
                          <div className="text-sm text-gray-400">{result.arabic_romanized}</div>
                          <div className="text-xs text-gray-500">{result.arabic_phonetic}</div>
                        </div>
                        <div className="text-xs text-blue-400">
                          {Math.round(result.confidence * 100)}% match
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-xs text-gray-500 mt-2">
                    👆 Click an Arabic word to find Chaldean equivalents
                  </div>
                </div>
              )}
            </div>

            {/* Right: Arabic to Chaldean */}
            <div>
              <h3 className="font-semibold mb-3">Step 2: Arabic → Chaldean/Sureth</h3>
              {selectedArabic && (
                <div className="mb-3 p-3 bg-gray-900 border border-gray-600 rounded-lg">
                  <div className="text-sm text-gray-400 mb-1">Searching for:</div>
                  <div className="text-2xl" dir="rtl">{selectedArabic}</div>
                </div>
              )}

              {chaldeanSuggestions.length > 0 ? (
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 mb-2">
                    Chaldean suggestions ({chaldeanSuggestions.length}):
                  </div>
                  {chaldeanSuggestions.map((sug, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-gray-900 border border-green-600 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-green-400">{sug.word}</div>
                        <div className="text-xs text-gray-400">
                          {Math.round(sug.similarity_score * 100)}% match
                        </div>
                      </div>
                      <div className="text-sm text-gray-300 mb-1">{sug.translation}</div>
                      <div className="text-sm text-gray-400">{sug.phonetic}</div>
                      <div className="text-xl mt-2" dir="rtl">{sug.script}</div>
                    </div>
                  ))}
                </div>
              ) : selectedArabic ? (
                <div className="p-6 bg-gray-900 border border-gray-600 rounded-lg text-center">
                  <div className="text-gray-400 mb-2">No Chaldean words found</div>
                  <div className="text-sm text-gray-500">
                    This Arabic word hasn't been mapped to Chaldean yet
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-900 border border-gray-600 rounded-lg text-center text-gray-500">
                  Translate an English word first
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dictionary Management (Admin Only) */}
        {isAdmin && (
          <>
            <div className="mb-6 flex gap-3">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search dictionary..."
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors"
              >
                {showAddForm ? 'Cancel' : '+ Add Word'}
              </button>
            </div>

            {showAddForm && (
              <div className="mb-6 p-4 bg-gray-800 border border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-3">Add New Entry</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    value={newEntry.english}
                    onChange={(e) => setNewEntry({...newEntry, english: e.target.value})}
                    placeholder="English *"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={newEntry.arabic}
                    onChange={(e) => setNewEntry({...newEntry, arabic: e.target.value})}
                    placeholder="Arabic *"
                    dir="rtl"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={newEntry.arabic_romanized}
                    onChange={(e) => setNewEntry({...newEntry, arabic_romanized: e.target.value})}
                    placeholder="Arabic Word (English Letters)"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={newEntry.arabic_phonetic}
                    onChange={(e) => setNewEntry({...newEntry, arabic_phonetic: e.target.value})}
                    placeholder="Arabic Phonetic (with punctuation)"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={newEntry.part_of_speech}
                    onChange={(e) => setNewEntry({...newEntry, part_of_speech: e.target.value})}
                    placeholder="Part of Speech (noun, verb, etc.)"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value={newEntry.context}
                    onChange={(e) => setNewEntry({...newEntry, context: e.target.value})}
                    placeholder="Context/Notes"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="number"
                    value={newEntry.frequency_rank}
                    onChange={(e) => setNewEntry({...newEntry, frequency_rank: parseInt(e.target.value) || 1000})}
                    placeholder="Frequency Rank"
                    className="px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={addEntry}
                  className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors"
                >
                  Add Entry
                </button>
              </div>
            )}

            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800 border-b border-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left">English</th>
                      <th className="px-4 py-3 text-left">Arabic</th>
                      <th className="px-4 py-3 text-left">Romanized</th>
                      <th className="px-4 py-3 text-left">Phonetic</th>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Rank</th>
                      <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                          Loading...
                        </td>
                      </tr>
                    ) : filteredEntries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                          No entries found
                        </td>
                      </tr>
                    ) : (
                      filteredEntries.map((entry) => (
                        <tr key={entry.id} className="border-t border-gray-700 hover:bg-gray-700/30">
                          <td className="px-4 py-3">{entry.english}</td>
                          <td className="px-4 py-3" dir="rtl">{entry.arabic}</td>
                          <td className="px-4 py-3 text-sm text-gray-400">{entry.arabic_romanized}</td>
                          <td className="px-4 py-3 text-sm text-gray-400">{entry.arabic_phonetic}</td>
                          <td className="px-4 py-3 text-sm text-gray-400">{entry.part_of_speech}</td>
                          <td className="px-4 py-3 text-sm text-gray-400">{entry.frequency_rank}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => deleteEntry(entry.id, entry.english)}
                              className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-sm transition-colors"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-400">
              Showing {filteredEntries.length} of {entries.length} entries
            </div>
          </>
        )}

        {!isAdmin && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              Sign in as admin to manage the English-Arabic dictionary
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

