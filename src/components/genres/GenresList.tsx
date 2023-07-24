import {Genre} from "@/types/types_Genre";
import GenreCard from "@/components/genres/GenreCard";


interface GenresListProps {
  genres: Genre[];
}

export default function GenresList(props: GenresListProps) {
  return (
    <ul
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {props.genres.map((genre: Genre) => {
        return (
          <GenreCard genre={genre} key={genre.id} />
        )
      })}
    </ul>
  )
}