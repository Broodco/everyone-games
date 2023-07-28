import { Comfortaa } from "next/font/google"
import { GameDetails } from "@/types/types_Games"
import { ChevronRightIcon } from '@heroicons/react/20/solid'

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
      <div className="lg:relative flex flex-col lg:flex-none">
        <h1 className="lg:absolute text-4xl font-bold tracking-tight text-white z-40 bg-gray-900 p-4 rounded-md lg:mt-28 max-w-md">{gameDetails.name}</h1>
        <img src={gameDetails.background_image} alt="Game background" className="w-full max-h-96 lg:w-full lg:max-w-4xl lg:h-96 object-cover lg:ml-28 rounded-md"/>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 mx-6 justify-around">
        <div className="basis-1/2 px-8 py-4">
          <h2 className="text-white tracking-tight text-xl font-semibold mb-4">About the game :</h2>
          <p dangerouslySetInnerHTML={ { __html: gameDetails.description } } />
        </div>
        <div className="basis-1/2">

        </div>
      </div>
    </>
  )
}
