import { NextResponse } from "next/server"

export async function GET() {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`,
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const games = await res.json()

  return NextResponse.json(games)
}
