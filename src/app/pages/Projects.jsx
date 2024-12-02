import React, { useState } from 'react';
import { projects } from '../res/data';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { Button, Page, ThemeDiv } from '../theme/elements';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

const ProjectCard = (project) => {
    const navigation = useRouter();

    const navigateToProject = () => {
        navigation.push(`/projects/?name=${project.name}`);
    };

    const LinkButtons = () => {
        const onClick = (e, link) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(link, '_blank');
        };

        return (
            <div className={styles.projectLinks}>
                {project.gitHubLink && (
                    <Button
                        onClick={(event) => onClick(event, project.gitHubLink)}
                        className={styles.projectLink}
                    >
                        <FaGithub /> Github
                    </Button>
                )}
                {project.demoLink && (
                    <Button
                        onClick={(event) => onClick(event, project.demoLink)}
                        className={styles.projectLink}
                    >
                        <FaPlay /> try demo
                    </Button>
                )}
            </div>
        );
    };


    return (
        <motion.div
            className={styles.projectCard}
            whileHover={{ scale: 1.1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={navigateToProject}
        >
            <ThemeDiv className={styles.grow}>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className={styles.projectImage}
                    />
                </motion.div>
                <h2 className={styles.projectName}>
                    {project.name}
                </h2>
                <LinkButtons />
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
