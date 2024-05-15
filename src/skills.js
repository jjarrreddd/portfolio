import React from 'react';
import { PythonOriginal, VscodeOriginal, 
         DjangoPlain, Html5Original, Css3Original } from 'devicons-react';
import { motion } from 'framer-motion';

import './App.css'

// Showcase of languages and tools icons
const Skills = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
            <div className="App-body">
                <span>Here are some tools and programming languages that I use!</span>
                <br />
                <br />
                <div className="icon-container">
                    {/* Python logo */}
                    <div className="icon-box">
                        <a href="https://www.python.org/">
                            <PythonOriginal size="75" />
                        </a>
                    </div>
                    {/* VsCode logo */}
                    <div className="icon-box">
                        <a href="https://code.visualstudio.com/">
                            <VscodeOriginal size="65" />
                        </a>
                    </div>
                    {/* Django logo */}
                    <div className="icon-box">
                        <a href="https://djangoproject.com/">    
                            <DjangoPlain size="60" />
                        </a>
                    </div>
                </div>
                <br />
                {/* Next row */}
                <div className="icon-container">
                    <div className="icon-box">
                        {/* HTML logo */}
                        <a href="https://html.com/">    
                            <Html5Original size="60" />
                        </a>
                    </div>
                    {/* CSS logo */}
                    <div className="icon-box">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">    
                            <Css3Original size="70" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills