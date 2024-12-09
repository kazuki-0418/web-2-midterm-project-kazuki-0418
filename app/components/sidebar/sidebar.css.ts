import { style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

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
	backgroundColor: vars.color.ivorySand,
	padding: "20px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	fontFamily: "Arial, sans-serif",
	overflow: "hidden",
});

export const sidebarHeader = style({
	"@media": {
		"(max-width: 800px)": {
			display: "none",
			width: "60px",
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

// 検索バー
export const searchBar = style({
	display: "flex",
	alignItems: "center",
	backgroundColor: vars.color.softCloud,
	borderRadius: "10px",
	padding: "5px 10px",
	height: sizes.searchHeight,
	marginBottom: "20px",
});

export const searchIcon = style({
	marginRight: "10px",
	color: vars.color.charcoalBlack,
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
