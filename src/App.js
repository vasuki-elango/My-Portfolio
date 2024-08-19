import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { Project } from "./Components/Project";
import { Service } from "./Components/Service";
import { Skills } from "./Components/Skills";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
