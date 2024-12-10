import { createGlobalTheme } from "@vanilla-extract/css";

import { globalFontFace } from "@vanilla-extract/css";
const title = "titleFont";

globalFontFace(title, {
	src: "url(/fonts/PlayfairDisplay-VariableFont_wght.ttf)",
	fontWeight: 100,
	fontStyle: "normal",
	fontDisplay: "swap",
});

export const vars = createGlobalTheme(":root", {
	color: {
		star: "#FFCB45",
		vanillaCream: "#F1EBD7",
		caramelLatte: "#C27B43",
		brightRed: "#FF0000",
		brushRose: "#E57368",
		blushPetal: "#FFECEE",
		rubyFlame: "#CC342F",
		charcoalBlack: "#333333",
		ivorySand: "#EDE4D1",
		softCloud: "#F5F5F5",
		lightGray: "#E0E0E0",
		darkRuby: "#7D0C15",
		neutralGray: "#666",
	},
	font: {
		"title-font": title,
		"body-font": "Arial, sans-serif",
	},
	logo: {
		large: "50px",
	},
});
