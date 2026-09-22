const {test, expect} = require('../../../fixtures/Pages.fixture');
const { UiPracticeTablesData } = require('../../../testData/demo/UiPracticeTablesData');
const { UiPracticeTablesAssertions } = require('../../../helpers/demo/UiPracticeTablesAssertions');

test.describe('QA Playground - UI Practice - Tables Page - Search And Filter', () => {
    UiPracticeTablesData.searchAndFilterData.forEach(data => {
        test(`Search: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // search record
            await uiPracticeTablesPage.search(
                data.section,
                data.search
            );
            // Validate row count
            await UiPracticeTablesAssertions.validateResultCount(
                uiPracticeTablesPage,
                data.section,
                data.expectedCount,
                data.totalCount,
                data.info
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.show,
                data.expectedCount,
            );
            // Validate record
            if (data.expectedCount !== '0') {
                await UiPracticeTablesAssertions.validateRecordDisplayed(
                    uiPracticeTablesPage,
                    data.section,
                    data.column,
                    data.search
                );
            }
        });
    });

    UiPracticeTablesData.searchAndFilterData.forEach(data => {
        test(`Filter And Search: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // filter via dropdown
            await uiPracticeTablesPage.selectFilter(
                data.section,
                data.filter
            );
            // search record
            await uiPracticeTablesPage.search(
                data.section,
                data.search
            );
            // Validate row count
            await UiPracticeTablesAssertions.validateResultCount(
                uiPracticeTablesPage,
                data.section,
                data.expectedCount,
                data.totalCount,
                data.info
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.show,
                data.expectedCount,
            );
            // Validate record
            if (data.expectedCount !== '0') {
                await UiPracticeTablesAssertions.validateRecordDisplayed(
                    uiPracticeTablesPage,
                    data.section,
                    data.column,
                    data.search
                );
            }
        });
    });

    UiPracticeTablesData.searchAndFilterData
        .filter(data =>
            !data.name.includes('Non-Existing'))
        .forEach(data => {
            test(`Filter: ${data.filter}`, {
                tag: ['@regression', '@positive']
            }, async ({ uiPracticeTablesPage }) => {
                // filter via dropdown
                await uiPracticeTablesPage.selectFilter(
                    data.section,
                    data.filter
                );
                // Validate record
                await UiPracticeTablesAssertions.validateRecordDisplayed(
                    uiPracticeTablesPage,
                    data.section,
                    data.filterColumn,
                    data.filter
                );
        });
    });

    UiPracticeTablesData.searchAndFilterData
        .filter(data =>
            !data.name.includes('Non-Existing'))
        .forEach(data => {
            test(`Clear: ${data.name}`, {
                tag: ['@regression', '@positive']
            }, async ({ uiPracticeTablesPage }) => {
                // filter via dropdown
                await uiPracticeTablesPage.selectFilter(
                    data.section,
                    data.filter
                );
                // search record
                await uiPracticeTablesPage.search(
                    data.section,
                    data.search
                );
                // Click Clear All button
                await uiPracticeTablesPage.clearFilter(
                    data.section
                );
                // Validate row count
                await UiPracticeTablesAssertions.validateResultCount(
                    uiPracticeTablesPage,
                    data.section,
                    data.defaultCount,
                    data.totalCount,
                    data.info
                );
                // Validate page info
                await UiPracticeTablesAssertions.validatePageInfo(
                    uiPracticeTablesPage,
                    data.section,
                    data.defaultShow,
                    data.defaultCount,
                );
        });
    });
});