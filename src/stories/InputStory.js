import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Input from '../components/Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div className="container text-center justify-content-center mt-5 align-content-center">
      <div className="row text-center justify-content-center">
        <div className="w-25">
          یک اینپوت ساده
          {story()}
        </div>
      </div>
    </div>
  ))
  .add('Simple Input', () => {
    const myText = text('inputText', 'این یه اینپوت سادست');
    const valid = boolean('valid', true);
    return <Input valid={valid} value={myText} />;
  });
