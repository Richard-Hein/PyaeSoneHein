import MyProfileImage from "../../public/images/psh.jpg";
import {motion} from "motion/react"
const AboutMe = () => {
  return (
    <section id="about-me" className="pt-[25px] bg-base max-w-[1000px]  mx-auto">
      <h2 className="text-[1.3rem] mb-[2rem] md:text-[1.5rem] md:mb-[4rem]  text-center font-extrabold">
        Who Am I ?
      </h2>

      <div className="grid  md:ms-6  md:grid-cols-2 md:gap-2  relative  mb-[1.5rem]  md:px-4 md:py-2">
        <div className="">
          <motion.img
            initial={{ opacity:0, scale:.5 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration: .8, ease: "easeInOut" }}
            src={MyProfileImage}
            alt="myProfileImage"
            className="  z-10 md:absolute border-4  border-primary md:border-0 top-0 left-0 md:top-[-5px] md:left-[-15px] w-[70%] mx-auto h-[200px]  md:w-[300px] md:h-[320px]   rounded-2xl object-cover"
          />
          <div className="hidden md:block md:absolute md:top-[25px]  bottom-0 w-[100px] h-[120px] md:w-[300px] md:h-[320px] outline-6 outline-primary rounded-2xl"></div>
        </div>

        <div className="  mt-6  mx-2 ">
          <p className=" text-justify  text-sm md:text-lg indent-3 md:indent-8">
            I'm a <b className="text-primary text-">self-taught developer </b> with a strong passion for building
            interactive, user-friendly web experiences.Although I don't come
            from a traditional Computer Science background,I've invested
            significant time and effort into learning modern web development
            through hands-on projects, online tutorials,and real-world problem
            solving. I'm eager to learn, quick to adapt,and excited to bring
            energy, curiosity, and grit to a development team.
            
          </p>
          <div className="stats stats-horizontal mt-4">
            <div className="stat">
              <div className="stat-title text-md">Learning Journey</div>
              <div className="">
                {" "}
                <span className="text-3xl text-primary font-extrabold">
                  + 4
                </span>{" "}
                years
              </div>
              <div className="stat-desc text-secondary">
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
              <div className="stat-desc text-secondary">
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
