import React, { useState } from 'react';
import styles from './menu.module.css';

const Menu = (
    { menuOptions, scrollToSection }
) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.burgerContainer}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.burgerButton}
            >
                <div className={`${styles.burger} ${isOpen ? styles.open : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <ul>
                        {menuOptions.map((option, index) => (
                            <li key={index}>
                                <a onClick={() => scrollToSection(option.sectionRef, option.title)}>
                                    {option.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;