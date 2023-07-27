import { Comfortaa } from "next/font/google"
import { Genre } from "@/types/types_Genre"
import GenresList from "@/components/genres/GenresList"

const comfortaa = Comfortaa({ subsets: ["latin"] })

const fetchGenres = async () => {
  const hostname =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : `${process.env.HOST}`

  const genres = await fetch(`${hostname}/api/genres`)
  const genresArray: Genre[] = (await genres.json()).results

  return genresArray
}

export default async function Genres({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const genresArray: Genre[] = await fetchGenres()

  return (
    <>
      <h1 className={`text-slate-50 text-5xl mb-6 ${comfortaa.className}`}>
        Genres
      </h1>
      <div className="flex-6">
        <GenresList genres={genresArray} />
      </div>
    </>
  )
}
