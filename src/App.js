import './App.css';
import React, { useRef } from 'react';
import coding from './coding-icon.png';
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import Navbar from './nav.js'
import Contacts from './contact.js'
import Skills from './skills.js'

const Title = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome! I\'m Jarred Siriban!', 4000,
        () => {}, ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}/>
  )
}

function App() {

  const aboutSect = useRef(null);
  const contactSect = useRef(null);
  const skillsSect = useRef(null);

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
          scrollSection={scrollSection}
        />
        <h1><Title/></h1>
        <div className="image-container">
          <motion.img 
            initial={{scale: 1}}
            whileHover={{scale: [1, 1.2, 1]}}
            src={coding} alt="" style={{width: '15%', height: 'auto'}}/>
        </div>

        <div ref={aboutSect}>
          <h2>About</h2>
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
                
            <span className='App-body'>I am currently a student at California State University, Fullerton majoring
            in Computer Science, planning to look into software development!</span>
            <br />
            <span className='App-body'>I enjoy coding some fun and creative stuff!</span>
          </motion.div>
        </div>

        <div ref={skillsSect}>
          <h2>Skills</h2>
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>

            <span className='App-body'>'languages i use & projects'</span>

          </motion.div>
        </div>

        <div ref={contactSect}>
          <h2>Contact Me</h2>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
            </motion.div>
            <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
