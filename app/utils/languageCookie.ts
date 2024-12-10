import { createCookie } from "@remix-run/cloudflare";

export const langCookie = createCookie("lang", {
	path: "/",
	httpOnly: true,
	secure: true,
	sameSite: "lax",
	maxAge: 60 * 60 * 24 * 365,
	encode: (value) => value,
	decode: (value) => value,
});
