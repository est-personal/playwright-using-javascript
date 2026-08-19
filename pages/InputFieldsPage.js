// Arrange Alphabetically
// Keywords for QA Playground - Input Fields Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { InputFieldsLocators } = require('../locators/InputFieldsLocators');
const { BasePage } = require('./BasePage');

class InputFieldsPage extends BasePage {

    constructor(page) {
        super(page);
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
        await this.clear(
            InputFieldsLocators.clearFieldInput
        );
    }

    async clickClearButton() {
        await this.click(
            InputFieldsLocators.clearButton
        );
    }

    async clickReadValueButton() {
        await this.click(
            InputFieldsLocators.readValueButton
        );
    }

    async clickSubmitButton() {
        await this.click(
            InputFieldsLocators.submitButton
        );
    }

    async enterTextInClearField(clearText) {
        await this.fill(
            InputFieldsLocators.clearFieldInput,
            clearText
        );
    }

    async enterMovieName(movieName) {
        await this.fill(
            InputFieldsLocators.movieNameInput,
            movieName
        );
    }

    async getAppendTabInputText() {
        return await this.getValue(
            InputFieldsLocators.appendTabInput
        );
    }

    async getAppendTabResultText() {
       return await this.getText(
            InputFieldsLocators.appendTabResult
        );
    }

    async getMovieNameInputText() {
        return await this.getValue(
            InputFieldsLocators.movieNameInput
        );
    }

    async getMovieNameInputPlaceholderAttribute() {
        return await this.getAttribute(
            InputFieldsLocators.movieNameInput,
            'placeholder'
        );
    }

    async getMovieNameResultText() {
        return await this.getText(
            InputFieldsLocators.movieNameResult
        );
    }

    async getReadValueInputText() {
        return await this.getValue(
            InputFieldsLocators.readValueInput
        );
    }

    async getReadValueResultText() {
        return await this.getValue(
            InputFieldsLocators.readValueResult
        );
    }

    async navigateToInputFields() {
        await this.navigate(
            QaPlaygroundUrls.inputFieldsPage
        );
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