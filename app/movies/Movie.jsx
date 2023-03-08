import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <article>
      <Link href={`/movies/${id}`}>
        <Image 
        src={imagePath + poster_path}
        width={500}
        height={500} 
        alt={`poster of ${title}`}/>
      <h3>{title}</h3>
      {release_date && (
        <p>Release date: {release_date}</p>
      )}
      </Link>
    </article>
  );
}
