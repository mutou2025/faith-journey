import type { APIRoute } from 'astro';
import { PUBLIC_CATEGORIES as CATEGORIES } from '../consts';
import { getPosts } from '../lib';
import { BOOKS } from '../bible/books';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const latest = posts[0]?.data.date.toISOString().slice(0, 10);
  const u = (path: string) => new URL(path, site).href;
  const entries: { loc: string; lastmod?: string; priority: string }[] = [
    { loc: u('/'), lastmod: latest, priority: '1.0' },
    { loc: u('/gospel/'), priority: '0.9' },
    { loc: u('/daily/'), priority: '0.8' },
    { loc: u('/prayer/'), priority: '0.8' },
    { loc: u('/basics/'), priority: '0.8' },
    { loc: u('/confession/'), priority: '0.7' },
    ...Array.from({ length: 24 }, (_, i) => ({ loc: u(`/confession/${i + 1}/`), priority: '0.6' })),
    { loc: u('/bible/'), priority: '0.8' },
    ...BOOKS.map((b) => ({ loc: u(`/bible/${b.slug}/`), priority: '0.5' })),
    ...BOOKS.flatMap((b) => Array.from({ length: b.chapters }, (_, i) => ({ loc: u(`/bible/${b.slug}/${i + 1}/`), priority: '0.4' }))),
    { loc: u('/group/'), priority: '0.7' },
    { loc: u('/posts/'), lastmod: latest, priority: '0.8' },
    { loc: u('/about/'), priority: '0.5' },
    { loc: u('/captions/'), priority: '0.5' },
    ...CATEGORIES.map((c) => ({ loc: u(`/category/${c.slug}/`), priority: '0.6' })),
    ...posts.map((p) => ({ loc: u(`/posts/${p.id}/`), lastmod: p.data.date.toISOString().slice(0, 10), priority: '0.7' })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}<priority>${e.priority}</priority></url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
