import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import IconCircle from '../../src/WPPusher/Styles/IconCircle';

const Layout = styled.div`
  padding: 2rem;
`;

storiesOf('WPPusher/IconCircle', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('default styles', () => (
    <Layout>
      <IconCircle text="1" />
    </Layout>
  ))
  .add('with knobs', () => (
    <Layout>
      <IconCircle
        text={text('icon', '1')}
        weight={text('font-weight (css units as string)', 'regular')}
        size={text('font-size (css units as string)', 'regular')}
        color={text('color (any valid css color as string)', 'lightgreen')}
      />
    </Layout>
  ));
