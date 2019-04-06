import {
  SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_CLEAR, SIMILAR_RESULTS_GET, SIMILAR_RESULTS_CLEAR,
} from "./types";

export function getMovie(payload) {
  return { type: SPECIFIC_MOVIE_GET, payload };
}


export function clearMovie(payload) {
  return { type: SPECIFIC_MOVIE_CLEAR, payload };
}

export function getSimilarResults(payload) {
  return { type: SIMILAR_RESULTS_GET, payload };
}

export function clearSimilarResults(payload) {
  return { type: SIMILAR_RESULTS_CLEAR, payload };
}
