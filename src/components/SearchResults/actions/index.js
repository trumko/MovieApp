import { SEARCH_RESULTS_GET } from "./types";

export function getSearchResults(payload) {
  return { type: SEARCH_RESULTS_GET, payload };
}
