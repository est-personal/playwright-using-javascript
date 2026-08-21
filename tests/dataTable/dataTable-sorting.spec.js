const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');

const sortableColumns = [
    {
        name: 'Book Name',
        sortAsc: page => page.sortBookNameAscending(),
        sortDesc: page => page.sortBookNameDescending(),
        getValues: page => page.getBookNameRows(),
        getHeader: page => page.getBookNameColumn()
    },
    {
        name: 'Book Genre',
        sortAsc: page => page.sortBookGenreAscending(),
        sortDesc: page => page.sortBookGenreDescending(),
        getValues: page => page.getBookGenreRows(),
        getHeader: page => page.getBookGenreColumn()
    },
    {
        name: 'Book Author',
        sortAsc: page => page.sortBookAuthorAscending(),
        sortDesc: page => page.sortBookAuthorDescending(),
        getValues: page => page.getBookAuthorRows(),
        getHeader: page => page.getBookAuthorColumn()
    },
    {
        name: 'Book ISBN',
        sortAsc: page => page.sortBookIsbnAscending(),
        sortDesc: page => page.sortBookIsbnDescending(),
        getValues: page => page.getBookIsbnRows(),
        getHeader: page => page.getBookIsbnColumn()
    },
    {
        name: 'Published',
        sortAsc: page => page.sortBookPublishedAscending(),
        sortDesc: page => page.sortBookPublishedDescending(),
        getValues: page => page.getBookPublishedRows(),
        getHeader: page => page.getBookPublishedColumn()
    }
];

test.describe('QA Playground - Data Table - Sorting Validation', () => {
    sortableColumns.forEach(data => {
        test(`${data.name} Ascending Sort`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Sort column in ascending
            await data.sortAsc(dataTablesPage);
            // Validate column aria-sort
            await expect(
                data.getHeader(dataTablesPage)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.ascending
            );
            // Get values of column
            const values =
                await data.getValues(dataTablesPage);
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
            await data.sortDesc(dataTablesPage);
            // Validate column aria-sort
            await expect(
                data.getHeader(dataTablesPage)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.descending
            );
            // Get values of column
            const values =
                await data.getValues(dataTablesPage);
            // Validate column sorted in descending order
            DataTablesAssertions.validateDescending(
                values,
                data.name
            );
        });
    });
});