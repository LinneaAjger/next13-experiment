import Image from "next/image";

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
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h3 className="text-lg">{res.release_date}</h3>
      <p>Runtime:{res.runtime} minutes</p>
      <p>{res.overview}</p>
      <p className="bg-green-500 inline-block my-2 py-2 px-4 rounded-md text-white">{res.status}</p>
      <Image 
      className="my-12 w-full h-full"
        src={imagePath + res.backdrop_path}
        width={1000}
        height={1000} 
        alt={`poster of ${res.title}`}/>
    </div>

  )
}