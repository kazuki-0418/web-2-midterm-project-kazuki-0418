import { useLoaderData } from "@remix-run/react";
import { Home } from "../components/pages/home/home";
import { getGenres } from "../services/getGenres";
import { getMovies } from "../services/getMovies";
import { getTvs } from "../services/getTvs";

export async function loader({ language }: { language: string }) {
	return Response.json({
		genres: await getGenres("en-US"),
		movies: await getMovies("day", "en-US"),
		tvs: await getTvs("day", "en-US"),
	});
}

export default function Index() {
	const { genres, movies, tvs } = useLoaderData<typeof loader>();

	return <Home movieResults={movies} tvResults={tvs} genres={genres} />;
}
