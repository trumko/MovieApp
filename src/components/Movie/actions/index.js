import { SPECIFIC_MOVIE_GET } from "./types";

export function getMovie(payload) {
  console.log('getMovie payload', payload);
  return { type: SPECIFIC_MOVIE_GET, payload };
}
