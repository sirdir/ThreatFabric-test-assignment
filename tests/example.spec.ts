import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://openlibrary.org/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Welcome to Open Library | Open Library/);
});
