
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  
  return (
    <>
    
    <Navbar/>
    <section id="home" >
     <Hero/>
    </section>
    
    <section id="projects">
    <Projects/>
    </section>
    
    <section id="skills">
    <Skills/>
    </section>
    
   <section id="contact">
        <Contact />
     </section>
    </>
  )
}

export default App
