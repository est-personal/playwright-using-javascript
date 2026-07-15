const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { InputFieldsData } = require('../testData/InputFieldsData');

test.describe('QA Playground - Input Fields Tests', () => {

    let inputPage;

    test.beforeEach(async ({ page }) => {
        inputPage = new InputFieldsPage(page);
        await inputPage.navigateToInputFields();
    });

    qase(195, test('Type a Movie Name', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Movie Name input to be visible
        await expect(
            inputPage.getMovieNameInput()
        ).toBeVisible();
        // Enter text in Movie Name input
        await inputPage.enterMovieName(
            InputFieldsData.enteredMovieName,
            { delay: 100 }
        );
        await expect(
            inputPage.getMovieNameInput()
        ).toHaveValue(
            InputFieldsData.enteredMovieName
        );
        // Click Submit button
        await expect(
            inputPage.getSubmitButton()
        ).toBeVisible();
        await expect(
            inputPage.getSubmitButton()
        ).toBeEnabled();
        await inputPage.clickSubmitButton();
        // Validate text is reflected is Movie Name result
        await expect(
            inputPage.getMovieNameResult()
        ).not.toHaveText(
            InputFieldsData.defaultMovieNameResult
        );
        await expect(
            inputPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.movieValueText,
            { timeout: 10000 }
        );
    }));

    test('TC02 No movie entered', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Movie Name input to be visible
        await expect(
            inputPage.getMovieNameInput()
        ).toBeVisible();
        // Click Submit button
        await inputPage.clickSubmitButton();
        // Validate value of Movie Name result if no movie entered
        await expect(
            inputPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.defaultMovieNameResultNoneEntered,
            { timeout: 10000 }
        );
    });

    test('TC03 Default Value of Scenario Type Movie', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Movie Name input to be visible
        await expect(
            inputPage.getMovieNameInput()
        ).toBeVisible();
        // Validate Placeholder to the Movie Name input
        const placeholderInputMovie = 
            await inputPage.getMovieNameInputPlaceholderAttribute();
        expect(placeholderInputMovie)
            .toBe(InputFieldsData.placeholderMovieNameInput
        );
        // Validate Default value to the Movie Name result
        await expect(
            inputPage.getMovieNameResult()
        ).toHaveText(
            InputFieldsData.defaultMovieNameResult
        );
    });

    test('TC04 Append Text and Press Tab', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputPage.getAppendTabInput()
        ).toBeVisible();
        // Enter text in Append Tab input
        await inputPage.appendText(
            InputFieldsData.appendText
        );
        await expect(
            inputPage.getAppendTabInput()
        ).toHaveValue(
            InputFieldsData.appendValue
        );
        console.log(
            await inputPage.getAppendTabInput().inputValue()
        );
        // Press Tab
        await inputPage.pressTabAppendTextField();
        //Validate Append Tab result
        await expect(
            inputPage.getAppendTabResult()
        ).toHaveText(
            InputFieldsData.appendValueText
        );
    });

    test('TC05 Focus after pressing Tab', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputPage.getAppendTabInput()
        ).toBeVisible();
        // Click Append Tab input
        await inputPage.getAppendTabInput().click();
        // Verify focus in Append Tab input
        await expect(
            inputPage.getAppendTabInput()
        ).toBeFocused();
        // Press Tab
        await inputPage.pressTabAppendTextField();
        // Validate focus not in Append Tab input
        await expect(
            inputPage.getAppendTabInput()
        ).not.toBeFocused();
    });

    test('TC06 No Append Text then Press Tab', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputPage.getAppendTabInput()
        ).toBeVisible();
        // Click Append Tab input
        await inputPage.getAppendTabInput().click();
        // Press Tab
        await inputPage.pressTabAppendTextField();
        //Validate Append Tab result
        await expect(
            inputPage.getAppendTabResult()
        ).toHaveText(
            InputFieldsData.defaultAppendValueTextResult
        );
    });

    test('TC07 Default Value of Scenario Append Tab', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Append Tab input to be visible
        await expect(
            inputPage.getAppendTabInput()
        ).toBeVisible();
        // Validate Default value to the Append Tab input
        await expect(
            inputPage.getAppendTabInput()
        ).toHaveValue(
            InputFieldsData.defaultAppendTabInput
        );
        // Validate Default value to the Append Tab result
        await expect(
            inputPage.getAppendTabResult()
        ).toHaveText(
            InputFieldsData.defaultAppendValueTextResult
        );
    });

    test('TC08 Read Value Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputPage.getReadValueInput()
        ).toBeVisible();
        // Get Read Value input
        const readValueFieldText =
            await inputPage.getReadValueInputText();
        // Click Read Value button
        await inputPage.clickReadValueButton();
        //Validate Read Value result
        await expect(
            inputPage.getReadValueResult()
        ).toHaveText(
            InputFieldsData.valueText + readValueFieldText
        );
    });

    test('TC09 Read Field Input is Read-Only', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputPage.getReadValueInput()
        ).toBeVisible();
        // Validate Read Value input is read-only
        await expect(
            inputPage.getReadValueInput()
        ).toHaveAttribute(
            InputFieldsData.readOnly
        );
    });

    test('TC10 Default Value of Scenario Read Value', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read Value input to be visible
        await expect(
            inputPage.getReadValueInput()
        ).toBeVisible();
        // Validate Default value to the Read Value input
        await expect(
            inputPage.getReadValueInput()
        ).toHaveValue(
            InputFieldsData.defaultReadValueInput
        );
        // Validate Default value to the Read Value result
        await expect(
            inputPage.getReadValueResult()
        ).toHaveText(
            InputFieldsData.defaultReadValueResult
        );
    });

    test('TC11 Clear Input Field via button', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputPage.getClearFieldInput()
        ).toBeVisible();
        // Get Clear Field Input
        const readValueFieldText =
            await inputPage.getReadValueInputText();
        // Click Clear button
        await inputPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputPage.getClearFieldInput()
        ).toHaveText('');
        // Validate Clear Field result
        await expect(
            inputPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText,
            { timeout: 10000 }
        );
    });

    test('TC12 Clear Input Field via clear()', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputPage.getClearFieldInput()
        ).toBeVisible();
        // Validate Clear Field Input
        await expect(
            inputPage.getClearFieldInput()
        ).toHaveValue(InputFieldsData.defaultClearFieldInput);
        // Clear via clear()
        await inputPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputPage.getClearFieldInput()
        ).toHaveValue('',
            { timeout: 10000 }
        );
        // Validate Clear Field result
        await expect(
            inputPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText
        );
    });

    test('TC13 Entered text will be cleared', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Clear Field input to be visible
        await expect(
            inputPage.getClearFieldInput()
        ).toBeVisible();
        // Enter text in Clear Field Input
        await inputPage.enterTextInClearField(
            InputFieldsData.sampleText,
            { delay: 100 }
        );
        // Click Clear button
        await inputPage.clickCleareButton();
        // Validate Clear Field input is cleared
        await expect(
            inputPage.getClearFieldInput()
        ).toHaveText('');
        // Validate Clear Field result
        await expect(
            inputPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.fieldClearedText
        );
    });

    test('TC14 Default Value of Scenario Clear Field', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Clear Field input to be visible
        await expect(
            inputPage.getClearFieldInput()
        ).toBeVisible();
        // Validate Default value to the Clear Field input
        await expect(
            inputPage.getClearFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultClearFieldInput
        );
        // Validate Default value to the Movie name result
        await expect(
            inputPage.getClearFieldResult()
        ).toHaveText(
            InputFieldsData.defaultClearFieldResult
        );
    });

    test('TC15 Disabled Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Disabled Field input to be visible
        await expect(
            inputPage.getDisabledFieldInput()
        ).toBeVisible();
        // Validate Disabled Field input is disabled
        await expect(
            inputPage.getDisabledFieldInput()
        ).toBeDisabled();
    });

    test('TC16 Default Value of Scenario Disabled Input', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Disabled Field input to be visible
        await expect(
            inputPage.getDisabledFieldInput()
        ).toBeVisible();
        // Validate Default value to the Disabled Field input
        await expect(
            inputPage.getDisabledFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultDisabledFieldInput
        );
        // Validate Default value to the Disabled Field result
        await expect(
            inputPage.getDisabledFieldResult()
        ).toHaveText(
            InputFieldsData.defaultDisabledFieldResult
        );
    });

    test('TC17 Read-Only Field', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Read-Only Field input to be visible
        await expect(
            inputPage.getReadonlyFieldInput()
        ).toBeVisible();
        // Validate Read-Only Field input is read-only
        await expect(
            inputPage.getReadonlyFieldInput()
        ).toHaveAttribute(
            InputFieldsData.readOnly
        );
    });

    test('TC18 Default Value of Scenario Readonly Input', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ page }) => {
        // Wait for Read-Only Field input to be visible
        await expect(
            inputPage.getReadonlyFieldInput()
        ).toBeVisible();
        // Validate Default value to the Read-Only Field input
        await expect(
            inputPage.getReadonlyFieldInput()
        ).toHaveValue(
            InputFieldsData.defaultReadonlyFieldInput
        );
        // Validate Default value to the Read-Only Field result
        await expect(
            inputPage.getReadonlyFieldResult()
        ).toHaveText(
            InputFieldsData.defaultReadonlyFieldResult
        );
    });

});