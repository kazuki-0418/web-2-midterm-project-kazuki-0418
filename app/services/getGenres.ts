import type { Genre } from "../types/Genre";

type GenreResponse = {
	genres: Genre[];
};

export const getGenres = async (baseUrl:string, apiKey:string,language: string,): Promise<Genre[]> => {
	
	const res = await fetch(`${baseUrl}?language=${language}`, {
		headers: {
			method: "GET",
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
	});
	const data: GenreResponse = await res.json();
	return data.genres;
};
