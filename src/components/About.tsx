import { useState } from "react";
import joe from "../assets/df5393e2-4d1e-4954-8ac4-f85b9335136b.jpg";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiApple } from "react-icons/si";

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  
  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" }
  ];
  
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">ABOUT ME</p>
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Get to Know Me Better
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-blue-600 rounded-lg"></div>
              <img 
                src={joe} 
                alt="Yousuf Radwan" 
                className="relative z-10 h-auto rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-950 rounded-full flex items-center justify-center z-20">
                <p className="text-white font-bold text-center">
                  3+ <br /> Years <br /> Experience
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:col-span-7">
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
            Web Developer & IT Support Specialist            </h3>
            
            <p className="text-gray-700 mb-6">
            I'm a Web Developer & IT Support Specialist with a Computer Science degree from Jordan University of Science and Technology. With a strong background in IT support and connectivity, I combine technical expertise with creative problem-solving to deliver smooth, user-friendly digital experiences. I'm experienced across Windows, macOS, iOS, and Android environments, and adept at using ticketing systems, ERP/CRM platforms, and cloud services to drive efficient support operations. I'm passionate about building seamless interfaces, optimizing system performance, and staying current with the latest web technologies and industry trends.
            </p>
            
            {/* Tabs */}
            <div className="mb-6">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-2 px-4 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="py-4">
                {activeTab === "skills" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FaHtml5 className="text-orange-500 mr-3" size={24} />
                      <span>HTML5</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FaCss3Alt className="text-blue-500 mr-3" size={24} />
                      <span>CSS3</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FaJs className="text-yellow-500 mr-3" size={24} />
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FaReact className="text-blue-400 mr-3" size={24} />
                      <span>React.js</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <SiTailwindcss className="text-teal-500 mr-3" size={24} />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <SiBootstrap className="text-purple-500 mr-3" size={24} />
                      <span>Bootstrap</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FaLinux className="text-orange-500 mr-3" size={24} />
                      <span>Linux</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <SiApple className="text-gray-800 mr-3" size={24} />
                      <span>macOS</span>
                    </div>
                  </div>
                )}
                
                {activeTab === "education" && (
                  <div>
                    <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold">Bachelor of Science: Computer Science</h4>
                      <p className="text-gray-600">Jordan University of Science and Technology</p>
                      <p className="text-gray-600">2019 - 2023</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold">Apple Certified iOS Technician</h4>
                      <p className="text-gray-600">Professional Certification</p>
                    </div>
                  </div>
                )}
                
                {activeTab === "experience" && (
                  <div>
                    <div className="mb-4 bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold">Connectivity Expert</h4>
                      <p className="text-gray-600">AT&T – Orlando, FL</p>
                      <p className="text-gray-600">03/2024 – Present</p>
                      <p className="text-sm mt-2">
                        Providing technical support for mobile devices, troubleshooting, and service-related concerns.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold">Sales Representative & Shift Leader Manager</h4>
                      <p className="text-gray-600">Alliance wireless (Metro by T-Mobile) – Milwaukee, WI</p>
                      <p className="text-gray-600">06/2021 – 02/2024</p>
                      <p className="text-sm mt-2">
                        Managing sales, technical support, and team supervision while handling inventory and operations.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className="bg-blue-950 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 inline-block"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;