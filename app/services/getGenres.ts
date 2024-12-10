import type { Genre } from "../types/Genre";

type GenreResponse = {
	genres: Genre[];
};

export const getGenres = async (language: string): Promise<Genre[]> => {
	const res = await fetch(`${process.env.BASE_URL}?language=${language}`, {
		headers: {
			method: "GET",
			Authorization: `Bearer ${process.env.API_KEY}`,
			"Content-Type": "application/json",
		},
	});
	const data: GenreResponse = await res.json();
	return data.genres;
};
