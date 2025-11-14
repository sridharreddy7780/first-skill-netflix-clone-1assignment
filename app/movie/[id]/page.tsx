// app/movie/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { MovieDetail } from "../../../types/movie";
import { fetchMovieById } from "../../../lib/omdb";
import { imageExists } from "../../../lib/image";

type Props = {
  params: Promise<{ id?: string }> | { id?: string };
};

export default async function MoviePage(props: Props) {
  // unwrap params whether it's a promise or plain object
  const { params } = props as any;
  const resolvedParams = typeof params?.then === "function" ? await params : params;
  const id = String(resolvedParams?.id ?? "").trim();

  if (!id || id === "undefined") {
    return (
      <main className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Invalid movie ID</h2>
        <p className="mt-2 text-sm text-gray-400">No movie id provided in the URL.</p>
        <Link href="/" className="mt-4 inline-block text-blue-400">
          Back to home
        </Link>
      </main>
    );
  }

  // fetch movie details server-side
  let data: MovieDetail | null = null;
  try {
    data = await fetchMovieById(id);
  } catch (err: any) {
    return (
      <main className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Unable to load movie</h2>
        <p className="mt-2 text-sm text-gray-400">A network error occurred. Try again later.</p>
        <pre className="mt-3 text-xs text-red-400">{String(err?.message ?? err)}</pre>
        <Link href="/" className="mt-4 inline-block text-blue-400">
          Back to home
        </Link>
      </main>
    );
  }

  // OMDb may return Response: "False" with an Error
  if (!data || data.Response === "False") {
    return (
      <main className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold">Movie not available</h2>
        <p className="mt-2 text-sm text-gray-400">{data?.Error ?? "No details were returned."}</p>
        <Link href="/" className="mt-4 inline-block text-blue-400">
          Back to home
        </Link>
      </main>
    );
  }

  // prefer remote poster only if it really exists, otherwise use local fallback
  const remotePoster = data.Poster && data.Poster !== "N/A" ? data.Poster : null;
  const posterOk = remotePoster ? await imageExists(remotePoster) : false;
  const poster = posterOk ? remotePoster! : "/fallback-poster.png";

  return (
    <main className="py-8 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-[420px] md:h-[520px] rounded overflow-hidden bg-zinc-800">
          <Image src={poster} alt={data.Title} fill style={{ objectFit: "cover" }} priority />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{data.Title}</h1>
          <div className="mt-2 text-sm text-gray-300">
            {data.Genre} · {data.Runtime} · {data.Released}
          </div>

          <div className="mt-4 text-gray-200">
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-sm leading-relaxed">{data.Plot}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Director:</strong> <span className="text-gray-300">{data.Director}</span>
            </div>
            <div>
              <strong>Actors:</strong> <span className="text-gray-300">{data.Actors}</span>
            </div>
            <div>
              <strong>IMDB Rating:</strong> <span className="text-gray-300">{data.imdbRating}</span>
            </div>
            <div>
              <strong>Language:</strong> <span className="text-gray-300">{data.Language}</span>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/" className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded">
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
