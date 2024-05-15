import React from 'react';
import { motion } from 'framer-motion';

import "./App.css";


// Creating navbar
const Navbar = ({ aboutSect, contactSect, skillsSect, projSect, scrollSection }) => {
    return (
        <nav>
            {/* Title (in this case, my name) */}
            <motion.h3
                    whileHover={{scale: [1, 1.3, 1], originX: 0}}
                    transition={{duration: 0.8, repeat: Infinity}}
                    className="title">Jarred Siriban</motion.h3>
            <ul>
                {/* About nav option */}
                <motion.li 
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(aboutSect)}>
                        About
                </motion.li>
                {/* Skills nav option */}
                <motion.li
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(skillsSect)}>
                        Skills
                </motion.li>
                {/* Projects nav option */}
                <motion.li
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(projSect)}>
                        Projects
                </motion.li>
                {/* Contact nav option */}
                <motion.li
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(contactSect)}>
                        Contact
                </motion.li>
                
            </ul>
        </nav>
    );
};

export default Navbar