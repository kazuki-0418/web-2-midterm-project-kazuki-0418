import { style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

// ブレークポイント
const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

// オーバーレイのスタイル
export const overlay = style({
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 10,
});

export const search = style({
  display: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "24px",
  width: "24px",
  zIndex: 10,
  "@media": {
    "(max-width: 800px)": {
      display: "flex",
    },
  },
});

// モーダルのコンテンツ（サイドバー）のスタイル
export const modalContent = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "80%", // 初期値は画面の80%
  maxWidth: "300px", // 最大幅
  background: vars.color.ivorySand,
  boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
  zIndex: 11,
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  overflowY: "auto",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      width: "60%", // タブレット以上は幅を60%に
    },
    [`screen and (min-width: ${breakpoints.desktop})`]: {
      width: "300px", // デスクトップ以上では固定幅
    },
  },
});

// タイトル
export const title = style({
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "20px",
  color: vars.color.charcoalBlack,
});

export const searchBar = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  padding: "5px 10px",
  height: "40px",
  marginBottom: "20px",
});

export const searchInput = style({
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  width: "100%",
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
  color: vars.color.charcoalBlack,
});

// ジャンルリスト
export const genreList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflowY: "auto",
  height: "calc(100vh - 100px)",
});

export const genreItem = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: vars.color.charcoalBlack,
  cursor: "pointer",
  padding: "10px",
  ":hover": {
    color: vars.color.rubyFlame,
  },
});

export const active = style({
  color: vars.color.rubyFlame,
});

export const separator = style({
  backgroundColor: vars.color.charcoalBlack,
  width: "100%",
  height: "1px",
  margin: "8px 0",
});

// 開くボタンのスタイル
export const openMenuButton = style({
  position: "fixed",
  top: "16px",
  left: "16px",
  zIndex: 12,
  background: "#007bff",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      fontSize: "16px",
      padding: "12px 20px",
    },
  },
});

// 閉じるボタンのスタイル
export const closeButton = style({
  marginTop: "auto",
  alignSelf: "flex-end",
  color: vars.color.charcoalBlack,
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet})`]: {
      fontSize: "16px",
      padding: "12px 20px",
    },
  },
});
