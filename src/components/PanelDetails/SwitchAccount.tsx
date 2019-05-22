import React from 'react';
import styled from 'styled-components';

import { StyledBoldItalic } from '../../Styles/Typography';
import { INextPlan } from './PanelDetails';

const StyledLink = styled.p`
  font-weight: bold;
  display: inline-block;
  margin: 0;
  &:after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 4px solid ${props => props.theme.blue100};
    position: relative;
    top: -2px;
    opacity: 0.7;
  }
`;

const ParagraphLayout = styled.p`
  margin: 2rem 0 1rem 0;
`;

interface ISWitchAccount extends INextPlan {
  onClick(): void;
}

const SwitchAccount: React.FunctionComponent<ISWitchAccount> = ({
  amountOfClients,
  name,
  onClick
}) => (
  <div>
    <ParagraphLayout>
      Need <strong>{amountOfClients}</strong> client sites?
    </ParagraphLayout>
    <StyledLink onClick={onClick}>
      Switch to <StyledBoldItalic>{name}</StyledBoldItalic> plan
    </StyledLink>
  </div>
);

export default SwitchAccount;
