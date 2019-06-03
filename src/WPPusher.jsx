import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import theme from './Styles/Theme';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i');
    font-family: 'Lato', sans-serif;
  }
`;

const WPPusher = ({ store, view }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      <Header />
      <Body />
      <Footer />
    </div>
  </ThemeProvider>
);

export default WPPusher;
