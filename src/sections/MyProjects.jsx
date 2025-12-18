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
        url="https://github.com/Richard-Hein/ProAV"
        demo="https://proav.onrender.com/"
          
      />
      <Project
        image="/images/e-plant.png"
        title="Welcome To Paradise Nursery "
        description="Shopping Cart System built with React, Redux "
        url="https://github.com/Richard-Hein/E-Plant"
        demo="https://e-plant-three.vercel.app/"
          
      />
      <Project
        image="/images/deezer.png"
        title="Deezer Clone"
        description="Deezer Clone Website built with Vue3 and Pinia for state management"
        url="https://github.com/Richard-Hein/Deezer-Clone"
        demo="https://deezer-clone-indol.vercel.app/"
      />
      
       
      <Project
        image="/images/natrous.png"
        title="Natrous Travel"
        description="Natrous Travel Website built with SASS"
        url="https://github.com/Richard-Hein/natours"
        demo="https://natours-pink-nine.vercel.app/"
      />
      <Project
        image="/images/lara_pos.png"
        title="Laravel Ecom Website"
        description="Ecommerce Website Building With Laravel + Blade"
        url=" https://github.com/Richard-Hein/Laravel_POS"
      />
      <Project
        image="/images/nasa.png"
        title="Nasa Mission Explorer"
        description="Finding Inheritiable Planets With Control Panel Building With React + Express"
        url="https://github.com/Richard-Hein/NASA_ZTM"
      />

     
      
      
    </section>
  );
};
export default MyProjects;
