import { style } from "@vanilla-extract/css";

// カルーセル全体のコンテナ
export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
  margin: "0 auto",
  overflow: "hidden",
});

// スライドを包むラッパー
export const wrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

// 各スライド
export const slide = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  background: "#f0f0f0",
  border: "1px solid #ccc",
  opacity: 0,
  transition: "opacity 0.5s ease",
});

export const activeFade = style({
  opacity: 1,
  zIndex: 1,
});

export const inactiveFade = style({
  zIndex: 0,
});

// ボタン
export const button = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  zIndex: 2,
});

export const prev = style({
  left: "10px",
});

export const next = style({
  right: "10px",
});

// ドットインジケーター
export const dots = style({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "5px",
  zIndex: 10,
});

export const dot = style({
  width: "10px",
  height: "10px",
  background: "#333",

  borderRadius: "50%",
  cursor: "pointer",
  transition: "background 0.3s ease",
});

export const activeDot = style({
  background: "#ccc",
});
