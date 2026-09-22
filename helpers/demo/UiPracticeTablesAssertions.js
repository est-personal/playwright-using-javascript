const { expect } = require('@playwright/test');
const { UiPracticeTablesData } = require('../../testData/demo/UiPracticeTablesData');

class UiPracticeTablesAssertions {
    static async validateActivePage(uiPracticeTablesPage, section, expectedPage) {
        expect(
            await uiPracticeTablesPage.getActivePage(section)
        ).toBe(String(expectedPage));
    }

    static async validateButtonDisabled(uiPracticeTablesPage, locator) {
        await expect(locator)
            .toBeDisabled();
    }

    static async validateButtonEnabled(uiPracticeTablesPage, locator) {
        await expect(locator)
            .toBeEnabled();
    }

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
        // Sort if asc or desc
        expected = [...actual].sort((a, b) =>
            order === 'asc'
                ? a > b ? 1 : -1
                : a < b ? 1 : -1
        );
        // Validate sort order
        expect(actual).toEqual(expected);
    }

    static async validateColumnValues(
        page,
        section,
        columnIndex,
        expected
    ) {
        const values =
            await page.getColumnValues(
                section,
                columnIndex
            );

        values.forEach(value => {
            expect(value).toContain(
                expected
            );
        });
    }

    static async validatePageInfo(uiPracticeTablesPage, section, expectedInfo, totalRecord = null) {
        const expectedText = 
            expectedInfo === '0' || totalRecord === null || totalRecord === ''
            ? 'No results'
            : `${UiPracticeTablesData.text.showing}${expectedInfo}${UiPracticeTablesData.text.of}${totalRecord}`;
        await expect(
            uiPracticeTablesPage.getPageInfoLocator(section)
        ).toHaveText(
            expectedText
        );
    }

    static async validateRecordDisplayed(uiPracticeTablesPage, section, column, expectedText) {
        const values = 
            await uiPracticeTablesPage.getColumnRows(section,column);
        expect(values.length).toBeGreaterThan(0);
        values.forEach(value => {
            expect(
                value.toLowerCase()
            ).toContain(
                expectedText.toLowerCase()
            );
        });
    }

    static async validateResultCount(uiPracticeTablesPage, section, expectedCount, totalRecord, table) {
        expect(
            await uiPracticeTablesPage.getResultCountLocator(section)
        ).toHaveText(
            `${UiPracticeTablesData.text.showing}${expectedCount}${UiPracticeTablesData.text.of}${totalRecord}${table}`
        );
    }

    static async validateSearchResult(uiPracticeTablesPage, section, expected) {
        await expect(
            uiPracticeTablesPage.getFirstRow(section)
        ).resolves.toContain(expected);
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