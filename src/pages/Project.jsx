import React from "react";
import ProjectImg1 from "../assets/header/p1.png";
import ProjectImg2 from "../assets/header/p2.png";
import ProjectImg3 from "../assets/header/p3.png";
import ProjectImg4 from "../assets/header/p4.png";

const projects = [
  {
    title: "Project One",
    description: "An interactive portfolio with animations and responsive design using HTML, CSS, and PHP.",
    image: ProjectImg1,
    liveLink: "#",
    technologies: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    ],
  },
  {
    title: "Project Two",
    description: "E-commerce product listing page powered by MySQL and styled with Tailwind CSS.",
    image: ProjectImg2,
    liveLink: "#",
    technologies: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    ],
  },
  {
    title: "Project Three",
    description: "Content management system (CMS) with backend integration using PHP and MySQL.",
    image: ProjectImg3,
    liveLink: "#",
    technologies: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    ],
  },
  {
    title: "Project Four",
    description: "Responsive blog with search and filtering functionality. Clean UI and optimized queries.",
    image: ProjectImg4,
    liveLink: "#",
    technologies: [
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    ],
  },
];

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image with left-to-right hover overlay */}
            <div className="relative group overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10">
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gray-300/30 transition-all duration-500 group-hover:left-0" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-4 mb-6">
                {project.technologies.map((tech, idx) => (
                  <img
                    key={idx}
                    src={tech}
                    alt="Technology"
                    className="w-8 h-8 object-contain"
                  />
                ))}
              </div>

              {/* Visit Button */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white dark:bg-green-500 dark:hover:bg-green-600 py-2 px-5 rounded hover:bg-gray-700 transition"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
