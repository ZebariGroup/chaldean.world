import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Chaldean World</span>
      </h1>
      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
        Start your journey to master the Chaldean language today. Access free lessons, a comprehensive dictionary, and interactive exercises.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 w-full max-w-md">
        <Link to="/lessons" className="bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-4 px-6 rounded-lg transition-colors">
          Start Learning
        </Link>
        <Link to="/dictionary" className="bg-gray-700 hover:bg-gray-600 text-white text-center font-bold py-4 px-6 rounded-lg transition-colors">
          Browse Dictionary
        </Link>
      </div>
    </div>
  );
}

