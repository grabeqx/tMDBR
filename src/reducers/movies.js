import ACTIONS from '../constants/actions';

const movies = function (state = {
    list: [],
    page: 0,
    currentMovie: {},
    favoritesMovies: [],
    video: ""
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
        case ACTIONS.ADD_TO_FAVORITES: 
            return {
                ...state,
                favoritesMovies: [
                    ...state.favoritesMovies, 
                    action.payload
                ]
            }
        case ACTIONS.REMOVE_FROM_FAVORITES:
            let index = state.favoritesMovies.findIndex((movie) => movie.id == action.payload);
            return {
                ...state,
                favoritesMovies: [
                    ...state.favoritesMovies.slice(0, index),
                    ...state.favoritesMovies.slice(index + 1)
                ]
            }
        case ACTIONS.GET_TRAILER_SUCCESS: 
            return {
                ...state,
                video: action.payload.results[0].key
            }
        case ACTIONS.SEARCH_MOVIE_SUCCESS: 
            return {
                ...state,
                page: action.payload.page,
                list: action.payload.results
            }
        default:
            return state
    }
}

export default movies;