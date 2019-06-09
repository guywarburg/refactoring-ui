import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../src/WPPusher/Styles/Theme';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i');
    font-family: 'Lato', sans-serif;
  }
`;
const WppusherStoryWrapper = ({ storyFn }) => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  </ThemeProvider>
);

export default WppusherStoryWrapper;
