const { expect } = require('@playwright/test');
const { DataTablesData } = require('../testData/DataTablesData');
const { DataTablesAssertions } = require('../helpers/DataTablesAssertions');

/**
Adds a new book.
@param {DataTablesPage} dataTablesPage
@param {Object} bookData
**/
async function addBook(dataTablesPage, bookData) {
    await dataTablesPage.clickAddBookButton();
    await expect(
        dataTablesPage.getAddNewBookModalTitle()
    ).toBeVisible();
    await dataTablesPage.enterNewBookDetails(
        bookData
    );
    await dataTablesPage.clickModalButton(
        'addBook'
    );
    await expect(
        dataTablesPage.getAddNewBookModalTitle()
    ).not.toBeVisible();
}

/**
Deletes book.
@param {DataTablesPage} dataTablesPage
@param {Object} bookData
**/
async function deleteBook(dataTablesPage, bookName) {
    await dataTablesPage.enterBookField(
        bookName
    );
    await dataTablesPage.clickDeleteButton(
        bookName
    );
    await expect(
        dataTablesPage.getDeleteBookModalTitle()
    ).toBeVisible();
    await dataTablesPage.clickModalButton(
        'delete'
    );
    await dataTablesPage.enterBookField(
        bookName
    );
    const noBookMatchedMessage =
        await dataTablesPage.getNoBookMatched();
    expect(noBookMatchedMessage,
        `No Book Matched Message Mismatch |
        Expected: ${DataTablesData.noBookMatched} | Actual: ${noBookMatchedMessage}`
    ).toEqual(DataTablesData.noBookMatched);
}

async function getPageSnapshot(page) {
    return {
        books: await page.getColumnRows(
            'bookName'
        ),
        pageInfo: await page.getTableRowCount()
    };
}

async function openDeleteBookModal(dataTablesPage, bookName) {
    await dataTablesPage.enterBookField(
        bookName
    );
    await dataTablesPage.clickDeleteButton();
    await expect(
        dataTablesPage.getDeleteBookModalTitle()
    ).toBeVisible();
}

async function openEditBookModal(dataTablesPage, bookName) {
    await dataTablesPage.enterBookField(
        bookName
    );
    await dataTablesPage.clickEditButton();
    await expect(
        dataTablesPage.getEditBookModalTitle()
    ).toBeVisible();
}

async function verifyBookRecord(dataTablesPage, expectedBook) {
    await dataTablesPage.enterBookField(
        expectedBook.bookName
    );
    const actualBookRecord =
        await dataTablesPage.getBookRecord();
    DataTablesAssertions.validateBookDetails(
        actualBookRecord,
        expectedBook
    );
}

module.exports = {
    addBook,
    deleteBook,
    getPageSnapshot,
    openDeleteBookModal,
    openEditBookModal,
    verifyBookRecord
};