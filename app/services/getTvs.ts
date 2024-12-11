import type { Tv } from "../types/TV";
import type { TimeWidow } from "../types/TimeWidow";

type ResponseTv = {
	results: Tv[];
};

export const getTvs = async (apiKey:string,timeWidow: TimeWidow, language: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/tv/${timeWidow}?language=${language}`,
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
		},
	);
	const data: ResponseTv = await res.json();
	return data.results;
};

