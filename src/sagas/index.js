import { all, fork } from 'redux-saga/effects'
import movieSaga from 'components/Movie/saga';

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
  ])
}
