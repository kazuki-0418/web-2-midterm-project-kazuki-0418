import { type LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getMovies } from "../services/getMovies";
import type { Movie } from "../types/Movie";
import type { TimeWidow } from "../types/TimeWidow";
import { langCookie } from "../utils/languageCookie";
import { extractEnvVars } from "../utils/extractEnvVars";

export async function loader({ request,context }: LoaderFunctionArgs) {
	const {BASE_URL,API_KEY} = extractEnvVars(context)
	const language = await getUserLanguage(request);
	const widow =
		(new URL(request.url).searchParams.get("widow") as TimeWidow) ?? "day";
	return json({
		genres: await getGenres(BASE_URL,API_KEY,language),
		movies: await getMovies(API_KEY,widow, language),
		language,
	});
}

export async function action({ request }) {
	const formData = await request.formData();
	const newLang = formData.get("language");

	if (!["en", "ja", "fr"].includes(newLang)) {
		throw new Error("Unsupported language");
	}

	return redirect("./", {
		headers: {
			"Set-Cookie": await langCookie.serialize(newLang),
		},
	});
}

const MovieDetail = () => {
	const params = useParams();

	const { id } = params;
	const { movies, genres, language } = useLoaderData<typeof loader>();
	const movie = movies.find((movie: Movie) => movie.id === Number(id));

	return <AboutPage data={movie} genres={genres} language={language} />;
};

export default MovieDetail;
