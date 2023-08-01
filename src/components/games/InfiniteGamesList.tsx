"use client"

import { Game } from "@/types/types_Games"
import GameCard from "@/components/games/GameCard"
import InfiniteScroll from "react-infinite-scroller"
import {useEffect, useRef, useState} from "react"

interface InfiniteGamesListProps {
  initialGames: Game[]
  fetchGames: (page?: number, search?: string) => Promise<Game[]>
  searchValue?: string
}

export default function InfiniteGamesList(props: InfiniteGamesListProps) {
  const fetching = useRef(false)
  const [pages, setPages] = useState([props.initialGames])
  let games = pages.flatMap((page) => page)

  useEffect(() => {
    setPages([props.initialGames]);
  }, [props.initialGames])

  const handleLoadMore = async (page: number, searchQuery: string = "") => {
    if (!fetching.current) {
      try {
        fetching.current = true

        const data = await props.fetchGames(page, searchQuery)
        setPages((prev) => [...prev, data])
      } finally {
        fetching.current = false
      }
    }
  }

  return (
    <InfiniteScroll
      loadMore={() => handleLoadMore(1, props.searchValue)}
      pageStart={1}
      loader={
        <span key={0} className="text-sm text-slate-200 decoration-0">
          Loading ...
        </span>
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
    </InfiniteScroll>
  )
}
