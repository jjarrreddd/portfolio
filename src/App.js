import './App.css';
import coding from './coding-icon.png';

import React, { useRef } from 'react';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

import Navbar from './nav.js';
import Contacts from './contact.js';
import Skills from './skills.js';
import About from './about.js';
import Projects from './projects.js';

// Welcome screen with type animation
const Title = () => {
  return (
    <TypeAnimation
      sequence={[
        'Adaptable', 2000,
        'Problem Solver', 2000,
        'Enthusiastic', 2000,
        () => {}, ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}/>
  )
}

// Portfolio React App
function App() {

  // Initializing each sections
  const aboutSect = useRef(null);
  const contactSect = useRef(null);
  const skillsSect = useRef(null);
  const projSect = useRef(null);

  // Smooth scrolling to each section after click
  const scrollSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="App-header">
        <Navbar
          aboutSect={aboutSect}
          contactSect={contactSect}
          skillsSect={skillsSect}
          projSect={projSect}
          scrollSection={scrollSection}
        />
        <h1>Welcome! My name is <span style={{color: 'rgb(209, 62, 62)'}}>Jarred Siriban</span>!</h1>
        <h2><Title/></h2>
        <div className="image-container">
          <motion.img 
            initial={{scale: 1}}
            whileHover={{scale: [1, 1.2, 1]}}
            src={coding} alt="" style={{width: '20%', height: 'auto'}}/>
        </div>

        {/*About Section*/}
        <div ref={aboutSect}>
          <h2>About</h2>
           <About />
        </div>

        {/*Skills Section*/}
        <div ref={skillsSect}>
          <h2>Skills</h2>
            <Skills />
        </div>
        
        {/*Projects Section*/}
        <div ref={projSect}>
          <h2>Projects</h2>
          <Projects />
        </div>
        
        {/*Contact Section*/}
        <div ref={contactSect}>
          <h2>Contact Me!</h2>
          <Contacts />
        </div>
      </div>
      <footer className="App-body">
        Created by Jarred Siriban 2024
      </footer>
    </div>
  );
}

export default App;
