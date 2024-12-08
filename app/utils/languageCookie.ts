import { createCookie } from "@remix-run/node";

export const langCookie = createCookie("lang", {
	path: "/",
	httpOnly: true,
	secure: true,
	sameSite: "lax",
});
