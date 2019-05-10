import baseStyled, { ThemedStyledInterface } from 'styled-components';

const theme = {
  white: '#ffffff',
  grey100: '#f5f7fa',
  grey200: '#e0e6ea',
  grey300: '#646e7a',
  grey400: '#1d2c3c',

  blue100: 'rgb(185, 245, 255)',
  blue200: '#5a8da5',
  blue300: '#31708f',

  green: '#249d6d'
};

export default theme;
export type ITheme = typeof theme;
