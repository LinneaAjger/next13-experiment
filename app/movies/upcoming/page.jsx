import Movie from "../Movie";
import styles from "app/page.module.css"
import Link from "next/link";

export default async function Home() {
  const upcomingData = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );
  const upcomingRes = await upcomingData.json();



  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {upcomingRes.results.map((movie) => (
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
