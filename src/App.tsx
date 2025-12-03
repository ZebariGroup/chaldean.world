import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonRunner from './pages/LessonRunner';
import Practice from './pages/Practice';
import Dictionary from './pages/Dictionary';
import Translator from './pages/Translator';
import Settings from './pages/Settings';
import Review from './pages/Review';
import { ProgressProvider } from './context/ProgressContext';

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
    <ProgressProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="lessons/:lessonId" element={<LessonRunner />} />
            <Route path="practice" element={<Practice />} />
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="translator" element={<Translator />} />
            <Route path="review" element={<Review />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}

export default App;
