import { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

export const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = (id: string) => {
    setActiveSection(id);
    if (window.innerWidth <= 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    const handleScroll = () => {
      const position = window.scrollY;
      const sections = ["main", "work", "projects", "about", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (position >= top && position < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "main", icon: <AiOutlineHome size={20} />, label: "Home" },
    { id: "work", icon: <GrProjects size={20} />, label: "Work" },
    { id: "projects", icon: <AiOutlineProject size={20} />, label: "Projects" },
    { id: "about", icon: <BsPerson size={20} />, label: "About" },
    { id: "contact", icon: <AiOutlineMail size={20} />, label: "Contact" },
  ];

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-blue-950"
      />
      
      {/* Mobile Nav */}
      {nav && (
        <div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20 transition-all duration-300">
          {navLinks.map(({ id, icon, label }) => (
            <a
              key={id}
              onClick={() => handleNavItemClick(id)}
              href={`#${id}`}
              className={`w-[75%] flex items-center justify-center space-x-3 rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transition-transform duration-200 ${
                activeSection === id ? "text-blue-600" : "text-blue-950"
              }`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Desktop Nav */}
      <div className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-6">
          {navLinks.map(({ id, icon, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleNavItemClick(id)}
              className="relative group"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300 ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-950"
                }`}
              >
                {icon}
              </div>
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-950 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;