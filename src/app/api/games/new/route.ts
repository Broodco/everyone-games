import {
  getDateModifiedByDaysToString,
  getTodaysDateToString,
} from "@/lib/utils"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get("page") ?? "1"

  const today = getTodaysDateToString()
  const last_week = getDateModifiedByDaysToString(-7)

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page=${page}&page_size=32&dates=${last_week},${today}&ordering=-relevance`,
  )

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const games = await res.json()

  return NextResponse.json(games)
}
