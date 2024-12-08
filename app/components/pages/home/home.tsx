import { Link } from "@remix-run/react";
import useMedia from "../../../stores/MediaType";
import useGenre from "../../../stores/genre";
import useKeyword from "../../../stores/keyword";
import type { Genre } from "../../../types/Genre";
import type { Movie } from "../../../types/Movie";
import type { Tv } from "../../../types/TV";
import Card from "../../card";
import { Header } from "../../header/Header";
import Sidebar from "../../sidebar";
import * as styles from "./homePage.css";

export const Home = ({
	movieResults,
	tvResults,
	genres,
	language,
}: {
	movieResults: Movie[];
	tvResults: Tv[];
	genres: Genre[];
	language: string;
}) => {
	const { selectedGenre } = useGenre();
	const { keyword } = useKeyword();
	const { mediaType } = useMedia();

	const filterByResults = (results: (Movie | Tv)[]) => {
		const filterByKeyword = (result: Movie | Tv) => {
			const searchTerm = keyword.toLowerCase();
			if ("title" in result) {
				return result.title.toLowerCase().includes(searchTerm);
			}
			return result.name.toLowerCase().includes(searchTerm);
		};

		const filterByGenre = (result: Movie | Tv) => {
			if ("genre_ids" in result && selectedGenre) {
				const genreId =
					genres.find((genre) => genre.name === selectedGenre)?.id || 0;
				return result.genre_ids.includes(genreId);
			}
			return true;
		};

		return results.filter(
			(result) =>
				(selectedGenre === "" || filterByGenre(result)) &&
				(keyword === "" || filterByKeyword(result)),
		);
	};

	const convertGenreIdsToNames = (genreIds: number[]) => {
		const genreNames = [];
		for (const genreId of genreIds) {
			const genreName = genres.find((genre) => genre.id === genreId)?.name;
			if (genreName) genreNames.push(genreName);
		}
		return genreNames;
	};

	return (
		<form method="post">
			<div className={styles.layout}>
				<Header language={language} />
				<Sidebar genres={genres} />
				<main className={styles.main}>
					{mediaType === "movie" &&
						filterByResults(movieResults).map((result: Movie) => (
							<Link to={`/movie/${result.id}`} key={result.title}>
								<Card
									key={result.title}
									title={result.title}
									date={result.release_date}
									description={result.overview}
									review={result.vote_average}
									likes={result.vote_count}
									originalTitle={result.original_title}
									originalLanguage={result.original_language}
									imageUrl={result.poster_path}
									tags={convertGenreIdsToNames(result.genre_ids)}
									isAdult={result.adult}
									media={result.media_type}
								/>
							</Link>
						))}
					{mediaType === "tv" &&
						filterByResults(tvResults).map((result: Tv) => (
							<Link to={`/tv/${result.id}`} key={result.name}>
								<Card
									key={result.name}
									title={result.name}
									date={result.first_air_date}
									description={result.overview}
									review={result.vote_average}
									likes={result.vote_count}
									originalTitle={result.original_name}
									originalLanguage={result.original_language}
									imageUrl={result.poster_path}
									tags={convertGenreIdsToNames(result.genre_ids)}
									isAdult={result.adult}
									media={result.media_type}
								/>
							</Link>
						))}
				</main>
			</div>
		</form>
	);
};
