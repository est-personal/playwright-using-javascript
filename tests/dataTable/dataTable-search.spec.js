const {test, expect} = require('../../fixtures/dataTables.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');

const positiveSearchTest = [
    {
        name: 'Book Name',
        searchValue: DataTablesData.existingBook.bookName
    },
    {
        name: 'Author',
        searchValue: DataTablesData.existingBook.author
    },
    {
        name: 'ISBN',
        searchValue: DataTablesData.existingBook.isbn
    },
    {
        name: 'Book Name With Correct Genre',
        searchValue: DataTablesData.existingBook.bookName,
        genre: DataTablesData.existingBook.genre
    }
];

test.describe('QA Playground - Data Table Positive Search Validation', () => {
    positiveSearchTest.forEach(scenario => {
        test(`Search Existing ${scenario.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Select Genre
            if (scenario.genre) {
                await dataTablesPage.selectGenre(
                    scenario.genre
                );
                await expect(
                    dataTablesPage.getGenreDropdown()
                ).toHaveValue(
                    scenario.genre
                )
            }
            // Search Book
            await dataTablesPage.enterBookField(
                scenario.searchValue
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

const negativeSearchTest = [
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

test.describe('QA Playground - Data Table Negative Search Validation', () => {
    negativeSearchTest.forEach(scenario => {
        test(`Search ${scenario.name}`, {
            tag: ['@regression', '@negative']
        }, async ({ dataTablesPage }) => {
            // Select Genre
            if (scenario.genre) {
                await dataTablesPage.selectGenre(
                    scenario.genre
                );
                await expect(
                    dataTablesPage.getGenreDropdown()
                ).toHaveValue(
                    scenario.genre
                )
            }
            // Search Book
            await dataTablesPage.enterBookField(
                scenario.searchValue
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

test.describe('QA Playground - Data Table Search State Validation', () => {
    test('Clearing Search Restores All Rows And Resets Pagination', {
        tag: ['@regression', '@positive']
    }, async ({ dataTablesPage }) => {
        // Capture Page 1 records
        const defaultBooks =
        await dataTablesPage.getBookNameRows();
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
            await dataTablesPage.getBookNameRows();
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