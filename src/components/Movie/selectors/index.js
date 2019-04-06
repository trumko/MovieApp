import { createSelector } from 'reselect'

export const movieReducerSelector = (state) => state.movieReducer

export const selectMovie = createSelector(
  movieReducerSelector,
  (movieReducerSelector) => movieReducerSelector.movie
)

export const selectSimilarResults = createSelector(
  movieReducerSelector,
  (movieReducerSelector) => movieReducerSelector.similarResults
)
