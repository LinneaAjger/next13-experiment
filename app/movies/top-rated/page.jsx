import Movie from "../Movie";
import styles from "app/page.module.css"

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
            vote_average={movie.vote_average}

          />
        ))}
      </section>
    </main>
  );
}
