import type { APIRoute } from 'astro';
import { CUV } from '../../bible/data';

// 整本和合本（供“关键词搜索”按需加载）
export const GET: APIRoute = () =>
  new Response(JSON.stringify(CUV), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
