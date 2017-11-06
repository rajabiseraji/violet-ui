import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MyButton from '../components/Button';

storiesOf('Button', module)
  .addDecorator(story => (
    <div className="container text-center justify-content-center mt-5 align-content-center">
      <div className="row text-center justify-content-center">
        <div className="w-25">
          A simple button
          {story()}
        </div>
      </div>
    </div>
  ))
  .add('Butotn Secondary Outline', () => (
    <MyButton
      className="w-100"
      onClick={action('clicked')}
      outline
      size="lg"
      color="secondary"
    >
      کلیک کنید
    </MyButton>
  ))
  .add('Button Primary Outline', () => (
    <MyButton
      className="w-100"
      onClick={action('clicked')}
      outline
      size="lg"
      color="primary"
    >
      کلیک کنید
    </MyButton>
  ))
  .add('Button Primary', () => (
    <MyButton
      className="w-100"
      onClick={action('clicked')}
      size="lg"
      color="primary"
    >
      کلیک کنید
    </MyButton>
  ))
  .add('Button Secondary', () => (
    <MyButton
      className="w-100"
      onClick={action('clicked')}
      size="lg"
      color="secondary"
    >
      کلیک کنید
    </MyButton>
  ));
