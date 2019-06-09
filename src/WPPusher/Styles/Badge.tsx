import React from 'react';
import styled from 'styled-components';

const StyledBadge = styled.div`
  padding: 0.3em 0.5em;
  background-color: #aab1b9;
  color: white;
  font-size: 0.6rem;
  border-radius: 0.3em;
  display: inline-block;
  margin: 2rem auto;
`;

interface IBadge {
  text: string;
  strongText: string;
}

const Badge: React.FunctionComponent<IBadge> = ({ text, strongText }) => (
  <StyledBadge>
    {text} <strong>{strongText}</strong>
  </StyledBadge>
);

export default Badge;
