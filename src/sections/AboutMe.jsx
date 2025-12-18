import { BsArrowUpSquare } from "react-icons/bs";

import MyProfileImage from "../../public/images/My_AVATAR.jpg";
import { motion } from "motion/react";
const AboutMe = () => {
  return (
    
    
       <section
      id="about-me"
      className="relative pt-[25px]  max-w-[1000px]  mx-auto "
    >
      <motion.div
        className="inline-block fixed bottom-2 right-4 text-4xl text-primary shadow-2xl cursor-pointer z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <a href="#" onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}>
          <BsArrowUpSquare />
        </a>
      </motion.div>
      <h2 className="underline underline-offset-6 decoration-2 decoration-primary text-[1.3rem] mb-[2rem] md:text-[1.5rem] md:mb-[4rem]  text-center font-extrabold">
        Who Am I ?
      </h2>

      <div className="grid  md:ms-6  md:grid-cols-2 md:gap-2  relative  mb-[1.5rem]  md:px-4 md:py-2">
        <div className="">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={MyProfileImage}
            alt="myProfileImage"
            className="  z-10 md:absolute border-4  border-gray-800 md:border-0 top-0 left-0 md:top-[-5px] md:left-[-15px] w-[70%] mx-auto h-[200px]  md:w-[300px] md:h-[320px]   rounded-2xl object-cover"
          />
          <div className="hidden md:block md:absolute md:top-[25px]  bottom-0 w-[100px] h-[110px] md:w-[300px] md:h-[320px] outline-6 outline-gray-border-gray-800 rounded-2xl"></div>
        </div>

        <div className="  mt-6 w-[90%] mx-auto ">
          <p className=" text-justify  text-sm md:text-lg indent-3 md:indent-8">
            I'm a self-taught developer dedicated to building interactive,
            user-friendly web experiences. While my path isn't traditional, I’ve
            built a strong foundation through hands-on projects and real-world
            problem-solving. I’m a quick learner driven by curiosity and grit,
            ready to bring fresh energy to a collaborative development team.
          </p>
          <div className="stats stats-horizontal mt-4 w-full">
            <div className="stat">
              <div className="stat-title text-md">Learning Journey</div>
              <div className="">
                {" "}
                <span className="text-3xl text-primary font-extrabold">
                  + 2
                </span>{" "}
                years
              </div>
              <div className="stat-desc text-primary">
                From 2021 to present
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Projects</div>
              <div className="">
                {" "}
                <span className="text-3xl text-primary font-extrabold">
                  + 20
                </span>{" "}
                projects
              </div>
              <div className="stat-desc text-primary">
                Self-Made and Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
   
    
  );
};
export default AboutMe;
