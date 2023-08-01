import { Genre } from "@/types/types_Genre"
import GenresList from "@/components/genres/GenresList"
import PageTitle from "@/components/common/PageTitle";

const fetchGenres = async () => {
  const hostname =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : `${process.env.HOST}`

  const genres = await fetch(`${hostname}/api/genres`)
  const genresArray: Genre[] = (await genres.json()).results

  return genresArray
}

export default async function Genres() {
  const genresArray: Genre[] = await fetchGenres()

  return (
    <>
      <PageTitle title="Genres" />

      <div className="flex-6">
        <GenresList genres={genresArray} />
      </div>
    </>
  )
}
