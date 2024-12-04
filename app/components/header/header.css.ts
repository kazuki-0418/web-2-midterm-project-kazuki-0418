// styles.css.ts
import { style, styleVariants } from "@vanilla-extract/css";
import { globalVars } from "../../css/globalVars.css";
import { mediaQuery } from "../../css/utils.css";

export const Text = style({
  fontFamily: "Arial, sans-serif",
  fontSize: "1.5rem",
  color: "#333333",
});

export const SeparatorRoot = style({
  backgroundColor: "#333333",
  width: "1px",
  height: "20px",
  margin: "0 15px",
});

export const NavigationMenu = style({
  display: "flex",
  height: "20px",
  alignItems: "center",
});

export const main = style({});

export const header = style({
  position: "fixed",
  right: 0,
  left: 0,
  transition: `padding ${globalVars.transitionSpeed} ease, transform ${globalVars.transitionSpeed} ease`,
  padding: `${globalVars.padding.large} 0`,
  // background: "var(--light-white)",
  zIndex: 10,
});

export const headerNav = style({
  position: "fixed",
  right: 0,
  left: 0,
  transition: `padding ${globalVars.transitionSpeed} ease, transform ${globalVars.transitionSpeed} ease`,
  padding: `${globalVars.padding.large} 0`,
  background: "var(--light-white)",
  zIndex: 10,
});

export const headerNavLogo = style({
  width: "150px",
  textAlign: "center",
});

export const headerNavLogoImg = styleVariants({
  large: {
    height: globalVars.logo.large,
  },
  small: {
    height: globalVars.logo.small,
  },
});

export const headerNavSmall = style({
  padding: `${globalVars.padding.small} 0`,
  // selectors: {
  //   [`& .${headerNavLogoImg.small}`]: {
  //     height: globalVars.logo.small,
  //   },
  // },
});

export const mainSp = mediaQuery("(max-width: 1024px)", {
  transition: `padding ${globalVars.sp.transitionSpeed} ease, transform ${globalVars.sp.transitionSpeed} ease`,
  paddingTop: globalVars.sp.headerHeight.large,
});

// リストアイテム
export const headerNavItem = style({
  flexGrow: 1,
  textAlign: "center",
});

export const headerNavItemActive = style({
  textDecoration: "underline",
  // textDecorationColor: "var(--bold-main-color)",
  textDecorationThickness: "0.5px",
  textUnderlineOffset: "3px",
});
