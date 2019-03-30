import { takeEvery, call, put } from "redux-saga/effects";
import { fetchMovie } from 'api';
import { SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL } from "../actions/types";

function* getMovie(action) {
  try {
    const payload = yield call(fetchMovie, action.payload);
    yield put({ type: SPECIFIC_MOVIE_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SPECIFIC_MOVIE_GET_FAIL, payload: e });
  }
}

export default function* movieSaga() {
  yield takeEvery(SPECIFIC_MOVIE_GET, getMovie);
}
