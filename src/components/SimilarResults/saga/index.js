import { takeEvery, call, put } from "redux-saga/effects";
import { fetchSimilarResults } from 'utils/api';
import {
  SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL
} from "../actions/types";

function* getSimilarResults(action) {
  try {
    const payload = yield call(fetchSimilarResults, action.payload);
    yield put({ type: SIMILAR_RESULTS_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SIMILAR_RESULTS_GET_FAIL, payload: e });
  }
}

export default function* similarResultsSaga() {
  yield takeEvery(SIMILAR_RESULTS_GET, getSimilarResults);
}
