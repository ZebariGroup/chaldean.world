import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonRunner from './pages/LessonRunner';
import Practice from './pages/Practice';
import Dictionary from './pages/Dictionary';
import Translator from './pages/Translator';
import Settings from './pages/Settings';
import Review from './pages/Review';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider, useAuth } from './context/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Check if user has seen splash before (for returning users)
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/"
            element={
              <ProgressProvider>
                <Layout />
              </ProgressProvider>
            }
          >
            <Route index element={<Home />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="lessons/:lessonId" element={<LessonRunner />} />
            <Route path="practice" element={<Practice />} />
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="translator" element={<Translator />} />
            <Route path="review" element={<Review />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}

export default App;
