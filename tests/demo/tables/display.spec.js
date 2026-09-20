const {test, expect} = require('../../../fixtures/Pages.fixture');
const { UiPracticeTablesLocators } = require('../../../locators/demo/UiPracticeTablesLocators');
const { UiPracticeTablesData } = require('../../../testData/demo/UiPracticeTablesData');
const { UiPracticeTablesAssertions } = require('../../../helpers/demo/UiPracticeTablesAssertions');

test.describe('QA Playground - UI Practice - Tables Page - Display', () => {
    UiPracticeTablesData.tableData.forEach(data => {
        test(`Display ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            await UiPracticeTablesAssertions.validateTableDisplayed(
                uiPracticeTablesPage,
                UiPracticeTablesLocators[data.section]
            );
            await UiPracticeTablesAssertions.validateTableHeaders(
                uiPracticeTablesPage,
                UiPracticeTablesLocators[data.section],
                UiPracticeTablesData[data.section].headers
            );
        });
    });
});