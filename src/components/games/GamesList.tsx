'use client'

import {Game} from "@/types/types_Games";
import GameCard from "@/components/games/GameCard";
import InfiniteScroll from "react-infinite-scroller";
import {useRef, useState} from "react";

interface GamesListProps {
  initialGames: Game[];
  fetchGames: (page: number) => Promise<Game[]>;
}

export default function GamesList(props : GamesListProps) {
  const fetching = useRef(false);
  const [pages, setPages] = useState([props.initialGames]);
  const games = pages.flatMap((page) => page);

  const loadMore = async (page: number) => {
    console.log('LOAD MORE')
    if (!fetching.current) {
      try {
        fetching.current = true;

        const data = await props.fetchGames(page);
        setPages((prev) => [...prev, data]);
      } finally {
        fetching.current = false;
      }
    }
  };


  return (
    <InfiniteScroll
      loadMore={loadMore}
      loader={
        <li key={0} className="loader">
          Loading ...
        </li>
      }
      element="div"
      hasMore={true || false}
      useWindow={true}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {games.map((game: Game, index: number) => {
        return (
            <GameCard
              key={index}
              name={game.name}
              backgroundImage={game.background_image}
              platforms={game.platforms}
              slug={game.slug}
              metacritic={game.metacritic}
              rating={game.rating}
            />
        )
      })}
    </InfiniteScroll>
  );
}