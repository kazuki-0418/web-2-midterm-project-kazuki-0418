import { type LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";
import { AboutPage } from "../components/pages/about";
import { getGenres } from "../services/getGenres";
import { getUserLanguage } from "../services/getLanguage";
import { getTvs } from "../services/getTvs";
import type { Tv } from "../types/TV";
import type { TimeWidow } from "../types/TimeWidow";
import { extractEnvVars } from "../utils/extractEnvVars";

export async function loader({ request,context }: LoaderFunctionArgs) {
	const language = (await getUserLanguage(request)) || "en";
	const {BASE_URL,API_KEY} = extractEnvVars(context)
	const widow =
		(new URL(request.url).searchParams.get("widow") as TimeWidow) ?? "day";

	return json({
		genres: await getGenres(BASE_URL,API_KEY,language),
		tvs: await getTvs(API_KEY,widow, language),
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
