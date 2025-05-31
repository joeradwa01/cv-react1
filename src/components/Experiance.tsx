import { FaThinkPeaks, FaLaptopCode } from "react-icons/fa";
import { MdOutlineCenterFocusWeak, MdOutlineWbAuto } from "react-icons/md";
import { HiArrowPath } from "react-icons/hi2";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { useState } from "react";

export const Experience = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const methodologies = [
    {
      id: 1,
      icon: <FaThinkPeaks className="text-blue-400" size={36} />,
      title: "Programming Thinking",
      description: "I apply iterative programming methodologies to tackle frontend challenges, emphasizing user feedback and continuous improvement to ensure solutions are both functional and user-friendly.",
      color: "blue"
    },
    {
      id: 2,
      icon: <HiArrowPath className="text-yellow-400" size={36} />,
      title: "Development Sprints",
      description: "I’ve led and contributed to fast-paced development sprints, working closely with cross-functional teams to rapidly prototype, build, and deliver features. My focus is always on writing clean, maintainable code aligned with both technical and user goals.",
      color: "yellow"
    },
    {
      id: 3,
      icon: <MdOutlineCenterFocusWeak className="text-green-400" size={36} />,
      title: "User-Centric Development",
      description: "Emphasized user-centric development approaches, integrating user needs and preferences into every phase of frontend projects. Conducted user research and usability testing to inform design decisions and enhance the overall user experience.",
      color: "green"
    },
    {
      id: 4,
      icon: <HiOutlineCircleStack className="text-red-400" size={36} />,
      title: "Development Frameworks",
      description: "Contributed to the implementation and maintenance of frontend development frameworks, optimizing code efficiency and ensuring consistency across projects. Leveraged framework components and libraries to expedite development cycles and achieve scalable and maintainable codebases.",
      color: "red"
    },
    {
      id: 5,
      icon: <FaLaptopCode className="text-purple-400" size={36} />,
      title: "Technical Problem Solving",
      description: "Applied analytical thinking to diagnose and resolve complex technical issues across multiple platforms and environments. Developed systematic approaches to troubleshooting that improved efficiency and user satisfaction.",
      color: "purple"
    },
    {
      id: 6,
      icon: <MdOutlineWbAuto className="text-teal-400" size={36} />,
      title: "Responsive Design",
      description: "Implemented responsive design principles to create seamless experiences across devices of all sizes. Focused on performance optimization techniques that balance visual appeal with efficient loading times.",
      color: "teal"
    }
  ];
  
  const handleCardHover = (id: number) => {
    setActiveCard(id);
  };
  
  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div id="work" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">WORK METHODOLOGY</p>
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            My Development Approach
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
          I’m passionate about solving problems through creative communication and structured development practices. My approach blends technical expertise with a strong focus on user experience, collaboration, and efficient execution.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologies.map((method) => (
            <div 
              key={method.id}
              className={`rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 ${
                activeCard === method.id ? `shadow-xl border-l-4 border-${method.color}-400` : "shadow-md border border-gray-100"
              }`}
              onMouseEnter={() => handleCardHover(method.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className={`p-4 rounded-full inline-block mb-4 bg-${method.color}-50`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600">
                {method.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            See My Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;