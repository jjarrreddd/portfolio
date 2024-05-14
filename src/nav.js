import React from 'react';
import "./nav.css";
import { motion } from 'framer-motion';

const Navbar = ({ aboutSect, contactSect, skillsSect, scrollSection }) => {
    return (
        <nav>
            <motion.h3
                    whileHover={{scale: [1, 1.3, 1], originX: 0}}
                    transition={{duration: 0.8, repeat: Infinity}}
                    className="title">Jarred Siriban</motion.h3>
            <ul>
                <motion.li 
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(aboutSect)}>
                        About
                </motion.li>
                <motion.li
                    initial={{opacity: 0.6}}
                    whileHover={{scale: 1.2}}
                    onClick={() => scrollSection(skillsSect)}>
                        Skills
                </motion.li>
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