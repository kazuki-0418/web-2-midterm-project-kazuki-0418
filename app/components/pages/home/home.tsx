import Card from "../../card";
import { Header } from "../../header/Header";
import Sidebar from "../../sidebar";
import * as styles from "./homePage.css";

export const Home = ({
  results,
}: {
  results: {
    title: string;
    release_date: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    original_title: string;
    original_language: string;
    poster_path: string;
  }[];
}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        {results.map((result) => (
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
            tags={["Action", "Adventure", "Comedy"]}
          />
        ))}
      </main>
    </div>
  );
};
