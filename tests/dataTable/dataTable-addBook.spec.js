const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');
const { ConstantsData } = require('../../testData/ConstantsData');

const addBookPositiveScenarios = [
    {
        name: 'Add New Book',
        book: DataTablesData.positive.validBook,
        expectedRowCount: DataTablesData.positive.expectedResult.totalRow,
        expectedSearchCount: DataTablesData.positive.expectedResult.searchedBookCount
    },
    {
        name: 'Add New Book With Blank ISBN',
        book: DataTablesData.positive.blankIsbn,
        expectedRowCount: DataTablesData.positive.expectedResult.totalRow,
        expectedSearchCount: DataTablesData.positive.expectedResult.searchedBookCount
    },
    {
        name: 'Add New Book With Blank Published',
        book: DataTablesData.positive.blankPublished,
        expectedRowCount: DataTablesData.positive.expectedResult.totalRow,
        expectedSearchCount: DataTablesData.positive.expectedResult.searchedBookCount
    }
];

test.describe('QA Playground - Data Table - Successful Add Book Validations', () => {
    addBookPositiveScenarios.forEach(data => {
        test(`${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Click Add Book button
            await dataTablesPage.clickAddBookButton();
            // Validate Add New Book modal is displayed
            await expect(
                dataTablesPage.getAddNewBookModalTitle()
            ).toBeVisible();
            // Populate fields in Add New Book modal
            await dataTablesPage.enterNewBookDetails(
                data.book
            );
            // Click Add New Modal - Add Book button
            await dataTablesPage.clickAddNewBookModalAddBookButton();
            // Validate Add New Book modal is not displayed
            await expect(
                dataTablesPage.getAddNewBookModalTitle()
            ).not.toBeVisible();
            // Get Total Row
            const actualRow = 
                await dataTablesPage.getTableRowCount();
            // Validate Total Row
            expect(
                actualRow,
                `Total Record Count Mismatch |
                Expected to contain: "${DataTablesData.positive.expectedResult.totalRow}" | Actual: "${actualRow}"`
            ).toContain(DataTablesData.positive.expectedResult.totalRow);
            // Search New Book
            await dataTablesPage.enterBookField(
                data.book.bookName
            );
            // Get Searched Book count
            const searchedBookCount = 
                await dataTablesPage.getTableRowCount();
            // Validate Searched Book count
            expect(
                searchedBookCount,
                `Searched Book Count Mismatch |
                Expected to contain: "${DataTablesData.positive.expectedResult.searchedBookCount}" | Actual: "${searchedBookCount}"`
            ).toContain(DataTablesData.positive.expectedResult.searchedBookCount);
            // Get Book Record
            const actualBookRecord =
                await dataTablesPage.getBookRecord();
            // Validate Book Record
            DataTablesAssertions.validateBookDetails(
                actualBookRecord,
                data.book
            )
        });
    });

});

const requiredFieldScenarios = [
    {
        name: 'Book Name',
        data: DataTablesData.negative.blankBookName,
        getError: page => page.getAddNewBookModalBookNameErrorMessage(),
        expectedError: DataTablesData.negative.errorMessage.bookNameRequired
    },
    {
        name: 'Author',
        data: DataTablesData.negative.blankAuthor,
        getError: page => page.getAddNewBookModalAuthorErrorMessage(),
        expectedError: DataTablesData.negative.errorMessage.authorRequired
    }
];

test.describe('QA Playground - Data Table - Unsuccessful Add Book Validations', () => {
    requiredFieldScenarios.forEach(data => {
        test(`${data.name} Required Validation`, {
            tag: ['@regression', '@negative']
        }, async ({ dataTablesPage }) => {
            // Click Add Book button
            await dataTablesPage.clickAddBookButton();
            // Validate Add New Book modal is displayed
            await expect(
                dataTablesPage.getAddNewBookModalTitle()
            ).toBeVisible();
            // Populate fields in Add New Book modal
            await dataTablesPage.enterNewBookDetails(
                data.data
            );
            // Click Add New Modal - Add Book button
            await dataTablesPage.clickAddNewBookModalAddBookButton();
            // Validate error message
            const errorMessage = 
                await data.getError(dataTablesPage)
            expect(
                errorMessage,
                `Error Message Mismatch In Add New Book Modal |
                Expected to contain: "${data.expectedError}" | Actual: "${errorMessage}"`
            ).toContain(data.expectedError);
        });
    });

    test('Validate New Book Not Created When Cancel Is Clicked', 
    {
        tag: ['@regression', '@negative']
    },
    async ({ dataTablesPage }) => {
        // Click Add Book button
        await dataTablesPage.clickAddBookButton();
        // Validate Add New Book modal is displayed
        await expect(
            dataTablesPage.getAddNewBookModalTitle()
        ).toBeVisible();
        // Populate fields in Add New Book modal
        await dataTablesPage.enterNewBookDetails(
            DataTablesData.positive.validBook
        );
        // Click Add New Modal - Cancel button
        await dataTablesPage.clickAddNewBookModalCancelButton();
        // Validate Add New Book modal is not displayed
        await expect(
            dataTablesPage.getAddNewBookModalTitle()
        ).not.toBeVisible();
        // Get Total Row
        const actualRow = 
            await dataTablesPage.getTableRowCount();
        // Validate Total Row
        expect(
            actualRow,
            `Total Record Count Mismatch |
            Expected to contain: "${DataTablesData.totalRow}" | Actual: "${actualRow}"`
        ).toContain(DataTablesData.totalRow);
        // Search New Book
        await dataTablesPage.enterBookField(
            DataTablesData.positive.validBook.bookName
        );
        // Get Searched Book count
        const searchedBookCount = 
            await dataTablesPage.getTableRowCount();
        // Validate Searched Book count
        expect(
            searchedBookCount,
            `Searched Book Count Mismatch |
            Expected to contain: "${DataTablesData.zeroBook}" | Actual: "${searchedBookCount}"`
        ).toContain(DataTablesData.zeroBook);
        // Validate not created
        const noBookMatchedMessage = 
            await dataTablesPage.getNoBookMatched();
        expect(
            noBookMatchedMessage,
            `No Book Matched Message Mismatch |
            Expected: ${DataTablesData.noBookMatched} | Actual: ${noBookMatchedMessage}`
        ).toEqual(DataTablesData.noBookMatched);
    });
});

const placeholderScenarios = [
    {
        field: 'Book Name',
        locator: page => page.getAddNewBookModalBookName(),
        expected: DataTablesData.addNewModalPlaceholder.bookName
    },
    {
        field: 'Author',
        locator: page => page.getAddNewBookModalAuthor(),
        expected: DataTablesData.addNewModalPlaceholder.author
    },
    {
        field: 'ISBN',
        locator: page => page.getAddNewBookModalIsbn(),
        expected: DataTablesData.addNewModalPlaceholder.isbn
    },
    {
        field: 'Published',
        locator: page => page.getAddNewBookModalPublished(),
        expected: DataTablesData.addNewModalPlaceholder.published
    }
];

test.describe('QA Playground - Data Table - Add Book Modal Placeholder Validations', () => {
    placeholderScenarios.forEach(data => {
        test(`${data.field} Field`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Click Add Book button
            await dataTablesPage.clickAddBookButton();
            // Validate Modal
            expect(
                dataTablesPage.getAddNewBookModalTitle()
            ).toBeTruthy();
            // Validate field Placeholder
            await expect(
                data.locator(dataTablesPage)
            ).toHaveAttribute(
                'placeholder',
                data.expected
            );
        });
    });
});