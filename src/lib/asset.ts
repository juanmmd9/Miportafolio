/** Prefijo de assets para GitHub Pages (/Miportafolio) o vacio en local. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
