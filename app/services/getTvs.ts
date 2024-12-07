type TimeWidow = "day" | "week";

export const getTvs = async (timeWidow: TimeWidow, language: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/tv/${timeWidow}?language=${language}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.API_KEY}`,
				"Content-Type": "application/json",
			},
		},
	);
	const data = await res.json();
	return data.results;
};
