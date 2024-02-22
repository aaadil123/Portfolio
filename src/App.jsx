import "./App.css";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div className="overflow-x-hidden">

        <Navbar/>

        <div
        className='w-screen overflow-hidden bg-[#1C1C27]'>

          <div className="wrapper">
            <Intro/>
            <Skills/>
            <Projects/>
          </div>
          
          <Contact/>
          <Footer/>

          

        </div>

      

    </div>
  );
}

export default App;
