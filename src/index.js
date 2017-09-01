import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';
import './Animation.css';
import './index.css';

// add Promise-polyfill to window
// (if Promise does not exist on web browser running)
// example : under version IE8
if (!window.Promise) {
    window.Promise = Promise;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
