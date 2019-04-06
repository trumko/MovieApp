import { takeEvery, call, put } from "redux-saga/effects";
import { fetchMovie, fetchSimilarResults } from 'utils/api';
import {
  SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL,
  SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL,
} from "../actions/types";

function* getMovie(action) {
  try {
    const payload = yield call(fetchMovie, action.payload);
    yield put({ type: SPECIFIC_MOVIE_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SPECIFIC_MOVIE_GET_FAIL, payload: e });
  }
}

function* getSimilarResults(action) {
  try {
    const payload = yield call(fetchSimilarResults, action.payload);
    yield put({ type: SIMILAR_RESULTS_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SIMILAR_RESULTS_GET_FAIL, payload: e });
  }
}

export default function* movieSaga() {
  yield takeEvery(SPECIFIC_MOVIE_GET, getMovie);
  yield takeEvery(SIMILAR_RESULTS_GET, getSimilarResults);
}


// import { takeEvery, call, put } from "redux-saga/effects";
// import { fetchSimilarResults } from 'utils/api';
// import {
//   SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL
// } from "../actions/types";


//
// export default function* similarResultsSaga() {
//   yield takeEvery(SIMILAR_RESULTS_GET, getSimilarResults);
// }
