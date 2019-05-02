import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import IconCircle from './IconCircle';
import PlanDetails from './PanelDetails';
import { StyledH2, StyledH3 } from '../Styles/Typography';

const StyledBody = styled.div`
  display: flex;
  padding-top: 85px;
`;

const StyledCard = styled.div`
  min-width: 50vw;
  max-width: 890px;
  margin: auto;

  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.0490829),
    0px 15px 35px rgba(43, 64, 78, 0.095505);
  border-radius: 6px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 2fr 1fr;
`;

class Body extends Component {
  render() {
    return (
      <StyledBody>
        <StyledCard>
          <Checkout />
          <PlanDetails />
        </StyledCard>
      </StyledBody>
    );
  }
}

export default Body;

const StyledCheckoutHeader = styled.div`
  padding: 0 40px;
  border-bottom: #f5f7fa 2px solid;
`;

const StyledFormSection = styled.div`
  padding: 0 3rem;
  border-bottom: #f5f7fa 2px solid;
  padding-bottom: 2rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px 30px;
`;

const StyledFullRow = styled.div`
  grid-column: 1 / -1;
`;

const Checkout = () => (
  <div>
    <StyledCheckoutHeader>
      <StyledH2>Checkout</StyledH2>
    </StyledCheckoutHeader>
    <StyledFormSection>
      <StyledH3>
        <IconCircle text="1" />
        Your Basic Information
      </StyledH3>
      <StyledGrid>
        <Input
          name="firstName"
          type="text"
          label="First Name"
          placeholder="Michelle"
        />
        <Input
          name="lastName"
          type="text"
          label="Last Name"
          placeholder="Levy Warburg"
        />
        <StyledFullRow>
          <Input
            name="email"
            type="text"
            label="E-mail"
            placeholder="michelle@example.com"
            maxWidth="85%"
          />
        </StyledFullRow>
      </StyledGrid>
    </StyledFormSection>
    <StyledFormSection>
      <StyledH3>
        <IconCircle text="2" />
        Your Payment Information
      </StyledH3>
      <Input
        name="creditCard"
        type="text"
        label="Credit Card"
        placeholder="Card Number"
      />
    </StyledFormSection>
    <StyledCheckoutFooter>
      <StyledButton>Buy WP Pusher</StyledButton>
      <label>
        <IconCircle text="?" weight="bold" />
        <strong>Need any help?</strong> don't hesitate to contact{' '}
        <a href="mailto:help@wppusher.com">help@wppusher.com</a>
      </label>
      <StyledBadge>
        powered by <strong>stripe</strong>
      </StyledBadge>
    </StyledCheckoutFooter>
  </div>
);

const StyledButton = styled.button`
  background-color: #249d6d;
  color: white;
  text-align: center;
  border-radius: 0.3rem;
  padding: 0.8em 1.5rem;
  font-weight: bold;
  font-size: 1.125rem;
`;

const StyledCheckoutFooter = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem;

  label {
    color: #646e7a;
    font-size: 0.8rem;
    display: inline-block;
    align-self: center;
    margin-top: 2rem;

    strong {
      color: #1d2c3c;
    }
    a {
      color: #646e7a;
    }
  }
`;

const StyledBadge = styled.div`
  padding: 0.3em 0.5em;
  background-color: #aab1b9;
  color: white;
  font-size: 0.6rem;
  border-radius: 0.3em;
  display: inline-block;
  margin: 2rem auto;
`;
