import { takeEvery, call, put } from "redux-saga/effects";
import { fetchMovie, fetchRelatedMovies } from 'utils/api';
import {
  SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL,
  RELATED_MOVIES_GET, RELATED_MOVIES_GET_SUCCESS, RELATED_MOVIES_GET_FAIL,
} from "../actions/types";

function* getMovie(action) {
  try {
    const payload = yield call(fetchMovie, action.payload);
    yield put({ type: SPECIFIC_MOVIE_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SPECIFIC_MOVIE_GET_FAIL, payload: e });
  }
}

function* getRelatedMovies(action) {
  try {
    const payload = yield call(fetchRelatedMovies, action.payload);
    yield put({ type: RELATED_MOVIES_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: RELATED_MOVIES_GET_FAIL, payload: e });
  }
}

export default function* movieSaga() {
  yield takeEvery(SPECIFIC_MOVIE_GET, getMovie);
  yield takeEvery(RELATED_MOVIES_GET, getRelatedMovies);
}
