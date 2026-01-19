import Sidebar from "./components/Sidebar";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Resume from "./components/sections/Resume";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Languages from "./components/sections/Languages";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Navigation />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
        <Languages />
      </main>
    </div>
  );
}

export default App;
