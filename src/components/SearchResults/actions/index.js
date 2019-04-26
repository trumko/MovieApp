import { SEARCH_RESULTS_GET, SEARCH_RESULTS_SORT } from "./types";

export const getSearchResults = (payload) => (
  { type: SEARCH_RESULTS_GET, payload }
)

export const sortSearchResults = (payload) => (
  { type: SEARCH_RESULTS_SORT, payload }
)
