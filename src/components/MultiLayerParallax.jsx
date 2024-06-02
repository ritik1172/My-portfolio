import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import imageFull from "../assets/image-full.png";
import imagebottom from "../assets/image-bottom.png";
import { FaArrowDown } from "react-icons/fa";


export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto h-screen overflow-hidden relative grid place-items-center border border-black rounded-lg pb-4"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-center text-6xl md:text-7xl relative z-10 lg:text-8xl"
      >
        My Services
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageFull})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${imagebottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      
      <motion.button
        className="absolute z-30 bg-cyan-800 flex items-center justify-center text-white py-2 pb-5 px-4 w-[12vh] rounded-md"
        style={{
            opacity: buttonOpacity,
            top: "calc(90% - 2rem)", // Adjust the value (2rem) to give space from the bottom
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
      >
        <FaArrowDown className="text-3xl text-black-400"/>
      </motion.button>
    </div>
  );
}
