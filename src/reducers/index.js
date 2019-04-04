import { combineReducers } from 'redux'

import movieReducer from 'components/Pages/MoviePage/reducer';
import searchResultsReducer from 'components/SearchResults/reducer';

export const rootReducer = combineReducers({
  movieReducer,
  searchResultsReducer
})
