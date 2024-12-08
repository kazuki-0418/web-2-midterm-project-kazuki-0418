import { langCookie } from "../utils/languageCookie";

export async function getUserLanguage(request: Request) {
	const cookieHeader = request.headers.get("Cookie");
	const lang = (await langCookie.parse(cookieHeader)) || "en";
	if (lang) {
		return lang;
	}

	const acceptLanguage = request.headers.get("Accept-Language");
	return acceptLanguage?.split(",")[0]?.split("-")[0] || "en";
}
