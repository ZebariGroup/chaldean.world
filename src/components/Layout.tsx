import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <nav className="bg-gray-800 border-b border-gray-700 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Chaldean World
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/lessons" className="hover:text-blue-400 transition-colors">Lessons</Link>
            <Link to="/dictionary" className="hover:text-blue-400 transition-colors">Dictionary</Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 border-t border-gray-700 p-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Chaldean World. Open Source on GitHub.</p>
      </footer>
    </div>
  );
}

