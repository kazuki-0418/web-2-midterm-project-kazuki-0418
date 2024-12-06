import { CiSearch } from "react-icons/ci";
import * as BaseDialog from "@radix-ui/react-dialog";
import * as styles from "./dialog.css";
import useGenre from "../../stores/genre";
import useKeyword from "../../stores/keyword";
import { IconButton } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import useMedia from "../../stores/MediaType";
import * as Separator from "@radix-ui/react-separator";

const Dialog: React.FC = () => {
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
  const { selectedGenre, setSelectedGenre } = useGenre();
  const { mediaType, setMediaType } = useMedia();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <BaseDialog.Root>
      <BaseDialog.Trigger asChild>
        <IconButton variant="ghost">
          <CiSearch className={styles.search} />
        </IconButton>
      </BaseDialog.Trigger>

      <BaseDialog.Portal>
        <BaseDialog.Overlay className={styles.overlay} />
        <BaseDialog.Content className={styles.modalContent}>
          <BaseDialog.Close className={styles.closeButton}>
            <Cross2Icon />
          </BaseDialog.Close>

          <BaseDialog.Title className={styles.title}>
            {mediaType === "movie" ? "Movie" : "TV Show"} Genre
          </BaseDialog.Title>
          <div>
            <div className={styles.searchBar}>
              <CiSearch />
              <input
                type="text"
                placeholder="Search Title..."
                value={keyword}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </div>
            <ul className={styles.genreList}>
              <li>
                <button
                  type="button"
                  onClick={() => setMediaType("movie")}
                  className={`${mediaType === "movie" ? styles.active : ""} ${
                    styles.genreItem
                  }`}
                >
                  Movie
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setMediaType("tv")}
                  className={`${mediaType === "tv" ? styles.active : ""} ${
                    styles.genreItem
                  }`}
                >
                  TV Show
                </button>
                <Separator.Root className={styles.separator} />
              </li>
              {genres.map((genre) => (
                <li key={genre}>
                  <button
                    type="button"
                    onClick={() => setSelectedGenre(genre)}
                    className={`${
                      selectedGenre === genre ? styles.active : ""
                    } ${styles.genreItem}`}
                  >
                    {genre}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </BaseDialog.Content>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
};

export default Dialog;
