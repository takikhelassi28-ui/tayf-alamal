// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://quoteshield-roan.vercel.app',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});
