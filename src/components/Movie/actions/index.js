import { SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_CLEAR } from "./types";

export function getMovie(payload) {
  return { type: SPECIFIC_MOVIE_GET, payload };
}


export function clearMovie(payload) {
  return { type: SPECIFIC_MOVIE_CLEAR, payload };
}
