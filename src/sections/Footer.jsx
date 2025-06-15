import {FaFacebook,FaGithub,FaLinkedin, FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import Icon from "../components/Icon"

const Footer = () => {
  return (
    <footer className="  w-full flex flex-col md:flex-row justify-between space-y-2 items-center py-6 px-4 border-t-2 mt-5">
        <h4 className="text-md hidden md:inline-block font-bold hover:underline hover:text-primary "> Pyae Sone Hein</h4>
        <h4 className="">
          <Icon icon={<SiGmail/>}/>
          pyaesone.dev.web@gmail.com
          </h4>
        <div className="space-x-3">
               <a href="https://www.facebook.com/richard.hein.783827?mibextid=ZbWKwL">
          <Icon icon={<FaFacebook />}> </Icon>
          </a>
        <a href="https://github.com/223mark"><Icon icon={<FaGithub />}> </Icon>
        
        </a>
        <a href="https://www.linkedin.com/in/pyae-sone-hein-24069b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Icon icon={<FaLinkedin />}> </Icon>
        </a>
         <a href="https://t.me/richard_hein_24">
            <Icon icon={<FaTelegram  />}> </Icon>

          </a>
        </div>
     
    </footer>
  )
}
export default Footer