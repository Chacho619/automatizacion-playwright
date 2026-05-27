const { test, expect } = require('@playwright/test');

test('Registro de usuario asincrono', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page.locator('h1')).toContainText('Example Domain', {
    timeout: 10000,
  });
});
