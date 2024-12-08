export const getGenres = async (language: string) => {
	const res = await fetch(`${process.env.BASE_URL}?language=${language}`, {
		headers: {
			method: "GET",
			Authorization: `Bearer ${process.env.API_KEY}`,
			"Content-Type": "application/json",
		},
	});
	const data = await res.json();
	return data.genres;
};
