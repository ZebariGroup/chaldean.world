import { useState, useMemo, useEffect } from 'react';
import { DictionaryEntry } from '../data/dictionary';
import { useProgress } from '../context/ProgressContext';
import { useDictionary } from '../hooks/useDictionary';
import PronunciationModal from '../components/PronunciationModal';

export default function Dictionary() {
  const { toggleFavorite, isFavorite, preferences } = useProgress();
  const { dictionary: dictionaryData, loading: dictLoading, error: dictError, refetch } = useDictionary();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [activeEntry, setActiveEntry] = useState<DictionaryEntry | null>(null);
  
  // Filters
  const [filterChaldean, setFilterChaldean] = useState(true);
  const [filterArabic, setFilterArabic] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, selectedCategory, showFavoritesOnly, filterChaldean, filterArabic]);

  const filteredWords = useMemo(() => {
    let words = dictionaryData;
    
    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      words = words.filter(entry => isFavorite(`${entry.word}-${entry.categories.join('-')}`));
    }

    // Apply content filters
    if (filterChaldean) {
      words = words.filter(entry => entry.word && entry.word.trim() !== '');
    }
    if (filterArabic) {
      words = words.filter(entry => entry.arabic && entry.arabic.trim() !== '');
    }
    
    if (!debouncedSearchTerm) {
      const filtered = selectedCategory === 'all' ? words : words.filter(entry => entry.categories.includes(selectedCategory as any));
      // Sort alphabetically by English translation for better user experience
      return filtered.sort((a, b) => a.translation.localeCompare(b.translation));
    }

    const searchLower = debouncedSearchTerm.toLowerCase().trim();
    
    const escapeRegExp = (string: string) => {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    };

    const searchRegex = new RegExp(`\\b${escapeRegExp(searchLower)}`, 'i');

    return words
      .map((entry) => {
        let score = 0;
        const wordLower = entry.word.toLowerCase();
        const translationLower = entry.translation.toLowerCase();
        const arabicLower = (entry.arabic || '').toLowerCase();
        const phoneticLower = entry.phonetic.toLowerCase();
        const categoriesLower = entry.categories.map(c => c.toLowerCase()).join(' ');
        const script = entry.script;

        // Exact matches - highest priority
        if (wordLower === searchLower) score += 100;
        if (translationLower === searchLower) score += 100;
        if (arabicLower === searchLower) score += 100;
        if (phoneticLower === searchLower) score += 100;
        if (script === debouncedSearchTerm) score += 100;

        // Starts with - second priority
        if (wordLower.startsWith(searchLower)) score += 50;
        if (translationLower.startsWith(searchLower)) score += 50;
        if (arabicLower.startsWith(searchLower)) score += 50;
        if (phoneticLower.startsWith(searchLower)) score += 50;
        if (script.startsWith(debouncedSearchTerm)) score += 50;

        // Word boundary matches - third priority
        if (searchRegex.test(wordLower)) score += 30;
        if (searchRegex.test(translationLower)) score += 30;
        if (searchRegex.test(arabicLower)) score += 30;
        if (searchRegex.test(phoneticLower)) score += 30;
        
        // Contains matches - fourth priority
        if (wordLower.includes(searchLower)) score += 20;
        if (translationLower.includes(searchLower)) score += 20;
        if (arabicLower.includes(searchLower)) score += 20;
        if (phoneticLower.includes(searchLower)) score += 20;
        if (script.includes(debouncedSearchTerm) && !script.startsWith(debouncedSearchTerm)) score += 10;
        
        // Category match - bonus points
        if (categoriesLower === searchLower || categoriesLower.includes(searchLower)) score += 15;

        return { entry, score };
      })
      .filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.entry.categories.includes(selectedCategory as any);
        // Require a minimum score to reduce noise
        return item.score >= 15 && matchesCategory;
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.entry.word.localeCompare(b.entry.word);
      })
      .map(item => item.entry);
  }, [dictionaryData, debouncedSearchTerm, selectedCategory, showFavoritesOnly, isFavorite, filterChaldean, filterArabic]);
  
  // Pagination Logic
  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);
  const currentWords = filteredWords.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const speakWord = (text: string) => {
    if (!preferences.audioEnabled) return;
    
    // Use dynamic import to avoid SSR issues
    import('../utils/speech').then(({ speak }) => {
      speak(text, { rate: 0.85 });
    });
  };

  const categories: string[] = ['all', ...Array.from(new Set(dictionaryData.flatMap(d => d.categories)))];

  if (dictLoading && dictionaryData.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400">Loading dictionary...</div>
      </div>
    );
  }

  if (dictError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-red-400 text-lg">Error loading dictionary</div>
        <p className="text-gray-500">{dictError.message}</p>
        <button 
          onClick={refetch}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-4 md:py-6">
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Dictionary</h1>
          <p className="text-gray-400 text-sm md:text-base">
            {filteredWords.length} words available
            {filteredWords.length !== dictionaryData.length && ` (filtered from ${dictionaryData.length})`}
          </p>
        </div>
        {/* Only show retry/reload if we have data but user suspects issues, or if empty */}
        {dictionaryData.length === 0 && !dictLoading && (
           <button 
             onClick={refetch}
             className="text-sm text-blue-400 hover:text-blue-300 underline"
           >
             Reload words
           </button>
        )}
      </div>
      
      <div className="flex flex-col gap-3 mb-6 bg-gray-800/30 p-4 rounded-2xl border border-gray-700/50">
        {/* Search bar - full width on mobile */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Chaldean or English..."
            className="w-full p-4 pl-12 rounded-xl bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-all text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="flex-1 p-3.5 rounded-xl bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-all capitalize text-sm md:text-base"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'all' ? '📚 All Categories' : cat}</option>
            ))}
          </select>

          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`p-3.5 rounded-xl border-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                showFavoritesOnly 
                  ? 'bg-yellow-600 border-yellow-500 text-white' 
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
              }`}
              title="Show Favorites"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={showFavoritesOnly ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="md:hidden">Favorites</span>
            </button>

            <div className="flex bg-gray-800 rounded-xl border-2 border-gray-700 p-1">
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

        {/* Additional Filters */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/50">
          <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors">
            <input 
              type="checkbox" 
              checked={filterChaldean} 
              onChange={(e) => setFilterChaldean(e.target.checked)}
              className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Has Chaldean</span>
          </label>
          <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors">
            <input 
              type="checkbox" 
              checked={filterArabic} 
              onChange={(e) => setFilterArabic(e.target.checked)}
              className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-300">Has Arabic</span>
          </label>
        </div>
      </div>

      {currentWords.length > 0 ? (
        <>
          <div className={`flex flex-col gap-3 ${viewMode === 'grid' ? 'md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3' : 'md:flex md:flex-col md:gap-2'}`}>
            {currentWords.map((entry) => (
              viewMode === 'list' ? (
                // List View - Responsive layout
                <div 
                  key={`${entry.word}-${entry.categories.join('-')}-${entry.translation}`} 
                  className="bg-gradient-to-br from-gray-800 to-gray-800/80 border-2 border-gray-700 hover:border-blue-500 transition-all duration-200 rounded-xl"
                >
                  <div className="p-3 flex md:items-center gap-3 md:gap-4">
                    {/* Script - Hidden on mobile, shown on desktop */}
                    <div className="hidden md:block text-2xl font-bold text-white font-serif min-w-[80px] text-center">
                      {entry.script}
                    </div>
                    
                    {/* Content Container */}
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-4 min-w-0">
                      {/* Mobile Header: Script + Word */}
                      <div className="flex items-center gap-2 md:hidden">
                         <span className="text-xl font-serif text-white">{entry.script}</span>
                         <span className="font-bold text-blue-400 truncate">{entry.word || <span className="text-gray-600 italic font-normal">No Chaldean</span>}</span>
                      </div>

                      {/* Desktop Word */}
                      <div className="hidden md:block font-bold text-blue-400 min-w-[120px]">
                        {entry.word || <span className="text-gray-600 italic font-normal">No Chaldean</span>}
                      </div>
                      
                      {/* Translation */}
                      <div className="font-medium text-gray-200 md:flex-1 md:min-w-[150px] truncate">
                        {entry.translation}
                      </div>
                      
                      {/* Arabic Translation (Desktop) */}
                      {entry.arabic && (
                        <div className="min-w-[140px] hidden xl:block">
                          <div className="font-medium text-amber-300 truncate" dir="rtl">{entry.arabic}</div>
                          {entry.arabic_phonetic && (
                            <div className="text-amber-400/70 italic text-xs mt-0.5 truncate">"{entry.arabic_phonetic}"</div>
                          )}
                        </div>
                      )}
                      
                      {/* Chaldean Phonetic (Desktop) */}
                      <div className="text-gray-400 italic text-sm min-w-[120px] hidden lg:block truncate">
                        "{entry.phonetic}"
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2 ml-auto md:ml-0">
                      {preferences.audioEnabled && entry.word && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakWord(entry.word);
                          }}
                          className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-blue-400"
                          title="Listen"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                        </button>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveEntry(entry);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                        title="Pronunciations"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(`${entry.word}-${entry.categories.join('-')}`);
                        }}
                        className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                        title={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "text-yellow-500" : "text-gray-400"}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // Grid View - Card layout
                <div 
                  key={`${entry.word}-${entry.categories.join('-')}-${entry.translation}`} 
                  className="bg-gradient-to-br from-gray-800 to-gray-800/80 border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden rounded-2xl md:rounded-xl active:scale-95 flex flex-col"
                >
                  <div className="p-4 md:p-5 flex flex-col relative flex-1">
                    {/* Favorite button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(`${entry.word}-${entry.categories.join('-')}`);
                      }}
                      className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-700 transition-colors"
                      title={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "Remove from favorites" : "Add to favorites"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isFavorite(`${entry.word}-${entry.categories.join('-')}`) ? "text-yellow-500" : "text-gray-400"}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </button>
                    
                    {/* Category badge */}
                    <div className="mb-2 md:mb-3 flex gap-1 flex-wrap pr-8">
                      {entry.categories.map(cat => (
                        <span key={cat} className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full capitalize font-medium border border-blue-500/30">
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Script & Word */}
                    <div className="mb-3 md:mb-4">
                      {entry.script ? (
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 font-serif pr-8">
                          {entry.script}
                        </h3>
                      ) : (
                        <div className="h-8 md:h-10 mb-1"></div> // Spacer
                      )}
                      <h4 className="text-base md:text-lg font-bold text-blue-400">
                        {entry.word || <span className="text-gray-600 italic font-normal">No Chaldean translation</span>}
                      </h4>
                    </div>

                    {/* Translation & Phonetic */}
                    <div className="mt-auto space-y-1">
                      <p className="text-lg md:text-xl font-medium text-gray-200">{entry.translation}</p>
                      {entry.arabic && (
                        <div className="border-t border-gray-700/50 pt-2 mt-2">
                          <div className="flex justify-between items-baseline">
                            <p className="text-base md:text-lg font-medium text-amber-300 font-serif" dir="rtl">{entry.arabic}</p>
                            {entry.arabic_phonetic && (
                              <p className="text-amber-400/70 italic text-xs">"{entry.arabic_phonetic}"</p>
                            )}
                          </div>
                        </div>
                      )}
                      {entry.phonetic && (
                        <p className="text-gray-400 italic text-sm mt-1">"{entry.phonetic}"</p>
                      )}
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {preferences.audioEnabled && entry.word && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakWord(entry.word);
                          }}
                          className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          </svg>
                          <span>Listen</span>
                        </button>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveEntry(entry);
                        }}
                        className="flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm text-gray-200 hover:border-blue-500 hover:text-white transition-colors ml-auto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 8.6 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 3.6 8.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H8a1.65 1.65 0 0 0 1-1.51V2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V8a1.65 1.65 0 0 0 1.51 1H22a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        <span>Native pronunciations</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              
              <div className="text-gray-400">
                Page <span className="text-white font-medium">{currentPage}</span> of <span className="text-white font-medium">{totalPages}</span>
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-700">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No words found</p>
          <p className="text-gray-500 text-sm mt-2">Try different filters or search terms</p>
          {(filterChaldean || filterArabic) && (
            <button 
              onClick={() => {
                setFilterChaldean(false);
                setFilterArabic(false);
                setSearchTerm("");
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-400 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
      {activeEntry && (
        <PronunciationModal
          entry={activeEntry}
          onClose={() => setActiveEntry(null)}
        />
      )}
    </div>
  );
}
