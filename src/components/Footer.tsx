import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowUpCircle } from "react-icons/bs";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll to top button */}
        <div className="flex justify-center -mt-6">
          <button 
            onClick={scrollToTop}
            className="bg-white text-blue-950 rounded-full p-3 shadow-lg hover:bg-blue-100 transition-colors duration-300"
          >
            <BsArrowUpCircle size={24} />
          </button>
        </div>
        
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Yousuf<span className="text-blue-400">.</span>
              </h3>
              <p className="text-blue-100 max-w-xs mb-6">
                Front-end developer and IT support specialist passionate about creating 
                seamless user experiences and innovative technical solutions.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/yousuf-radwan-bb430b2b3/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a 
                  href="mailto:yousuf.radwan01@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <MdOutlineEmail size={18} />
                </a>
                <a 
                  href="https://github.com/your-github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#main" className="text-blue-100 hover:text-white transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-blue-100 hover:text-white transition-colors duration-200">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-100 hover:text-white transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-blue-100 hover:text-white transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-100 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Orlando, Florida</span>
                </li>
                
                <li className="flex items-start">
                  <span className="mr-2">📧</span>
                  <span>yousuf.radwan01@gmail.com</span>
                </li>
                <li className="mt-4">
                  <a 
                    href="#contact" 
                    className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                  >
                    Get In Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-blue-900 text-center">
          <p className="text-blue-200">
            © {currentYear} Yousuf Radwan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;