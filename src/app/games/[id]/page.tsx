import { Comfortaa } from "next/font/google"
import { Game, GameDetails } from "@/types/types_Games"

const comfortaa = Comfortaa({ subsets: ["latin"] })

const fetchGameDetails = async (id: string) => {
  "use server"

  const hostname =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL}`
      : `${process.env.HOST}`

  const res = await fetch(`${hostname}/api/games/${id}`)
  const gameDetails: GameDetails = await res.json()

  return gameDetails
}

export default async function Game({ params }: { params: { id: string } }) {
  const gameDetails: GameDetails = await fetchGameDetails(params.id)

  return (
    <>
      <div>Game : {gameDetails.name}</div>

      <div>{JSON.stringify(gameDetails)}</div>
    </>
  )
}
