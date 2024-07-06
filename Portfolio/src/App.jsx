import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";



export default function App() {
  return (
    <h1 className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      
    </h1>
  )
}