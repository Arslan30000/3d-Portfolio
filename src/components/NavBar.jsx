import React from 'react';

const NavBar = () => {
  return (
    <header className="w-full px-6 py-4 bg-zinc-900 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold hover:text-yellow-400 transition duration-300">
          Muhammad Arslan
        </a>

        {/* Nav Links */}
       <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <a href="#counter" className="text-sm font-medium hover:text-yellow-400 transition duration-300">
            My Academic Background
          </a>
          <a href="#work" className="text-sm font-medium hover:text-yellow-400 transition duration-300">
            My Projects
          </a>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="text-sm font-medium bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default NavBar;
