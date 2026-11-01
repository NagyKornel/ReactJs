import type { Ember } from "../types/Ember";

export const Isfiatal = (e: Ember): boolean => {
  return e.kor < 18;
};
