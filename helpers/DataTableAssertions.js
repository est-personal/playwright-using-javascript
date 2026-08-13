const { expect } = require('@playwright/test');
const { DataTablesData } = require('../testData/DataTablesData');

class DataTableAssertions {
    static validateAscending(values, columnName) {
        const expected = [...values].sort((a, b) =>
            a.localeCompare(b)
        );
        expect(
            values,
            `${columnName} ASC SORT FAILED`
        ).toEqual(expected);
    }

    static validateBookDetails(actual, expected) {
        const expectedIsbn =
            expected.isbnNumber ?? expected.isbn;
        const expectedPublished =
            !expected.published ||
            expected.published.trim() === ''
                ? DataTablesData.notApplicable
                : expected.published;
        expect(
            actual.bookName,
            `Book Name Mismatch |
            Expected: ${expected.bookName} | Actual: ${actual.bookName}`
        ).toBe(expected.bookName);
        expect(actual.genre,
            `Book Genre Mismatch |
            Expected: ${expected.genre} | Actual: ${actual.genre}`
        ).toBe(expected.genre);
        expect(actual.author,
            `Book Author Mismatch |
            Expected: ${expected.author} | Actual: ${actual.author}`
        ).toBe(expected.author);
        expect(actual.isbn,
            `Book ISBN Mismatch |
            Expected: ${expectedIsbn} | Actual: ${actual.isbn}`
        ).toBe(expectedIsbn);
        expect(actual.published,
            `Book Name Mismatch |
            Expected: ${expectedPublished} | Actual: ${actual.published}`
        ).toBe(expectedPublished);
    }

    static async validateCurrentPage(page, expectedPage) {
        const currentPage =
            await page.getCurrentPageText();
        expect(
            currentPage,
            `Failed to navigate to Page ${expectedPage}`
        ).toBe(expectedPage);
    }

    static validateDescending(values, columnName) {
        const expected = [...values].sort((a, b) =>
            b.localeCompare(a)
        );
        expect(
            values,
            `${columnName} DESC SORT FAILED`
        ).toEqual(expected);
    }

    static validateGenres(genres, expectedGenre) {
        genres.forEach((genre, index) => {
            expect(
                genre,
                `Genre Mismatch at Row ${index + 1} |
                Expected: ${expectedGenre} |
                Actual: ${genre}`
            ).toBe(expectedGenre);
        });
    }
}

module.exports = { DataTableAssertions };