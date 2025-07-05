import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	build: { cssCodeSplit: true, cssMinify: true },
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib/'),
			$common: path.resolve('./src/components/common'),
			$comps: path.resolve('./src/components')
		}
	}
});
