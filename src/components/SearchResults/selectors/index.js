import { createSelector } from 'reselect'

export const searchResultsReducerSelector = (state) => state.searchResultsReducer

export const selectSearchResults = createSelector(
  searchResultsReducerSelector,
  (searchResultsReducerSelector) => searchResultsReducerSelector.searchResults
)

export const selectSortbyType = createSelector(
  searchResultsReducerSelector,
  (searchResultsReducerSelector) => searchResultsReducerSelector.sortBy
)
