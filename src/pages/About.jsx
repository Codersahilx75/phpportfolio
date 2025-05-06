import React from "react";
import ProfileImage from "../assets/header/Rectangle.png";

const techStack = [
  {
    name: "JavaScript",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "HTML",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "PHP",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
];

const About = () => {
  return (
    <div className=" dark:bg-gray-900 border-t-2 border-b-2 border-gray-900 dark:border-green-400">
      <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 dark:text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 shadow-lg p-6 rounded-[40px]">
          {/* Profile Image */}
          <div className="relative w-full md:w-1/3 mb-6 md:mb-0">
            {/* Decorative Borders */}
            <div className="absolute top-0 left-0 h-[70%] w-3 bg-gray-900 dark:bg-green-400 rounded-sm"></div>
            <div className="absolute top-0 left-0 w-[40%] h-3 bg-gray-900 dark:bg-green-400 rounded-sm"></div>

            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* About Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-white">About Me</h1>
            <h2 className="text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">Who Am I?</h2>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              I am currently a master's student in Applied Geoinformatics at the University of Salzburg, Austria.
              I have a keen interest in front-end and GIS development. My goal is to leverage my expertise in building
              exciting and functional user interfaces.
            </p>
            <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              Additionally, I aim to employ my geospatial analysis, modeling, and process automation skills to engineer innovative,
              customizable, and sustainable software solutions. Below are some of the tools and technologies I frequently work with:
            </p>

            {/* Tech Stack Icons Only */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 mb-10 justify-items-center">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="w-16 h-16 transform transition-all hover:scale-110 flex justify-center items-center"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex justify-center">
              <button className="font-semibold py-3 px-8 border-2 border-gray-900 dark:border-green-400 text-gray-900 dark:text-green-400 rounded-md hover:bg-gray-900 hover:text-white dark:hover:bg-green-400 dark:hover:text-white transition duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
