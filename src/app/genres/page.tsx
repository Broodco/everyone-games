import {getGames, getGenres} from "@/lib/api_rawg";
import {Comfortaa} from "next/font/google";
import GamesList from "@/components/games/GamesList";
import {Game} from "@/types/types_Games";
import {Genre} from "@/types/types_Genre";
import GenresList from "@/components/genres/GenresList";

const comfortaa = Comfortaa({subsets: ['latin']})

const fetchGenres = async () => {
  'use server'

  const genres = await getGenres();
  const genresArray: Genre[] = genres.results;

  return genresArray;
}

export default async function Genres({searchParams}: {searchParams: {page: string}}) {
  const genresArray: Genre[] = await fetchGenres();

  return (
    <>
      <h1 className={`text-slate-50 text-5xl mb-6 ${comfortaa.className}`}>Genres</h1>
      <div className="flex-6">
        <GenresList genres={genresArray} />
      </div>
    </>
  )
}