import {
  SPECIFIC_MOVIE_GET,
  RELATED_MOVIES_GET,
  SPECIFIC_MOVIE_CLEAR,
  RELATED_MOVIES_CLEAR
} from "./types";

export function getMovie(payload) {
  return { type: SPECIFIC_MOVIE_GET, payload };
}

export function getRelatedMovies(payload) {
  return { type: RELATED_MOVIES_GET, payload };
}

export function clearMovie(payload) {
  return { type: SPECIFIC_MOVIE_CLEAR, payload };
}

export function clearRelatedMovies(payload) {
  return { type: RELATED_MOVIES_CLEAR, payload };
}
