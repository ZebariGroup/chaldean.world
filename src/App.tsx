import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonRunner from './pages/LessonRunner';
import Practice from './pages/Practice';
import Dictionary from './pages/Dictionary';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="lessons/:lessonId" element={<LessonRunner />} />
            <Route path="practice" element={<Practice />} />
            <Route path="dictionary" element={<Dictionary />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}

export default App
