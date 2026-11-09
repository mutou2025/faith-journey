import type { APIRoute } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPosts } from '../lib';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  const items = posts
    .map((p) => {
      const link = new URL(`/posts/${p.id}/`, site).href;
      return `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <category>${esc(p.data.category)}</category>
      <description>${esc(p.data.summary)}</description>
    </item>`;
    })
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE_TITLE)}</title>
    <link>${new URL('/', site).href}</link>
    <description>${esc(SITE_DESCRIPTION)}</description>
    <language>zh-cn</language>
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
