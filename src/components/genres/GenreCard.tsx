import { Genre } from "@/types/types_Genre"
import { Comfortaa } from "next/font/google"
import Link from "next/link"

interface GenreCardProps {
  genre: Genre
}

const comfortaa = Comfortaa({ subsets: ["latin"] })

export default function GenreCard(props: GenreCardProps) {
  return (
    <Link
      href={`/genres/${props.genre.slug}`}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-900 text-center h-full"
    >
      <div className="relative">
        <img
          className="object-cover w-full  mx-0 shrink-0 h-60 rounded-lg rounded-b-none"
          src={props.genre.image_background}
          alt={props.genre.name}
        />
        <div className="absolute top-0 left-0 w-full h-full flex text-center text-gray-100 pt-4 items-center content-around bg-neutral-900/50 hover:bg-neutral-900/0">
          <h3
            className={`text-3xl mb-4 py-5 font-medium px-3 flex-grow
             shrink decoration-1 bg-neutral-900/50`}
          >
            {props.genre.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}
