// styles/BasicSelect.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../css/theme.css";

export const selectTrigger = style({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "4px",
	padding: "0 15px",
	fontSize: "13px",
	lineHeight: "1",
	height: "35px",
	gap: "5px",
	width: "120px",
	backgroundColor: vars.color.ivorySand,
	color: "#CC342F", // アクセントカラー
	boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
	selectors: {
		"&:hover": {
			backgroundColor: "#F9E6E5", // アクセントカラーの薄い背景
		},
		"&:focus": {
			boxShadow: "0 0 0 2px #CC342F", // アクセントカラーのフォーカスリング
		},
		"&[data-placeholder]": {
			color: "#E57368", // アクセントカラーの薄い色
		},
	},
});

export const selectIcon = style({
	color: "#CC342F", // アクセントカラー
});

export const selectContent = style({
	overflow: "hidden",
	backgroundColor: vars.color.ivorySand,
	borderRadius: "6px",
	boxShadow:
		"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const selectViewport = style({
	padding: "5px",
});

export const selectItem = style({
	fontSize: "13px",
	lineHeight: "1",
	color: "#CC342F", // アクセントカラー
	borderRadius: "3px",
	display: "flex",
	alignItems: "center",
	height: "25px",
	padding: "0 35px 0 25px",
	position: "relative",
	userSelect: "none",
	selectors: {
		"&[data-disabled]": {
			color: "#E0E0E0", // 無効状態のグレー
			pointerEvents: "none",
		},
		"&[data-highlighted]": {
			outline: "none",
		},

		"&:hover": {
			cursor: "pointer",
			backgroundColor: vars.color.vanillaCream,
		},
	},
});

export const selectItemIndicator = style({
	position: "absolute",
	left: "0",
	width: "25px",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	color: vars.color.rubyFlame,
});
