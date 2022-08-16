import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Kitionary');
});

test('search works', async ({ page }) => {
	const input = page.locator('input');

	await page.goto('/');
	await input.focus();
	await input.type('hel{2}o');

	const a = page.locator('li > a');
	expect(await a.textContent()).toBe('hello');
	expect(await a.getAttribute('href')).toBe(
		'https://en.wiktionary.org/wiki/hello',
	);
});
