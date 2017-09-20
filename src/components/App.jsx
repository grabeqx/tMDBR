import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../stores/AppStore.js';

import discoverContainer from './Discover';
import SearchComponent from './SearchComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={discoverContainer} />)} />
                    <Route path="/search" component={SearchComponent} />
                </Switch>
            </ConnectedRouter>
        )
    }
}

export default App;