import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchValue = searchParams.get("search") ?? ""
  const page = searchParams.get("page") ?? "1"

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&ordering=-relevance&search=${searchValue}&search_precise=true&search_exact=true`,
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const games = await res.json()

  return NextResponse.json(games)
}
