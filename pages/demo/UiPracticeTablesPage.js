// Arrange Alphabetically
// Keywords for QA Playground - UI Practice - Tables Page
const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');
const { UiPracticeTablesLocators } = require('../../locators/demo/UiPracticeTablesLocators');
const { BasePage } = require('../BasePage');

class UiPracticeTablesPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickColumnHeader(section, columnName) {
        const headers = this.page.locator(
            this.getTable(section).columnHeader
        );

        const count = await headers.count();

        for (let i = 0; i < count; i++) {
            const headerText = await headers.nth(i).textContent();

            if (headerText?.trim() === columnName) {
                await headers.nth(i).click();
                return i + 1;
            }
        }

        throw new Error(`Column '${columnName}' not found`);
    }

    async navigateToUiPracticeTables() {
        await this.navigate(
            QaPlaygroundUrls.uiPracticeTablesPage
        );
    }

    // Non-Async
    getTable(section) {
        return UiPracticeTablesLocators[section];
    }

};

module.exports = { UiPracticeTablesPage };