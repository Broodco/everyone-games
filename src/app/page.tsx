import {getGames} from "@/lib/games";
import GameCard from "@/components/games/GameCard";
import {Game} from "@/types/types_Games";

export default async function Home() {
  const games = await getGames();

  return (
    <>
      <div className="flex-6">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.results.map((game: Game, index: number) => {
            return (
              <li key={index}>
                <GameCard
                  name={game.name}
                  backgroundImage={game.background_image}
                  platforms={game.platforms}
                  slug={game.slug}
                  metacritic={game.metacritic}
                  rating={game.rating}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}