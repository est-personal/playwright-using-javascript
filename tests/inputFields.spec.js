const { test, expect } = require('@playwright/test');
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');

test.describe('QA Playground - Input Fields Tests', () => {

    let inputFieldsPage;

    test.beforeEach(async ({ page }) => {
        inputFieldsPage = new InputFieldsPage(page);
        await inputFieldsPage.navigateToInputFields();
    });

    test.describe('Scenario Type Movie', () => {
        test('Type a Movie Name', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async () => {
            // Wait for Type Movie section to be visible
            await expect(
                inputFieldsPage.getTypeMovieSection()
            ).toBeVisible();
            // Enter text in Movie Name input
            await inputFieldsPage.enterMovieName(
                InputFieldsData.enteredMovieName
            );
            await expect(
                inputFieldsPage.getMovieNameInput()
            ).toHaveValue(
                InputFieldsData.enteredMovieName
            );
            // Click Submit button
            await inputFieldsPage.clickSubmitButton();
            // Validate text is reflected in Movie Name result
            await expect(
                inputFieldsPage.getMovieNameResult()
            ).toHaveText(
                InputFieldsData.movieValueText
            );
        });

        test('No movie entered', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ page }) => {
            // Wait for Type Movie section to be visible
            await expect(
                inputFieldsPage.getTypeMovieSection()
            ).toBeVisible();
            // Click Submit button
            await inputFieldsPage.clickSubmitButton();
            // Validate value of Movie Name result if no movie entered
            await expect(
                inputFieldsPage.getMovieNameResult()
            ).toHaveText(
                InputFieldsData.defaultMovieNameResultNoneEntered
            );
        });

    });

    test.describe('Scenario Append Tab', () => {
        test('Append Text and Press Tab', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ page }) => {
            // Wait for Append Tab section to be visible
            await expect(
                inputFieldsPage.getAppendTabSection()
            ).toBeVisible();
            // Enter text in Append Tab input
            await inputFieldsPage.appendText(
                InputFieldsData.appendText
            );
            await expect(
                inputFieldsPage.getAppendTabInput()
            ).toHaveValue(
                InputFieldsData.appendValue
            );
            // console.log(
            //     await inputFieldsPage.getAppendTabInput().inputValue()
            // );
            // Press Tab
            await inputFieldsPage.pressTabAppendTextField();
            //Validate Append Tab result
            await expect(
                inputFieldsPage.getAppendTabResult()
            ).toHaveText(
                InputFieldsData.appendValueText
            );
        });

        test('Focus after pressing Tab', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ page }) => {
            // Wait for Append Tab section to be visible
            await expect(
                inputFieldsPage.getAppendTabSection()
            ).toBeVisible();
            // Click Append Tab input
            await inputFieldsPage.getAppendTabInput().click();
            // Verify focus in Append Tab input
            await expect(
                inputFieldsPage.getAppendTabInput()
            ).toBeFocused();
            // Press Tab
            await inputFieldsPage.pressTabAppendTextField();
            // Validate focus not in Append Tab input
            await expect(
                inputFieldsPage.getAppendTabInput()
            ).not.toBeFocused();
        });

        test('No Append Text then Press Tab', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ page }) => {
            // Wait for Append Tab section to be visible
            await expect(
                inputFieldsPage.getAppendTabSection()
            ).toBeVisible();
            // Click Append Tab input
            await inputFieldsPage.getAppendTabInput().click();
            // Press Tab
            await inputFieldsPage.pressTabAppendTextField();
            //Validate Append Tab result
            await expect(
                inputFieldsPage.getAppendTabResult()
            ).toHaveText(
                InputFieldsData.defaultAppendValueTextResult
            );
        });

    });

    test.describe('Scenario Read Value', () => {
        test('Read Value Field', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ page }) => {
            // Wait for Read Value section to be visible
            await expect(
                inputFieldsPage.getReadValueSection()
            ).toBeVisible();
            // Get Read Value input
            const readValueFieldText =
                await inputFieldsPage.getReadValueInputText();
            // Click Read Value button
            await inputFieldsPage.clickReadValueButton();
            //Validate Read Value result
            await expect(
                inputFieldsPage.getReadValueResult()
            ).toHaveText(
                InputFieldsData.valueText + readValueFieldText
            );
        });

        test('Read Field Input is Read-Only', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ page }) => {
            // Wait for Read Value section to be visible
            await expect(
                inputFieldsPage.getReadValueSection()
            ).toBeVisible();
            await expect(
                inputFieldsPage.getReadValueInput()
            ).toHaveJSProperty('readOnly', true);
        });
    
    });

    test.describe('Scenario Clear Field', () => {
        test('Clear Input Field via button', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async () => {
            // Wait for Clear Field section to be visible
            await expect(
                inputFieldsPage.getClearFieldSection()
            ).toBeVisible();
            // Click Clear button
            await inputFieldsPage.clickClearButton();
            // Validate Clear Field input is cleared
            await expect(
                inputFieldsPage.getClearFieldInput()
            ).toHaveValue('');
            // Validate Clear Field result
            await expect(
                inputFieldsPage.getClearFieldResult()
            ).toHaveText(
                InputFieldsData.fieldClearedText
            );
        });

        test('Entered text will be cleared', 
            {
                tag: ['@regression', '@positive']
            },
        async () => {
            // Wait for Clear Field section to be visible
            await expect(
                inputFieldsPage.getClearFieldSection()
            ).toBeVisible();
            // Enter text in Clear Field Input
            await inputFieldsPage.enterTextInClearField(
                InputFieldsData.sampleText
            );
            // Click Clear button
            await inputFieldsPage.clickClearButton();
            // Validate Clear Field input is cleared
            await expect(
                inputFieldsPage.getClearFieldInput()
            ).toHaveValue('');
            // Validate Clear Field result
            await expect(
                inputFieldsPage.getClearFieldResult()
            ).toHaveText(
                InputFieldsData.fieldClearedText
            );
        });
    
    });

    test.describe('Scenario Disabled Input', () => {
        test('Disabled Field', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async () => {
            // Wait for Disabled Input section to be visible
            await expect(
                inputFieldsPage.getDisabledInputSection()
            ).toBeVisible();
            // Validate Disabled Field input is disabled
            await expect(
                inputFieldsPage.getDisabledFieldInput()
            ).toBeDisabled();
        });

    });

    test.describe('Scenario Read-Only Input', () => {
        test('Read-Only Field', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async () => {
            // Wait for Read-Only Input section to be visible
            await expect(
                inputFieldsPage.getReadOnlyInputSection()
            ).toBeVisible();
            // Validate Read-Only Field input is read-only
            await expect(
                inputFieldsPage.getReadonlyFieldInput()
            ).toHaveJSProperty('readOnly', true);
        });

    });
    
});