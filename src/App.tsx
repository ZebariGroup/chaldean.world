import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Auth from './components/Auth';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonRunner from './pages/LessonRunner';
import Practice from './pages/Practice';
import Dictionary from './pages/Dictionary';
import Translator from './pages/Translator';
import Settings from './pages/Settings';
import Review from './pages/Review';
import AdminDashboard from './pages/AdminDashboard';
import EmailConfirmation from './pages/EmailConfirmation';
import Forum from './pages/Forum';
import PostView from './pages/PostView';
import CreatePost from './pages/CreatePost';
import ForumAdmin from './pages/ForumAdmin';
import EnglishArabicDictionary from './pages/EnglishArabicDictionary';
import ProtectedRoute from './components/ProtectedRoute';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';

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
    // Only show splash on first visit
    const isFirstVisit = !localStorage.getItem('hasVisited');
    
    if (hasSeenSplash || !isFirstVisit) {
      setShowSplash(false);
    } else {
      localStorage.setItem('hasVisited', 'true');
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
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/confirm-email" element={<EmailConfirmation />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ProgressProvider>
                  <Layout />
                </ProgressProvider>
              </ProtectedRoute>
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
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="forum" element={<Forum />} />
            <Route path="forum/post/:postId" element={<PostView />} />
            <Route path="forum/new" element={<CreatePost />} />
            <Route path="forum/admin" element={<ForumAdmin />} />
            <Route path="english-arabic" element={<EnglishArabicDictionary />} />
          </Route>
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
