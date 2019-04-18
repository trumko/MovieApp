import {
  SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_CLEAR, SIMILAR_RESULTS_GET, SIMILAR_RESULTS_CLEAR,
} from "./types";

export const getMovie = (payload) => {
  console.log(payload)
  return { type: SPECIFIC_MOVIE_GET, payload }
}


export const clearMovie = (payload) => (
  { type: SPECIFIC_MOVIE_CLEAR, payload }
)

export const getSimilarResults = (payload) => (
  { type: SIMILAR_RESULTS_GET, payload }
)

export const clearSimilarResults = (payload) => (
  { type: SIMILAR_RESULTS_CLEAR, payload }
)
