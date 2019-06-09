import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import Input from '../../src/WPPusher/Styles/Input';

const Layout = styled.div`
  padding: 2rem;
`;

storiesOf('WPPusher/Input', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('default styles with knobs', () => (
    <Layout>
      <Input
        type={text('input type', 'text')}
        name={text('html name', 'myInput')}
        placeholder={text('placeholder', 'insert text here')}
        label={text('label', 'an input example')}
        maxWidth={text('max width (optional', '')}
        onChange={action('clicked')}
        value={text('value', '')}
      />
    </Layout>
  ))
  .add('with a default value', () => (
    <Layout>
      <Input
        type={text('input type', 'text')}
        name={text('html name', 'myInput')}
        placeholder={text('placeholder', 'insert text here')}
        label={text('label', 'an input example')}
        maxWidth={text('max width (optional', '')}
        onChange={action('clicked')}
        value={text('value', 'I am the input value')}
      />
    </Layout>
  ));
