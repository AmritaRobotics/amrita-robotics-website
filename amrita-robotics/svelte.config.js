import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// default options are shown
		adapter: adapter({
			// if true, will create a Netlify Edge Function rather
			// than using standard Node-based functions
			edge: false,

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app.
			// if `edge` is true, this option cannot be used
			split: false
		})
	}
};

export default config;


// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


// const config = {
// 	preprocess: vitePreprocess(),

// 	kit: {
// 		adapter: adapter({
// 			fallback: 'index.html'
// 		}),
// 		paths: {
// 			base: process.env.NODE_ENV === 'production' ? '/amrita-robotics' : ''
// 		},
// 		prerender: {
// 			handleHttpError: 'ignore' // 👈 fully ignore 404s (no warnings printed)
// 		}
// 	}
// };

// export default config;