import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const svelteConfig = {
	kit: {
		adapter: adapter(),
	},
};

export default svelteConfig;
