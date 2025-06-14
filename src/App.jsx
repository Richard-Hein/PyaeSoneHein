import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import MyJourney from "./sections/MyJourney"
import MySkills from "./sections/MySkills"
import MyProjects from "./sections/MyProjects"
import Footer from "./sections/Footer"
import Header from "./sections/Header"



function App() {
  
  
// style={{
//     backgroundImage:
//       "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",}}
  return (
    <>
    <Header/>
     <Hero/>
     {/* <div className="divider divider-primary"></div> */}
     <AboutMe />
     <MyJourney/>
     <MySkills/>
     <MyProjects/>
     <Footer/>
     
      {/* <button class="btn btn-primary">One</button>
<button class="btn btn-secondary">Two</button>
<button class="btn btn-accent btn-outline">Three</button> */}
    </>
  )
}

export default App
