import {getGames, getNewestGames} from "@/lib/games";
import GameCard from "@/components/games/GameCard";
import {Game} from "@/types/types_Games";

export default async function Games() {
  const games = await getGames();

  return (
    <>
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight my-4">
          All Games
        </h2>
      </div>
      <main>
        <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.results.map((game: Game, index: number) => {
            return (
              <li key={index}>
                <GameCard name={game.name} backgroundImage={game.background_image} platforms={game.platforms} metacritic={game.metacritic}/>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}