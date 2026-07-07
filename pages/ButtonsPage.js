// Arrange Alphabetically
// Keywords for QA PLayground - Buttons Page
const { ButtonsLocators } = require('../locators/ButtonsLocators');

class ButtonsPage {

    constructor(page) {
        this.page = page;
    }

    async clickPrimaryButton() {
        await this.page
            .locator(ButtonsLocators.primaryButton)
            .click();
    }

    async doubleClickButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickButton)
            .dblclick();
    }

    async getButtonText() {
        return await this.page
            .locator(ButtonsLocators.primaryButton)
            .textContent();
    }

    async getClickMessage() {
        return await this.page
            .locator(ButtonsLocators.clickMessage)
            .textContent();
    }

    async getDoubleClickMessage() {
        return await this.page
            .locator(ButtonsLocators.doubleClickMessage)
            .textContent();
    }

    async getRightClickMessage() {
        return await this.page
            .locator(ButtonsLocators.rightClickMessage)
            .textContent();
    }

    async navigateToButtons() {
        await this.page.goto(
            'https://qaplayground.com/practice/buttons'
        );
    }

    async rightClickButton() {
        await this.page
            .locator(ButtonsLocators.rightClickButton)
            .click({ button: 'right' });
    }
    
}

module.exports = { ButtonsPage };