import type React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import * as styles from "./sidebar.css";

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

  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <aside className={styles.sidebar}>
      <div>
        <h1 className={styles.title}>Movie Genre</h1>
        <div className={styles.searchBar}>
          <CiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Genre..."
            className={styles.searchInput}
            value={keyword}
            onChange={handleSearch}
          />
        </div>
        <ul className={styles.genreList}>
          {genres
            .filter((genre) =>
              genre.toLowerCase().includes(keyword.toLowerCase())
            )
            .map((genre) => (
              <li key={genre} className={styles.genreItem}>
                {genre}
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
