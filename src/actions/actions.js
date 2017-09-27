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

export function addToFavorites(movie) {
    return {
        type: ACTIONS.ADD_TO_FAVORITES,
        payload: movie
    }
}

export function removeFromFavorites(id) {
    return {
        type: ACTIONS.REMOVE_FROM_FAVORITES,
        payload: id
    }
}

export function getTrailer(id) {
    return {
        type: ACTIONS.GET_TRAILER,
        payload: id
    }
}