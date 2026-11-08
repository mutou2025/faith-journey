// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // 部署到 Vercel 后，可以把这里改成正式网址
  site: 'https://faith-journey.vercel.app',
  trailingSlash: 'always',
});
