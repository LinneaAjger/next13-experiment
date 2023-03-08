import Image from "next/image";
import styles from './page.module.css';

// this should make the server prerender all the images? not sure..

// export async function generateStaticParams() {
//   const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
//   const res = await data.json()
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   }))
// }

export default async function MovieDetail({ params }) {
  const { movie } = params

  const imagePath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    )
  const res = await data.json()
  return(
    <section className={styles.movieDetails}>
      <div className={styles.description}>
      <p className={styles.vote}>★ {Math.round(res.vote_average * 10) / 10} / 10</p>

        <h2>{res.title}</h2>
        <h3 className={styles.releaseInfo}>Release: {res.release_date} • {res.runtime} min</h3>
        <p className={styles.descriptionText}>{res.overview}</p>
      </div>
      <Image 
      className={styles.movieImage}
        src={imagePath + res.backdrop_path}
        width={1000}
        height={1000} 
        alt={`poster of ${res.title}`}/>
    </section>

  )
}