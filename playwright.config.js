/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'pnpm vite build && pnpm vite preview',
		port: 4173,
	},
};

export default config;
