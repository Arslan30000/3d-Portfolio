import React from 'react';
import ContactExperience from '../HeroModels/ContactExperience.jsx';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 mb-2">💬 Have questions or want to collaborate?</p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Get in Touch</h2>
        <p className="text-lg">
          Email me at:{" "}
          <a
            href="mailto:muhammadarslan30000@gmail.com"
            className="text-yellow-400 hover:underline"
          >
            muhammadarslan30000@gmail.com
          </a>
        </p>
      </div>

      {/* 3D Model */}
      <div className="w-full max-w-4xl h-[400px] md:h-[500px] bg-[#cd7c23] rounded-lg overflow-hidden shadow-lg">
        <ContactExperience />
      </div>
    </section>
  );
};

export default Contact;
