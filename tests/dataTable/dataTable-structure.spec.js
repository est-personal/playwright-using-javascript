const {test, expect} = require('../../fixtures/dataTables.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTableAssertions } = require('../../helpers/DataTableAssertions');

test.describe('QA Playground - Data Table Structure Validation', () => {
    test('Validate Column Headers', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Get Column Headers
        const actualHeaders = 
            await dataTablesPage.getTableHeaders();
        // Validate Column Headers
        expect(
            actualHeaders,
            `Column Header Mismatch |
            Expected: ${DataTablesData.headers} | Actual: ${actualHeaders}`
        ).toEqual(DataTablesData.headers);
        // // Validate Column Headers Position
        // for (let i = 0; i < DataTablesData.headers.length; i++) {
        //     const expectedHeader = DataTablesData.headers[i];
        //     const actualHeader = actualHeaders[i];
        //     expect(
        //         actualHeader, [
        //             'HEADER POSITION VALIDATION FAILED',
        //             `Column Number : ${i + 1}`,
        //             `Expected : ${expectedHeader}`,
        //             `Actual : ${actualHeader}`
        //         ].join('\n')
        //     ).toBe(DataTablesData.headers[i]);
        // }
    });

    test('Validate Default Total Rows', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Get Visible Row Count
        const actualVisibleRowCount = 
            await dataTablesPage.getVisibleRowCount();
        // Validate Visible Row Count
        expect(
            actualVisibleRowCount,
            `Visible Row Count Mismatch |
            Expected: ${DataTablesData.defaultRowCount} | Actual: ${actualVisibleRowCount}`
        ).toEqual(DataTablesData.defaultRowCount);
        // Get Total Row
        const actualRow = 
            await dataTablesPage.getTableRowCount();
        // Validate Total Row
        expect(
            actualRow,
            `Total Record Count Mismatch |
            Expected to contain: "${DataTablesData.totalRow}" | Actual: "${actualRow}"`
        ).toContain(DataTablesData.totalRow);
    });

    test('Validate Genre Options', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Get Genre Options
        const genreOptions = 
            await dataTablesPage.getGenreOptions();
        // Validate Genre Options
        expect(
            genreOptions,
            `Genre Options Mismatch |
            Expected: ${DataTablesData.genreOptions} | Actual: ${genreOptions}`
        ).toEqual(DataTablesData.genreOptions);
    });

    test('Validate Default Book Names', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Get Book Name Column values
        const actualBookNames = 
            await dataTablesPage.getBookNameRows();
        // Validate no empty values
        actualBookNames.forEach((bookName, index) => {
            expect(
                bookName,
                `Book Name is empty at Row ${index + 1}`
            ).not.toBe('');
        });
        // Validate Book Name Column values
        expect(
            actualBookNames,
            `Book Name Column values Mismatch |
            Expected: ${DataTablesData.bookNames} | Actual: ${actualBookNames}`
        ).toEqual(DataTablesData.bookNames);
    });

    // test('Validate Default Exact Book Name Column Values', 
    // {
    //     tag: ['@regression', '@positive']
    // },
    // async ({ dataTablesPage }) => {
    //     // Get Book Name Column values
    //     const actualBookNames = 
    //         await dataTablesPage.getBookNameRows();
    //     // Validate exact Book Name Column values
    //     for (let i = 0; i < DataTablesData.bookNames.length; i++) {
    //         expect(
    //             actualBookNames[i],
    //             `Book Name Column values Mismatch at row ${i + 1} |
    //             Expected: ${DataTablesData.bookNames[i]} | Actual: ${actualBookNames[i]}`
    //         ).toEqual(DataTablesData.bookNames[i]);
    //     }
    // });

    test('Validate All values in the Book ISBN column start with ISBN-', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Get ISBN column values
        const isbnValues = 
            await dataTablesPage.getBookIsbnRows();
        // Validate ISBN column values
        isbnValues.forEach(isbn => {
            expect(
                isbn.trim(),
                `Invalid ISBN: ${isbn}`
            ).toMatch(/^ISBN-/);
        })
    });

    test('Validate Genre filter reduces visible rows to the selected genre only', 
    {
        tag: ['@regression', '@positive']
    },
    async ({ dataTablesPage }) => {
        // Select Genre
        await dataTablesPage.selectGenre(
            DataTablesData.existingBook.genre
        );
        const selectedGenre = dataTablesPage.getGenreDropdown();
        expect(selectedGenre).toHaveValue(
            DataTablesData.existingBook.genre
        );
        // Validate Genre column
        const actualBookGenres =
        await dataTablesPage.getBookGenreRows();
        DataTableAssertions.validateGenres(
            actualBookGenres,
            DataTablesData.existingBook.genre
        );
    });
    
});