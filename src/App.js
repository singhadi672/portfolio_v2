import './App.css';
import AboutMe from './components/aboutMe';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Experience from './components/experience/experience';
import Homepage from './components/home';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App bg-hero_dark">
      <div className='bg-hero_dark text-white px-20 pt-6 pb-12 overflow-x-hidden overflow-y-hidden' >
        <Navbar />
        <Homepage />
        <AboutMe />
        <Portfolio />
        <Blogs />
        <Experience />
      </div>
      <Contact />
    </div>
  );
}

export default App;
