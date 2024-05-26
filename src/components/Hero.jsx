import profilePic from '../assets/myprofile.png';
import { motion } from "framer-motion"

const container = (delay) => ({
   hidden: { x: -100, opacity: 0},
   visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay},
   },
});


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 ml-1 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
                Ritik Dwivedi
            </motion.h1>

            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-cyan-500 via-teal-500
            to-cyan-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>

            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
            A Dedicated and passionate Full Stack Developer eager to create innovative and impactful web solutions. 
            With a strong foundation in both front-end and back-end technologies, I thrive on building seamless, user-friendly applications. 
            I am looking to work with a company that provides opportunities for both personal and professional advancement.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
           <motion.img
           initial= {{ x: 100, opacity: 0}}
           animate= {{ x: 0, opacity: 1}}
           transition={{ duration: 1, delay: 1.2}}
           src={profilePic} alt="Ritik Dwivedi" className="w-[500px] rounded-lg"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;