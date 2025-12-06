import { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { dictionaryData, DictionaryEntry } from '../data/dictionary';

type SortField = keyof DictionaryEntry;
type SortDirection = 'asc' | 'desc';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<DictionaryEntry | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('word');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [localDictionary, setLocalDictionary] = useState<DictionaryEntry[]>(dictionaryData);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user?.email) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      const { data } = await supabase
        .from('admin_users')
        .select('email')
        .eq('email', user.email)
        .maybeSingle();
      setIsAdmin(!!data);
      setLoading(false);
    };
    checkAdmin();
  }, [user]);

  const categories = useMemo(() => {
    const cats = new Set(dictionaryData.map(entry => entry.category));
    return Array.from(cats).sort();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let result = [...localDictionary];

    // Filter by search term
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(entry =>
        entry.word.toLowerCase().includes(lower) ||
        entry.translation.toLowerCase().includes(lower) ||
        entry.phonetic.toLowerCase().includes(lower) ||
        entry.script.includes(searchTerm)
      );
    }

    // Filter by category
    if (categoryFilter !== 'all') {
      result = result.filter(entry => entry.category === categoryFilter);
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [localDictionary, searchTerm, categoryFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const startEdit = (entry: DictionaryEntry) => {
    const id = `${entry.word}-${entry.category}`;
    setEditingId(id);
    setEditedData({ ...entry });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedData(null);
  };

  const saveEdit = () => {
    if (!editedData) return;

    const originalEntry = localDictionary.find(e => 
      `${e.word}-${e.category}` === editingId
    );

    if (!originalEntry) return;

    // Update local state
    const updated = localDictionary.map(entry => 
      `${entry.word}-${entry.category}` === editingId ? editedData : entry
    );
    setLocalDictionary(updated);

    // Show success message
    setSaveMessage(`Updated "${editedData.word}" successfully`);
    setTimeout(() => setSaveMessage(null), 3000);

    setEditingId(null);
    setEditedData(null);
  };

  const exportToFile = () => {
    const content = `export interface DictionaryEntry {
  word: string;
  translation: string;
  phonetic: string;
  script: string;
  category: 'greeting' | 'noun' | 'verb' | 'adjective' | 'phrase' | 'number' | 'food' | 'family' | 'color' | 'time' | 'place' | 'animal' | 'nature' | 'body' | 'home' | 'profession' | 'clothing' | 'emotion' | 'travel' | 'question' | 'preposition' | 'conjunction';
}

export const dictionaryData: DictionaryEntry[] = ${JSON.stringify(localDictionary, null, 2)};
`;

    const blob = new Blob([content], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dictionary.ts';
    a.click();
    URL.revokeObjectURL(url);

    setSaveMessage('Dictionary exported to dictionary.ts');
    setTimeout(() => setSaveMessage(null), 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold mb-2">Admin Access Required</h1>
          <p className="text-gray-400">You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Admin Dictionary Editor</h1>
          
          {/* Success Message */}
          {saveMessage && (
            <div className="mb-4 p-3 bg-green-900/50 border border-green-500/50 rounded-lg text-green-300 text-sm">
              {saveMessage}
            </div>
          )}

          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search */}
            <input
              type="text"
              placeholder="Search words, translations, phonetics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Export Button */}
            <button
              onClick={exportToFile}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors whitespace-nowrap"
            >
              Export Changes
            </button>
          </div>

          {/* Stats */}
          <div className="mt-3 text-sm text-gray-400">
            Showing {filteredAndSorted.length} of {localDictionary.length} words
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800 sticky top-0">
                <tr>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => handleSort('word')}
                  >
                    <div className="flex items-center gap-2">
                      Word
                      {sortField === 'word' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => handleSort('translation')}
                  >
                    <div className="flex items-center gap-2">
                      Translation
                      {sortField === 'translation' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => handleSort('phonetic')}
                  >
                    <div className="flex items-center gap-2">
                      Phonetic
                      {sortField === 'phonetic' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => handleSort('script')}
                  >
                    <div className="flex items-center gap-2">
                      Script
                      {sortField === 'script' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => handleSort('category')}
                  >
                    <div className="flex items-center gap-2">
                      Category
                      {sortField === 'category' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSorted.map((entry) => {
                  const id = `${entry.word}-${entry.category}`;
                  const isEditing = editingId === id;

                  return (
                    <tr 
                      key={id}
                      className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedData?.word || ''}
                            onChange={(e) => setEditedData({ ...editedData!, word: e.target.value })}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                          />
                        ) : (
                          <span className="font-medium">{entry.word}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedData?.translation || ''}
                            onChange={(e) => setEditedData({ ...editedData!, translation: e.target.value })}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-gray-300">{entry.translation}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedData?.phonetic || ''}
                            onChange={(e) => setEditedData({ ...editedData!, phonetic: e.target.value })}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                          />
                        ) : (
                          <span className="text-gray-400 text-sm">{entry.phonetic}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editedData?.script || ''}
                            onChange={(e) => setEditedData({ ...editedData!, script: e.target.value })}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                            dir="rtl"
                          />
                        ) : (
                          <span className="text-lg" dir="rtl">{entry.script}</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select
                            value={editedData?.category || ''}
                            onChange={(e) => setEditedData({ ...editedData!, category: e.target.value as any })}
                            className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"
                          >
                            {categories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        ) : (
                          <span className="inline-block px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                            {entry.category}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <div className="flex gap-2">
                            <button
                              onClick={saveEdit}
                              className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-sm text-white transition-colors"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm text-white transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => startEdit(entry)}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm text-white transition-colors"
                          >
                            Edit
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

