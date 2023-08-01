import InfiniteGamesList from "@/components/games/InfiniteGamesList"
import { Game } from "@/types/types_Games"
import PageTitle from "@/components/common/PageTitle";

const fetchGames = async (page: number = 1) => {
  "use server"

  const hostname =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : `${process.env.HOST}`

  const games = await fetch(`${hostname}/api/games/new?page=${page}`)
  const gamesArray: Game[] = (await games.json()).results

  return gamesArray
}

export default async function NewGames() {
  const gamesArray: Game[] = await fetchGames()

  return (
    <>
      <PageTitle title="Newest games" />

      <div className="flex-6">
        <div className="flex-6">
          <InfiniteGamesList initialGames={gamesArray} fetchGames={fetchGames} />
        </div>
      </div>
    </>
  )
}
