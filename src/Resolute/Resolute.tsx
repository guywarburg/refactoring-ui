import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    padding: 0;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr 30px;
  grid-template-rows: 76px calc(100vh - 76px);
`;

const Resolute = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <Layout>
        <Header />
        <Sidebar />
      </Layout>
    </div>
  </ThemeProvider>
);

export default Resolute;
