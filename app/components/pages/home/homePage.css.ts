import { style } from "@vanilla-extract/css";

// 全体のレイアウトコンテナ
export const layout = style({
  display: "grid",
  gridTemplateRows: "auto 1fr", // ヘッダーの高さを自動、コンテンツエリアを残りのスペースで
  gridTemplateColumns: "290px 1fr", // サイドバーの幅を固定、コンテンツエリアを残りのスペースで
  gridTemplateAreas: `
      "sidebar header"
      "sidebar main"
    `,
  height: "100vh", // ビューポート全体を使用
  width: "100vw",
  backgroundColor: "#ede4d1", // 全体の背景色
});

// メインコンテンツエリア
export const main = style({
  gridArea: "main",
  padding: "16px",
  overflowY: "auto", // 縦方向のスクロールを許可

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 528px ))",
  rowGap: "44px",
  justifyContent: "center",
  alignItems: "center",
});
