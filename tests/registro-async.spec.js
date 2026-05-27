const { test, expect } = require('@playwright/test');

test('Registro de usuario asincrono', async ({ page }) => {

  // Ir a página pública
  await page.goto('https://example.com');

  // ✅ Polling (lo importante)
  await expect(page.locator('h1')).toContainText('Example Domain', {
    timeout: 10000
  });

});
``