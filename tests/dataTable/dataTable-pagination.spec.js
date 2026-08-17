const {test, expect} = require('../../fixtures/dataTables.fixture');
// const { DataTablesPage } = require('../../pages/DataTablesPage');
const { DataTablesData } = require('../../testData/DataTablesData');

test.describe('QA Playground - Data Table Pagination Validation', () => {
    test('Validate Pagination Next And Previous Navigation', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Capture Page 1 data
        const pageOneBooks =
            await dataTablesPage.getBookNameRows();
        const pageOneInfo =
            await dataTablesPage.getTableRowCount();
        // Navigate to page 2
        await dataTablesPage.clickNextButton();
        // Capture Page 2 data
        const pageTwoBooks =
            await dataTablesPage.getBookNameRows();
        const pageTwoInfo =
            await dataTablesPage.getTableRowCount();
        // Validate page indicator updated
        expect(
            pageTwoInfo,
            `Pagination Indicator Update Failed | Actual: "${pageTwoInfo}"`
        ).toContain(
            DataTablesData.pageTwo
        );
        // Validate record set changed
        expect(
            pageTwoBooks,
                [
                'Pagination Record Validation Failed',
                `Page 1 Records: ${JSON.stringify(pageOneBooks)}`,
                `Page 2 Records: ${JSON.stringify(pageTwoBooks)}`
            ].join('\n')
        ).not.toEqual(pageOneBooks);
        // Navigate back to page 1
        await dataTablesPage.clickPreviousButton();
        // Capture Page 1 data
        const returnedBooks =
            await dataTablesPage.getBookNameRows();
        const returnedInfo =
            await dataTablesPage.getTableRowCount();
        // Validate page indicator updated
        expect(
            returnedInfo,
            `Pagination Indicator Update Failed | Actual: "${returnedInfo}" | Expected: "DataTablesData.pageOne"`
        ).toContain(
            DataTablesData.pageOne
        );
        // Validate original records restored
        expect(
            returnedBooks,
                [
                'Pagination Record Validation Failed',
                `Expected: ${JSON.stringify(pageOneBooks)}`,
                `Actual: ${JSON.stringify(returnedBooks)}`
            ].join('\n')
        ).toEqual(pageOneBooks);
    });

    test('Validate Previous Button Disabled On First Page', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Validate Previous button is disabled
        await expect(
            dataTablesPage.getPreviousButton()
        ).toBeDisabled();
    });

    test('Validate Next Button Disabled On Last Page', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Navigate to last page
        await dataTablesPage.clickPage(5);
        // Validate Next button is disabled
        await expect(
            dataTablesPage.getNextButton()
        ).toBeDisabled();
    });

    test('Validate Pagination Navigation', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // const totalPages = 5;
        const totalPages = 
            await dataTablesPage.getTotalPages();
        // const allBooks = new Set();
        const displayedBooks = new Set();
        const duplicateBooks = [];
        let previousBooks = [];
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
            // Click Page Number
            await dataTablesPage.clickPage(pageNumber);
            // Validate Active Page
            await expect(
                dataTablesPage.getPageButton(pageNumber)
            ).toHaveAttribute(
                'aria-current',
                'page'
            );
            // Get Active Page text
            const currentPage =
                await dataTablesPage.getCurrentPageText();
            // Validate Active Page text
            expect.soft(
                currentPage,
                `Failed to navigate to Page ${pageNumber} | 
                Current Page: ${currentPage}`
            ).toBe(pageNumber);
            // Capture Active Page data
            const currentBooks =
                await dataTablesPage.getBookNameRows();
            // Validate no duplicate record
            currentBooks.forEach(book => {
                expect(
                    displayedBooks.has(book),
                    `Duplicate book found: ${book}`
                ).toBeFalsy();
                displayedBooks.add(book);
            });
            // Get number of records
            const rowCount =
                await dataTablesPage.getVisibleRowCount();
            // Validate number or records
            if (pageNumber < totalPages) {
                expect.soft(
                    rowCount,
                    `Unexpected row count on Page ${pageNumber}`
                ).toBe(5);
            } else {
                expect.soft(rowCount).toBeLessThanOrEqual(5);
            }
            // Validate Active Page data
            expect.soft(
                currentBooks.length,
                `No records found on Page ${pageNumber}`
            ).toBeGreaterThan(0);
            // Validate records changed
            if (pageNumber > 1) {
                expect(
                    currentBooks,
                    [
                        `PAGE ${pageNumber} RECORD VALIDATION FAILED`,
                        `Previous Page Records: ${JSON.stringify(previousBooks)}`,
                        `Current Page Records : ${JSON.stringify(currentBooks)}`
                    ].join('\n')
                ).not.toEqual(previousBooks);
            }
            previousBooks = [...currentBooks];
        }
    });

});