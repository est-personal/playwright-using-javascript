const {test, expect} = require('@playwright/test')
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');

test('Visit Playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe('Input Fields Tests', () => {
  test('Input', async ({ page }) => {
    const inputFieldsPage = new InputFieldsPage(page);
    await inputFieldsPage.navigateToInputFieldsPage();
    await inputFieldsPage.enterMovieName(InputFieldsData.movieName);
  });
});
