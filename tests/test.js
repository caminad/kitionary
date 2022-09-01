import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/kitionary/');
	const h1 = page.locator('h1');
	await expect(h1).toHaveText('Kitionary');
});

test('search works', async ({ page }) => {
	await page.goto('/kitionary/');
	const search = page.locator('[type=search]');
	await search.focus();
	await search.type('hel{2}o');

	const link = page.locator('li > a');
	await expect(link).toBeVisible();
	await expect(link).toHaveText('hello');
	await expect(link).toHaveAttribute(
		'href',
		'https://en.wiktionary.org/wiki/hello',
	);
});
