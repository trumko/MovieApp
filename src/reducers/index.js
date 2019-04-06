import { combineReducers } from 'redux'

import movieReducer from 'components/Movie/reducer';
import searchResultsReducer from 'components/SearchResults/reducer';
import similarResultsReducer from 'components/SimilarResults/reducer';

export const rootReducer = combineReducers({
  movieReducer,
  searchResultsReducer,
  similarResultsReducer
})
