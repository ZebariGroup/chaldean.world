import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay if user hasn't dismissed it
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed) {
        setTimeout(() => setShowPrompt(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app was just installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
      localStorage.removeItem('pwa-install-dismissed');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setShowPrompt(false);
    }
    
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (isInstalled || !showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe md:hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 shadow-2xl border-2 border-blue-400/50 max-w-md mx-auto">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 text-3xl">📱</div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg mb-1">Install Chaldean World</h3>
            <p className="text-blue-100 text-sm mb-3">
              Add to home screen for a better experience and offline access
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleInstallClick}
                className="flex-1 bg-white text-blue-600 font-bold py-2.5 px-4 rounded-xl active:scale-95 transition-transform"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2.5 text-white/80 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

