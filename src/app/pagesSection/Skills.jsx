'use client';

import React from 'react';
import styles from './Skills.module.css';
import { Page, ThemeDiv } from '../theme/elements';
import { skills } from '../res/data';

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
