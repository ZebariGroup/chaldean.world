import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Dictionary from './pages/Dictionary';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="dictionary" element={<Dictionary />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
