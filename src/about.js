import React from 'react';
import { motion } from 'framer-motion';

// About component
const About = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
            <div className='App-body'>
                <p>I am currently a student at California State University, Fullerton majoring
                    in Computer Science, planning to look into software development!</p>
                <p>I enjoy coding some fun and creative stuff! Besides coding, I like hanging
                    with friends and playing games!</p>
            </div>
        </motion.div>
    );
}

export default About