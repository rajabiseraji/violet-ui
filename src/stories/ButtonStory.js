import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyButton from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <MyButton onClick={action('clicked')}>Hello</MyButton>
  ))
  .add('with Emoji', () => (
    <MyButton onClick={action('clicked')}>Some emoji here :/ </MyButton>
  ));
