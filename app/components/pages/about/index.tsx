import * as Separator from "@radix-ui/react-separator";
import type { Genre } from "../../../types/Genre";
import type { Movie } from "../../../types/Movie";
import type { Tv } from "../../../types/TV";
import { Favorite } from "../../card/Favorite";
import Rating from "../../card/Rating";
import { Carousel } from "../../carousel";
import { Header } from "../../header/Header";
import TagList from "../../tags";
import * as styles from "./aboutPage.css";

type AboutPageProps = {
	data: Movie | Tv;
	genres: Genre[];
	language: string;
};

const isMovie = (data: Movie | Tv): data is Movie => {
	return "title" in data;
};

export const AboutPage = ({ data, genres, language }: AboutPageProps) => {
	const title = isMovie(data) ? data.title : data.name;
	const date = isMovie(data) ? data.release_date : data.first_air_date;
	const description = data.overview;
	const review = data.vote_average;
	const likes = data.vote_count;
	const genreIds = data.genre_ids;
	const imageUrl = data.poster_path;
	const backDropPath = data.backdrop_path;
	const originalTitle = isMovie(data)
		? data.original_title
		: data.original_name;

	const categorizeTags = () => {
		const originalLanguage = data.original_language;
		const media = data.media_type;
		const isAdult = data.adult;

		const tags = [];
		if (media === "movie") {
			tags.push("Movie");
		}

		if (media === "tv") {
			tags.push("TV Show");
		}

		if (isAdult) {
			tags.push("Adult");
		}

		tags.push(originalLanguage);
		return tags;
	};

	const convertGenreIdsToNames = () => {
		const genreNames = [];
		for (const genreId of genreIds) {
			const genreName = genres.find((genre) => genre.id === genreId)?.name;
			if (genreName) genreNames.push(genreName);
		}
		return genreNames;
	};

	return (
		<div className={styles.layout}>
			<Header language={language} />
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.imageContainer}>
						<Carousel images={[imageUrl, backDropPath]} />
					</div>
					<div className={styles.details}>
						<h1 className={styles.title}>{title}</h1>
						<p className={styles.date}>{date}</p>
						<p className={styles.description}>{description}</p>
						<div className={styles.reviewSection}>
							<div className={styles.stars}>
								<Rating value={review} size="large" />
							</div>
							<Favorite likes={likes} size="large" />
						</div>
						<Separator.Root
							className={styles.separator}
							decorative
							orientation="horizontal"
						/>
						<p className={styles.originalTitle}>{originalTitle}</p>
						<TagList type="category" tags={categorizeTags()} size="large" />
						<TagList
							type="genre"
							tags={convertGenreIdsToNames()}
							size="large"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
