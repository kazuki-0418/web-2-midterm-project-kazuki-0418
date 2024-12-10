import { style } from "@vanilla-extract/css";
import { fontSizes, fontWeights } from "../../css/globalVars.css";
import { vars } from "../../css/theme.css";

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
	backgroundColor: vars.color.ivorySand,
	border: `1px solid ${vars.color.charcoalBlack}`,
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
	overflowY: "auto",
});

// タイトルと日付
export const title = style({
	fontWeight: fontWeights.bold,
	fontSize: fontSizes.lg,
	marginBottom: "8px",
	color: vars.color.charcoalBlack,
});

export const separator = style({
	backgroundColor: vars.color.blushPetal,
	width: "100%",
	height: "1px",
	margin: "8px 0",
});

export const date = style({
	fontSize: fontSizes.xs,
	color: "#666",
	marginBottom: "16px",
});

export const description = style({
	fontSize: fontSizes.sm,
	color: vars.color.charcoalBlack,
	marginBottom: "16px",
	lineHeight: "1.5",
});

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
	color: vars.color.rubyFlame,
	fontWeight: fontWeights.bold,
});

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
