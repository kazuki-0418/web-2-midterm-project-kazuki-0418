import type React from "react";
import { CiSearch } from "react-icons/ci";
import useMedia from "../../stores/MediaType";
import useGenre from "../../stores/genre";
import useKeyword from "../../stores/keyword";
import type { Genre } from "../../types/Genre";
import * as styles from "./sidebar.css";

type SidebarProps = {
	genres: Genre[];
};

const Sidebar: React.FC<SidebarProps> = ({ genres }) => {
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
					<li key={genre.id}>
						<button
							type="button"
							onClick={() => setSelectedGenre(genre.name)}
							className={`${selectedGenre === genre.name ? styles.active : ""} ${
								styles.genreItem
							}`}
						>
							{genre.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
