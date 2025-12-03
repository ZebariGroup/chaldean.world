import { useState, useEffect } from 'react';

export default function UpdateNotification() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateServiceWorker, setUpdateServiceWorker] = useState<(() => void) | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      let refreshing = false;

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available
                  setShowUpdate(true);
                  setUpdateServiceWorker(() => () => {
                    if (registration.waiting) {
                      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  }, []);

  const handleUpdate = () => {
    if (updateServiceWorker) {
      updateServiceWorker();
      setShowUpdate(false);
    }
  };

  if (!showUpdate) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white text-center py-3 px-4 shadow-lg md:hidden">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-2 flex-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-sm font-medium">New version available</span>
        </div>
        <button
          onClick={handleUpdate}
          className="ml-3 bg-white text-blue-600 font-bold px-4 py-1.5 rounded-lg active:scale-95 transition-transform text-sm"
        >
          Update
        </button>
      </div>
    </div>
  );
}

