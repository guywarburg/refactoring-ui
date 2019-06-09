import React from 'react';

import { storiesOf } from '@storybook/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import {
  StyledH2,
  StyledH3,
  StyledLabel,
  StyledItalics,
  StyledBoldItalic,
  StyledQuote,
  StyledLink
} from '../../src/WPPusher/Styles/Typography';

storiesOf('WPPusher/Typography', module)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('all sizes', () => (
    <React.Fragment>
      <StyledH2>I am a StyledH2</StyledH2>
      <StyledH3>I am a StyledH3</StyledH3>
      <StyledLabel>I am a StyledLabel</StyledLabel>
      <StyledItalics>I am a StyledItalics</StyledItalics>
      <StyledBoldItalic>I am a StyledBoldItalic</StyledBoldItalic>
      <StyledQuote>I am a StyledQuote</StyledQuote>
      <StyledLink>I am a StyledLink</StyledLink>
    </React.Fragment>
  ));
