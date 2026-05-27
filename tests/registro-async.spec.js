const { test, expect } = require('@playwright/test');
const { RegistroPage } = require('../pages/RegistroPage');

test('Registro de usuario asincrono', async ({ page }) => {

  const registro = new RegistroPage(page);

  // 1. Navegar
  await registro.navegar();

  // 2. Llenar formulario
  await registro.llenarFormulario(
    'David Test',
    `test${Date.now()}@mail.com`,
    '123456'
  );

  // 3. Click registrar
  await registro.registrar();

  // 4. ✅ Polling (lo importante)
 await expect(page.locator('h1')).toContainText('Example Domain');
  { timeout: 10000 }

});