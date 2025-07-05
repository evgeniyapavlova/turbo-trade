import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// export const locales = ['ar', 'en', 'es', 'pt', 'ru', 'th'];
export const locales = ['en'];
const entries = locales.map((locale) => `/${locale}/index`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() },
	prerender: {
		entries: [...entries, '/']
	},
	alias: {
		$lib: path.resolve('src/lib'),
		$common: path.resolve('src/components/common'),
		$comps: path.resolve('src/components')
	}
};

export default config;
