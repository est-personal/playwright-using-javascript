const { expect } = require('@playwright/test');

class UiPracticeTablesAssertions {

    static async validateTableDisplayed(uiPracticeTablesPage, tableLocators) {
        // Validate Search
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.searchInput)
        ).toBeVisible();
        // Validate Dropdown
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.dropdown)
        ).toBeVisible();
        // Validate Clear All
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.clearAllButton)
        ).toBeVisible();
        // Validate Info
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.totalText)
        ).toBeVisible();
        // Validate Table
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.table)
        ).toBeVisible();
    }

    static async validateTableHeaders(uiPracticeTablesPage, tableLocators, expectedHeaders) {
        await expect(
            uiPracticeTablesPage.page.locator(tableLocators.columnHeader)
        ).toHaveText(
            expectedHeaders
        );
    }
}

module.exports = { UiPracticeTablesAssertions };