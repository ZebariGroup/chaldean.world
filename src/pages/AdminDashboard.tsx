import { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { DictionaryEntry, CategoryType } from '../data/dictionary';
import { useDictionary } from '../hooks/useDictionary';

type SortField = keyof DictionaryEntry;
type SortDirection = 'asc' | 'desc';

export default function AdminDashboard() {
  const { user } = useAuth();
  const { dictionary, loading: dictLoading, updateWord } = useDictionary();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedData, setEditedData] = useState<DictionaryEntry | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('word');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

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
    const cats = new Set<CategoryType>();
    dictionary.forEach(entry => {
      entry.categories.forEach(cat => cats.add(cat));
    });
    return Array.from(cats).sort();
  }, [dictionary]);

  const filteredAndSorted = useMemo(() => {
    let result = [...dictionary];

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
      result = result.filter(entry => entry.categories.includes(categoryFilter as CategoryType));
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      
      let comparison = 0;
      if (Array.isArray(aVal) && Array.isArray(bVal)) {
        // Sort arrays by their first element
        const aStr = aVal.join(', ');
        const bStr = bVal.join(', ');
        comparison = aStr.localeCompare(bStr, undefined, { sensitivity: 'base' });
      } else if (typeof aVal === 'string' && typeof bVal === 'string') {
        // Case-insensitive locale comparison
        comparison = aVal.localeCompare(bVal, undefined, { sensitivity: 'base' });
      } else {
        comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [dictionary, searchTerm, categoryFilter, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const startEdit = (entry: DictionaryEntry) => {
    const id = `${entry.word}-${entry.categories.join('-')}`;
    setEditingId(id);
    setEditedData({ ...entry });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedData(null);
  };

  const saveEdit = async () => {
    if (!editedData || !editedData.id) return;

    setSaving(true);
    try {
      await updateWord(editedData.id, {
        word: editedData.word,
        translation: editedData.translation,
        phonetic: editedData.phonetic,
        script: editedData.script,
        categories: editedData.categories,
      });

      // Show success message
      setSaveMessage(`Updated "${editedData.word}" successfully`);
      setTimeout(() => setSaveMessage(null), 3000);

      setEditingId(null);
      setEditedData(null);
    } catch (error) {
      console.error('Error saving:', error);
      setSaveMessage(`Error: ${error instanceof Error ? error.message : 'Failed to save'}`);
      setTimeout(() => setSaveMessage(null), 5000);
    } finally {
      setSaving(false);
    }
  };

  const exportToJSON = () => {
    const cleanData = dictionary.map(({ id, created_at, updated_at, ...rest }) => rest);
    const content = JSON.stringify(cleanData, null, 2);

    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dictionary_export.json';
    a.click();
    URL.revokeObjectURL(url);

    setSaveMessage('Dictionary exported to JSON');
    setTimeout(() => setSaveMessage(null), 3000);
  };

  if (loading || dictLoading) {
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
              onClick={exportToJSON}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors whitespace-nowrap"
            >
              Export to JSON
            </button>
          </div>

          {/* Stats */}
          <div className="mt-3 text-sm text-gray-400">
            Showing {filteredAndSorted.length} of {dictionary.length} words
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
                    onClick={() => handleSort('categories')}
                  >
                    <div className="flex items-center gap-2">
                      Categories
                      {sortField === 'categories' && (
                        <span>{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSorted.map((entry, index) => {
                  const id = `${entry.word}-${entry.categories.join('-')}`;
                  const isEditing = editingId === id;

                  return (
                    <tr 
                      key={`${id}-${index}`}
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
                          <div className="space-y-2">
                            {categories.map(cat => (
                              <label key={cat} className="flex items-center gap-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={editedData?.categories.includes(cat) || false}
                                  onChange={(e) => {
                                    if (!editedData) return;
                                    const newCategories = e.target.checked
                                      ? [...editedData.categories, cat]
                                      : editedData.categories.filter(c => c !== cat);
                                    setEditedData({ ...editedData, categories: newCategories });
                                  }}
                                  className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-gray-300">{cat}</span>
                              </label>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-1">
                            {entry.categories.map(cat => (
                              <span key={cat} className="inline-block px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <div className="flex gap-2">
                            <button
                              onClick={saveEdit}
                              disabled={saving}
                              className="px-3 py-1 bg-green-600 hover:bg-green-500 disabled:bg-green-900 disabled:cursor-not-allowed rounded text-sm text-white transition-colors"
                            >
                              {saving ? 'Saving...' : 'Save'}
                            </button>
                            <button
                              onClick={cancelEdit}
                              disabled={saving}
                              className="px-3 py-1 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-800 disabled:cursor-not-allowed rounded text-sm text-white transition-colors"
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

