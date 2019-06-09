import React from 'react';
import styled from 'styled-components';

import { StyledH3 } from './Typography';
import IconCircle from './IconCircle';

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

export default FormSection;
