import React, { useContext, useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import styles from './themeSwitch.module.css';
import TheContext from './../hooks/TheContext';

const ThemeSwitch = () => {
    const { isDark, setDarkTheme } = useContext(TheContext);
    const [Switch, setSwitch] = useState(isDark);

    const SwitchTheme = () => {
        setSwitch(!Switch);
        setTimeout(() => {
            setDarkTheme(!isDark);
        }, 450);
    };

    return (
        <div
            className={`${styles.themeSwitch} ${Switch ? styles.dark : styles.light}`}
            onClick={SwitchTheme}
        >
            <div className={styles.switchContainer}>
                <FiSun
                    className={`${styles.icon} ${Switch ? styles.sunHidden : styles.sunVisible}`} />
                <FiMoon
                    className={`${styles.icon} ${Switch ? styles.moonVisible : styles.moonHidden}`} />
            </div>
            <span className={`${styles.rippleEffect}`}></span>
        </div>
    );
};

export default ThemeSwitch;
