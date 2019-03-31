import { takeEvery, call, put } from "redux-saga/effects";
import { fetchSearchResults } from 'utils/api';
import { SEARCH_RESULTS_GET, SEARCH_RESULTS_GET_SUCCESS, SEARCH_RESULTS_GET_FAIL } from "../actions/types";

function* getSearchResults(action) {
  try {
    const payload = yield call(fetchSearchResults, action.payload);
    yield put({ type: SEARCH_RESULTS_GET_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SEARCH_RESULTS_GET_FAIL, payload: e });
  }
}

export default function* searchResultsSaga() {
  yield takeEvery(SEARCH_RESULTS_GET, getSearchResults);
}
