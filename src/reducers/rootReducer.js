import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './appReducer';

const rootReducer = combineReducers({
    appReducer,
    router: routerReducer
})

export default rootReducer;