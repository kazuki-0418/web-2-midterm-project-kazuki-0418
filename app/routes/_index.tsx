import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Home } from "../components/pages/home/home";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getMovies } from "../services/getMovies";
import { getTvs } from "../services/getTvs";
import { langCookie } from "../utils/languageCookie";

export async function loader({ request }: LoaderFunctionArgs) {
	const language = (await getUserLanguage(request)) ?? "en";
	return Response.json({
		genres: await getGenres(language),
		movies: await getMovies("day", language),
		tvs: await getTvs("day", language),
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
