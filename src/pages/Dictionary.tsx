import { useState, useMemo } from 'react';
import { dictionaryData } from '../data/dictionary';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredWords = useMemo(() => {
    return dictionaryData.filter((entry) => {
      const matchesSearch = 
        entry.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.translation.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(dictionaryData.map(d => d.category)))];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Dictionary</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search for a word in Chaldean or English..."
          className="flex-grow p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors capitalize"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredWords.length > 0 ? (
          filteredWords.map((entry, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-1 font-serif">{entry.script}</h3>
                  <h4 className="text-xl font-bold text-blue-400">{entry.word}</h4>
                </div>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300 capitalize">{entry.category}</span>
              </div>
              <p className="text-xl mb-2">{entry.translation}</p>
              <p className="text-gray-400 italic">Pronunciation: {entry.phonetic}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-12">
            No words found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
