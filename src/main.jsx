import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/AppStore.js';
// import Connector from './Connector.js';
import App from './components/App';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Provider store={store} >
    <App />
</Provider>, document.querySelector('#root'));