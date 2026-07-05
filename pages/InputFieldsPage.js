const { InputFieldsLocators } = require('../locators/InputFieldsLocators');

class InputFieldsPage {

    constructor(page) {
        this.page = page;
    }

    async navigateToInputFieldsPage() {
        await this.page.goto(
            'https://qaplayground.com/practice/input-fields'
        );
    }

    async enterMovieName(movieName) {
        await this.page
            .locator(InputFieldsLocators.scenario1TextField)
            .fill(movieName)
    }

}

module.exports = { InputFieldsPage };