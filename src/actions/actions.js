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

export function changeTitle(title) {
    return {
        type: ACTIONS.CHANGE_TITLE,
        payload: title
    }
}