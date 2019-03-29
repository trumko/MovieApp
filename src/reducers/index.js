import { combineReducers } from 'redux'

import movieReducer from 'components/Movie/reducer';

export const rootReducer = combineReducers({
  movie: movieReducer
})
