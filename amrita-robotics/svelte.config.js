import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/amrita-robotics' : ''
		},
		prerender: {
			handleHttpError: 'ignore' // 👈 fully ignore 404s (no warnings printed)
		}
	}
};

export default config;
