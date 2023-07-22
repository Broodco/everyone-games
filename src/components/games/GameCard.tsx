import PlatformsList from "@/components/games/PlatformsList";
import {PlatformInfo} from "@/types/types_Platform";

interface GameCardProps {
  name: string,
  backgroundImage: string,
  metacritic: number,
  platforms: PlatformInfo[]
}

export default function GameCard(props : GameCardProps) {
  return (
    <div
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-700 text-center shadow h-full m-1"
    >
      <div className="flex flex-col flex-auto">
        <img className="object-cover mx-0 shrink-0 h-48 rounded-lg rounded-b-none" src={props.backgroundImage} alt={props.name} />
        <div className="flex flex-row justify-between pt-1 px-2 mt-1">
          <PlatformsList platforms={props.platforms}/>
          <p className="inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-medium text-green-200 ring-1 ring-inset ring-green-200/20">{props.metacritic}</p>
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-100 px-2 line-clamp-2 text-left flex-grow">{props.name}</h3>
      </div>
    </div>
  )
}