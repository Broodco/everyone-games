import { Comfortaa } from "next/font/google"
import GamesList from "@/components/games/GamesList"
import { Game } from "@/types/types_Games"

const comfortaa = Comfortaa({ subsets: ["latin"] })

const fetchGames = async (page: number = 1) => {
  "use server"

  const hostname =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : process.env.HOST

  const games = await fetch(`${hostname}/api/games/popular?page=${page}`)
  const gamesArray: Game[] = (await games.json()).results

  return gamesArray
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const gamesArray: Game[] = await fetchGames()

  return (
    <>
      <h1 className={`text-slate-50 text-5xl mb-6 ${comfortaa.className}`}>
        Games
      </h1>
      <div className="flex-6">
        <GamesList initialGames={gamesArray} fetchGames={fetchGames} />
      </div>
    </>
  )
}
