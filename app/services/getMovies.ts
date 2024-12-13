import type { Movie } from "../types/Movie";
import type { TimeWidow } from "../types/TimeWidow";

type ResponseMovie = {
	results: Movie[];
};

export const getMovies = async (apiKey:string,timeWidow: TimeWidow, language: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/movie/${timeWidow}?language=${language}`,
		{
			headers: {
				method: "GET",
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
		},
	);
	const data: ResponseMovie = await res.json();
	return data.results;
};
