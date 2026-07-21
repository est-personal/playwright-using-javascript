const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');

test.describe('QA Playground - Input Fields Tests', () => {

    let inputFieldsPage;

    test.beforeEach(async ({ page }) => {
        inputFieldsPage = new InputFieldsPage(page);
        await inputFieldsPage.navigateToInputFields();
    });

    qase(195, test('Type a Movie Name', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Movie Name input to be visible
        await expect(
            inputFieldsPage.getMovieNameInput()
        ).toBeVisible();
        // Enter text in Movie Name input
        await inputFieldsPage.enterMovieName(
            InputFieldsData.enteredMovieName,
            { delay: 100 }
        );
        await expect(
            inputFieldsPage.getMovieNameInput()
        ).toHaveValue(
            InputFieldsData.enteredMovieName
        );
        // Click Submit button
        await expect(
            inputFieldsPage.getSubmitButton()
        ).toBeVisible();
        await expect(
            inputFieldsPage.getSubmitButton()
        ).toBeEnabled();
        await inputFieldsPage.clickSubmitButton();
        // Validate text is reflected in Movie Name result
        await expect(
            inputFieldsPage.getMovieNameResult()
        ).not.toHaveText(
            InputFieldsData.defaultMovieNameResult
        );
        await expect(
            inputFieldsPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.movieValueText,
            { timeout: 10000 }
        );
    }));

    qase(199, test('No movie entered', 
        {
            tag: ['@regression', '@negative']
        },
    async ({ page }) => {
        // Wait for Movie Name input to be visible
        await expect(
            inputFieldsPage.getMovieNameInput()
        ).toBeVisible();
        // Click Submit button
        await inputFieldsPage.clickSubmitButton();
        // Validate value of Movie Name result if no movie entered
        await expect(
            inputFieldsPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.defaultMovieNameResultNoneEntered,
            { timeout: 10000 }
        );
    }));

    qase(200, test('Default Value of Scenario Type Movie', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Movie Name input to be visible
        await expect(
            inputFieldsPage.getMovieNameInput()
        ).toBeVisible();
        // Validate Placeholder to the Movie Name input
        const placeholderInputMovie = 
            await inputFieldsPage.getMovieNameInputPlaceholderAttribute();
        expect(placeholderInputMovie)
            .toBe(InputFieldsData.placeholderMovieNameInput
        );
        // Validate Default value to the Movie Name result
        await expect(
            inputFieldsPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.defaultMovieNameResult
        );
    }));

    qase(201, test('Append Text and Press Tab', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputFieldsPage.getAppendTabInput()
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
        console.log(
            await inputFieldsPage.getAppendTabInput().inputValue()
        );
        // Press Tab
        await inputFieldsPage.pressTabAppendTextField();
        //Validate Append Tab result
        await expect(
            inputFieldsPage.getAppendTabResult()
        ).toHaveText(
            InputFieldsData.appendValueText
        );
    }));

    qase(202, test('Focus after pressing Tab', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputFieldsPage.getAppendTabInput()
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
    }));

    qase(203, test('No Append Text then Press Tab', 
        {
            tag: ['@regression', '@negative']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputFieldsPage.getAppendTabInput()
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
    }));

    qase(204, test('Default Value of Scenario Append Tab', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputFieldsPage.getAppendTabInput()
        ).toBeVisible();
        // Validate Default value to the Append Tab input
        await expect(
            inputFieldsPage.getAppendTabInput()
        ).toHaveValue(
            InputFieldsData.defaultAppendTabInput
        );
        // Validate Default value to the Append Tab result
        await expect(
            inputFieldsPage.getAppendTabResult()
        ).toHaveText(
            InputFieldsData.defaultAppendValueTextResult
        );
    }));

    qase(205, test('Read Value Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputFieldsPage.getReadValueInput()
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
    }));

    qase(206, test('Read Field Input is Read-Only', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputFieldsPage.getReadValueInput()
        ).toBeVisible();
        // Validate Read Value input is read-only
        await expect(
            inputFieldsPage.getReadValueInput()
        ).toHaveAttribute(
            InputFieldsData.readOnly
        );
    }));

    qase(207, test('Default Value of Scenario Read Value', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputFieldsPage.getReadValueInput()
        ).toBeVisible();
        // Validate Default value to the Read Value input
        await expect(
            inputFieldsPage.getReadValueInput()
        ).toHaveValue(
            InputFieldsData.defaultReadValueInput
        );
        // Validate Default value to the Read Value result
        await expect(
            inputFieldsPage.getReadValueResult()
        ).toHaveText(
            InputFieldsData.defaultReadValueResult
        );
    }));

    qase(208, test('Clear Input Field via button', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toBeVisible();
        // Get Clear Field Input
        const readValueFieldText =
            await inputFieldsPage.getReadValueInputText();
        // Click Clear button
        await inputFieldsPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toHaveText('');
        // Validate Clear Field result
        await expect(
            inputFieldsPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText,
            { timeout: 10000 }
        );
    }));

    qase(209, test('Clear Input Field via clear()', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toBeVisible();
        // Validate Clear Field Input
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toHaveValue(InputFieldsData.defaultClearFieldInput);
        // Clear via clear()
        await inputFieldsPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toHaveValue('',
            { timeout: 10000 }
        );
        // Validate Clear Field result
        await expect(
            inputFieldsPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText
        );
    }));

    qase(210, test('Entered text will be cleared', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toBeVisible();
        // Enter text in Clear Field Input
        await inputFieldsPage.enterTextInClearField(
            InputFieldsData.sampleText,
            { delay: 100 }
        );
        // Click Clear button
        await inputFieldsPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toHaveText('');
        // Validate Clear Field result
        await expect(
            inputFieldsPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText
        );
    }));

    qase(211, test('Default Value of Scenario Clear Field', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Clear Field input to be visible
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toBeVisible();
        // Validate Default value to the Clear Field input
        await expect(
            inputFieldsPage.getClearFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultClearFieldInput
        );
        // Validate Default value to the Movie name result
        await expect(
            inputFieldsPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.defaultClearFieldResult
        );
    }));

    qase(212, test('Disabled Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Disabled Field input to be visible
        await expect(
            inputFieldsPage.getDisabledFieldInput()
        ).toBeVisible();
        // Validate Disabled Field input is disabled
        await expect(
            inputFieldsPage.getDisabledFieldInput()
        ).toBeDisabled();
    }));

    qase(213, test('Default Value of Scenario Disabled Input', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Disabled Field input to be visible
        await expect(
            inputFieldsPage.getDisabledFieldInput()
        ).toBeVisible();
        // Validate Default value to the Disabled Field input
        await expect(
            inputFieldsPage.getDisabledFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultDisabledFieldInput
        );
        // Validate Default value to the Disabled Field result
        await expect(
            inputFieldsPage.getDisabledFieldResult()
        ).toHaveText(
            InputFieldsData.defaultDisabledFieldResult
        );
    }));

    qase(214, test('Read-Only Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Read-Only Field input to be visible
        await expect(
            inputFieldsPage.getReadonlyFieldInput()
        ).toBeVisible();
        // Validate Read-Only Field input is read-only
        await expect(
            inputFieldsPage.getReadonlyFieldInput()
        ).toHaveAttribute(
            InputFieldsData.readOnly
        );
    }));

    qase(215, test('Default Value of Scenario Read-only Input', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read-Only Field input to be visible
        await expect(
            inputFieldsPage.getReadonlyFieldInput()
        ).toBeVisible();
        // Validate Default value to the Read-Only Field input
        await expect(
            inputFieldsPage.getReadonlyFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultReadonlyFieldInput
        );
        // Validate Default value to the Read-Only Field result
        await expect(
            inputFieldsPage.getReadonlyFieldResult()
        ).toHaveText(
            InputFieldsData.defaultReadonlyFieldResult
        );
    }));

});