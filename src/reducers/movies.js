import ACTIONS from '../constants/actions';

function discoverMoviesReducer(state = {
    page: 0,
    movies: []
}, action) {
    switch(action.type) {
        case ACTIONS.DISCOVER_MOVIE_SUCCESS:
            return {
                ...state,
                page: action.payload.page,
                movies: action.payload.results
            }
        default: 
            return state;
    }

}

const movies = function (state = {
    discoveredMovies: {}
}, action) {
    return {
        ...state,
        discoveredMovies: discoverMoviesReducer(state.movies, action)
    }
}

export default movies;