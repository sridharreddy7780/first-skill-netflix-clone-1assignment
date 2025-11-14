// app/components/MovieRow.tsx
'use client';
import type { Movie } from '../../types/movie';
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-8">
      <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
      <div className="flex gap-4 overflow-x-auto py-2 px-1 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
        {movies.map((m) => (
          <div key={m.imdbID} style={{ scrollSnapAlign: 'start' }}>
            <MovieCard movie={m} />
          </div>
        ))}
      </div>
    </section>
  );
}
