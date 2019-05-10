import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPic = styled.div`
  background: ${props => props.theme.grey300};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 1rem;
`;

const Avatar: React.FunctionComponent = () => (
  <StyledAvatar>
    <StyledPic />
    <span>Kirk Beard</span>
  </StyledAvatar>
);

export default Avatar;
