import Movie from "./Movie";
import styles from './page.module.css';
import Link from "next/link";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  
  return (
    <main className={styles.main}>
      <h2>välkommen</h2>
    </main>
  );
}
