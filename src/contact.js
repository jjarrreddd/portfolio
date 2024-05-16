import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import './contact.css'

const Contacts = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    // Emailjs functions with useState
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_4ejw0j4', 'template_ccl5fdj', form.current, {
                publicKey: '7CE3Mx0BeFVSBClpB',
            })
            .then(
                () => {
                    console.log('Message successfully sent!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    };

    // Return true or false if fields are filled in or not
    const validForm = () => {
        return formData.user_name !== '' && formData.user_email !== '' && formData.message !== '';
    }

    return (
        <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: false, amount: 0.5}}>
            <p>Thank you!</p>
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    {/* Name */}
                    <div className='mb-3'> 
                        <label>Name</label><br />
                        <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required/>
                </div>
                <div className='mb-3'> 
                    {/* Email */}
                        <label>Email</label><br />
                        <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required/>
                </div>
                <div className='mb-3'> 
                    {/* Message */}
                        <label>Message</label><br />
                        <textarea type="text" name="message" placeholder="Your message here" value={formData.message} onChange={handleChange} required/>
                </div>
                    {/* Submit */}
                    <input type="submit" className="btn" value="Send" disabled={!validForm()}/>
                </form>
            </div>
        </motion.div>
    );
};

export default Contacts