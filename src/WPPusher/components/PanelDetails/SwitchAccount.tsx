import React from 'react';
import styled from 'styled-components';

import { StyledBoldItalic, StyledLink } from '../../Styles/Typography';
import { INextPlan } from './PanelDetails';

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
