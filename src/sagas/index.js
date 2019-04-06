import { all, fork } from 'redux-saga/effects'
import movieSaga from 'components/Movie/saga'
import searchResultsSaga from 'components/SearchResults/saga'
import similarResultsSaga from 'components/SimilarResults/saga'

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(searchResultsSaga),
    fork(similarResultsSaga)
  ])
}
