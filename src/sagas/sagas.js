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
}

function* tmdbSaga() {
    yield takeLatest(ACTIONS.DISCOVER_MOVIE, discoverMovies);
    yield takeLatest(ACTIONS.GET_MOVIE, getMovie);
}

export default tmdbSaga;