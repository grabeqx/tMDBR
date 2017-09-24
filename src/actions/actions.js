import ACTIONS from '../constants/actions';

export function discoverMovies() {
    return {
        type: ACTIONS.DISCOVER_MOVIE
    }
}

export function getMovie(id) {
    return {
        type: ACTIONS.GET_MOVIE,
        payload: id
    }
}
