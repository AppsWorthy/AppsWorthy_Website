'use client';

import { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './Contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className={styles.contact} id="contact">
            <Typography variant="h2" className={styles.title}>
                Get In Touch
            </Typography>

            <div className={styles.container}>
                {submitted ? (
                    <div className={styles.successMessage}>
                        <Typography variant="h6">Thank you!</Typography>
                        <Typography variant="body1">Your message has been sent successfully. We'll get back to you soon.</Typography>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            className={styles.inputField}
                        />
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            className={styles.inputField}
                        />
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            fullWidth
                            className={styles.inputField}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            className={styles.submitBtn}
                            endIcon={<SendIcon />}
                        >
                            Send Message
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
}
