import { SEARCH_RESULTS_GET } from "./types";

export const getSearchResults = (payload) => (
  { type: SEARCH_RESULTS_GET, payload }
)
