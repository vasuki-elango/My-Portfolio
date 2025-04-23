import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Service } from "./Components/Service";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="w-full mx-auto overflow-hidden">
      <Header/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Contact/> 
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
