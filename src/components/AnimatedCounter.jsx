import React from 'react';
import { academicBackground } from '../constants/index.js'; 
import CountUp from 'react-countup';

const developerMetrics = [
  { label: "Projects Built", value: 12, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
  { label: "GitHub Commits", value: 100, suffix: "+" }
];

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-20 text-center space-y-16">
      
      {/* 1. Developer Metrics Section */}
      <div className="mb-10 relative z-20">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">By The Numbers</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {developerMetrics.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 flex flex-col justify-center items-center shadow-lg border border-white/10 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="counter-number text-violet-500 text-5xl font-extrabold mb-2">
                <CountUp end={item.value} suffix={item.suffix} duration={2.5} />
              </div>
              <p className="text-white-50 text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Academic & Professional Background Section */}
      <div className="bg-zinc-800 text-white rounded-xl p-8 max-w-5xl mx-auto border border-white/10 shadow-xl relative z-20">
        <h2 className="text-3xl font-bold mb-8">Academic & Professional Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* University Block */}
          <div className="flex flex-col items-center text-center bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <div className="bg-zinc-900 rounded-full p-2 mb-6">
              <img
                src={academicBackground.university.image} 
                alt="University Logo"
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              National University of Computer and Emerging Sciences
            </h3>
            <p className="text-violet-400 font-semibold text-lg mb-2">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-white-50 text-md bg-zinc-900 px-4 py-2 rounded-full mt-2">
              Expected Graduation: 2027
            </p>
          </div>

          {/* Internship Block */}
          <div className="flex flex-col items-center text-center bg-zinc-900/50 p-6 rounded-xl border border-white/5">
            <div className="bg-zinc-900 rounded-full p-2 mb-6 flex items-center justify-center w-36 h-36">
              <span className="text-4xl font-extrabold text-violet-500 tracking-wider">SPS</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Software Productivity Strategists (SPS)
            </h3>
            <p className="text-violet-400 font-semibold text-lg mb-2">
              Front End Web Developer Intern
            </p>
            <p className="text-white-50 text-md bg-zinc-900 px-4 py-2 rounded-full mt-2">
              Oct 2025 - Dec 2025
            </p>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default AnimatedCounter;