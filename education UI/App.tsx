
import React from 'react';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-slate-200 font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700/30 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <Education />
      </div>
    </main>
  );
};

export default App;
