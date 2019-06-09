import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import { BulletList } from '../../src/WPPusher/Styles';

const Layout = styled.div`
  padding: 2rem;
  color: ${props => (props.inverse ? 'white' : 'black')};
  background: ${props => (props.inverse ? props.theme.blue300 : 'white')};
`;

const bullets = [
  {
    name: 'bullet one'
  },
  {
    name: 'bullet two'
  },
  {
    name: 'bullet three'
  }
];

storiesOf('WPPusher/BulletList', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('Basic styles', () => (
    <Layout>
      <BulletList bullets={bullets} />
    </Layout>
  ))
  .add('Inverse styles', () => (
    <Layout inverse>
      <BulletList bullets={bullets} />
    </Layout>
  ));
