import InfiniteGamesList from "@/components/games/InfiniteGamesList"
import { Game } from "@/types/types_Games"
import PageTitle from "@/components/common/PageTitle";
import GamesList from "@/components/games/GamesList";

const fetchGames = async (searchValue: string = "") => {
  "use server"

  const hostname =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : `${process.env.HOST}`

  const games = await fetch(`${hostname}/api/games?search=${searchValue}`)
  const gamesArray: Game[] = (await games.json()).results

  return gamesArray
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { page: number, q?: string }
}) {
  const gamesArray: Game[] = await fetchGames(searchParams.q)
  return (
    <>
      <PageTitle title="Search results" />
      <div className="flex-6">
        <GamesList games={gamesArray}/>
      </div>
    </>
  )
}
