const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');

const sortScenarios = [
    {
        name: 'Book Name',
        column: 'bookName',
    },
    {
        name: 'Book Genre',
        column: 'bookGenre',
    },
    {
        name: 'Book Author',
        column: 'bookAuthor',
    },
    {
        name: 'Book ISBN',
        column: 'bookIsbn',
    },
    {
        name: 'Book Published',
        column: 'bookPublished',
    }
];

test.describe('QA Playground - Data Table - Sorting Validation', () => {
    sortScenarios.forEach(data => {
        test(`${data.name} Ascending Sort`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Sort column in ascending
            await dataTablesPage.sortColumn(
                data.column,
                'asc'
            );
            // Validate column aria-sort
            await expect(
                dataTablesPage.getColumnHeader(data.column)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.ascending
            );
            // Get values of column
            const values =
                await dataTablesPage.getColumnRows(data.column);
            // Validate column sorted in ascending order
            DataTablesAssertions.validateAscending(
                values,
                data.name
            );
        });
        
        test(`${data.name} Descending Sort`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Sort column in descending
            await dataTablesPage.sortColumn(
                data.column,
                'desc'
            );
            // Validate column aria-sort
            await expect(
                dataTablesPage.getColumnHeader(data.column)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.descending
            );
            // Get values of column
            const values =
                await dataTablesPage.getColumnRows(data.column);
            // Validate column sorted in descending order
            DataTablesAssertions.validateDescending(
                values,
                data.name
            );
        });
    });
});