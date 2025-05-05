// src/context/ThemeContext.js
import React, { createContext, useState } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@mui/material';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Create the theme inline—no memoization
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // you can still override primary colors here if needed
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
