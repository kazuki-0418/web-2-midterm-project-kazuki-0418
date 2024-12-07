import { style } from "@vanilla-extract/css";
import { vars } from "../../../css/theme.css";

// 全体のレイアウトコンテナ
export const layout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100vw",
  height: "fit-content",
  backgroundColor: "#ede4d1", // 全体の背景色
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  overflowY: "auto",
  width: "100%",
  maxWidth: "1200px",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "16px",
  fontFamily: "Arial, sans-serif",
  gap: "16px",
  width: "100%",
  maxWidth: "1200px",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      padding: "32px",
      gap: "32px",
    },
  },
});

export const card = style({
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
});

export const imageContainer = style({
  flex: "1",
  overflow: "hidden",
  textAlign: "center",
});

export const image = style({
  width: "80%",
  height: "auto",
});

export const details = style({
  flex: "1",
  padding: "16px",
  display: "flex",
  flexDirection: "column",

  gap: "16px",
});

export const title = style({
  fontSize: "36px",
  fontWeight: "bold",
  marginBottom: "8px",
  color: "#333",
});

export const date = style({
  fontSize: "24px",
  color: "#666",
  marginBottom: "16px",
});

export const description = style({
  fontSize: "28px",
  color: vars.color.charcoalBlack,
  marginBottom: "16px",
  lineHeight: "1.5",
});

// レビューセクション（星評価とお気に入り）
export const reviewSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "32px",
  marginBottom: "16px",
});

export const stars = style({
  display: "flex",
  alignItems: "center",
  gap: "2px",
});

export const favorite = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "#FF0000",
  fontWeight: "bold",
});

export const separator = style({
  backgroundColor: vars.color.charcoalBlack,
  width: "100%",
  height: "1px",
  margin: "8px 0",
});

export const originalTitle = style({
  fontSize: "32px",
  color: "#666",
  marginBottom: "16px",
});
