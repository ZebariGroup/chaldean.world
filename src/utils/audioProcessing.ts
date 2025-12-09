// Audio processing utilities for trimming silence

/**
 * Trims silence from the beginning and end of an audio blob
 */
export async function trimAudioSilence(audioBlob: Blob): Promise<Blob> {
  // Create an audio context
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  const audioContext = new AudioContext();

  try {
    // Decode the audio data
    const arrayBuffer = await audioBlob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Get the channel data (usually we process mono or just use the first channel for detection)
    const channelData = audioBuffer.getChannelData(0);
    const sampleRate = audioBuffer.sampleRate;
    
    // Silence threshold (adjust as needed)
    // 0.01 is roughly -40dB, reasonable for noise floor in browser recording
    const threshold = 0.02; 
    
    // Find start point
    let startIndex = 0;
    // Look for the first sample that exceeds the threshold
    // We scan in chunks to be faster, but per-sample is fine for short clips
    for (let i = 0; i < channelData.length; i++) {
      if (Math.abs(channelData[i]) > threshold) {
        startIndex = i;
        break;
      }
    }
    
    // Add a small buffer before the start (e.g., 0.1s) to avoid cutting off attack
    startIndex = Math.max(0, startIndex - Math.floor(0.1 * sampleRate));

    // Find end point (optional, but good practice)
    let endIndex = channelData.length;
    for (let i = channelData.length - 1; i >= startIndex; i--) {
      if (Math.abs(channelData[i]) > threshold) {
        endIndex = i;
        break;
      }
    }
    
    // Add a small buffer after the end (e.g., 0.1s)
    endIndex = Math.min(channelData.length, endIndex + Math.floor(0.1 * sampleRate));
    
    // Calculate new length
    const newLength = endIndex - startIndex;
    
    if (newLength <= 0) {
      // If practically empty, just return original or empty
      return audioBlob;
    }

    // Create a new AudioBuffer for the trimmed audio
    const trimmedBuffer = audioContext.createBuffer(
      audioBuffer.numberOfChannels,
      newLength,
      sampleRate
    );

    // Copy data to new buffer
    for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
      const oldData = audioBuffer.getChannelData(channel);
      const newData = trimmedBuffer.getChannelData(channel);
      // Copy the slice
      for (let i = 0; i < newLength; i++) {
        newData[i] = oldData[startIndex + i];
      }
    }

    // Convert trimmed AudioBuffer back to WAV Blob
    return await bufferToWav(trimmedBuffer);
    
  } catch (error) {
    console.error('Error trimming audio:', error);
    // Return original if processing fails
    return audioBlob;
  } finally {
    // Close context to free resources
    if (audioContext.state !== 'closed') {
      await audioContext.close();
    }
  }
}

/**
 * Converts an AudioBuffer to a WAV Blob
 * WAV is simpler to encode in browser than WebM/MP3 without large libraries
 */
function bufferToWav(buffer: AudioBuffer): Blob {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const bufferArray = new ArrayBuffer(length);
  const view = new DataView(bufferArray);
  const channels = [];
  let i;
  let sample;
  let offset = 0;
  let pos = 0;

  // write WAVE header
  setUint32(0x46464952);                         // "RIFF"
  setUint32(length - 8);                         // file length - 8
  setUint32(0x45564157);                         // "WAVE"

  setUint32(0x20746d66);                         // "fmt " chunk
  setUint32(16);                                 // length = 16
  setUint16(1);                                  // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(buffer.sampleRate);
  setUint32(buffer.sampleRate * 2 * numOfChan);  // avg. bytes/sec
  setUint16(numOfChan * 2);                      // block-align
  setUint16(16);                                 // 16-bit (hardcoded in this encoder)

  setUint32(0x61746164);                         // "data" - chunk
  setUint32(length - pos - 4);                   // chunk length

  // write interleaved data
  for (i = 0; i < buffer.numberOfChannels; i++)
    channels.push(buffer.getChannelData(i));

  while (pos < buffer.length) {
    for (i = 0; i < numOfChan; i++) {             // interleave channels
      sample = Math.max(-1, Math.min(1, channels[i][pos])); // clamp
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; // scale to 16-bit signed int
      view.setInt16(44 + offset, sample, true);          // write 16-bit sample
      offset += 2;
    }
    pos++;
  }

  // Helper functions
  function setUint16(data: number) {
    view.setUint16(pos, data, true);
    pos += 2;
  }

  function setUint32(data: number) {
    view.setUint32(pos, data, true);
    pos += 4;
  }

  return new Blob([bufferArray], { type: 'audio/wav' });
}

