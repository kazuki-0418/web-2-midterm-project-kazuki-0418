import { style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  gap: "16px",
  maxHeight: "920px",
  width: "100%",
});

export const mainImageContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "720px", // 固定高さ
  width: "100%",
  overflow: "hidden", // 必要に応じて
});

export const mainImage = style({
  width: "100%",
  height: "auto",
  maxHeight: "720px", // 最大高さを設定
  objectFit: "cover", // アスペクト比を維持
  margin: "0 auto",
  borderRadius: "10px",
});

export const thumbnailContainer = style({
  marginTop: "16px",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
});

export const thumbnail = style({
  width: "100px",
  height: "auto",
  margin: "0 10px",
  cursor: "pointer",
  border: "1px solid gray",
});

export const selectedThumbnail = style({
  border: ` 2px solid ${vars.color.charcoalBlack}`,
});
