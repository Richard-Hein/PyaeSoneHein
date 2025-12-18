  import {motion} from "motion/react"
  const Project = ({ image, title, description, url, demo = ''}) => {
    return (
      <motion.div
      initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: .5, ease: "easeIn" }} 
        className="flex  flex-col-reverse px-3 items-center justify-between w-full border-b    py-6 sm:flex-row "
      >
        <div className="w-full sm:w-[30%] mt-4 md:mt-0 ">
          <motion.h1
           initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: .8, ease: "easeIn" }} 
           className=" font-semibold tracking-wide text-xl mb-4 underline underline-offset-6 decoration-2 decoration-primary">
            {title}
          </motion.h1>
          <motion.p
          initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: 1, ease: "easeIn" }} 
           className="">{description}</motion.p>
          
          
          <div className="flex gap-4 mt-4">
            {demo.length > 0 &&(
             <a href={demo} target="_blank" rel="noreferrer"  target="_blank">
              <motion.button initial={{ opacity:0, scale:.5 }} 
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration: 1, ease: "easeIn" }}  className="btn btn-primary hover:bg-secondary hover:text-white">
              See Live (VPN)
            </motion.button>
             </a>


            )}
            <a href={url} className="flex items-center" target="_blank">
              <button className="text-[15px] font-semibold  hover:underline ">
              Source Code
            </button>
            </a>
          </div>
          
        </div>
        <div className="w-full sm:w-[60%]  h-full shadow-2xl border-2 rounded-md ">
          <img
            src={`${image}`}
            alt="project_image"
            className="w-full h-[200px] sm:h-[350px]  object-cover "
          />
        </div>
      </motion.div>
    );
  };

  export default Project;
