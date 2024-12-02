'use client';
import React from 'react';
import { Page as Cover, H1, Button, ThemeDiv } from '../theme/elements';
import { projects } from './../res/data';
import { useSearchParams } from 'next/navigation';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import ThemeSwitch from './../components/ThemeSwitch';

const Page = () => {
    const params = useSearchParams();
    const name = params.get("name");
    const project = projects.find((project) => project.name === name);

    return (
        <Cover className={styles.projectDetails}>
            <motion.div
                className={styles.page}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className={styles.links}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <ThemeDiv className={styles.header} >
                        <H1>{project.name}</H1>
                        {project.gitHubLink && (
                            <Button as="a" href={project.gitHubLink} target="_blank" className={styles.linkButton}>
                                <FaGithub /> GitHub
                            </Button>
                        )}
                        {project.demoLink && (
                            <Button as="a" href={project.demoLink} target="_blank" className={styles.linkButton}>
                                <FaPlay /> Demo
                            </Button>
                        )}
                        <ThemeSwitch />
                    </ThemeDiv>
                </motion.div>


                <motion.div
                    className={styles.carouselContainer}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Carousel
                        className={styles.carousel}
                        dynamicHeight={true}
                        showThumbs={true}
                        autoPlay={true}
                        infiniteLoop={true}
                    >
                        {project.images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`${project.name} screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                </motion.div>

                <motion.div
                    className={styles.info}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p><strong>About:</strong> {project.about}</p>
                    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                    <p><strong>Challenges:</strong> {project.challenges}</p>
                    <p><strong>Achievements:</strong> {project.achievements}</p>
                </motion.div>


            </motion.div>
        </Cover>
    );
}

export default Page;
