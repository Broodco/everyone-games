import PlatformsList from "@/components/games/PlatformsList";
import {PlatformInfo} from "@/types/types_Platform";
import {Comfortaa} from "next/font/google";
import Link from "next/link";

interface GameCardProps {
  name: string,
  backgroundImage: string,
  metacritic: number,
  rating: number,
  slug: string,
  platforms: PlatformInfo[]
}

const comfortaa = Comfortaa({subsets: ['latin']})

export default function GameCard(props : GameCardProps) {
  let ratingColor: string = "";
  const rating = props.metacritic ?? Math.round(props.rating * 20);


  switch (true) {
    case rating >= 85:
      ratingColor = "text-green-400 ring-green-400";
      break;
    case rating >= 70 && rating < 85:
      ratingColor = "text-blue-400 ring-blue-400";
      break;
    case rating >= 60 && rating < 70:
      ratingColor = "text-yellow-400 ring-yellow-400";
      break;
    case rating >= 50 && rating < 60:
      ratingColor = "text-orange-400 ring-orange-400";
      break;
    case rating < 50 && rating !== 0:
      ratingColor = "text-red-400 ring-red-400";
      break;
    case rating === 0:
      ratingColor = "text-gray-400 ring-gray-400";
      break;
  }

  return (
    <Link
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-900 text-center shadow-sm shadow-cyan-900 h-full m-1"
      href={`/games/${props.slug}`}
    >
      <div className="flex flex-col flex-auto">
        <img className="object-cover mx-0 shrink-0 h-60 rounded-lg rounded-b-none" src={props.backgroundImage} alt={props.name} />
        <div className="flex flex-row justify-between pt-1 px-3 mt-1">
          <PlatformsList platforms={props.platforms}/>
          <p className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-medium ring-1 ring-inset ${ratingColor}`}>
            {rating !== 0 ? rating : `No rating yet`}
          </p>
        </div>
        <h3 className={`mt-4 text-2xl font-medium text-gray-100 px-3 line-clamp-2 text-left flex-grow ${comfortaa.className}`}>{props.name}</h3>
      </div>
    </Link>
  )
}