import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getTvs } from "../services/getTvs";
import type { Tv } from "../types/TV";

export async function loader({ request }: LoaderFunctionArgs) {
	const language = (await getUserLanguage(request)) || "en";

	return Response.json({
		genres: await getGenres(language),
		tvs: await getTvs("day", language),
		language,
	});
}

const TvDetail = () => {
	const { id } = useParams();
	const { tvs, genres, language } = useLoaderData<typeof loader>();
	const tv = tvs.find((tv: Tv) => tv.id === Number(id));

	return <AboutPage data={tv} genres={genres} language={language} />;
};

export default TvDetail;
