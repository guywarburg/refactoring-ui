// import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin: 0;
  padding: 1em 0;
  font-family: lato, sans-serif;
  font-weight: 400;
  font-size: 2rem;
`;

const StyledH3 = styled.h3`
  margin: 1em 0;
  font-family: lato, sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
`;

interface IStyledLabel {
  maxWidth?: string;
}

const StyledLabel = styled.label<IStyledLabel>`
  font-family: lato, sans-serif;
  display: block;
  color: #1d2c3c;
  font-size: 1rem;
  margin: 1em 0;
  max-width: ${props => props.maxWidth || ''};
`;

const StyledItalics = styled.p`
  font-style: italic;
  font-weight: 200;
  max-width: 10rem;
`;

const StyledBoldItalic = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const StyledQuote = styled.blockquote`
  margin: 1rem 0;
  padding: 0;
  font-style: italic;
  font-size: 1.2rem;
`;

export {
  StyledH2,
  StyledH3,
  StyledLabel,
  StyledItalics,
  StyledBoldItalic,
  StyledQuote
};
