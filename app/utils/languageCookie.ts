import { createCookie } from "@remix-run/node";

export const langCookie = createCookie("lang", {
	path: "/",
	httpOnly: true,
	secure: true,
	sameSite: "lax",
	maxAge: 60 * 60 * 24 * 365,
	encode: (value) => value,
	decode: (value) => value,
});
