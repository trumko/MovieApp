import { SPECIFIC_MOVIE_GET } from "./types";

export function getMovie(payload) {
  return { type: SPECIFIC_MOVIE_GET, payload };
}
