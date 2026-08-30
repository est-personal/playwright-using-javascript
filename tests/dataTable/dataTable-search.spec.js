const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');

const positiveSearchScenarios = [
    {
        name: 'Book Name',
        searchValue: DataTablesData.existingBook.bookName,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        name: 'Author',
        searchValue: DataTablesData.existingBook.author,
        tags: ['@regression', '@positive']
    },
    {
        name: 'ISBN',
        searchValue: DataTablesData.existingBook.isbn,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Book Name With Correct Genre',
        searchValue: DataTablesData.existingBook.bookName,
        genre: DataTablesData.existingBook.genre,
        tags: ['@regression', '@positive']
    }
];

test.describe('QA Playground - Data Table - Successful Search Validations', () => {
    positiveSearchScenarios.forEach(data => {
        test(`Search Existing ${data.name}`, {
            tag: data.tags
        }, async ({ dataTablesPage }) => {
            // Select Genre
            if (data.genre) {
                await dataTablesPage.selectGenre(
                    "filter",
                    data.genre
                );
                await expect(
                    dataTablesPage.getGenreDropdown()
                ).toHaveValue(
                    data.genre
                )
            }
            // Search Book
            await dataTablesPage.enterBookField(
                data.searchValue
            );
            // Get Searched Book count
            const searchedBookCount = 
                await dataTablesPage.getTableRowCount();
            // Validate Searched Book count
            expect(
                searchedBookCount,
                `Searched Book Count Mismatch |
                Expected to contain: "${DataTablesData.oneBook}" | Actual: "${searchedBookCount}"`
            ).toContain(DataTablesData.oneBook);
            // Get Book Record
            const actualBookRecord =
                await dataTablesPage.getBookRecord();
            // Validate Book Record
            DataTablesAssertions.validateBookDetails(
                actualBookRecord,
                DataTablesData.existingBook
            );
        });
    });
});

const negativeSearchScenarios = [
    {
        name: 'Non-existing Book',
        searchValue: DataTablesData.nonExistingBook
    },
    {
        name: 'Existing Published',
        searchValue: DataTablesData.existingBook.published
    },
    {
        name: 'Existing Book Name With Incorrect Genre',
        searchValue: DataTablesData.existingBook.bookName,
        genre: DataTablesData.existingBook.notAssociatedGenre
    }
]

test.describe('QA Playground - Data Table - Unsuccessful Search Validations', () => {
    negativeSearchScenarios.forEach(data => {
        test(`Search ${data.name}`, {
            tag: ['@regression', '@negative']
        }, async ({ dataTablesPage }) => {
            // Select Genre
            if (data.genre) {
                await dataTablesPage.selectGenre(
                    "filter",
                    data.genre
                );
                await expect(
                    dataTablesPage.getGenreDropdown()
                ).toHaveValue(
                    data.genre
                )
            }
            // Search Book
            await dataTablesPage.enterBookField(
                data.searchValue
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
            // Validate no record found
            const noBookMatchedMessage = 
                await dataTablesPage.getNoBookMatched();
            expect(
                noBookMatchedMessage,
                `No Book Matched Message Mismatch |
                Expected: ${DataTablesData.noBookMatched} | Actual: ${noBookMatchedMessage}`
            ).toEqual(DataTablesData.noBookMatched);
        });
    });
});

test.describe('QA Playground - Data Table - Search State Validation', () => {
    test('Clearing Search Restores All Rows And Resets Pagination', {
        tag: ['@regression', '@positive']
    }, async ({ dataTablesPage }) => {
        // Capture Page 1 records
        const defaultBooks =
        await dataTablesPage.getColumnRows(
            'bookName'
        );
        // Navigate to Page 3
        await dataTablesPage.clickPage(3);
        // Search Existing Book
        await dataTablesPage.enterBookField(
            DataTablesData.existingBook.bookName
        );
        // Clear Search
        await dataTablesPage.enterBookField('');
        // Validate pagination reset to Page 1
        await expect(
            dataTablesPage.getPageButton(1)
        ).toHaveAttribute(
            'aria-current',
            'page'
        );
        // Validate default row count is restored
        expect(
            await dataTablesPage.getVisibleRowCount(),
            'Visible row count was not restored'
        ).toBe(
            DataTablesData.defaultRowCount
        );
        // Validate total records restored
        const totalRecords = 
            await dataTablesPage.getTableRowCount();
        expect(
            totalRecords,
            `Visible Record Count Mismatch |
            Expected to contain: "${DataTablesData.totalRow}" | Actual: "${totalRecords}"`
        ).toContain(DataTablesData.totalRow);
        // Verify original records restored
        const restoredBooks =
            await dataTablesPage.getColumnRows(
                'bookName'
            );
        expect(
            restoredBooks,
            [
                'DEFAULT TABLE STATE NOT RESTORED',
                `Expected: ${JSON.stringify(defaultBooks)}`,
                `Actual : ${JSON.stringify(restoredBooks)}`
            ].join('\n')
        ).toEqual(defaultBooks);
    });
    
});