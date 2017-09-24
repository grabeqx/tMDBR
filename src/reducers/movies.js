import ACTIONS from '../constants/actions';

const movies = function (state = {
    list: [],
    page: 0,
    currentMovie: {}
}, action) {
    switch(action.type) {
        case ACTIONS.DISCOVER_MOVIE_SUCCESS:
            return {
                ...state,
                page: action.payload.page,
                list: action.payload.results
            }
        case ACTIONS.GET_MOVIE_SUCCESS:
            return {
                ...state,
                currentMovie: action.payload
            }
        default:
            return state
    }
}

export default movies;