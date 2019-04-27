import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import IconCircle from './IconCircle';
import PlanDetails from './PanelDetails';

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
  padding: 40px;
  border-bottom: #f5f7fa 2px solid;
  h2 {
    margin: 0;
    padding: 0;
    font-family: lato, sans-serif;
    font-weight: 400;
    font-size: 2rem;
  }
`;

const StyledFormSection = styled.div`
  padding: 2rem 3rem;
  border-bottom: #f5f7fa 2px solid;
`;

const SectionTitle = styled.h3`
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
  font-family: lato, sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
`;

interface IFlex {
  justifyContent?: string;
  alignItems?: string;
  wrap?: string;
  direction?: string;
}

const StyledFlex = styled.div<IFlex>`
  display: flex;
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.justifyContent || 'auto'};
  flex-direction: ${props => props.direction || 'auto'};
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
      <h2>Checkout</h2>
    </StyledCheckoutHeader>
    <StyledFormSection>
      <SectionTitle>
        <IconCircle text="1" />
        Your Basic Information
      </SectionTitle>
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
      <SectionTitle>
        <IconCircle text="2" />
        Your Payment Information
      </SectionTitle>
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
