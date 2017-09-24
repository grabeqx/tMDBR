import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import tvShows from './tvShows';
import appState from './appState';
const rootReducer = combineReducers({
    appState,
    movies,
    tvShows,
    router: routerReducer
})

export default rootReducer;