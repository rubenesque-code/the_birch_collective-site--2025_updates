import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['png', 'jpg', 'jpeg', 'avif', 'webp'];

export default defineConfig({
	plugins: [
		sveltekit(),

		imagetools({
			defaultDirectives(url) {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);

				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						picture: 'true'
					});
				}
				return new URLSearchParams();
			}
		})
	],



	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
