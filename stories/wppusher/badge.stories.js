import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import { Badge } from '../../src/WPPusher/Styles';

const Layout = styled.div`
  padding: 2rem;
`;

storiesOf('WPPusher/Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('Basic styles', () => (
    <Layout>
      <Badge
        text={text('text', 'small text')}
        strongText={text('strongText', 'big text')}
      />
    </Layout>
  ));
