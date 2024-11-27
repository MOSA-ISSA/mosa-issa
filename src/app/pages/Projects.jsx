import React, { useState } from 'react';
import { projects } from '../res/data';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { Button, Page, ThemeDiv } from '../theme/elements';
import { FaGithub, FaPlay } from 'react-icons/fa';

const ProjectCard = (project) => {

    return (
        <motion.div
            className={styles.projectCard}
            whileHover={{ scale: 1.1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
        // onClick={navigateToAbout}
        >
            <ThemeDiv className={styles.grow}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                >
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className={styles.projectImage}
                    />
                </motion.div>
                <h2 className={styles.projectName}>
                    {project.name}
                </h2>
                <div className={styles.projectLinks}>
                    <Button
                        onClick={() => window.open(project.gitHubLink, '_blank')}
                        className={styles.projectLink}
                    >
                        <FaGithub /> Github
                    </Button>
                    <Button
                        onClick={() => window.open(project.demoLink, '_blank')}
                        className={styles.projectLink}
                    >
                        <FaPlay /> try demo
                    </Button>
                </div>
            </ThemeDiv>
        </motion.div>
    )
}

const Projects = () => {

    return (
        <Page >
            <h1 className={styles.title}>My Projects</h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.projectsContainer}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </motion.div>
        </Page>
    );
};

export default Projects;
