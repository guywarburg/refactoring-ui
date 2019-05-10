import React from 'react';
import styled from 'styled-components';

import { StyledBoldItalic } from '../../Styles/Typography';

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

const SwitchAccount: React.FunctionComponent = () => (
  <div>
    <ParagraphLayout>
      Need <strong>20</strong> client sites?
    </ParagraphLayout>
    <StyledLink>
      Switch to <StyledBoldItalic>Agency</StyledBoldItalic> plan
    </StyledLink>
  </div>
);

export default SwitchAccount;
