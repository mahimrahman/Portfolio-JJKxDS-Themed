
import React from 'react';
import WorkExperienceSection from './components/WorkExperienceSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden antialiased text-gray-200 selection:bg-purple-500 selection:text-white">
      <WorkExperienceSection />
    </div>
  );
};

export default App;
