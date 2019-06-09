import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import WppusherStoryWrapper from './WppusherStoryWrapper';

import FormSection from '../../src/WPPusher/Styles/FormSection';
import Input from '../../src/WPPusher/Styles/Input';

storiesOf('WPPusher/Form Section', module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <WppusherStoryWrapper storyFn={storyFn} />)
  .add('Simple Form Section example', () => (
    <FormSection
      title={text('title', 'I am the Title')}
      icon={text('icon', '1')}
    >
      <div style={{ padding: '1rem' }}>I am some content</div>
    </FormSection>
  ))
  .add('Form Section with Input', () => (
    <FormSection
      title={text('title', 'I am the Title')}
      icon={text('icon', '1')}
    >
      <Input
        type={text('input type', 'text')}
        name={text('html name', 'myInput')}
        placeholder={text('placeholder', 'insert text here')}
        label={text('label', 'an input example')}
        maxWidth={text('max width (optional', '')}
        onChange={action('clicked')}
        value={text('value', '')}
      />
    </FormSection>
  ));
