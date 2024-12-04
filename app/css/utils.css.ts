// utils.ts
import { style } from "@vanilla-extract/css";

export const mediaQuery = (
  query: string,
  styles: Record<string, string | number>
) =>
  style({
    "@media": {
      [query]: styles,
    },
  });
