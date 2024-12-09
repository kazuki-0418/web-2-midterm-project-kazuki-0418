import { style } from "@vanilla-extract/css";
import { fontWeights } from "../../css/globalVars.css";
import { vars } from "../../css/theme.css";

export const favorite = style({
	display: "flex",
	alignItems: "center",
	gap: "4px",
	color: vars.color.brightRed,
	fontWeight: fontWeights.bold,
});
