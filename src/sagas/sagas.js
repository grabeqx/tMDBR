import { call, put, takeLatest } from 'redux-saga/effects';
import tmdbAPI from '../actions/tmdbAPI';
import ACTIONS from '../constants/actions';

function* discoverMovies() {
    const movies = yield call(tmdbAPI.discoverMovies);
    yield put({type: ACTIONS.DISCOVER_MOVIE_SUCCESS, payload: movies});
}

function* tmdbSaga() {
    yield takeLatest(ACTIONS.DISCOVER_MOVIE, discoverMovies);
}

export default tmdbSaga;