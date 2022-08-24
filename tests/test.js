import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/kitionary/');
	const h1 = page.locator('h1');
	await expect(h1).toHaveText('Kitionary');
});

test('search works', async ({ page }) => {
	await page.goto('/kitionary/');
	const input = page.locator('input');
	await input.focus();
	await input.type('hel{2}o');

	const a = page.locator('li > a');
	await expect(a).toBeVisible();
	await expect(a).toHaveText('hello');
	await expect(a).toHaveAttribute(
		'href',
		'https://en.wiktionary.org/wiki/hello',
	);
});
