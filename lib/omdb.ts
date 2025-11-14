// lib/omdb.ts
const BASE = "https://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

if (!API_KEY) {
  throw new Error("OMDB_API_KEY missing in .env.local");
}

export async function searchMovies(keyword = "avengers") {
  const url = `${BASE}?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export async function fetchMovieById(id: string) {
  const url = `${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`;
  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

