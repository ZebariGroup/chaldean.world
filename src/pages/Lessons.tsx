export default function Lessons() {
  const lessons = [
    { id: 1, title: "Introduction to Alphabet", level: "Beginner" },
    { id: 2, title: "Basic Greetings", level: "Beginner" },
    { id: 3, title: "Common Phrases", level: "Beginner" },
    { id: 4, title: "Numbers 1-10", level: "Beginner" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Lessons</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="text-sm text-blue-400 mb-2">{lesson.level}</div>
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-400 text-sm">Start this lesson &rarr;</p>
          </div>
        ))}
      </div>
    </div>
  );
}

