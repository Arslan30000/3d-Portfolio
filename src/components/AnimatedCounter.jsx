import React from 'react';
import { counterItems, academicBackground } from '../constants/index.js';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  const renderCounterSection = (title, items) => (
    <div className="mb-10">
      <h2 className="text-2xl font-extrabold text-white tracking-tight mb-4">{title}</h2>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={` ${item.suffix}`} duration={2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32 text-center space-y-16">
      {renderCounterSection('My O Levels Grades', counterItems.olevels)}
      {renderCounterSection('My A Levels Grades', counterItems.alevels)}

      <div className="bg-zinc-800 text-white rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Academic Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* School */}
          <div className="bg-zinc-900 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src={academicBackground.school.image}
              alt="School"
              className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
            />
            <p className="font-semibold text-lg">{academicBackground.school.name}</p>
          </div>

          {/* University */}
          <div className="bg-zinc-900 rounded-lg p-4 flex flex-col items-center text-center">
            <img
              src={academicBackground.university.image}
              alt="University"
              className="w-32 h-32 object-cover rounded-full shadow-lg mb-4"
            />
            <p className="font-semibold text-lg">{academicBackground.university.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
