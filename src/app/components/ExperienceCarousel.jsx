import React, { useRef, useState, useEffect } from 'react';
import styles from './ExperienceCarousel.module.css';
import { experiences } from '../res/data';
import { Dot, Text } from '../theme/elements';

const ExperienceCard = ({ isFocused, ...Experience }) => {

    return (
        <div className={`${styles.card} ${isFocused ? styles.focusedCard : ''}`}>
            <Experience.icon
                className={styles.icon}
                style={{ color: Experience.color, }} />
            <Text className={styles.text} >{Experience.name}</Text>
        </div>
    );
};

const ExperienceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef();
    const autoScrollInterval = useRef();

    const scrollToIndex = (index) => {
        if (containerRef.current) {
            const cardWidth = containerRef.current.children[0].offsetWidth;
            containerRef.current.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    const startAutoScroll = () => {
        autoScrollInterval.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % experiences.length;
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        }, 2000); // Adjust the interval (in milliseconds) for auto-scroll speed
    };

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval.current);
    };

    useEffect(() => {
        startAutoScroll();

        return () => stopAutoScroll();
    }, []);

    return (
        <div
            className={styles.wrapper}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
        >
            <div
                className={styles.container}
                ref={containerRef}
            >
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        isFocused={index === currentIndex}
                        key={index}
                        {...experience}
                    />
                ))}
            </div>
            <div className={styles.dots}>
                {experiences.map((_, index) => (
                    <Dot
                        key={index}
                        style={index === currentIndex ? style.activeDot : {}}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceCarousel;

const style = {
    activeDot: {
        backgroundColor: '#00000099',
        height: "15px",
        width: "15px",
        transition: `all 0.3s ease`
    }
}
