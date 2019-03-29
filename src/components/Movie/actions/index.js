import { INCREASE_COUNT } from "./types";

export function increaseCount(payload) {
  console.log('payload', payload);
  return { type: INCREASE_COUNT, payload };
}
