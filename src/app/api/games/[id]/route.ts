import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const res = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API_KEY}`
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const games = await res.json()

  return NextResponse.json(games)
}
