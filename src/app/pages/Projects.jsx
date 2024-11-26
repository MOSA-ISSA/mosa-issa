import React, { useState } from 'react';
import { projects } from '../res/data';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import { Page } from '../theme/elements';

const Projects = () => {
    const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

    return (
        <Page>
            <h1 className={styles.title}>My Projects</h1>
            <div className={styles.projectsGrid}>
                {projects.map((project, projectIndex) => (
                    <div
                        key={projectIndex}
                        className={styles.projectCard}
                        onMouseEnter={() => setHoveredImageIndex(projectIndex)}
                        onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                        <motion.div
                            className={styles.imageContainer}
                            initial={{ opacity: 0.8 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                        >
                            <img
                                src={
                                    hoveredImageIndex === projectIndex
                                        ? project.images[1] || project.images[0]
                                        : project.images[0]
                                }
                                alt={project.name}
                                className={styles.projectImage}
                            />
                        </motion.div>
                        <div className={styles.projectDetails}>
                            <h2 className={styles.projectName}>{project.name}</h2>
                            <p className={styles.projectAbout}>{project.about}</p>
                            <div className={styles.projectLinks}>
                                <a
                                    href={project.gitHubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    GitHub
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default Projects;
