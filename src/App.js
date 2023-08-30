import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Project from "./component/project/Project";
import Skills from "./component/skills/Skills";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
