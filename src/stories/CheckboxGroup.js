import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  select,
  array
} from '@storybook/addon-knobs';
import CheckboxGroup from '../components/CheckboxGroup';

storiesOf('CheckboxGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div className="container text-center justify-content-center mt-5 align-content-center">
      <div className="row text-center justify-content-center">{story()}</div>
    </div>
  ))
  .add('With options array', () => {
    const options = [
      {
        value: 'سلام',
        isChecked: false
      },
      {
        value: 'بای',
        isChecked: false
      },
      {
        value: 'های',
        isChecked: true
      }
    ];
    return (
      <div className="w-100">
        <CheckboxGroup options={options} onChange={action('onChange')} />
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
