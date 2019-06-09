import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import { Avatar } from '../../src/WPPusher/Styles';

const Layout = styled.div`
  padding: 2rem;
`;

storiesOf('WPPusher/Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('Basic styles', () => (
    <Layout>
      <Avatar />
    </Layout>
  ));
