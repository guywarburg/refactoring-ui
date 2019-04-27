import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i');
    font-family: 'Lato', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
