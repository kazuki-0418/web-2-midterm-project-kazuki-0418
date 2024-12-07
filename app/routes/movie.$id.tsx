import { useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getMovies } from "../services/getMovies";
import type { Movie } from "../types/Movie";

export async function loader({ language }: { language: string }) {
	return Response.json({
		genres: await getGenres("en-US"),
		movies: await getMovies("day", "en-US"),
	});
}

const MovieDetail = () => {
	const params = useParams();

	const { id } = params;
	const { movies } = useLoaderData<typeof loader>();
	const movie = movies.find((movie: Movie) => movie.id === Number(id));

	return <AboutPage data={movie} />;
};

export default MovieDetail;
