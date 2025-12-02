import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setupDailyReminders } from './utils/notifications'
import { initializeVoices } from './utils/speech'

// Setup daily reminders
setupDailyReminders();

// Initialize speech voices
initializeVoices();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


