'use client';
import React, { useEffect, useState } from "react";
import TheContext from "./TheContext";

export const isDarkTheme = () => (JSON.parse(localStorage.getItem("Dark")));

const TheProvider = (props) => {

    const [isDark, setDark] = useState('false');

    const setDarkTheme = (v) => {
        setDark(v);
        localStorage.setItem("Dark", v)
    }

    //window.matchMedia('(prefers-color-scheme: dark)');

    useEffect(() => {
        setDark(isDarkTheme());
    }, []);

    return (
        <TheContext.Provider
            value={{
                isDark, setDarkTheme
            }}
        >
            {props.children}
        </TheContext.Provider>
    );
};

export default TheProvider;