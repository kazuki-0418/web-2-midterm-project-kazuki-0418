import { style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

// カラーパレット
const colors = {
  background: "#ede4d1",
  text: "#000",
  searchBackground: "#f5f5f5",
  lightModeIcon: "#000",
  darkModeBackground: "#7d0c15",
  darkModeIcon: "#fff",
};

// サイズ
const sizes = {
  sidebarWidth: "250px",
  searchHeight: "40px",
  toggleSize: "40px",
};

// サイドバー全体のスタイル
export const sidebar = style({
  gridArea: "sidebar",
  width: sizes.sidebarWidth,
  height: "94vh",
  backgroundColor: colors.background,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontFamily: "Arial, sans-serif",
  overflow: "hidden",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

// タイトル
export const title = style({
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "20px",
  color: colors.text,
});

// 検索バー
export const searchBar = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.searchBackground,
  borderRadius: "10px",
  padding: "5px 10px",
  height: sizes.searchHeight,
  marginBottom: "20px",
});

export const searchIcon = style({
  marginRight: "10px",
  color: colors.text,
});

export const searchInput = style({
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  width: "100%",
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
  color: colors.text,
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
});

export const genreItem = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: colors.text,
  cursor: "pointer",
  ":hover": {
    color: vars.color.rubyFlame,
  },
});

// トグル切り替え部分
export const toggleSection = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

export const toggleButton = style({
  width: sizes.toggleSize,
  height: sizes.toggleSize,
  borderRadius: "20px",
  backgroundColor: colors.darkModeBackground,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const toggleIcon = style({
  color: colors.darkModeIcon,
});
