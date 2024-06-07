import React from 'react';
import resumeImg from '../assets/resume.jpg'; // Assuming resume is converted to JPG format

const Resume = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full lg:w-2/3 max-w-3xl mb-8">
          <img src={resumeImg} alt="Resume" className="w-full h-auto rounded-lg" />
        </div>
        <p className="max-w-3xl text-lg text-center mb-6">
          Click on the button below to download my resume in PDF format.
        </p>
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1RTYo82hnmmhWyE6WIPPfVCvkbDccdWN2/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md mx-auto bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-teal-700 transition duration-500 ease-in-out transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
