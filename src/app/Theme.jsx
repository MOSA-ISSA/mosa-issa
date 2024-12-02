'use client';
import { useContext } from 'react';
import TheContext from './hooks/TheContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/theme';

export default function Theme({ children }) {
    const { isDark, setDark } = useContext(TheContext);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
}
