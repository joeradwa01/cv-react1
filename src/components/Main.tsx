import mainImage from "../assets/b36053c9-41ac-4d9e-a028-049c19c524b2.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-top "
        src={mainImage}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 flex justify-center items-center">
        <div>
          <h1 className=" text-4xl text-blue-950 font-bold text-center  ">
            I'm Yousuf Radwan
          </h1>
          <p className="m-2 text-center text-lg font-semibold text-blue-950">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Tech Enthusiast",
                1000,
                "Front End Develpoer",
                1000,
                "Problem Solver",
                1000,
                "Team player",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <div className="flex justify-center  ">
            <a
              href="https://www.linkedin.com/in/yousuf-radwan-bb430b2b3/"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className=" text-blue-950 m-3" size={25} />{" "}
            </a>

            <a href="mailto:joeradwan01@gmail.com" target="_blank">
              {" "}
              <MdOutlineEmail className=" text-blue-950 m-3" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
