import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Contact Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have a project in mind or want to discuss job opportunities? Feel free to reach out!
            I'm always open to new ideas and collaborations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <FiMail size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Email</h3>
            <p className="text-gray-600">yousuf.radwan01@gmail.com</p>
            <a 
              href="mailto:yousuf.radwan01@gmail.com" 
              className="inline-block mt-4 text-blue-600 hover:underline font-medium"
            >
              Send an email
            </a>
          </div>
          
         
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <FiMapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-blue-950 mb-2">Location</h3>
            <p className="text-gray-600">Orlando, Florida</p>
            <p className="inline-block mt-4 text-blue-600 font-medium">
              Available for remote work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;