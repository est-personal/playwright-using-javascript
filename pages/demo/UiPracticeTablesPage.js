// Arrange Alphabetically
// Keywords for QA Playground - UI Practice - Tables Page
const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');
const { UiPracticeTablesLocators } = require('../../locators/DataTablesLocators');
const { BasePage } = require('../BasePage');

class UiPracticeTablesPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async navigateToUiPracticeTables() {
        await this.navigate(
            QaPlaygroundUrls.uiPracticeTablesPage
        );
    }

    // Non-Async
    // getTable(section) {
    //     return UiPracticeTablesLocators[section];
    // }

};

module.exports = { UiPracticeTablesPage };