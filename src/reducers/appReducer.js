import ACTIONS from '../constants/actions';

const appReducer = function (state = {
    test: {}
}, action) {
    switch(action.type) {
        case ACTIONS.DISCOVER_MOVIE_SUCCESS:
            console.log(action.payload);
            return state;

        default:
            return state;
    }
 
}

export default appReducer;