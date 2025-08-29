import Project from "../components/Project";
const MyProjects = () => {
  return (
    <section id="works" className="max-w-[1000px] mx-auto mt-[5rem]">
      <h1 className="underline underline-offset-6 decoration-2 decoration-primary font-bold text-[1.5rem]  text-center mb-[1.5rem] md:mb-[1.8rem]">
        What I've Built
      </h1>
      <p className="text-justify md:text-lg indent-6 md:text-indent-8 mb-[1.8rem] px-2">
        Here are some of my web applications I've built. Each project reflects
        my learning journey, problem-solving approach, and attention to user
        experience.
      </p>

    {

    }
     <Project
        image="/images/proav_pos.png"
        title="ProAV Shop "
        description="Eccomerce- Product Selling Website building with React, Redux,Express and Mongo "
        url="https://github.com/223mark/pro_shop-Ecommerce-"
        demo="https://proshop-138u.onrender.com"
          
      />
      <Project
        image="/images/deezer.png"
        title="Deezer Clone"
        description="Deezer Clone Website built with Vue3 and Pinia for state management"
        demo="https://deezer-clone-indol.vercel.app/"
      />
      
       
      <Project
        image="/images/natrous.png"
        title="Natrous Travel"
        description="Natrous Travel Website built with SASS"
        demo="https://natours-pink-nine.vercel.app/"
      />
      <Project
        image="/images/nasa.png"
        title="Nasa Mission Explorer"
        description="Finding Inheritiable Planets With Control Panel Building With React + Express"
        url="https://github.com/223mark/nasa_ztm"
      />
      <Project
        image="/images/ticket_lab.png"
        title="Bus Ticket Booking"
        description="Online Bus Ticketing Website Building With Laravel + Vue"
        url="https://github.com/223mark/Ticket-Lab"
      />
    </section>
  );
};
export default MyProjects;
