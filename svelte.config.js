import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// export const locales = ['ar', 'en', 'es', 'pt', 'ru', 'th'];
export const locales = ['en', 'ru', 'es'];
const entries = locales.map((locale) => `/${locale}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/turbo-trade' : ''
		},
		prerender: {
			entries: [...entries, '/']
		}
	},
	alias: {
		$lib: path.resolve('src/lib'),
		$common: path.resolve('src/components/common'),
		$comps: path.resolve('src/components')
	}
};

export default config;
