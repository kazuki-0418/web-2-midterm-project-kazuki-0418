import type React from "react";
import { CiSearch } from "react-icons/ci";
import * as styles from "./sidebar.css";
import useGenre from "../../stores/genre";
import useKeyword from "../../stores/keyword";
import useMedia from "../../stores/MediaType";

const Sidebar: React.FC = () => {
  const genres = [
    "Sci-Fi",
    "Romance",
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "History",
    "Horror",
    "Music",
  ];
  const { keyword, setKeyword } = useKeyword();
  const { mediaType } = useMedia();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const { selectedGenre, setSelectedGenre } = useGenre();

  return (
    <div className={`${styles.sidebar} ${styles.sidebarHeader}`}>
      <h1 className={styles.title}>
        {mediaType === "movie" ? "Movie" : "TV Show"} Genre
      </h1>
      <div className={styles.searchBar}>
        <CiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search Title..."
          className={styles.searchInput}
          value={keyword}
          onChange={handleSearch}
        />
      </div>
      <ul className={styles.genreList}>
        {genres.map((genre) => (
          <li key={genre}>
            <button
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`${selectedGenre === genre ? styles.active : ""} ${
                styles.genreItem
              }`}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
