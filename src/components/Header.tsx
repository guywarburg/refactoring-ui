import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 73px;
  width: 100%;
  border-bottom: 2px solid #e0e6ea;

  display: flex;
  align-items: center;
  .logo {
    flex: 1;
  }
`;

const StyledSecondaryButton = styled.button`
  border: none;
  background: transparent;
  height: auto;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const StyledPrimaryButton = styled.button`
  border: 2px solid #646e7a;
  color: #1d2c3c;
  height: 40px;
  border-radius: 3px;
  background: transparent;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1.1rem;
  &:hover {
    opacity: 0.6;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div className="logo">WP PUSHER</div>
        <StyledSecondaryButton>Download</StyledSecondaryButton>
        <StyledSecondaryButton>Learn More</StyledSecondaryButton>
        <StyledSecondaryButton>Pricing</StyledSecondaryButton>
        <StyledSecondaryButton>Help</StyledSecondaryButton>
        <StyledPrimaryButton>Account</StyledPrimaryButton>
      </StyledHeader>
    );
  }
}

export default Header;
