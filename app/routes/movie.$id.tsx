import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect, useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getMovies } from "../services/getMovies";
import type { Movie } from "../types/Movie";
import { langCookie } from "../utils/languageCookie";

export async function loader({ request }: LoaderFunctionArgs) {
	const language = await getUserLanguage(request);

	return Response.json({
		genres: await getGenres(language),
		movies: await getMovies("day", language),
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
