// lib/image.ts
export async function imageExists(url?: string | null) {
  if (!url) return false;
  try {
    const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    return res.ok;
  } catch {
    return false;
  }
}
