import { createGlobalTheme } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const grid: number = 4;
const px = (value: string | number) => `${value}px`;

export const globalVars = createGlobalTheme(":root", {
  fonts: {
    titleFont: "Playfair Display, serif",
    bodyFont: "Arial, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.3rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  grid: px(grid),
  space: {
    none: "0",
    auto: "auto",
    2: px(2),
    4: px(1 * grid),
    6: px(6),
    8: px(2 * grid),
    12: px(3 * grid),
    16: px(4 * grid),
    20: px(5 * grid),
    24: px(6 * grid),
    28: px(7 * grid),
    32: px(8 * grid),
    48: px(12 * grid),
    64: px(16 * grid),
    96: px(24 * grid),
  },
  logo: {
    large: "132px",
    small: "40px",
  },
  padding: {
    large: "32px",
    small: "20px",
  },
  transitionSpeed: "0.5s",
  headerHeight: {
    large: calc.add("132px", calc.multiply("32px", 2)),
    small: calc.add("40px", calc.multiply("20px", 2)),
  },

  sp: {
    logo: {
      large: "100px",
      small: "60px",
    },
    padding: {
      large: "36px",
      small: "5px",
    },
    headerHeight: {
      large: calc.add("100px", calc.multiply("36px", 2)),
      small: calc.add("60px", calc.multiply("5px", 2)),
    },
    transitionSpeed: "0.3s",
  },
});

export const {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
} = globalVars;
