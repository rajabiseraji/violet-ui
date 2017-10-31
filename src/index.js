/**
 * This is the root file of js dir
 * don't touch unless completely necessary!!
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.css';
import App from './layouts/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
