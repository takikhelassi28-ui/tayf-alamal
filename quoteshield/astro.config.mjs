// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.easyliife.online',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});
