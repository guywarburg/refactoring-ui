import React from 'react';
import styled from 'styled-components';

import { StyledH3 } from '../../Styles/Typography';
import IconCircle from '../IconCircle';

interface IFormSection {
  title: string;
  icon: string;
}

const StyledFormSection = styled.div`
  padding: 0 3rem;
  border-bottom: ${props => props.theme.grey100} 2px solid;
  padding-bottom: 2rem;
`;

const FormSection: React.FunctionComponent<IFormSection> = ({
  title,
  icon,
  children
}) => (
  <StyledFormSection>
    <StyledH3>
      <IconCircle text={icon} />
      {title}
    </StyledH3>
    {children}
  </StyledFormSection>
);

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

const NeedHelpLayout = styled.label`
  color: ${props => props.theme.grey300};
  font-size: 0.8rem;
  display: inline-block;
  align-self: center;
  margin-top: 2rem;

  strong {
    color: ${props => props.theme.grey400};
  }
  a {
    color: ${props => props.theme.grey300};
  }
`;

const NeedHelp = () => (
  <NeedHelpLayout>
    <IconCircle text="?" weight="bold" />
    <strong>Need any help?</strong> don't hesitate to contact{' '}
    <a href="mailto:help@wppusher.com">help@wppusher.com</a>
  </NeedHelpLayout>
);

export { FormSection, Badge, NeedHelp };
