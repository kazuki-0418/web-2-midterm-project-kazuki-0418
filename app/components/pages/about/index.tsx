import { FaHeart } from "react-icons/fa";
import Rating from "../../card/Rating";
import { Header } from "../../header/Header";
import TagList from "../../tags";
import * as styles from "./aboutPage.css";
import * as Separator from "@radix-ui/react-separator";
import { Favorite } from "../../card/Favorite";
import type { Movie } from "../../../types/Movie";
import type { Tv } from "../../../types/TV";
import { Carousel } from "../../carousel";

type AboutPageProps = {
  data: Movie | Tv;
};

const isMovie = (data: Movie | Tv): data is Movie => {
  return "title" in data;
};

const genreData = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

export const AboutPage = ({ data }: AboutPageProps) => {
  const genres = genreData.genres;
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
      <Header />
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
