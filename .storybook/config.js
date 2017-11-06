import { configure } from '@storybook/react';
import '../src/assets/scss/index.css';
import '../src/assets/scss/App.css';

const req = require.context('../src/stories', true, /\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);