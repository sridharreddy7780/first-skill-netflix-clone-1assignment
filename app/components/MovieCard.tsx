// app/components/MovieCard.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '../../types/movie';

export default function MovieCard({ movie }: { movie: Movie }) {
  const imdb = movie?.imdbID ?? '';
  const poster = movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/fallback-poster.png';
  const href = imdb ? `/movie/${encodeURIComponent(imdb)}` : '/';

  return (
    <div className="min-w-[140px] md:min-w-[150px] shrink-0">
      <Link href={href} className="group block">
        <div className="rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
          <div className="relative w-[140px] h-[210px] md:w-[150px] md:h-[225px]">
            <Image src={poster} alt={movie.Title} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="px-2 py-2">
            <div className="text-sm md:text-sm font-medium line-clamp-2">{movie.Title}</div>
            {movie.Year && <div className="text-xs text-gray-400 mt-1">{movie.Year}</div>}
          </div>
        </div>
      </Link>
    </div>
  );
}

