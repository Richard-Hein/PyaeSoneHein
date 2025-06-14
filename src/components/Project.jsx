  const Project = ({ image, title, description, url, demo = ''}) => {
    return (
      <div
        className="flex  flex-col-reverse px-3 items-center justify-between w-full border-b    py-6 sm:flex-row "
      >
        <div className="w-full sm:w-[30%] mt-4 md:mt-0 ">
          <h1 className=" font-semibold tracking-wide text-xl mb-4 underline underline-offset-6 decoration-2 decoration-primary">
            {title}
          </h1>
          <p className="">{description}</p>
          
          
          <div className="flex gap-4 mt-4">
            {demo.length > 0 ? 
             <a href={demo}>
              <button className="btn btn-primary hover:bg-secondary hover:text-white">
              See Live
            </button>
             </a>
            
             :
            <button  className="btn btn-primary cursor-not-allowed hover:bg-secondary hover:text-white">
              See Live
            </button>

            }
            <a href={url} className="flex items-center">
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
      </div>
    );
  };

  export default Project;
