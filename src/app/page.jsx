'use client';
import { useContext } from 'react';
import Index from './index';
import TheContext from './hooks/TheContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme/theme';

export default function Page() {
  const { isDark, setDark } = useContext(TheContext);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Index />
    </ThemeProvider>
  );
}
