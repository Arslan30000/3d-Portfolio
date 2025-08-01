import { Shape } from '@react-three/drei';
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import HeroExperience from '../HeroModels/HeroExperience';
import { useGSAP} from '@gsap/react';
import AnimatedCounter from '../AnimatedCounter';
import gsap from 'gsap';
const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' }
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(".hero-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1,stagger:1, duration: 1,ease: "power2.inOut" });
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping 
                <span className="inline-flex items-center md:gap-3 gap-1 pb-2 ml-2">
                  <img
                    src={words[index].imgPath}
                    alt={words[index].text}
                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                  />
                  <span>{words[index].text}</span>
                </span>
              </h1>
              <h1>into real Projects</h1>
               <hr className="my-6 border-black-50 opacity-50" />
              <p className="text-white-50 text-sm relative z-10 pointer-events-none">
                Hi I am Arslan, a developer based in Pakistan, with a passion for web development and Coding<br /> I love creating interactive and engaging web experiences that bring ideas to life.
              </p>
               <hr className="my-6 border-black-50 opacity-50" />
            
            </div>
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
<HeroExperience />
          </div>
        </figure>
      </div>
        <div className="text-content my-12 text-center">
  <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
    My Academic Achievements and Background
  </h2>
  <div className="mx-auto w-24 h-1 bg-violet-500 rounded"></div>
</div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;