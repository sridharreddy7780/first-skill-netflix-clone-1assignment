// app/page.tsx
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import { searchMovies, fetchMovieById } from '../lib/omdb';
import type { Movie, MovieDetail } from '../types/movie';

export default async function Home() {
  const categories = [
    { key: 'trending', q: 'avengers' },
    { key: 'action', q: 'batman' },
    { key: 'superhero', q: 'spiderman' },
    { key: 'fantasy', q: 'harry potter' },
  ];

  const results = await Promise.all(categories.map((c) => searchMovies(c.q)));
  const moviesByCategory: Record<string, Movie[]> = {};
  results.forEach((res, i) => (moviesByCategory[categories[i].key] = res?.Search ?? []));

  const heroShort = moviesByCategory[categories[0].key]?.[0] ?? null;
  let heroDetail: MovieDetail | Movie | null = heroShort;
  if (heroShort?.imdbID) {
    try {
      heroDetail = await fetchMovieById(heroShort.imdbID);
    } catch {
      heroDetail = heroShort;
    }
  }

  return (
    <div>
      <HeroBanner movie={heroDetail} />
      <main className="mt-8">
        <div className="space-y-8">
          {categories.map((c) => (
            <MovieRow key={c.key} title={c.key === 'trending' ? 'Trending Now' : c.key} movies={moviesByCategory[c.key]} />
          ))}
        </div>
      </main>
    </div>
  );
}
