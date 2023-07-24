import {getDateModifiedByDaysToString, getDateModifiedByMonthsToString, getTodaysDateToString} from "@/lib/utils";

export async function getGames(pageNumber: number = 1, pageSize: number = 32) {
  const today = getTodaysDateToString();
  const three_months_ago_string = getDateModifiedByMonthsToString(-3);
  const res = await fetch(
    `https://api.rawg.io/api/games/lists/main?discover=true&key=${process.env.RAWG_API_KEY}&page_size=${pageSize}&page=${pageNumber}&dates=${three_months_ago_string},${today}&ordering=-relevance`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export async function getNewestGames(pageNumber: number = 1, pageSize: number = 32) {
  const today = getTodaysDateToString();
  const last_week = getDateModifiedByDaysToString(-7);

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=${last_week},${today}&ordering=-added`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export async function getGenres() {
  const res = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.RAWG_API_KEY}`
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}