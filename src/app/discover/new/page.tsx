import {getNewestGames} from "@/lib/api_rawg";
import {Comfortaa} from "next/font/google";
import GamesList from "@/components/games/GamesList";
import {Game} from "@/types/types_Games";

const comfortaa = Comfortaa({subsets: ['latin']})

const fetchGames = async (page: number = 1) => {
  'use server'

  const games = await getNewestGames(page);
  const gamesArray: Game[] = games.results;

  return gamesArray;
}

export default async function NewGames() {
  const gamesArray: Game[] = await fetchGames();

  return (
    <>
      <h1 className={`text-slate-50 text-5xl mb-6 ${comfortaa.className}`}>Newest games</h1>

      <div className="flex-6">
        <div className="flex-6">
          <GamesList initialGames={gamesArray} fetchGames={fetchGames}/>
        </div>
      </div>
    </>
  )

}