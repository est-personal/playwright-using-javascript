const {test, expect} = require('../../fixtures/dataTables.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTableAssertions } = require('../../helpers/DataTableAssertions');

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

test.describe('QA Playground - Data Table Sorting Validation', () => {
    sortableColumns.forEach(column => {
        test(`${column.name} Ascending Sort`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            await column.sortAsc(dataTablesPage);
            await expect(
                column.getHeader(dataTablesPage)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.ascending
            );
            const values =
                await column.getValues(dataTablesPage);
            DataTableAssertions.validateAscending(
                values,
                column.name
            );
        });
        test(`${column.name} Descending Sort`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            await column.sortDesc(dataTablesPage);
            await expect(
                column.getHeader(dataTablesPage)
            ).toHaveAttribute(
                'aria-sort',
                DataTablesData.descending
            );
            const values =
                await column.getValues(dataTablesPage);
            DataTableAssertions.validateDescending(
                values,
                column.name
            );
        });
    });
});