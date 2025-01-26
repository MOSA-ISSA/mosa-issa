import React, { useState } from 'react';
import style from './test.module.css';

const DynamicBackground = ({
    type = 'sky',
    children
}) => {
    const getBackgroundClass = () => {
        switch (type) {
            case 'sky': return `${style['sky-background']} ${style['fullscreen-background']}`;
            case 'space': return `${style['space-background']} 
            ${style['fullscreen-background']}`;
            case 'advanced-space': return `${style['advanced-space-background']} 
            ${style['fullscreen-background']}`;
            default: return `${style['sky-background']} 
            ${style['fullscreen-background']}`;
        }
    };

    return (
        <div className={getBackgroundClass()}>
            {children}
        </div>
    );
};

// Usage Example
const sky = () => {
    const [backgroundType, setBackgroundType] = useState('advanced-space');

    return (
        <DynamicBackground type={backgroundType}>
            <div style={{
                position: 'relative',
                zIndex: 1,
                color: 'white',
                textAlign: 'center'
            }}>
                <h1>Your Content Here</h1>
                <button onClick={() => setBackgroundType('space')}>
                    Switch to Space Background
                </button>
                <button onClick={() => setBackgroundType('sky')}>
                    Switch to Sky Background
                </button>
            </div>
        </DynamicBackground>
    );
};

export default sky;
