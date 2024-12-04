import { globalStyle } from "@vanilla-extract/css";

// グローバルリセット
globalStyle(
  "html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video",
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    verticalAlign: "baseline",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    textSizeAdjust: "none",
  }
);

// セクションタグの表示ブロック設定
globalStyle("footer, header, nav, section, main", {
  display: "block",
});

// bodyの設定
globalStyle("body", {
  lineHeight: "1",
});

// リストスタイルのリセット
globalStyle("ol, ul", {
  listStyle: "none",
});

// 引用スタイルのリセット
globalStyle("blockquote, q", {
  quotes: "none",
});

globalStyle("blockquote:before, blockquote:after, q:before, q:after", {
  content: "none",
});

// テーブルのリセット
globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

// inputのリセット
globalStyle("input", {
  borderRadius: 0,
});

// ボタンのスタイル
globalStyle("button", {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  outline: "none",
  padding: 0,
  appearance: "none",
});

// リンクのスタイル
globalStyle("a:link", {
  color: "unset",
  textDecoration: "none",
});

globalStyle("a:visited", {
  color: "unset",
  textDecoration: "none",
});

globalStyle("a:hover", {
  color: "unset",
  textDecoration: "none",
});

globalStyle("a img", {
  borderWidth: "0px",
  borderStyle: "none",
  borderColor: "#fff",
  background: "transparent",
});
