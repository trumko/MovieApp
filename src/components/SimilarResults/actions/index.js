import { SIMILAR_RESULTS_GET, SIMILAR_RESULTS_CLEAR } from "./types";

export function getSimilarResults(payload) {
  return { type: SIMILAR_RESULTS_GET, payload };
}

export function clearSimilarResults(payload) {
  return { type: SIMILAR_RESULTS_CLEAR, payload };
}
