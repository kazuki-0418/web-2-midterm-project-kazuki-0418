import { type LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { Home } from "../components/pages/home/home";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getMovies } from "../services/getMovies";
import { getTvs } from "../services/getTvs";
import type { TimeWidow } from "../types/TimeWidow";
import { langCookie } from "../utils/languageCookie";
import { extractEnvVars } from "../utils/extractEnvVars";

export async function loader({ request,context }: LoaderFunctionArgs) {
	const {BASE_URL,API_KEY} = extractEnvVars(context)
	const language = (await getUserLanguage(request)) ?? "en";
	const url = new URL(request.url);

	const widow =
		(url.searchParams.get("widow") as TimeWidow | undefined) ?? "day";
	return json({
		genres: await getGenres(BASE_URL,API_KEY,language),
		movies: await getMovies(API_KEY,widow, language),
		tvs: await getTvs(API_KEY,widow, language),
		language,
	});
}

export async function action({ request }) {
	const formData = await request.formData();
	const newLang = formData.get("language");

	if (!["en", "ja", "fr"].includes(newLang)) {
		throw new Error("Unsupported language");
	}

	return redirect("/", {
		headers: {
			"Set-Cookie": await langCookie.serialize(newLang),
		},
	});
}

export default function Index() {
	const { genres, movies, tvs, language } = useLoaderData<typeof loader>();

	return (
		<Home
			movieResults={movies}
			tvResults={tvs}
			genres={genres}
			language={language}
		/>
	);
}
