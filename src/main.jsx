import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './stores/AppStore.js';
import Connector from './Connector.js';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Provider store={store} >
    <ConnectedRouter history={history}>
        <Route exact path='/' component={Connector} />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'));