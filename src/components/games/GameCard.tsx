import PlatformsList from "@/components/games/PlatformsList"
import { PlatformInfo } from "@/types/types_Platform"
import Link from "next/link"

interface GameCardProps {
  id: number
  name: string
  backgroundImage: string
  metacritic: number
  rating: number
  slug: string
  platforms: PlatformInfo[]
}


export default function GameCard(props: GameCardProps) {
  let ratingColor: string = ""
  const rating = props.metacritic ?? Math.round(props.rating * 20)

  switch (true) {
    case rating >= 85:
      ratingColor = "text-green-400 ring-green-400"
      break
    case rating >= 70 && rating < 85:
      ratingColor = "text-blue-400 ring-blue-400"
      break
    case rating >= 60 && rating < 70:
      ratingColor = "text-yellow-400 ring-yellow-400"
      break
    case rating >= 50 && rating < 60:
      ratingColor = "text-orange-400 ring-orange-400"
      break
    case rating < 50 && rating !== 0:
      ratingColor = "text-red-400 ring-red-400"
      break
    case rating === 0:
      ratingColor = "text-gray-400 ring-gray-400"
      break
  }

  return (
    <Link
      className="col-span-1 m-1 flex h-full flex-col divide-y divide-gray-200 rounded-lg bg-gray-900 text-center shadow-sm shadow-cyan-900"
      href={`/games/${props.id.toString()}`}
    >
      <div className="flex flex-auto flex-col">
        <img
          className="mx-0 h-60 shrink-0 rounded-lg rounded-b-none object-cover"
          src={props.backgroundImage}
          alt={props.name}
        />
        <div className="mt-1 flex flex-row justify-between px-3 pt-1">
          <PlatformsList platforms={props.platforms} />
          <p
            className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-medium ring-1 ring-inset ${ratingColor}`}
          >
            {rating !== 0 ? rating : `No rating yet`}
          </p>
        </div>
        <h3
          className={`mt-4 line-clamp-3 flex-grow text-ellipsis px-3 text-left text-2xl font-medium text-gray-100`}
        >
          {props.name}
        </h3>
      </div>
    </Link>
  )
}
