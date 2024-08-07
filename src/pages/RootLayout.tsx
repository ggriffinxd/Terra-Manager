import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import "../styles/globals.css";
import Header from '../components/Header/Header';

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
