// lib/omdb.ts
const BASE = "https://www.omdbapi.com/";

function getApiKey(): string {
  const key = process.env.OMDB_API_KEY;
  if (!key) {
    // Don't throw at import time — throw when a function actually needs the key.
    throw new Error(
      "OMDB_API_KEY is not defined. Set OMDB_API_KEY in .env.local (local) and in Vercel Environment Variables (Production)."
    );
  }
  return key;
}

export async function searchMovies(keyword = "avengers") {
  const API_KEY = getApiKey();
  const url = `${BASE}?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`OMDb searchMovies failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function fetchMovieById(id: string) {
  const API_KEY = getApiKey();
  const url = `${BASE}?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`OMDb fetchMovieById failed: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

