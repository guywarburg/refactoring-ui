import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledCheckoutButton
} from '../../src/WPPusher/Styles/Buttons';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-gap: 10px;
  align-items: baseline;
`;

storiesOf('WPPusher/Buttons', module)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('StyledPrimaryButton', () => (
    <StyledPrimaryButton>Hi There</StyledPrimaryButton>
  ))
  .add('StyledSecondaryButton', () => (
    <StyledSecondaryButton>Hi There</StyledSecondaryButton>
  ))
  .add('StyledCheckoutButton', () => (
    <StyledCheckoutButton>Hi There</StyledCheckoutButton>
  ))
  .add('all buttons', () => (
    <Layout>
      <StyledPrimaryButton>Hi There</StyledPrimaryButton>
      <StyledSecondaryButton>Hi There</StyledSecondaryButton>
      <StyledCheckoutButton>Hi There</StyledCheckoutButton>
    </Layout>
  ));
