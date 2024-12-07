import { useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getTvs } from "../services/getTvs";
import type { Tv } from "../types/TV";

export async function loader({ language }: { language: string }) {
	return Response.json({
		genres: await getGenres("en-US"),
		tvs: await getTvs("day", "en-US"),
	});
}

const TvDetail = () => {
	const { id } = useParams();
	const { tvs } = useLoaderData<typeof loader>();
	const tv = tvs.find((tv: Tv) => tv.id === Number(id));

	return <AboutPage data={tv} />;
};

export default TvDetail;
