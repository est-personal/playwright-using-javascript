const { test, expect } = require('@playwright/test');
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');

test.describe('QA Playground - Input Fields Tests', () => {

    let inputPage;

    test.beforeEach(async ({ page }) => {
        inputPage = new InputFieldsPage(page);
        await inputPage.navigateToInputFields();
    });

    test('TC01 Verify successful movie name input', async () => {
        await inputPage.enterMovieName(
            InputFieldsData.movieName
        );
        const value =
            await inputPage.getMovieNameValue();
        expect(value)
            .toBe(InputFieldsData.movieName);
    });

    test('TC02 Verify placeholder disappears on typing', async ({ page }) => {
        const placeholder =
            await inputPage.getMoviePlaceholder();
        expect(placeholder)
            .toBe(InputFieldsData.placeholder);
        await inputPage.enterMovieName(
            InputFieldsData.movieName
        );
        await expect(
            page.locator('[data-testid="input-movie-name"]')
        ).toHaveValue(
            InputFieldsData.movieName
        );
    });

    test('TC03 Verify tab triggers focus change', async ({ page }) => {
        const appendInput =
            page.locator('[data-testid="input-append-text"]');
        await appendInput.click();
        await inputPage.appendText(
            InputFieldsData.appendText
        );
        await inputPage.pressTab();
        await expect(appendInput)
            .not.toBeFocused();
    });

    test('TC04 Verify appended text retained', async () => {
        const originalText =
            await inputPage.getAppendValue();
        await inputPage.appendText(
            InputFieldsData.appendText
        );
        const updatedText =
            await inputPage.getAppendValue();
        expect(updatedText)
            .toContain(originalText);
        expect(updatedText)
            .toContain('I am good');
    });

    test('TC05 Verify text inside field', async () => {
        const value =
            await inputPage.getVerifyTextValue();
        expect(value)
            .toBe(
                InputFieldsData.verifyText
            );
    });

    test('TC06 Verify getAttribute value', async () => {
        const value =
            await inputPage.getVerifyTextAttribute();
        expect(value)
            .toBe(
                InputFieldsData.verifyText
            );
    });

    test('TC07 Verify field can be cleared', async () => {
        const initialValue =
            await inputPage.getClearFieldValue();
        expect(initialValue)
            .toBe(
                InputFieldsData.clearText
            );
        await inputPage.clearInputField();
        expect(
            await inputPage.getClearFieldValue()
        ).toBe('');
    });

    test('TC08 Verify field empty after clear', async () => {
        await inputPage.clearInputField();
        expect(
            await inputPage.getClearFieldValue()
        ).toBe('');
    });

    test('TC09 Verify disabled field cannot be edited', async ({ page }) => {
        const disabledField =
            page.locator('[data-testid="input-disabled"]');
        await expect(disabledField)
            .toBeDisabled();
        expect(
            await inputPage.getDisabledValue()
        ).toBe(
            InputFieldsData.disabledText
        );
    });

    test('TC10 Verify disabled field returns false', async ({ page }) => {
        const disabledField =
            page.locator('[data-testid="input-disabled"]');
        expect(
            await inputPage.isDisabled()
        ).toBeTruthy();
        await expect(disabledField)
            .toBeDisabled();
    });

    test('TC11 Verify readonly field does not accept typing', async ({ page }) => {
        const readonlyField =
            page.locator('[data-testid="input-readonly"]');
        const originalValue =
            await readonlyField.inputValue();
        expect(originalValue)
        .toBe('This text is readonly');
        await readonlyField.click();
        await page.keyboard.type('New Text');
        await expect(readonlyField)
            .toHaveValue('This text is readonly');
    });

    test('TC12 Verify readonly attribute exists', async ({ page }) => {
        const readonlyField =
            page.locator('[data-testid="input-readonly"]');
        await expect(readonlyField)
            .toHaveAttribute('readonly');
        expect(
            await inputPage.getReadonlyAttribute()
        ).not.toBeNull();
    });

});