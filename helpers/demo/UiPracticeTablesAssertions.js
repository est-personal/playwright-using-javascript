const { expect } = require('@playwright/test');

class UiPracticeTablesAssertions {
    static async validateColumnSorting(pageObject, locator, order, type = 'text') {
        // Get values
        const values = (
            await pageObject.page
                .locator(locator)
                .allTextContents()
        ).map(value => value.trim());
        // data initialization
        let actual;
        let expected;
        // Do action based on type
        switch (type) {
            case 'currency':
                actual = values.map(value =>
                    Number(
                        value.replace('$', '')
                            .replace(/,/g, '')
                    )
                );
                break;
            case 'number':
                actual = values.map(Number);
                break;
            case 'date':
                actual = values.map(value =>
                    new Date(value).getTime()
                );
                break;
            default:
                actual = values;
        }
        // console.log('Type:', type);
        // console.log('Original Values:', values);
        // console.log('Actual:', actual);
        // Sort if asc or desc
        expected = [...actual].sort((a, b) =>
            order === 'asc'
                ? a > b ? 1 : -1
                : a < b ? 1 : -1
        );
        // Validate sort order
        await expect(actual).toEqual(expected);
    }

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