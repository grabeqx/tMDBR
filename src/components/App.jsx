import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../stores/AppStore.js';

import Discover from './Discover';
import SearchComponent from './SearchComponent';
import MovieDetails from './MovieDetails';
import Content from '../containers/Content';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Content title="TMDBR App" drawerTitle="Menu">
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={Discover} />
                        <Route path="/details/:id" component={MovieDetails} />
                        <Route path="/search" component={SearchComponent} />
                    </Switch>
                </ConnectedRouter>
            </Content>
        )
    }
}

export default App;