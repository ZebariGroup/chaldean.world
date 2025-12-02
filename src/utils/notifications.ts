// Notification utilities for daily reminders

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

export const scheduleDailyReminder = (preferences: { notificationsEnabled: boolean; dailyGoal: number }) => {
  if (!preferences.notificationsEnabled) return;

  // Check if user hasn't studied today
  const lastStudy = localStorage.getItem('chaldean-last-study');
  const today = new Date().toDateString();
  
  if (lastStudy !== today) {
    showNotification(
      'Time to learn Chaldean! 📚',
      `Complete ${preferences.dailyGoal} lessons to reach your daily goal`
    );
  }
};

export const showNotification = (title: string, body: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      tag: 'chaldean-reminder',
      requireInteraction: false,
    });
  }
};

export const setupDailyReminders = () => {
  // Check every hour if user should be reminded
  setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    
    // Send reminder at 7 PM if not studied today
    if (hour === 19) {
      const preferences = localStorage.getItem('chaldean-progress');
      if (preferences) {
        try {
          const parsed = JSON.parse(preferences);
          scheduleDailyReminder(parsed.preferences);
        } catch (e) {
          console.error('Failed to parse preferences for notifications');
        }
      }
    }
  }, 3600000); // Check every hour
};

