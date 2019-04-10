import { all, fork } from 'redux-saga/effects'
import movieSaga from 'components/Movie/saga'
import searchResultsSaga from 'components/SearchResults/saga'

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(searchResultsSaga),
  ])
}
