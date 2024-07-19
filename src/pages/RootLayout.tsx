// RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import "../styles/globals.css";

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <header style={{ backgroundColor: theme.colorsBase.black, color: theme.colorsBase.white, height: '12vh' }}>
        <h1>Ola Mundo</h1>
      </header>
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
