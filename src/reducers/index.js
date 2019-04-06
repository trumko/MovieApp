import { combineReducers } from 'redux'

import movieReducer from 'components/Movie/reducer';
import searchResultsReducer from 'components/SearchResults/reducer';

export const rootReducer = combineReducers({
  movieReducer,
  searchResultsReducer
})
