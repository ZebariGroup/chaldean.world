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
    return dictionaryData.filter((entry) => {
      const searchLower = debouncedSearchTerm.toLowerCase();
      const matchesSearch = 
        entry.word.toLowerCase().includes(searchLower) ||
        entry.translation.toLowerCase().includes(searchLower) ||
        entry.phonetic.toLowerCase().includes(searchLower) ||
        entry.script.includes(debouncedSearchTerm); // Script search is case-sensitive
      
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(dictionaryData.map(d => d.category)))];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Dictionary</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search for a word in Chaldean or English..."
          className="flex-grow p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="flex gap-4">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors capitalize min-w-[150px]"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <div className="flex bg-gray-800 rounded-lg border border-gray-700 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              title="Grid View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-md transition-colors ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              title="List View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>

      {filteredWords.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-3"}>
          {filteredWords.map((entry) => (
            <div 
              key={`${entry.word}-${entry.category}-${entry.translation}`} 
              className={`
                bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden
                ${viewMode === 'grid' ? 'rounded-xl flex flex-col' : 'rounded-lg flex flex-row items-center p-4'}
              `}
            >
              {/* Image Section (Only for Grid view or if we want small thumbnails in list) */}
              {viewMode === 'grid' && entry.image && (
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={entry.image} 
                    alt={entry.word} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-xs bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded capitalize border border-gray-600">
                      {entry.category}
                    </span>
                  </div>
                </div>
              )}

              <div className={`flex-grow ${viewMode === 'grid' ? 'p-6' : 'flex items-center w-full gap-4'}`}>
                {/* Script & Word */}
                <div className={viewMode === 'grid' ? "mb-4" : "min-w-[120px]"}>
                  <h3 className={`${viewMode === 'grid' ? 'text-4xl text-center' : 'text-3xl'} font-bold text-white mb-1 font-serif`}>
                    {entry.script}
                  </h3>
                  {viewMode === 'grid' && (
                    <h4 className="text-xl font-bold text-blue-400 text-center">{entry.word}</h4>
                  )}
                </div>

                {viewMode === 'list' && (
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Phonetic</div>
                      <div className="text-blue-400 font-bold">{entry.word} <span className="text-gray-400 font-normal italic">({entry.phonetic})</span></div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Translation</div>
                      <div className="text-xl">{entry.translation}</div>
                    </div>
                    <div className="flex justify-end">
                       <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 capitalize">{entry.category}</span>
                    </div>
                  </div>
                )}

                {viewMode === 'grid' && (
                  <>
                    <div className="space-y-2 text-center">
                      <p className="text-2xl font-medium">{entry.translation}</p>
                      <p className="text-gray-400 italic text-sm">"{entry.phonetic}"</p>
                    </div>
                    {!entry.image && (
                       <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 capitalize">{entry.category}</span>
                       </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No words found matching your search.
        </div>
      )}
    </div>
  );
}
