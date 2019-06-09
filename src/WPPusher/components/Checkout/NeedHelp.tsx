import React from 'react';
import styled from 'styled-components';

import { IconCircle } from '../../Styles';

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

export { NeedHelp };
