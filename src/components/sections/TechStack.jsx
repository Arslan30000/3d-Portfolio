import React from 'react';

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding text-center text-white">
      <div className="w-full h-full md:px-10 px-5">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">My Tech Stack</h2>
        <h3 className="text-2xl font-bold mb-6">🤝 The skills I Bring to the Table</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Card Example */}
          {[
            { name: 'JavaScript', image: '/images/JavaScript.jpg' },
            { name: 'React', image: '/images/react.jpg' },
            { name: 'C++', image: '/images/cpp.png' },
            { name: 'Python', image: '/images/python.jpg' },
            { name: 'Assembly x86', image: '/images/a.jpg' },
            { name: 'HTML', image: '/images/html.jpg' },
            { name: 'CSS', image: '/images/css.jpg' },
            { name: 'SFML', image: '/images/sfml.jpg' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-zinc-900 hover:bg-zinc-800 p-0 rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105"
            >
              <div className="w-full h-40">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-white text-center">
                <p className="font-semibold">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
