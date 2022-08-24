import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: '/kitionary',
		},
		prerender: {
			default: true,
		},
		trailingSlash: 'always',
	},
};

export default config;
