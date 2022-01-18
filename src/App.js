import React , {useEffect} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {

  useEffect(()=>{
    document.title = "Vikas | Portfolio"
  },[])

  return (
    <main className="text-gray-400 bg-black	 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}