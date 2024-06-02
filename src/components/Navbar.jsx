import React from 'react';
import logo from "../assets/logo3.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion"





const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <motion.div
      animate={{
        scale: [1, 1.1, 1.1, 1, 1],
        rotate: [0, 0, 90, 90, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
          duration: 4, // Adjust the duration to slow down the rotation
        },
      }}
      
      className="flex flex-shrink-0 item-center m-3">
        <img src={logo} alt="logo" className="w-32 h-14 rounded-lg h-auto shadow-none transition-shadow duration-300" />
      </motion.div>
      <div className="m-6 flex item-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ritik1172/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ritik1172">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/your-username">
          <FaInstagram />
        </a>
        <a href="mailto:ritikcu@gmail.com">
          <IoMdMail />
        </a>
      </div>
    </nav>
  )
}

export default Navbar;
