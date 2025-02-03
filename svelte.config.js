import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			'~ui': 'src/lib/shadcn',
			'~shadcn-utils': 'src/lib/shadcn/utils',
			'~shadcn-hooks': 'src/lib/shadcn/hooks',
			'~shadcn-ui': 'src/lib/shadcn/ui',

			'^assets': 'src/lib/assets',
			'^components': 'src/lib/components',
			'^types': 'src/lib/types'
		}
	}
};

export default config;
