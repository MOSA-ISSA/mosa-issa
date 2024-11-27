'use client';

import React from 'react';
import styles from './Skills.module.css';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiWordpress } from 'react-icons/si';
import { Page, ThemeDiv } from '../theme/elements';

const skills = [
    {
        category: "Frontend Development",
        items: [
            { name: "React", icon: <FaReact />, level: "Expert" },
            { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
            { name: "HTML", icon: <FaHtml5 />, level: "Expert" },
            { name: "CSS", icon: <FaCss3Alt />, level: "Expert" },
            { name: "JavaScript", icon: <FaJsSquare />, level: "Expert" },
        ],
    },
    {
        category: "Backend Development",
        items: [
            { name: "Node.js", icon: <FaNodeJs />, level: "Advanced" },
            { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
        ],
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "GitHub", icon: <FaGithub />, level: "Expert" },
            { name: "TailwindCSS", icon: <SiTailwindcss />, level: "Advanced" },
            { name: "WordPress", icon: <SiWordpress />, level: "Intermediate" },
        ],
    },
];

const Skills = () => {
    return (
        <Page>
            <h1 className={styles.title}>Skills & Expertise</h1>
            {skills.map((section, index) => (
                <div key={index} className={styles.skillSection}>
                    <h2 className={styles.categoryTitle}>{section.category}</h2>
                    <div className={styles.skillsContainer}>
                        {section.items.map((skill, idx) => (
                            <ThemeDiv
                                key={idx} className={styles.skillCard}>
                                <div className={styles.icon}>{skill.icon}</div>
                                <h3 className={styles.skillName}>{skill.name}</h3>
                                <p className={styles.skillLevel}>{skill.level}</p>
                            </ThemeDiv>
                        ))}
                    </div>
                </div>
            ))}
        </Page>
    );
};

export default Skills;
