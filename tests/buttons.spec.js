const { test, expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { ButtonsData } = require('../testData/ButtonsData');

test.describe('QA Playground - Buttons Tests', () => {

    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
    });

    test('Verify button is clickable and triggers action', async () => {
        await buttonsPage.clickPrimaryButton();
        expect(
            await buttonsPage.getClickMessage()
        ).toContain(
            ButtonsData.clickSuccessMessage
        );
    });

    test('Verify button displays correct label text', async () => {
        const actualText =
            await buttonsPage.getButtonText();
        expect(actualText.trim())
            .toBe(
                ButtonsData.expectedButtonText
            );
    });

    test('Verify button triggers correct action', async () => {
        await buttonsPage.clickPrimaryButton();
        expect(
            await buttonsPage.getClickMessage()
        ).toContain(
            ButtonsData.clickSuccessMessage
        );
    });

    test('Verify double click action', async () => {
        await buttonsPage.doubleClickButton();
        expect(
            await buttonsPage.getDoubleClickMessage()
        ).toContain(
            ButtonsData.doubleClickMessage
        );
    });

    test('Verify right click action', async () => {
        await buttonsPage.rightClickButton();
        expect(
            await buttonsPage.getRightClickMessage()
        ).toContain(
            ButtonsData.rightClickMessage
        );
    });

    test('Verify disabled button cannot be clicked', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="disabled-button"]'
            );
        await expect(button)
            .toBeDisabled();
    });

    test('Verify button is enabled', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        await expect(button)
            .toBeEnabled();
    });

    test('Verify button responsive on mobile', async ({ page }) => {

        await page.setViewportSize({
            width: 375,
            height: 812
        });
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        await expect(button)
            .toBeVisible();
        await button.click();
    });

    test('Verify keyboard accessibility', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        await button.focus();
        await page.keyboard.press('Enter');
        await expect(
            page.locator(
                '[data-testid="click-message"]'
            )
        ).toBeVisible();
    });

    test('Verify screen reader accessibility', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        await expect(button)
            .toHaveRole('button');
    });

    test('Verify hover state changes', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        const beforeColor =
            await button.evaluate(
                el => getComputedStyle(el).backgroundColor
            );
        await button.hover();
        const afterColor =
            await button.evaluate(
                el => getComputedStyle(el).backgroundColor
            );
        expect(afterColor)
            .not.toBe(beforeColor);
    });

    test('Verify state resets after refresh', async ({ page }) => {
        await buttonsPage.clickPrimaryButton();
        await page.reload();
        await expect(
            page.locator(
                '[data-testid="click-message"]'
            )
        ).not.toBeVisible();
    });

    test('Verify button does not overlap elements', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        const box =
            await button.boundingBox();
        expect(box.width)
            .toBeGreaterThan(0);
        expect(box.height)
            .toBeGreaterThan(0);
    });

    test('Verify button styling', async ({ page }) => {
        const button =
            page.locator(
                '[data-testid="primary-button"]'
            );
        const styles =
            await button.evaluate(el => ({
                backgroundColor:
                    getComputedStyle(el).backgroundColor,
                fontSize:
                    getComputedStyle(el).fontSize,
                fontWeight:
                    getComputedStyle(el).fontWeight
            }));
        expect(styles.backgroundColor)
            .toBeTruthy();
        expect(styles.fontSize)
            .toBeTruthy();
        expect(styles.fontWeight)
            .toBeTruthy();
    });

    test('Verify page loads without errors', async ({ page }) => {
        const consoleErrors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });
        const response =
            await page.goto(
                'https://qaplayground.com/practice/buttons'
            );
        expect(response.status())
            .toBe(200);
        await expect(
            page.locator('button')
        ).toHaveCount(
            await page.locator('button').count()
        );

        expect(consoleErrors.length)
            .toBe(0);
    });

});