import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import theme from '../../src/WPPusher/Styles/Theme';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-gap: 10px;

  div {
    height: 250px;
    width: 250px;
    box-sizing: border-box;
    font-size: 1.2rem;
    padding: 0.4rem 0.4rem;
  }
`;

storiesOf('WPPusher/Color Pallette', module)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('available colors', () => (
    <Layout>
      {Object.entries(theme).map(([key, val]) => (
        <div style={{ background: val }}>{key}</div>
      ))}
    </Layout>
  ));
