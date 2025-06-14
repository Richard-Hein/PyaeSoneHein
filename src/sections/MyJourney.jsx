import {myEducationData, myDeveloperData} from "../data/data"
import {motion} from "motion/react"
const MyJourney = () => {
  return (
    <section className="grid grid-cols-1 gap-0 md:grid-cols-2  sm:gap-2 max-w-[1000px] mx-auto mt-[80px]">
       <div className="mx-4">
        <h2 className="text-[1.5rem] md:text-[1.2rem] font-bold text-center underline underline-offset-6 decoration-2 decoration-primary">My Education</h2>
        <div className=" mt-8 ">
      {myEducationData.map((item, index) => (
        <motion.div initial={{ opacity:0, scale:.5 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration: .8, ease: "easeInOut" }} key={index} className="mb-10 relative border rounded-lg shadow hover:border-primary hover:shadow-2xl cursor">
          {/* Dot */}
          <span className="absolute w-4 h-4 shadow-lg bg-primary rounded-full -left-2 top-[-7px]" />
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <h4 className="text-sm ">{item.subtitle}</h4>
            <span className="text-xs ">{item.date}</span>
            <p className="text-sm mt-2 ">{item.description}</p>
          </div>
        </motion.div>
      ))}
      </div>
       </div>
       <div className="mx-4">
        <h2 className="text-[1.2rem] font-bold text-center underline underline-offset-6 decoration-2 decoration-primary">My Experiences</h2>
        <div className="relative border-0 md:border-l-2 border-gray-300 md:ml-4 mt-8">
      {myDeveloperData.map((item, index) => (
        <motion.div initial={{ opacity:0, scale:.5 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration: .8, ease: "easeInOut" }} key={index} className="mb-10 ml-0 md:ml-6 relative border rounded-lg shadow hover:border-primary hover:shadow-2xl ">
          {/* Dot */}
          <span className="absolute w-4 h-4 shadow-lg bg-primary rounded-full -left-2 top-[-7px]" />
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <h4 className="text-sm ">{item.subtitle}</h4>
            <span className="text-xs ">{item.date}</span>
            <p className="text-sm mt-2 ">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
       </div>
    </section>
    
  );
};

export default MyJourney;
