import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
