import aboutimg from "../assets/aboutimg1.png";
import { motion } from "framer-motion"

const About = () => {
    return(
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me </span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial= {{ opacity: 0, x: -100 }}
             transition={{ duration: 0.5}}
             className="w-full lg:w-1/2 lg:p-8">
                <div className="flex item-center justify-center">
                    <img src={aboutimg} alt="Ritik Dwivedi" className="w-[500px] rounded-lg" />
                </div>
            </motion.div>

            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial= {{ opacity: 0, x: 100}}
             transition={{ duratrion: 0.5}}
             className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 mt-20">
              I'm Ritik Dwivedi, a dedicated Full Stack Developer proficient in HTML, 
              CSS, JavaScript, React, Node.js, and MongoDB. With a Master's in Computer 
              Applications from Chandigarh University, I've excelled in reducing website 
              complexity by 30% and enhancing user satisfaction by 15% during my time at Bharat Intern. 
              My virtual internship with Forage & TCS honed my analytical skills for sustainability solutions. 
              Projects like InSeeks demonstrate my commitment to collaborative learning platforms. 
              I'm eager to contribute my skills and grow professionally in a dynamic team environment.
              </p>

              <a href="https://drive.google.com/file/d/1RTYo82hnmmhWyE6WIPPfVCvkbDccdWN2/view" className="mt-4 max-w-xl text-center bg-cyan-700 text-white font-bold py-2 px-4 rounded hover:bg-teal-700 transition duration-500 ease-in-out transform hover:scale-105">
                Resume
             </a>
              
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default About;