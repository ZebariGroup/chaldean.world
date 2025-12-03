import { useProgress } from '../context/ProgressContext';
import { useState } from 'react';
import { requestNotificationPermission } from '../utils/notifications';

export default function Settings() {
  const { 
    preferences, 
    updatePreferences, 
    exportProgress, 
    importProgress, 
    resetProgress,
    points,
    level,
    currentStreak,
    longestStreak,
    wordsLearned,
    completedLessons,
    totalStudyTime,
    badges,
  } = useProgress();
  
  const [showExport, setShowExport] = useState(false);
  const [importData, setImportData] = useState('');

  const handleExport = () => {
    const data = exportProgress();
    navigator.clipboard.writeText(data);
    setShowExport(true);
    setTimeout(() => setShowExport(false), 3000);
  };

  const handleImport = () => {
    if (importData.trim()) {
      importProgress(importData);
      setImportData('');
      alert('Progress imported successfully!');
    }
  };

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        importProgress(text);
        alert('Progress imported successfully!');
      };
      reader.readAsText(file);
    }
  };

  const handleFileExport = () => {
    const data = exportProgress();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chaldean-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-6">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Settings & Stats</h1>
        <p className="text-gray-400 text-sm md:text-base">Manage your learning preferences</p>
      </div>

      {/* Stats Overview */}
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900/30 to-gray-800 p-4 rounded-2xl border-2 border-blue-500/30">
          <div className="text-2xl md:text-3xl font-bold text-blue-400">{level}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">Level</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-900/30 to-gray-800 p-4 rounded-2xl border-2 border-yellow-500/30">
          <div className="text-2xl md:text-3xl font-bold text-yellow-400">{points}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">XP</div>
        </div>
        <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 p-4 rounded-2xl border-2 border-orange-500/30">
          <div className="text-2xl md:text-3xl font-bold text-orange-400">{currentStreak}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">Day Streak</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-4 rounded-2xl border-2 border-purple-500/30">
          <div className="text-2xl md:text-3xl font-bold text-purple-400">{wordsLearned.length}</div>
          <div className="text-xs md:text-sm text-gray-400 mt-1">Words Learned</div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mb-8 bg-gray-800 rounded-2xl border-2 border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">Your Progress</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Completed Lessons:</span>
            <span className="font-bold">{completedLessons.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Longest Streak:</span>
            <span className="font-bold">{longestStreak} days 🔥</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Study Time:</span>
            <span className="font-bold">{totalStudyTime} minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Badges Earned:</span>
            <span className="font-bold">{badges.filter(b => b.earnedAt).length} / {badges.length}</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8 bg-gray-800 rounded-2xl border-2 border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {badges.map(badge => (
            <div 
              key={badge.id}
              className={`p-4 rounded-xl border-2 ${
                badge.earnedAt 
                  ? 'bg-gradient-to-br from-yellow-900/30 to-gray-800 border-yellow-500/50' 
                  : 'bg-gray-700/30 border-gray-600 opacity-50'
              }`}
            >
              <div className="text-2xl mb-2">{badge.earnedAt ? '🏆' : '🔒'}</div>
              <div className="text-sm font-bold mb-1">{badge.name}</div>
              <div className="text-xs text-gray-400">{badge.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="mb-8 bg-gray-800 rounded-2xl border-2 border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">Preferences</h2>
        
        <div className="space-y-4">
          {/* Daily Goal */}
          <div>
            <label className="block text-sm font-medium mb-2">Daily Goal (Lessons)</label>
            <select
              value={preferences.dailyGoal}
              onChange={(e) => updatePreferences({ dailyGoal: Number(e.target.value) })}
              className="w-full p-3 rounded-xl bg-gray-700 border-2 border-gray-600 focus:border-blue-500 outline-none"
            >
              <option value={1}>1 lesson (Casual)</option>
              <option value={3}>3 lessons (Regular)</option>
              <option value={5}>5 lessons (Serious)</option>
              <option value={10}>10 lessons (Intense)</option>
            </select>
          </div>

          {/* Learning Goal */}
          <div>
            <label className="block text-sm font-medium mb-2">Learning Goal</label>
            <select
              value={preferences.learningGoal}
              onChange={(e) => updatePreferences({ learningGoal: e.target.value as any })}
              className="w-full p-3 rounded-xl bg-gray-700 border-2 border-gray-600 focus:border-blue-500 outline-none"
            >
              <option value="general">General Learning</option>
              <option value="conversation">Conversation</option>
              <option value="reading">Reading</option>
              <option value="travel">Travel</option>
            </select>
          </div>

          {/* Audio Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Audio Pronunciation</span>
            <button
              onClick={() => updatePreferences({ audioEnabled: !preferences.audioEnabled })}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                preferences.audioEnabled ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                preferences.audioEnabled ? 'translate-x-7' : ''
              }`} />
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dark Mode</span>
            <button
              onClick={() => updatePreferences({ darkMode: !preferences.darkMode })}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                preferences.darkMode ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                preferences.darkMode ? 'translate-x-7' : ''
              }`} />
            </button>
          </div>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium block">Daily Reminders</span>
              <span className="text-xs text-gray-400">Get notified to practice</span>
            </div>
            <button
              onClick={async () => {
                if (!preferences.notificationsEnabled) {
                  const granted = await requestNotificationPermission();
                  if (granted) {
                    updatePreferences({ notificationsEnabled: true });
                  } else {
                    alert('Please enable notifications in your browser settings');
                  }
                } else {
                  updatePreferences({ notificationsEnabled: false });
                }
              }}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                preferences.notificationsEnabled ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                preferences.notificationsEnabled ? 'translate-x-7' : ''
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="mb-8 bg-gray-800 rounded-2xl border-2 border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-4">Data Management</h2>
        
        <div className="space-y-4">
          {/* Export */}
          <div>
            <h3 className="text-sm font-medium mb-2">Export Progress</h3>
            <div className="flex gap-2">
              <button
                onClick={handleExport}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all"
              >
                📋 Copy to Clipboard
              </button>
              <button
                onClick={handleFileExport}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all"
              >
                💾 Download File
              </button>
            </div>
            {showExport && (
              <p className="text-green-400 text-sm mt-2">✓ Copied to clipboard!</p>
            )}
          </div>

          {/* Import */}
          <div>
            <h3 className="text-sm font-medium mb-2">Import Progress</h3>
            <div className="space-y-2">
              <textarea
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder="Paste exported data here..."
                className="w-full p-3 rounded-xl bg-gray-700 border-2 border-gray-600 focus:border-blue-500 outline-none resize-none h-24"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleImport}
                  disabled={!importData.trim()}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl transition-all"
                >
                  📥 Import from Text
                </button>
                <label className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-center">
                  📂 Import from File
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileImport}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Reset */}
          <div>
            <h3 className="text-sm font-medium mb-2">Reset All Progress</h3>
            <button
              onClick={resetProgress}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all"
            >
              ⚠️ Reset Everything
            </button>
            <p className="text-xs text-gray-400 mt-1">This will delete all your progress permanently!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

