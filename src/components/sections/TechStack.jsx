import React from 'react';

const TechStack = () => {
  const techSkills = [
    'Kotlin / Android',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Python (AI/ML)',
    'Java',
    'C++',
    'Bash / OS Utilities',
    'SQL / Databases',
    'Git / GitHub'
  ];

  return (
    <div id="skills" className="flex-center section-padding text-center text-white relative z-20">
      <div className="w-full h-full md:px-10 px-5 max-w-5xl mx-auto">
        
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">My Tech Stack</h2>
        <div className="mx-auto w-24 h-1 bg-violet-500 rounded mb-8"></div>
        <h3 className="text-xl text-white-50 font-medium mb-12">
          The languages, frameworks, and tools I use to build scalable applications.
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techSkills.map((tech) => (
            <div
              key={tech}
              className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 hover:border-violet-500 hover:bg-zinc-800 p-5 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-center group cursor-pointer"
            >
              <p className="text-white font-semibold text-sm md:text-base tracking-wide group-hover:text-violet-400 transition-colors">
                {tech}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default TechStack;