// app/components/HeroBanner.tsx (server component)
import Image from 'next/image';
import type { Movie, MovieDetail } from '../../types/movie';
import { imageExists } from '../../lib/image';

export default async function HeroBanner({ movie }: { movie?: Movie | MovieDetail | null }) {
  if (!movie) return null;

  const remote = (movie as any).Poster && (movie as any).Poster !== 'N/A' ? (movie as any).Poster : null;
  const ok = remote ? await imageExists(remote) : false;
  const poster = ok ? remote! : '/fallback.png'; // use your existing fallback png

  const title = (movie as any).Title ?? 'Untitled';
  const year = (movie as any).Year ?? '';
  const plot = (movie as any).Plot;

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[72vh] w-full overflow-hidden rounded-md">
      <Image src={poster} alt={title} fill priority style={{ objectFit: 'cover' }} className="brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
      <div className="absolute left-6 md:left-12 bottom-8 max-w-3xl text-white">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h1>
        {year && <div className="mt-2 text-sm md:text-base text-gray-300">{year}</div>}
        {plot && <p className="hidden md:block mt-4 text-sm md:text-base text-gray-200 max-w-xl">{plot}</p>}
        <div className="mt-5 flex gap-3">
          <button className="bg-white text-black px-4 py-2 rounded-md font-semibold shadow">▶ Play</button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">+ My List</button>
        </div>
      </div>
    </section>
  );
}

