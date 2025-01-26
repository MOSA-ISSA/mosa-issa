import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactMe.module.css';
import { Page } from '../theme/elements';

const ContactMe = () => {
    return (
        <Page className={styles.container}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>Contact Me</h1>
                <p className={styles.subtitle}>
                    Feel free to reach out to me for collaborations, job opportunities, or just to say hi!
                </p>

                <div className={styles.contactSection}>
                    {/* Contact Form */}
                    <form className={styles.contactForm}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className={styles.inputField}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className={styles.inputField}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className={styles.textArea}
                            required
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>

                    {/* Social Links */}
                    <div className={styles.socialLinks}>
                        <h2 className={styles.socialTitle}>Find Me On</h2>
                        <div className={styles.links}>
                            <a
                                href="https://www.linkedin.com/in/mosa-issa-858433262/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/MOSA-ISSA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                GitHub
                            </a>
                            <a
                                href="mailto:mosasenio@gmail.com"
                                className={styles.socialLink}
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Page>
    );
};

export default ContactMe;
