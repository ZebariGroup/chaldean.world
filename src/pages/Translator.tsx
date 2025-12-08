import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useDictionary } from '../hooks/useDictionary';
import { DictionaryEntry } from '../data/dictionary';

// Common English words to filter out (stop words)
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during',
  'before', 'after', 'above', 'below', 'between', 'under', 'again', 'further',
  'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all',
  'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'only',
  'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should',
  'now', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'them', 'their', 'what',
  'which', 'who', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was',
  'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'doing', 'would', 'could', 'should', 'may', 'might', 'must', 'shall'
]);

// Synonym mappings for common words to improve search
const SYNONYMS: Record<string, string[]> = {
  'shut': ['close', 'closed'],
  'close': ['shut', 'near'],
  'hello': ['hi', 'greetings', 'peace', 'welcome'],
  'hi': ['hello', 'greetings', 'peace'],
  'thanks': ['thank you', 'grateful'],
  'mom': ['mother'],
  'dad': ['father'],
  'grandpa': ['grandfather'],
  'grandma': ['grandmother'],
  'bro': ['brother'],
  'sis': ['sister'],
  'kid': ['child', 'boy', 'girl'],
  'kids': ['children'],
  'house': ['home'],
  'car': ['vehicle', 'automobile'],
  'drink': ['beverage'],
  'food': ['eat', 'meal'],
  'big': ['large', 'great'],
  'small': ['little', 'tiny'],
  'good': ['well', 'fine', 'nice'],
  'bad': ['poor', 'wrong'],
  'beautiful': ['pretty', 'lovely'],
  'happy': ['glad', 'joyful'],
  'sad': ['unhappy', 'sorry'],
  'sick': ['ill', 'unwell'],
  'help': ['assist', 'aid'],
  'want': ['need', 'wish'],
  'love': ['like', 'adore'],
  'go': ['leave', 'depart'],
  'come': ['arrive'],
  'turn off': ['shut', 'close'],
  'turn on': ['open', 'start'],
  'open': ['opened'],
  'door': ['gate', 'entrance'],
};

export default function Translator() {
  const { preferences } = useProgress();
  const { dictionary: dictionaryData, loading } = useDictionary();
  const [inputText, setInputText] = useState('');
  const [translationResults, setTranslationResults] = useState<any[]>([]);

  const speakWord = (text: string) => {
    if (!preferences.audioEnabled) return;
    
    import('../utils/speech').then(({ speak }) => {
      speak(text, { rate: 0.85 });
    });
  };

  // Get all variations of a word including synonyms
  const getWordVariations = (word: string): string[] => {
    const variations = [word];
    if (SYNONYMS[word]) {
      variations.push(...SYNONYMS[word]);
    }
    return variations;
  };

  // Check if a word matches a translation (whole word matching)
  const matchesWord = (translation: string, searchWord: string): boolean => {
    const translationLower = translation.toLowerCase();
    const searchLower = searchWord.toLowerCase();
    
    // Exact match
    if (translationLower === searchLower) return true;
    
    // Check if it's one of the slash-separated alternatives
    const parts = translationLower.split('/').map(p => p.trim());
    if (parts.some(part => part === searchLower)) return true;
    
    // Word boundary match (whole word only, not partial)
    const wordBoundaryRegex = new RegExp(`\\b${searchLower}\\b`, 'i');
    if (wordBoundaryRegex.test(translationLower)) return true;
    
    return false;
  };

  const translateText = (text: string) => {
    if (!text.trim()) {
      setTranslationResults([]);
      return;
    }

    const input = text.toLowerCase().trim();
    
    // Find exact phrase matches first
    const phraseMatches = dictionaryData.filter(entry => {
      const translation = entry.translation.toLowerCase();
      return translation === input || 
             translation.split('/').some(part => part.trim() === input);
    });

    // Split into words and filter out stop words
    const words = input
      .split(/\s+/)
      .filter(word => !STOP_WORDS.has(word.toLowerCase()) && word.length > 0);
    
    // Find matches for meaningful words with synonym support
    const wordMatches = words.map(word => {
      const variations = getWordVariations(word);
      const allMatches = new Set<typeof dictionaryData[0]>();
      
      // Search for the word and all its synonyms
      variations.forEach(variation => {
        dictionaryData.forEach((entry: DictionaryEntry) => {
          if (matchesWord(entry.translation, variation)) {
            allMatches.add(entry);
          }
        });
      });
      
      return { 
        word, 
        matches: Array.from(allMatches),
        synonymsUsed: variations.filter(v => v !== word)
      };
    }).filter(item => item.matches.length > 0);

    // Combine results
    const results = [];
    
    if (phraseMatches.length > 0) {
      results.push({
        type: 'phrase',
        input: input,
        matches: phraseMatches
      });
    }

    wordMatches.forEach(item => {
      results.push({
        type: 'word',
        input: item.word,
        matches: item.matches,
        synonymsUsed: item.synonymsUsed
      });
    });

    // If no results and we filtered words, show a message
    if (results.length === 0 && words.length === 0 && input.split(/\s+/).length > 0) {
      setTranslationResults([{ type: 'no-meaningful-words', filteredWords: input.split(/\s+/).filter(w => STOP_WORDS.has(w)) }]);
    } else {
      setTranslationResults(results);
    }
  };

  const handleTranslate = () => {
    translateText(inputText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTranslate();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">English to Chaldean Translator</h1>
        <p className="text-gray-400 text-sm md:text-base">Type an English word or phrase to translate</p>
      </div>

      {loading && (
        <div className="text-center text-gray-400 mb-4">Loading dictionary...</div>
      )}

      {/* Translation Input */}
      <div className="mb-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-800/80 rounded-2xl border-2 border-gray-700 p-6">
          <label className="block text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
            English
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a word or phrase..."
              className="flex-1 p-4 rounded-xl bg-gray-900 border-2 border-gray-700 text-white text-lg focus:outline-none focus:border-blue-500 transition-all"
              autoFocus
            />
            <button
              onClick={handleTranslate}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 rounded-xl transition-all active:scale-95"
            >
              Translate
            </button>
          </div>
        </div>
      </div>

      {/* Translation Results */}
      {translationResults.length > 0 ? (
        <div className="space-y-6">
          {translationResults.map((result, idx) => {
            if (result.type === 'no-meaningful-words') {
              return (
                <div key={idx} className="text-center py-8 bg-yellow-500/10 rounded-2xl border-2 border-yellow-500/30">
                  <div className="text-4xl mb-3">💡</div>
                  <p className="text-yellow-400 font-semibold mb-2">Only common words detected</p>
                  <p className="text-gray-400 text-sm">Words like "{result.filteredWords.join('", "')}" are too common to translate.</p>
                  <p className="text-gray-500 text-sm mt-1">Try adding more specific words to your search.</p>
                </div>
              );
            }
            
            return (
              <div key={idx} className="space-y-3">
                {result.type === 'phrase' && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full font-semibold">
                      ✓ Full Phrase Match
                    </span>
                    <span>"{result.input}"</span>
                  </div>
                )}
                {result.type === 'word' && (
                  <div className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full font-semibold">
                      Word Match
                    </span>
                    <span>"{result.input}"</span>
                    {result.synonymsUsed && result.synonymsUsed.length > 0 && (
                      <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs">
                        Also searched: {result.synonymsUsed.join(', ')}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="grid gap-3 md:grid-cols-2">
                  {result.matches.map((entry: DictionaryEntry, matchIdx: number) => (
                  <div
                    key={`${entry.word}-${entry.categories[0]}-${matchIdx}`}
                    className="bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-2xl border-2 border-gray-700 hover:border-blue-500 p-6 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-1 rounded-full">
                        {entry.categories[0]}
                      </div>
                      {preferences.audioEnabled && (
                        <button
                          onClick={() => speakWord(entry.word)}
                          className="text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-500/10 rounded-lg"
                          title="Listen to pronunciation"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    <div className="text-center mb-4">
                      <div className="text-5xl md:text-6xl font-bold mb-2 font-serif text-blue-100">
                        {entry.script}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">
                        {entry.word}
                      </div>
                      <div className="text-sm text-gray-400 italic">
                        "{entry.phonetic}"
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-lg font-semibold text-gray-300 text-center">
                        {entry.translation}
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : inputText.trim() ? (
        <div className="text-center py-12 bg-gray-800/50 rounded-2xl border-2 border-gray-700">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No translations found</p>
          <p className="text-gray-500 text-sm mt-2">Try searching for individual words or simpler phrases</p>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800/50 rounded-2xl border-2 border-gray-700">
          <div className="text-6xl mb-4">💬</div>
          <p className="text-gray-400 text-lg">Enter text above to translate</p>
          <p className="text-gray-500 text-sm mt-2">Try words like "hello", "thank you", or "family"</p>
        </div>
      )}

      {/* Quick Examples */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Try These Examples:
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Hello', 'Thank you', 'Good morning', 'Shut the door', 'Father', 'Water', 'How are you', 'I love you', 'Open the door', 'Turn off the light'].map((example) => (
            <button
              key={example}
              onClick={() => {
                setInputText(example);
                translateText(example);
              }}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 text-gray-300 px-4 py-2 rounded-lg transition-all text-sm active:scale-95"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

