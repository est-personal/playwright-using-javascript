// Arrange Alphabetically
// Keywords for QA PLayground - Input Fields Page
const { InputFieldsLocators } = require('../locators/InputFieldsLocators');

class InputFieldsPage {

    constructor(page) {
        this.page = page;
    }

    async appendText(text) {
        const appendField =
            this.page.locator(InputFieldsLocators.appendTextInput);

        await appendField.click();
        await appendField.pressSequentially(text);
    }

    async clearInputField() {
        await this.page
            .locator(InputFieldsLocators.clearTextInput)
            .fill('');
    }

    async enterMovieName(movieName) {
        await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .fill(movieName);
    }

    async getAppendValue() {
        return await this.page
            .locator(InputFieldsLocators.appendTextInput)
            .inputValue();
    }

    async getClearFieldValue() {
        return await this.page
            .locator(InputFieldsLocators.clearTextInput)
            .inputValue();
    }

    async getDisabledAttribute() {
        return await this.page
            .locator(InputFieldsLocators.disabledInput)
            .getAttribute('disabled');
    }

    async getDisabledValue() {
        return await this.page
            .locator(InputFieldsLocators.disabledInput)
            .inputValue();
    }

    async getMovieNameValue() {
        return await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .inputValue();
    }

    async getMoviePlaceholder() {
        return await this.page
            .locator(InputFieldsLocators.movieNameInput)
            .getAttribute('placeholder');
    }

    async getReadonlyAttribute() {
        return await this.page
            .locator(InputFieldsLocators.readonlyInput)
            .getAttribute('readonly');
    }

    async getReadonlyValue() {
        return await this.page
            .locator(InputFieldsLocators.readonlyInput)
            .inputValue();
    }

    async getVerifyTextAttribute() {
        return await this.page
            .locator(InputFieldsLocators.verifyTextInput)
            .getAttribute('value');
    }

    async getVerifyTextValue() {
        return await this.page
            .locator(InputFieldsLocators.verifyTextInput)
            .inputValue();
    }

    async isDisabled() {
        return await this.page
            .locator(InputFieldsLocators.disabledInput)
            .isDisabled();
    }

    async navigateToInputFields() {
        await this.page.goto(
            'https://qaplayground.com/practice/input-fields'
        );
    }

    async pressTab() {
        await this.page.keyboard.press('Tab');
    }
    
}

module.exports = { InputFieldsPage };