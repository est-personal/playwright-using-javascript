// Arrange Alphabetically
// Keywords for QA Playground - Input Fields Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { InputFieldsLocators } = require('../locators/InputFieldsLocators');

class InputFieldsPage {

    constructor(page) {
        this.page = page;
    }

    // Async
    async appendText(text) {
        const field = this.page.locator(
        InputFieldsLocators.appendTabInput
        );
        await field.click();
        await field.pressSequentially(text);
    }

    async clearField() {
        await this.page
            .locator(InputFieldsLocators.clearFieldInput)
            .clear();
    }

    async clickClearButton() {
        await this.page
            .locator(InputFieldsLocators.clearButton)
            .click();
    }

    async clickReadValueButton() {
        await this.page
            .locator(InputFieldsLocators.readValueButton)
            .click();
    }

    async clickSubmitButton() {
        await this.page
            .locator(InputFieldsLocators.submitButton)
            .click();
    }

    async enterTextInClearField(clearText) {
        await this.page
            .locator(InputFieldsLocators.clearFieldInput)
            .fill(clearText);
    }

    async enterMovieName(movieName) {
        await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .fill(movieName);
    }

    async getAppendTabInputText() {
        return await this.page
            .locator(
                InputFieldsLocators.appendTabInput)
            // .textContent();
            .inputValue();
    }

    async getAppendTabResultText() {
        return await this.page
            .locator(
                InputFieldsLocators.appendTabResult)
            .textContent();
    }

    async getMovieNameInputText() {
        return await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .textContent();
    }

    async getMovieNameInputPlaceholderAttribute() {
        return await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .getAttribute('placeholder');
    }

    async getMovieNameResultText() {
        return await this.page
            .locator(
                InputFieldsLocators.movieNameResult)
            .textContent();
    }

    async getReadValueInputText() {
        return await this.page
            .locator(
                InputFieldsLocators.readValueInput)
            // .textContent();
            .inputValue();
    }

    async getReadValueResultText() {
        return await this.page
            .locator(
                InputFieldsLocators.readValueResult)
            // .textContent();
            .inputValue();
    }

    async navigateToInputFields() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await this.page.goto(
                QaPlaygroundUrls.inputFieldsPage,
                {
                    waitUntil: 'domcontentloaded',
                    timeout: 60000
                }
            );
            return;
        } catch (error) {
            if (attempt === 3) throw error;
            console.log(`Navigation attempt ${attempt} failed`);
        }
    }
}

    async pressTabAppendTextField() {
        await this.page
            .locator(InputFieldsLocators.appendTabInput)
            .press('Tab');
    }

    // Non-Async
    getAppendTabInput() {
        return this.page
            .locator(
                InputFieldsLocators.appendTabInput
        );
    }

    getAppendTabResult() {
        return this.page
            .locator(
                InputFieldsLocators.appendTabResult
        );
    }

    getAppendTabSection() {
        return this.page
            .locator(
                InputFieldsLocators.appendTabSection
        );
    }

    getClearFieldInput() {
        return this.page
            .locator(
                InputFieldsLocators.clearFieldInput
        );
    }

    getClearFieldResult() {
        return this.page
            .locator(
                InputFieldsLocators.clearFieldResult
        );
    }

    getClearFieldSection() {
        return this.page
            .locator(
                InputFieldsLocators.clearFieldSection
        );
    }

    getDisabledFieldInput() {
        return this.page
            .locator(
                InputFieldsLocators.disabledFieldInput
        );
    }

    getDisabledFieldResult() {
        return this.page
            .locator(
                InputFieldsLocators.disabledFieldResult
        );
    }

    getDisabledInputSection() {
        return this.page
            .locator(
                InputFieldsLocators.disabledInputSection
        );
    }

    getMovieNameInput() {
        return this.page
            .locator(
                InputFieldsLocators.movieNameInput
        );
    }

    getMovieNameResult() {
        return this.page
            .locator(
                InputFieldsLocators.movieNameResult
        );
    }

    getReadonlyFieldInput() {
        return this.page
            .locator(
                InputFieldsLocators.readOnlyInput
        );
    }

    getReadonlyFieldResult() {
        return this.page
            .locator(
                InputFieldsLocators.readOnlyResult
        );
    }

    getReadOnlyInputSection() {
        return this.page
            .locator(
                InputFieldsLocators.readOnlyInputSection
        );
    }

    getReadValueInput() {
        return this.page
            .locator(
                InputFieldsLocators.readValueInput
        );
    }

    getReadValueResult() {
        return this.page
            .locator(
                InputFieldsLocators.readValueResult
        );
    }

    getReadValueSection() {
        return this.page
            .locator(
                InputFieldsLocators.readValueSection
        );
    }

    getSubmitButton() {
        return this.page
            .locator(
                InputFieldsLocators.submitButton
        );
    }

    getTypeMovieSection() {
        return this.page
            .locator(
                InputFieldsLocators.typeMovieSection
        );
    }
    
}

module.exports = { InputFieldsPage };