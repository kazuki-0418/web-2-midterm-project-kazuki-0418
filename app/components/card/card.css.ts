import { style, styleVariants } from "@vanilla-extract/css";

// カラーパレット
const colors = {
  background: "#ede4d1",
  text: "#000",
  accent: "#ff5555",
  tagBackground: "#fbe4d1",
  tagText: "#000",
  border: "#333333",
};

// サイズとフォント
const sizes = {
  cardWidth: "480px",
  cardHeight: "400px",
  borderRadius: "10px",
  tagFontSize: "12px",
  contentPadding: "16px",
};

// カード全体のスタイル
export const card = style({
  display: "flex",
  flexDirection: "row",
  width: sizes.cardWidth,
  height: sizes.cardHeight,
  backgroundColor: colors.background,
  border: `1px solid ${colors.border}`,
  borderRadius: sizes.borderRadius,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
});

// 左側のコンテンツ部分
export const content = style({
  flex: 1,
  padding: sizes.contentPadding,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "auto",
});

// タイトルと日付
export const title = style({
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "8px",
  color: colors.text,
});

export const separator = style({
  backgroundColor: colors.border,
  width: "100%",
  height: "1px",
  margin: "8px 0",
});

export const date = style({
  fontSize: "12px",
  color: "#666",
  marginBottom: "16px",
});

// 説明テキスト
export const description = style({
  fontSize: "14px",
  color: colors.text,
  marginBottom: "16px",
  lineHeight: "1.5",
});

// レビューセクション（星評価とお気に入り）
export const reviewSection = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
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
  color: colors.accent,
  fontWeight: "bold",
});

// タグセクション
export const tags = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const tag = styleVariants({
  default: {
    padding: "4px 8px",
    backgroundColor: colors.tagBackground,
    borderRadius: "12px",
    fontSize: sizes.tagFontSize,
    fontWeight: "bold",
    color: colors.tagText,
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  accent: {
    backgroundColor: colors.accent,
    color: "#fff",
  },
});

// 右側の画像部分
export const imageContainer = style({
  width: "50%",
  height: "100%",
  position: "relative",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: `0 ${sizes.borderRadius} ${sizes.borderRadius} 0`,
});

export const backDropImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -1,
});
