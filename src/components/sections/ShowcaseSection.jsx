import React, { useState } from 'react';
import {useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const projectImages = [
  "project2_1.png",
  "project2_2.png",
  "project2_3.png",
  "project2_4.png",
  "project2_5.png",
  "project2_6.png"
];

const ShowcaseSection = () => {
  const sectionRef=useRef(null);
  const project1Ref=useRef(null);
  const project2Ref=useRef(null);
  const project3Ref=useRef(null);
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % projectImages.length);
  const prevImage = () => setCurrent((current - 1 + projectImages.length) % projectImages.length);
  useGSAP(() =>{
   gsap.fromTo(sectionRef.current,{opacity:0 },{opacity:1} , {duration:3 });
  }, [] );
  return(
        
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout flex flex-row gap-8">
                    {/*Left */}
                    <div className="first-project-wrapper flex-1">
                        <div className="image-wrapper">
                            <video
                                src="../images/Project1.mp4"
                                controls
                                className="w-full h-auto rounded-lg"
                                alt="Game App demo"
                            />
                        </div>
                        <div className="text-content">
                            <h2 className="text-4xl font-extrabold mb-2">
  Showcasing my Game Library Browser: Effortless game management, intuitive search, and a beautiful interface—all powered by React
</h2>
                            <p className="text-white-50 md:text-xl">
                                This project is a Game Library Browser built with React, showcasing my skills in creating intuitive and visually appealing web applications. It allows users to effortlessly manage their game collections, search for games, and enjoy a seamless user experience.
                            </p>
                        </div>

                    </div>
                    {/*Right - Carousel */}
                    <div className="project-carousel flex-1 flex flex-col items-center gap-4">
  <div className="image-wrapper min-w-100px]">
    <img
      src={`../images/${projectImages[current]}`}
      alt={`Project 2 screenshot ${current + 1}`}
      className="w-full h-auto rounded-lg object-contain"
    />
  </div>
  <div className="flex gap-2">
    <button onClick={prevImage} className="px-3 py-1 bg-violet-500 text-white rounded">Prev</button>
    <button onClick={nextImage} className="px-3 py-1 bg-violet-500 text-white rounded">Next</button>
  </div>
  <div className="text-sm text-white-50">
    {`Image ${current + 1} of ${projectImages.length}`}
  </div>
  <div className="text-content">
    <h2 className="text-4xl font-extrabold mb-2">
      C++ SFML Game Library: Hangman, Snake & Wordle – All in One!
    </h2>
    <p className="text-white-50 md:text-xl">
      This C++ SFML Game Library demonstrates my skills in object-oriented programming and game development.  
      I designed and implemented three classic games—Hangman, Snake, and Wordle—using modular, reusable classes and clean code architecture.  
      The project showcases my ability to manage game state, handle user input, and create engaging graphical interfaces with SFML.  
      Through this work, I’ve strengthened my understanding of C++ fundamentals, design patterns, and building scalable, maintainable applications.
    </p>
  </div>
  {/* Third Project: Portfolio Website */}
  <div className="text-content mt-8">
    <h2 className="text-4xl font-extrabold mb-2">
      Interactive 3D Portfolio Website: Showcasing My Skills in Frontend & 3D Design
    </h2>
    <p className="text-white-50 md:text-xl">
      This portfolio website is my major project, built to highlight my expertise in modern frontend development and interactive 3D design.<br />
      Using React, Three.js, and advanced UI techniques, I’ve created an engaging platform to present my work, technical skills, and creativity in web experiences.
    </p>
  </div>
</div>

                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection