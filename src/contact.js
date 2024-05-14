import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './App.css'

const Contacts = () => {
    return (
        <div>
            <span className="App-body">Thank you!</span> <br></br>
            <motion.div
                initial={{x: '-100vw', opacity: 0}}
                animate={{x:0}}
                whileInView={{opacity: 1, transition: {type: 'spring', stiffness: 120}}}
                viewport={{once: false, amount: 0.5}}>
                    <FontAwesomeIcon icon = {faGithub} />
                    <span className="icon-text">jjarrreddd</span>
            </motion.div>
            <motion.div
                initial={{x: '-100vw', opacity: 0}}
                animate={{x:0}}
                whileInView={{opacity: 1, transition: {type: 'spring', stiffness: 120, delay: 0.4}}}
                viewport={{once: false, amount: 0.5}}>
                    <FontAwesomeIcon icon = {faGoogle} />
                    <span className="icon-text">jarredethen@gmail.com</span>
            </motion.div>
        </div>
    );
}

export default Contacts