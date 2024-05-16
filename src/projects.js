import React from 'react';
import { motion } from 'framer-motion';

import './App.css';

// Array of projects
const projs = [
    {
        title: "Dumps Or Fire",
        description: "Input your favorite Spotify song, album, or playlist and see whether your music taste is Dumps or Fire!",
        link: "https://github.com/BCSchool/Software-Project"
    }
];

const Projects = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
            <p>Take a look at some projects!</p>
            <div className="projects">
                <div className="projects-container">
                    {/* Goes through each element in 'projs' and displays each one */}
                    {projs.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: index * 0.2, duration: 0.5}}>
                                <h3>{index + 1}. {project.title}</h3>
                                <div className='App-body'>{project.description}</div>
                                <a href={project.link}>Click here!</a>
                            </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects