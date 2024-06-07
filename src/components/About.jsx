import React, { useEffect, useState, useRef } from 'react';
import aboutimg from "../assets/mockup1.png";
import { motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const { x, y } = mousePosition;
    const imageBounds = imageRef.current.getBoundingClientRect();

    if (
      x >= imageBounds.left &&
      x <= imageBounds.right &&
      y >= imageBounds.top &&
      y <= imageBounds.bottom
    ) {
      const halfWidth = imageBounds.width / 2;
      const halfHeight = imageBounds.height / 2;
      const maxAngle = 20; // Maximum angle of rotation

      const angleX = Math.min(Math.max((x - imageBounds.left - halfWidth) / halfWidth * maxAngle, -maxAngle), maxAngle);
      const angleY = Math.min(Math.max((y - imageBounds.top - halfHeight) / halfHeight * maxAngle, -maxAngle), maxAngle);

      controls.start({
        rotateX: angleY,
        rotateY: angleX,
        transition: { duration: 0.5, ease: 'easeInOut' }, // Smooth transition
      });
    } else {
      controls.start({
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.5, ease: 'easeInOut' }, // Smooth transition
      });
    }
  }, [mousePosition, controls]);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          animate={controls}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex item-center justify-center">
            <img ref={imageRef} src={aboutimg} alt="Ritik Dwivedi" className="w-[1200px] rounded-lg" />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center items-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 lg:mt-[12vh] md:mt-[0px]">
              I'm Ritik Dwivedi, a dedicated Full Stack Developer proficient in HTML, 
              CSS, JavaScript, React, Node.js, and MongoDB. With a Master's in Computer 
              Applications from Chandigarh University, I've excelled in reducing website 
              complexity by 30% and enhancing user satisfaction by 15% during my time at Bharat Intern. 
              My virtual internship with Forage & TCS honed my analytical skills for sustainability solutions. 
              Projects like InSeeks demonstrate my commitment to collaborative learning platforms. 
              I'm eager to contribute my skills and grow professionally in a dynamic team environment.
            </p>

            <Link to="/resume" className="mt-4 max-w-xl text-center bg-cyan-700 text-white font-bold py-2 w-full px-4 rounded hover:bg-teal-700 transition duration-500 ease-in-out transform hover:scale-105">
              Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
