// icons
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {Typewriter} from "react-simple-typewriter";
// Components
import Icon from "../components/Icon";
import BurgerMenu from "../components/BurgerMenu";
const Hero = () => {
  return (
    <section className="flex bg-gradient-to-tr  from-white via-[#A0C1D1] to-primary justify-items-center items-center  min-h-screen px-[20px] md:px-[30px]  ">
      {/* <div className="bg-red-400 h-[8vh] fixed top-0 left-0 right-0 mx-auto text-center">
        <ul className=" grid grid-cols-4 gap-4 items-center ">
          <li>Hero</li>
          <li>About Me</li>
          <li>Experiences</li>
          <li>Works</li>
        </ul>
      </div> */}
      
      <div className="max-w-[30rem]">
        <h6 className=" text-md font-bold">Hello, 👋</h6>
        <h4 className="text-[14px] md:text-lg mb-2 ">
        
          My name is{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary   to-indigo-600">Pyae Sone Hein</span>,
          and I'm a
        </h4>
        
        <h1 className="text-[25px] md:text-4xl font-bold  ">
          <Typewriter
          words={["Full-Stack Developer", "Self-Taught Programmer"]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={60}
          delaySpeed={1000}
        />
        </h1>
        <p className="py-6">
          I want to built <b> fast, responsive, and scable web applications </b> using modern technologies from pixel-perfect frontends to robust backend systems.
        </p>
        
        <div className=" space-x-4">
          <button className="btn btn-primary">Download CV</button>
          <a href="https://www.facebook.com/richard.hein.783827?mibextid=ZbWKwL">
          <Icon icon={<FaFacebook />}> </Icon>
          </a>
        <a href="https://github.com/223mark"><Icon icon={<FaGithub />}> </Icon>
        
        </a>
        <a href="https://www.linkedin.com/in/pyae-sone-hein-24069b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Icon icon={<FaLinkedin />}> </Icon>
        </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[65rem] absolute bottom-[80px]">
        <p className="border-0 md:border-e border-primary pr-2 "><span class="text-xs">🟡</span> Open To Learn Anything</p>
        <p className="px-0 md:px-2 "><span class="text-xs">🟡</span> Life-Long Learning Enjoyer</p>
        {/* <p>Building Frontend Modern Website</p> */}
        
      </div>
      {/* burger menu */}
      {/* <BurgerMenu /> */}
    </section>
  );
};
export default Hero;
