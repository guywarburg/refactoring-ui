import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import Card from '../../src/WPPusher/Styles/Card';

const Layout = styled.div`
  ${Card} {
    margin: 1rem;
    height: 300px;
    width: 300px;
  }
`;

const StyledPartOne = styled.div`
  padding: 1rem;
`;

const StyledPartTwo = styled.div`
  padding: 1rem;
  color: ${props => props.theme.white};
  background: ${props => props.theme.blue300};
`;

storiesOf('WPPusher/Card', module)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('Simple Card example', () => (
    <Layout>
      <Card>
        <div style={{ padding: '1rem' }}>I am some content</div>
      </Card>
    </Layout>
  ))
  .add('Card with two sections', () => (
    <Layout>
      <Card>
        <StyledPartOne>I am part one</StyledPartOne>
        <StyledPartTwo>I am part two</StyledPartTwo>
      </Card>
    </Layout>
  ));
