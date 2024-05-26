import React from 'react';
import logo from "../assets/logo3.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center m-3">
        <img src={logo} alt="logo" className="w-32 h-14 rounded-lg h-auto shadow-none transition-shadow duration-300
         cursor-pointer hover:shadow-lg hover:shadow-cyan-400" />
      </div>
      <div className="m-6 flex item-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar;
