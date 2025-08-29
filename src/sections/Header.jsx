import { useEffect, useState } from "react";
import MyProfileImage from "../../public/images/psh.jpg";

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      // 100vh = window.innerHeight
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  return (
    <>
      <div className={`navbar  shadow-sm fixed top-0 px-1 md:px-6  z-40 transition ease-in  ${isScrolled ? "bg-primary text-white shadow-md" : "bg-transparent"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-lg text-primary font-semibold">
                <a href="#about-me">About Me</a>
              </li>
              <li className="text-lg text-primary font-semibold">
                <a href="#experiences">Experiences</a>
              </li>
              <li className="text-lg text-primary font-semibold">
                <a href="#works">Works</a>
              </li>
            </ul>
          </div>
          <div className="">
            
              <h1 className="text-[20px] font-bold ">
                 &lt;Pyae./&gt;
              </h1>

          </div>
        </div>
        {/* <div className="navbar-center ">
    
  </div> */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[16px] font-semibold">
              <a href="#about-me">About Me</a>
            </li>
            <li className="text-[16px] font-semibold">
              <a href="#experiences">Experiences</a>
            </li>
            <li className="text-[16px] font-semibold">
              <a href="#works">Works</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
