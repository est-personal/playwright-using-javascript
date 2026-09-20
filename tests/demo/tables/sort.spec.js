const {test, expect} = require('../../../fixtures/Pages.fixture');
const { UiPracticeTablesLocators } = require('../../../locators/demo/UiPracticeTablesLocators');
const { UiPracticeTablesData } = require('../../../testData/demo/UiPracticeTablesData');
const { GenericHelpers } = require('../../../helpers/demo/GenericHelpers');
const { UiPracticeTablesAssertions } = require('../../../helpers/demo/UiPracticeTablesAssertions');

test.describe('QA Playground - UI Practice - Tables Page - Sort', () => {
    UiPracticeTablesData.sortData.forEach(data => {
        test(`Sort ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // Check for Defect ID
            GenericHelpers.markKnownDefect(data.bugId);
            // Click Column header in order to sort
            const columnIndex =
                await uiPracticeTablesPage.clickColumnHeader(
                    data.section,
                    data.column
                );
            if (data.order === 'desc') {
                await uiPracticeTablesPage.clickColumnHeader(
                    data.section,
                    data.column
                );
            }
            // Validate sort order of specified column
            await UiPracticeTablesAssertions.validateColumnSorting(
                uiPracticeTablesPage,
                UiPracticeTablesLocators[data.section].columnValues(columnIndex),
                data.order,
                data.type
            );
        });
    });
});
// test