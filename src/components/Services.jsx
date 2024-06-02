import React from "react";
import card1 from "../servicePic/card1.avif";
import card2 from "../servicePic/card2.jpg";
import card3 from "../servicePic/card3.jpg";


import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="border-b internships border-neutral-900 pb-4 mt-[10vh]">
      <div className="flex flex-wrap justify-center gap-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
              className="rounded-t-lg"
              src= {card1}
              alt=""
            />
          <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Stack Development
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            As a Full Stack Developer, I offer end-to-end development services, creating responsive UIs with HTML, CSS, JavaScript, and React. I build robust server-side applications using Node.js and Express, MongoDB and develop RESTful APIs. I also provide ongoing maintenance to ensure seamless and efficient applications tailored to your business needs.

            </p>
            <a
              href="https://www.linkedin.com/in/ritik1172/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Contact to know more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.div>


        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
              className="rounded-t-lg"
              src={card2}
              alt=""
            />
          <div className="p-5 text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              One to One Mentoship
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I offer personalized one-to-one mentorship, guiding you through every step of your development journey. Whether you're a beginner looking to learn the basics or an experienced developer aiming to refine your skills, I provide tailored advice and support. Together, we'll work on real-world projects, solve complex problems, and achieve your personal and professional goals.
            </p>
            <a
              href="https://www.linkedin.com/in/ritik1172/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Contact to know more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.div>



        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >

            <img
              className="rounded-t-lg"
              src={card3}
              alt=""
            />
          <div className="p-5 text-center">
           
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Coding
              </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            I offer comprehensive coding classes designed to help you master programming languages and concepts.
            my classes cover a range of topics including HTML, CSS, JavaScript, React, NodeJS, MongoDB, C++, and more. With hands-on projects
            and personalized guidance, you'll gain the confidence and expertise needed to succeed in the tech world.


            </p>
            <a
              href="https://www.linkedin.com/in/ritik1172/"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Contact to know more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
