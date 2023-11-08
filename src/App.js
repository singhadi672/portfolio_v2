import { useRef } from 'react';
import './App.css';
import AboutMe from './components/aboutMe';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Experience from './components/experience/experience';
import Homepage from './components/home';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';

function App() {
  const contactsRef = useRef(null)
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const blogsRef = useRef(null)
  const portfolioRef = useRef(null)
  const aboutMeRef = useRef(null)
  return (
    <div className="App bg-hero_dark">
      <div className='bg-hero_dark text-white lg:px-20 px-10 pt-6 pb-12 overflow-x-hidden overflow-y-hidden' >
        <Navbar
          contactsRef={contactsRef}
          homeRef={homeRef}
          experienceRef={experienceRef}
          blogsRef={blogsRef}
          portfolioRef={portfolioRef}
          aboutMeRef={aboutMeRef}

        />
        <Homepage homeRef={homeRef} />
        <AboutMe aboutMeRef={aboutMeRef} contactsRef={contactsRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <Blogs blogsRef={blogsRef} />
        <Experience experienceRef={experienceRef} />
      </div>
      <Contact contactsRef={contactsRef} />
    </div>
  );
}

export default App;
