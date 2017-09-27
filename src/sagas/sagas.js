import { call, put, takeLatest } from 'redux-saga/effects';
import tmdbAPI from '../actions/tmdbAPI';
import ACTIONS from '../constants/actions';

function* discoverMovies() {
    const movies = yield call(tmdbAPI.discoverMovies);
    yield put({type: ACTIONS.DISCOVER_MOVIE_SUCCESS, payload: movies});
}

function* getMovie(action) {
    const movie = yield call(tmdbAPI.getMovie, action.payload);
    yield put({type: ACTIONS.GET_MOVIE_SUCCESS, payload: movie});
    yield put({type: ACTIONS.CHANGE_TITLE, payload: movie.title});
}

function* getTrailer(action) {
    const trailer = yield call(tmdbAPI.getTrailer, action.payload);
    yield put({type: ACTIONS.GET_TRAILER_SUCCESS, payload: trailer});
}


function* tmdbSaga() {
    yield takeLatest(ACTIONS.DISCOVER_MOVIE, discoverMovies);
    yield takeLatest(ACTIONS.GET_MOVIE, getMovie);
    yield takeLatest(ACTIONS.GET_TRAILER, getTrailer);
}

export default tmdbSaga;