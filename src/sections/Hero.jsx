// icons
import { FaFacebook, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

// Components
import Icon from "../components/Icon";
// motion
import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className="flex bg-gradient-to-tr  from-white via-[#A0C1D1] to-primary justify-items-center items-center  min-h-screen w-full px-[20px] md:px-[30px]  ">
      <div className="max-w-[30rem]">
        <h6 className=" text-lg font-bold">
          Hello,{" "}
          <motion.div
            className="inline-block text-2xl"
            animate={{ y: [0, -10, 0] }} 
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            👋
          </motion.div>
        </h6>
        <h4 className="text-[14px] md:text-lg mb-2 ">
          My name is{" "}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            className="font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary   to-indigo-600"
          >
            Pyae Sone Hein
          </motion.div>
          , and I'm a
        </h4>

        <h1 className="text-[25px] md:text-4xl font-bold  ">
          <Typewriter
            words={["Frontend Developer","Backend Developer","Full-Stack Developer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </h1>
        <p className="py-6">
          I want to built <b> fast, responsive, and scable web applications </b>{" "}
          using modern technologies from pixel-perfect frontends to robust
          backend systems.
        </p>

        <div className="space-x-2 md:space-x-4">
          <a href="https://ciozlclbenuzsljbzgnh.supabase.co/storage/v1/object/public/temp-bucket//myCV.pdf"
            download="myCV.pdf">
             
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
          
            className="btn btn-primary"
          >
            Download CV
          </motion.button>
          </a>
          <a href="https://www.facebook.com/richard.hein.783827?mibextid=ZbWKwL">
            <Icon icon={<FaFacebook />}> </Icon>
          </a>
          <a href="https://github.com/223mark">
            <Icon icon={<FaGithub />}> </Icon>
          </a>
          <a href="https://www.linkedin.com/in/pyae-sone-hein-24069b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <Icon icon={<FaLinkedin />}> </Icon>

          </a>
          <a href="https://t.me/richard_hein_24">
            <Icon icon={<FaTelegram  />}> </Icon>

          </a>



            

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-[65rem] absolute bottom-[80px]">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeIn",
          }}
          className="border-0 md:border-e border-primary pr-2 "
        >
          <span class="text-xs">🟡</span> Open To Learn Anything
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className="px-0 md:px-2 "
        >
          <span class="text-xs">🟡</span> Life-Long Learning Enjoyer
        </motion.p>
        {/* <p>Building Frontend Modern Website</p> */}
      </div>
      {/* burger menu */}
      {/* <BurgerMenu /> */}
    </section>
  );
};
export default Hero;
