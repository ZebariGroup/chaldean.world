import { useState, useMemo, useEffect } from 'react';
import { dictionaryData } from '../data/dictionary';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredWords = useMemo(() => {
    if (!debouncedSearchTerm) {
      if (selectedCategory === 'all') return dictionaryData;
      return dictionaryData.filter(entry => entry.category === selectedCategory);
    }

    const searchLower = debouncedSearchTerm.toLowerCase().trim();
    
    // Helper to escape regex characters
    const escapeRegExp = (string: string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    };

    // Create regex for word boundary matching
    const searchRegex = new RegExp(`\\b${escapeRegExp(searchLower)}`, 'i');

    return dictionaryData
      .map((entry) => {
        let score = 0;
        const wordLower = entry.word.toLowerCase();
        const translationLower = entry.translation.toLowerCase();
        const phoneticLower = entry.phonetic.toLowerCase();
        const script = entry.script;

        // 1. Exact matches (Highest Priority)
        if (wordLower === searchLower) score += 100;
        if (translationLower === searchLower) score += 100;
        if (phoneticLower === searchLower) score += 100;
        if (script === debouncedSearchTerm) score += 100;

        // 2. Starts with (High Priority)
        if (wordLower.startsWith(searchLower)) score += 50;
        if (translationLower.startsWith(searchLower)) score += 50;
        if (phoneticLower.startsWith(searchLower)) score += 50;
        if (script.startsWith(debouncedSearchTerm)) score += 50;

        // 3. Word Boundary Match (Medium Priority)
        // Matches "Apple" in "Big Apple", or "Eat" in "To Eat"
        // We assume startsWith covered the prefix case, so we check if it matches regex 
        // but is NOT a start match to add cumulative score or just distinct score.
        // Actually, simpler to just add score if it matches regex. 
        // StartsWith matches are also boundary matches usually, so they get double points, 
        // ensuring "Apple" (Starts+Boundary) > "Big Apple" (Boundary only).
        if (searchRegex.test(wordLower)) score += 30;
        if (searchRegex.test(translationLower)) score += 30;
        if (searchRegex.test(phoneticLower)) score += 30;
        
        // 4. Script contains (Low Priority) - scripts are unique enough that includes is mostly fine
        if (script.includes(debouncedSearchTerm) && !script.startsWith(debouncedSearchTerm)) score += 10;

        return { entry, score };
      })
      .filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.entry.category === selectedCategory;
        // Filter out zero scores - this removes "false positives" like "cat" in "education"
        return item.score > 0 && matchesCategory;
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        // Secondary sort alphabetical
        return a.entry.word.localeCompare(b.entry.word);
      })
      .map(item => item.entry);
  }, [debouncedSearchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(dictionaryData.map(d => d.category)))];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Dictionary</h1>
        <p className="text-gray-400 text-sm md:text-base">{filteredWords.length} words available</p>
      </div>
      
      <div className="flex flex-col gap-3 mb-6">
        {/* Search bar - full width on mobile */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Chaldean or English..."
            className="w-full p-4 pl-12 rounded-2xl md:rounded-xl bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-all text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex gap-3">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-1 p-3.5 rounded-2xl md:rounded-xl bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-all capitalize text-sm md:text-base"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'all' ? '📚 All Categories' : cat}</option>
            ))}
          </select>

          <div className="hidden md:flex bg-gray-800 rounded-xl border-2 border-gray-700 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              title="Grid View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              title="List View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>

      {filteredWords.length > 0 ? (
        <div className="flex flex-col gap-3 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredWords.map((entry) => (
            <div 
              key={`${entry.word}-${entry.category}-${entry.translation}`} 
              className="bg-gradient-to-br from-gray-800 to-gray-800/80 border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden rounded-2xl md:rounded-xl flex flex-row md:flex-col active:scale-95"
            >
              {/* Mobile: Horizontal Layout, Desktop: Vertical */}
              
              {/* Image Section */}
              {entry.image && (
                <div className="w-24 h-24 md:w-full md:h-40 flex-shrink-0 overflow-hidden relative">
                  <img 
                    src={entry.image} 
                    alt={entry.word} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex-1 p-4 md:p-5 flex flex-col">
                {/* Category badge */}
                <div className="mb-2 md:mb-3">
                  <span className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full capitalize font-medium border border-blue-500/30">
                    {entry.category}
                  </span>
                </div>

                {/* Script & Word */}
                <div className="mb-3 md:mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 font-serif">
                    {entry.script}
                  </h3>
                  <h4 className="text-base md:text-lg font-bold text-blue-400">{entry.word}</h4>
                </div>

                {/* Translation & Phonetic */}
                <div className="mt-auto">
                  <p className="text-lg md:text-xl font-medium text-gray-200 mb-1">{entry.translation}</p>
                  <p className="text-gray-400 italic text-sm">"{entry.phonetic}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-700">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No words found</p>
          <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
        </div>
      )}
    </div>
  );
}
