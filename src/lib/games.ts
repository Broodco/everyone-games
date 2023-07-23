
export async function getGames(pageNumber: number = 1, pageSize: number = 32) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=${pageSize}&page=${pageNumber}&dates=2023-05-23,2023-07-23`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

export async function getNewestGames(pageNumber: number = 1, pageSize: number = 20) {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2023-07-11,2023-07-18&ordering=-added`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

