const {test, expect} = require('@playwright/test')
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');


test('My First Test', async function ({ page }) {
    expect(12).toBe(12)
})

test('My Second Test', async function ({ page }) {
    expect(100).toBe(101)
})

test('My Third Test', async function ({ page }) {
    expect(2.0).toBe(2.0)
})


test('Visit Playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Search example', async ({ page }) => {
  await page.goto('https://google.com');
  await page.fill('input[name="q"]', 'Playwright testing');
  await page.press('input[name="q"]', 'Enter');
});

test.describe('Input Fields Tests', () => {
  test('Input', async ({ page }) => {
    const inputFieldsPage = new InputFieldsPage(page);
    await inputFieldsPage.navigateToInputFieldsPage();
    await inputFieldsPage.enterMovieName(InputFieldsData.movieName);
  });
});
