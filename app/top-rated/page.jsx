import Movie from "../Movie";
import styles from '../page.module.css';
import Link from "next/link";

export default async function Home() {

  const topData = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const topRes = await topData.json();

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {topRes.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </section>
    </main>
  );
}
