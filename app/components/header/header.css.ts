// styles.css.ts
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { globalVars } from "../../css/globalVars.css";
import { vars } from "../../css/theme.css";
import { mediaQuery } from "../../css/utils.css";

export const Text = style({
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  color: "#333333",
  height: "32px",
  lineHeight: "32px",
  width: "48px",
  textAlign: "center",

  ":hover": {
    color: vars.color.rubyFlame,
    cursor: "pointer",
    fontWeight: "bold",
    fontFamily: "",
  },
});

export const SeparatorRoot = style({
  backgroundColor: "#333333",
  width: "1px",
  height: "20px",
  margin: "0 10px",
});

export const NavigationMenu = style({
  display: "flex",
  alignItems: "center",
  marginTop: "32px",
});

export const header = style({
  gridArea: "header",
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  height: "60px", // 固定の高さ
  width: calc.subtract("100vw", "322px"),
  gap: "30%",
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

export const logoContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px",
  height: "32px",
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
});

export const logoText = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginLeft: "8px",
});
