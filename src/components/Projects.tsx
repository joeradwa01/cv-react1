import { useState } from "react";
import project1 from "../assets/project 1.png";
import project2 from "../assets/project 2.png";
import project3 from "../assets/project 3.png";
import project4 from "../assets/project 4.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projectsData = [
    {
      id: 1,
      img: project1,
      title: "Game Discovery Platform",
      description: "A responsive web application that helps users discover and explore new games based on their preferences and interests.",
      category: "react",
      tech: ["React", "API Integration", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      img: project2,
      title: "Crypto Tracker Dashboard",
      description: "Interactive dashboard for tracking cryptocurrency prices, trends, and portfolio performance in real-time.",
      category: "javascript",
      tech: ["JavaScript", "Chart.js", "REST API"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      img: project3,
      title: "Time Management App",
      description: "A productivity application designed to help users manage their time effectively with task tracking and analysis.",
      category: "react",
      tech: ["React", "React Hooks", "LocalStorage"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      img: project4,
      title: "Property Listing Platform",
      description: "A real estate platform for browsing, searching, and filtering property listings with detailed information and imagery.",
      category: "javascript",
      tech: ["JavaScript", "Bootstrap", "Firebase"],
      github: "#",
      demo: "#"
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <div id="projects" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">MY PORTFOLIO</p>
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Recent Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore my latest web development projects showcasing my skills in creating
            responsive, user-friendly, and visually appealing applications.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button 
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === "all" 
              ? "bg-blue-950 text-white" 
              : "bg-white text-blue-950 hover:bg-blue-100"
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter("react")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === "react" 
              ? "bg-blue-950 text-white" 
              : "bg-white text-blue-950 hover:bg-blue-100"
            }`}
          >
            React
          </button>
          <button 
            onClick={() => setFilter("javascript")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              filter === "javascript" 
              ? "bg-blue-950 text-white" 
              : "bg-white text-blue-950 hover:bg-blue-100"
            }`}
          >
            JavaScript
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/your-github" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-950 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors duration-300"
          >
            <FaGithub size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;