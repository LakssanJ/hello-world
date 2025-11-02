
import React from 'react';

const App: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500 animate-pulse">
          Hello World
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Welcome to your first React application.
        </p>
      </div>
    </main>
  );
};

export default App;
