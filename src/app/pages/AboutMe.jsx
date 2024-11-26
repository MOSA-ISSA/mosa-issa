import React from 'react';
import styles from './AboutMe.module.css';
import { motion } from 'framer-motion';
import { Page } from '../theme/elements';

const AboutMe = () => {
    return (
        <Page className={styles.container}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.details}>
                    <div className={styles.imageContainer}>
                        <img
                            src="https://wallpapercave.com/wp/wp9602502.jpg"
                            alt="Mosa Issa"
                            className={styles.profileImage}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <p>
                            Hello! I'm <strong>Mosa Issa</strong>, a passionate full-stack developer from Lod, Israel.
                            I specialize in creating modern and dynamic web and mobile applications using technologies
                            like React, React Native, Node.js, MongoDB, and more.
                        </p>
                        <p>
                            With hands-on experience in building educational apps, management tools, and custom projects,
                            I strive to deliver intuitive and user-friendly solutions. When I'm not coding, I enjoy
                            exploring new technologies and contributing to community projects.
                        </p>
                        <p>
                            Currently, I’m working at Code Zone as a full-stack developer,and teaching and volunteering assisting students with their projects. I also
                            dedicate time to developing an art gallery store where creativity meets functionality.
                        </p>
                        <p>
                            I'm open to work opportunities worldwide and am excited to bring value to teams
                            through innovation and collaboration.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Page>
    );
};

export default AboutMe;
