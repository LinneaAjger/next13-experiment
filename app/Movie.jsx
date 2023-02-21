import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <Link href={`/${id}`}>
        <Image 
        src={imagePath + poster_path}
        width={500}
        height={500} 
        alt={`poster of ${title}`}/>
      <h1 className={"mt-1"}>{title}</h1>
      </Link>
      <p className={"font-thin"}>Released: {release_date}</p>
    </div>
  );
}
