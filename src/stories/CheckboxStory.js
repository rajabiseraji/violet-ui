import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Checkbox from '../components/Checkbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div className="container text-center justify-content-center mt-5 align-content-center">
      <div className="row text-center justify-content-center">{story()}</div>
    </div>
  ))
  .add('with Label', () => {
    const label = text('label', 'لیبل برای چک باکس');
    return (
      <div className="w-25">
        <Checkbox label={label} />
      </div>
    );
  })
  .add('with label and validation and direction', () => {
    const label = text('label', 'این چک باکس ولید است');
    const valid = boolean('valid', true);
    const direction = select('direction', ['right', 'left'], 'right');
    return (
      <div className="w-25">
        <Checkbox
          label={label}
          valid={valid}
          onChange={action('Changed')}
          direction={direction}
        />
        می‌توانید مقدار ولید را در پنل تغییر دهید
      </div>
    );
  });
