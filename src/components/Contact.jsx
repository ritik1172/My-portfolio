import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { 
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:ritikcu@gmail.com" className="border-b">
          {CONTACT.email}
        </a>
        <div className="m-6 flex item-center justify-center gap-4 text-2xl">
          <motion.a
           variants={iconVariants(2)}
           initial= "initial"
           animate= "animate"
           className="rounded-2xl border-4 border-neutral-800 p-4"
           href="https://www.linkedin.com/in/ritik1172/">
            <FaLinkedin className="text-cyan-600"/>
          </motion.a>

          <motion.a
          variants={iconVariants(3.5)}
          initial= "initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          href="https://github.com/ritik1172">
            <FaGithub />
          </motion.a>

          <motion.a
           variants={iconVariants(5)}
           initial= "initial"
           animate= "animate"
           className="rounded-2xl border-4 border-neutral-800 p-4"
           href="https://www.instagram.com/your-username">
            <FaInstagram className="text-orange-500"/>
          </motion.a>


          <motion.a
          variants={iconVariants(2)}
          initial= "initial"
          animate= "animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
          href="mailto:ritikcu@gmail.com">
            <IoMdMail className="text-red-500"/>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
