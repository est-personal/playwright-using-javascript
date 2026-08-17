const { expect } = require('@playwright/test');
const { DataTablesData } = require('../testData/DataTablesData');
const { DataTableAssertions } = require('../helpers/DataTableAssertions');

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
    await dataTablesPage.clickAddNewBookModalAddBookButton();
    await expect(
        dataTablesPage.getAddNewBookModalTitle()
    ).not.toBeVisible();
}

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
    await dataTablesPage.clickDeleteBookModalDeleteButton();
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
    DataTableAssertions.validateBookDetails(
        actualBookRecord,
        expectedBook
    );
}

module.exports = {
    addBook,
    deleteBook,
    openEditBookModal,
    verifyBookRecord
};