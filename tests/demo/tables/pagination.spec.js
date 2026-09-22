const {test, expect} = require('../../../fixtures/Pages.fixture');
const { UiPracticeTablesData } = require('../../../testData/demo/UiPracticeTablesData');
const { UiPracticeTablesAssertions } = require('../../../helpers/demo/UiPracticeTablesAssertions');

test.describe('QA Playground - UI Practice - Tables Page - Pagination', () => {
    UiPracticeTablesData.tableData.forEach(data => {
        test(`Active Page For ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                data.defaultActivePage
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page1,
                data.pageInfo.totalCount
            );
        });
    });

    UiPracticeTablesData.tableData.forEach(data => {
        test(`Navigation To Specific Page For ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // Capture Original Record
            const originalRecord = await uiPracticeTablesPage.getColumnRows(
                data.section, 
                data.column
            );
            // Navigate and Capture Page 2 Info
            const page2Record = await uiPracticeTablesPage.navigateToPage(
                data.section, 
                '2',
                data.column
            );
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                '2'
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page2,
                data.pageInfo.totalCount
            );
            // Validate record
            expect(page2Record).not.toEqual(originalRecord);
            // Navigate and Capture Page 3 Info
            const page3Record = await uiPracticeTablesPage.navigateToPage(
                data.section, 
                '3',
                data.column
            );
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                '3'
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page3,
                data.pageInfo.totalCount
            );
            // Validate record
            expect(page3Record).not.toEqual(originalRecord);
            expect(page3Record).not.toEqual(page2Record);
            // Navigate and Capture Page 1 Info
            const page1Record = await uiPracticeTablesPage.navigateToPage(
                data.section, 
                '1',
                data.column
            );
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                '1'
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page1,
                data.pageInfo.totalCount
            );
            // Validate record
            expect(page1Record).toEqual(originalRecord);
        });
    });

    UiPracticeTablesData.tableData.forEach(data => {
        test(`Next Navigation For ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // Capture Original Record
            const originalRecord = await uiPracticeTablesPage.getColumnRows(
                data.section, 
                data.column
            );
            // Validate Previous button
            await UiPracticeTablesAssertions.validateButtonDisabled(
                uiPracticeTablesPage,
                uiPracticeTablesPage.getPreviousButton(data.section)
            );
            // Click Next button
            await uiPracticeTablesPage.clickNextButton(data.section);
            // Validate Previous button
            await UiPracticeTablesAssertions.validateButtonEnabled(
                uiPracticeTablesPage,
                uiPracticeTablesPage.getPreviousButton(data.section)
            );
            // Capture New Record
            const newRecord = await uiPracticeTablesPage.getColumnRows(
                data.section, 
                data.column
            );
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                '2'
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page2,
                data.pageInfo.totalCount
            );
            // Validate record
            expect(newRecord).not.toEqual(originalRecord);
        });
    });

    UiPracticeTablesData.tableData.forEach(data => {
        test(`Previous Navigation For ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ uiPracticeTablesPage }) => {
            // Navigate to Last Page
            await uiPracticeTablesPage.clickPage(
                data.section,
                '3'
            );
            // Capture Original Record
            const originalRecord = await uiPracticeTablesPage.getColumnRows(
                data.section, 
                data.column
            );
            // Validate Next button
            await UiPracticeTablesAssertions.validateButtonDisabled(
                uiPracticeTablesPage,
                uiPracticeTablesPage.getNextButton(data.section)
            );
            // Click Previous button
            await uiPracticeTablesPage.clickPreviousButton(data.section);
            // Validate Next button
            await UiPracticeTablesAssertions.validateButtonEnabled(
                uiPracticeTablesPage,
                uiPracticeTablesPage.getNextButton(data.section)
            );
            // Capture New Record
            const newRecord = await uiPracticeTablesPage.getColumnRows(
                data.section, 
                data.column
            );
            // Validate active page
            await UiPracticeTablesAssertions.validateActivePage(
                uiPracticeTablesPage,
                data.section,
                '2'
            );
            // Validate page info
            await UiPracticeTablesAssertions.validatePageInfo(
                uiPracticeTablesPage,
                data.section,
                data.pageInfo.page2,
                data.pageInfo.totalCount
            );
            // Validate record
            expect(newRecord).not.toEqual(originalRecord);
        });
    });
});