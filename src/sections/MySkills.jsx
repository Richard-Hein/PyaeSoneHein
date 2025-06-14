// icons
import { IoMdLeaf } from "react-icons/io";
import { FaReact , FaVuejs, FaNodeJs , FaGitAlt  ,FaLaravel, FaCss3Alt, FaHtml5 ,FaSass } from "react-icons/fa6";
import { SiExpress , SiTypescript, SiJavascript, SiPhp,SiBootstrap  , SiTailwindcss, SiMysql, SiRedux  , SiReactrouter      } from "react-icons/si";


const MySkills = () => {
  return (
    <section id="mySkills" className="max-w-[1000px] mx-auto">

    <h1 className="font-bold text-[1.5rem] text-black text-center">Experience With</h1>
    <p className="my-[2rem] indent-8 tracking-wide px-2">
      At the moment, I'm using these technologies for building pixel-perfect frontends and roubst backend api. If there is another technologies coming from in my path , I won't take a blink to learn those. I love learning new things. Here is my current frameworks and tools.
    </p>
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 ">
     
    
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300">
          <SiJavascript className=" text-yellow-300"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300">
          <FaNodeJs className=" text-blue-700"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] border-1 border-gray-300">
          <SiPhp className=" text-[#0f32cf]"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiTypescript className=" text-blue-700"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiBootstrap className=" text-blue-700"/>
        </div>
         
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiTailwindcss className=" text-[#38BDF8]"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaReact className="text-[#61DAFB]"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaVuejs className=" text-[#17cc4d]"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiExpress className=" text-[#000000]"/>
        </div>

        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaLaravel className=" text-[#F9322C]"/>
        </div>

        
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiRedux className=" text-blue-700"/>
        </div>
        <div className="  w-[135px] h-[80px] md:w-[200px] md:h-[95px]  ">
          <img src="https://images.seeklogo.com/logo-png/46/1/pinia-logo-png_seeklogo-467284.png" alt="" className="w-[75%]   md:w-[60%] mx-auto h-full bg-amber-100 rounded-lg" />
        </div>

        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <SiMysql className=" text-blue-700"/>
        </div>

        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <IoMdLeaf className=" text-[#47A248]"/>
        </div>
        <div className="bg-amber-100 p-2 mx-auto rounded-lg shadow-lg text-[5rem] ">
          <FaGitAlt className=" text-[#F05032]"/>
        </div>
       
    </div>

    </section>
  )
}
export default MySkills