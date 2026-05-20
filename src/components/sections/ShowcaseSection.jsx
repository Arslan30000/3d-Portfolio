import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((current + 1) % projectImages.length);
  const prevImage = () => setCurrent((current - 1 + projectImages.length) % projectImages.length);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 3 });
  }, []);

  return (
    <div id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout flex flex-col lg:flex-row gap-8">
          
          {/* Left - React Game Library (Kept Exactly As Is) */}
          <div className="first-project-wrapper flex-1">
            <div className="image-wrapper">
              <video
                src="../images/Project1.mp4"
                controls
                className="w-full h-auto rounded-lg shadow-lg"
                alt="Game App demo"
              />
            </div>
            <div className="text-content mt-4">
              <h2 className="text-4xl font-extrabold mb-2 text-white">
                Showcasing my Game Library Browser: Effortless game management, intuitive search, and a beautiful interface—all powered by React
              </h2>
              <p className="text-white-50 md:text-xl">
                This project is a Game Library Browser built with React, showcasing my skills in creating intuitive and visually appealing web applications. It allows users to effortlessly manage their game collections, search for games, and enjoy a seamless user experience.
              </p>
            </div>
           {/* 2. Rent-a-Car App (Replacing AI Project) */}
            <div className="text-content w-full">
              <h2 className="text-3xl font-extrabold mb-2 text-white">
                Rent-a-Car: Android Application
              </h2>
              <p className="text-white-50 md:text-lg">
                A native Android application designed to streamline the vehicle rental process. Built with Kotlin and Java, this project emphasizes intuitive UI/UX for mobile users while managing backend data effectively to track inventory, bookings, and customer details.
              </p>
            </div>
              {/* 3D Portfolio Section */}
            <div className="text-content mt-6 w-full">
              <h2 className="text-3xl font-extrabold mb-2 text-white">
                Interactive 3D Portfolio & Web Development
              </h2>
              <p className="text-white-50 md:text-lg">
                This very portfolio is a testament to my frontend capabilities. Built with React, Three.js, and GSAP, it merges 3D design with responsive web architecture. Additionally, I recently completed a front-end rework using Tailwind CSS and JavaScript during my internship at SPS to optimize user experiences.
              </p>
            </div>
          </div>

          

          {/* Right - Carousel (Socially) & Additional Projects (AI/Portfolio) */}
          <div className="project-carousel flex-1 flex flex-col items-center gap-4">
            
            {/* Socially App Carousel */}
            <div className="image-wrapper min-w-[100px] w-full">
              <img
                src={`../images/${projectImages[current]}`}
                alt={`Socially App screenshot ${current + 1}`}
                className="w-full h-auto rounded-lg object-contain shadow-lg"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={prevImage} className="px-3 py-1 bg-violet-600 hover:bg-violet-500 transition-colors text-white rounded">Prev</button>
              <button onClick={nextImage} className="px-3 py-1 bg-violet-600 hover:bg-violet-500 transition-colors text-white rounded">Next</button>
            </div>
            <div className="text-sm text-white-50 mb-2">
              {`Image ${current + 1} of ${projectImages.length}`}
            </div>
            
            <div className="text-content w-full">
              <h2 className="text-3xl font-extrabold mb-2 text-white">
                Socially: Native Android Social Application
              </h2>
              <p className="text-white-50 md:text-lg">
                A full-stack social media platform engineered natively in Kotlin and Java. I designed this app to handle robust offline synchronization and integrated real-time video calling using the Agora API. This project highlights my ability to manage complex state transitions and consume REST APIs in a mobile environment.
              </p>
            </div>

          

          

          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSection;