import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import tvShows from './tvShows';

const rootReducer = combineReducers({
    movies,
    tvShows,
    router: routerReducer
})

export default rootReducer;