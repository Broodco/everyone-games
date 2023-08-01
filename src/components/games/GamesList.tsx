"use client"

import { Game } from "@/types/types_Games"
import GameCard from "@/components/games/GameCard"

interface GamesListProps {
  games: Game[]
}

export default function GamesList(props: GamesListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {props.games.map((game: Game, index: number) => {
        return (
          <GameCard
            key={index}
            id={game.id}
            name={game.name}
            backgroundImage={game.background_image}
            platforms={game.platforms}
            slug={game.slug}
            metacritic={game.metacritic}
            rating={game.rating}
          />
        )
      })}
    </div>
  )
}
