import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from '../components/SearchBar';

storiesOf('SearchBar', module)
  .add('with some text', () => <SearchBar ButtonText="hello world" />)
  .add('with some other text', () => <SearchBar ButtonText="Bye World" />);
