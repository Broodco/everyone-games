import {Genre} from "@/types/types_Genre";
import {Comfortaa} from "next/font/google";
import Link from "next/link";
import PlatformsList from "@/components/games/PlatformsList";


interface GenreCardProps {
  genre: Genre;
}

const comfortaa = Comfortaa({subsets: ['latin']})

export default function GenreCard(props: GenreCardProps) {
  return (
    <Link
      href={`/genres/${props.genre.slug}`}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-900 text-center shadow-sm shadow-cyan-900 h-full m-1"
    >
      <div className="flex flex-col flex-auto">
        <img className="object-cover mx-0 shrink-0 h-60 rounded-lg rounded-b-none" src={props.genre.image_background} alt={props.genre.name} />
        <h3 className={`mt-4 text-2xl font-medium text-gray-100 px-3 line-clamp-3 text-ellipsis text-left flex-grow`}>{props.genre.name}</h3>
      </div>

    </Link>
  )
}