import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

// カラーパレット
const colors = {
  redBackground: "#f8d7da",
  redText: "#721c24",
  orangeBackground: "#fbe4d1",
  orangeText: "#856404",
};

// タグ共通スタイル
export const tagBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  fontWeight: "bold",
  marginRight: "4px",
  height: "16px",
  width: "auto",
});

// タグの種類ごとのスタイル
export const tagVariants = styleVariants({
  category: {
    backgroundColor: colors.redBackground,
    color: vars.color.rubyFlame,
    fontFamily: "sans-serif",
  },
  genre: {
    backgroundColor: colors.orangeBackground,
    color: vars.color.caramelLatte,
    fontFamily: "sans-serif",
  },
});
