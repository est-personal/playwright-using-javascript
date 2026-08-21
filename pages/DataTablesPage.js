// Arrange Alphabetically
// Keywords for QA Playground - Data Tables Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { DataTablesLocators } = require('../locators/DataTablesLocators');
const { BasePage } = require('./BasePage');

class DataTablesPage extends BasePage {

    constructor(page) {
        super(page);

        this.bookAuthorHeader = page.locator(
            DataTablesLocators.bookAuthorColumn
        );
        this.bookGenreHeader = page.locator(
            DataTablesLocators.bookGenreColumn
        );
        this.bookIsbnHeader = page.locator(
            DataTablesLocators.bookIsbnColumn
        );
        this.bookNameHeader = page.locator(
            DataTablesLocators.bookNameColumn
        );
        this.bookPublishedHeader = page.locator(
            DataTablesLocators.bookPublishedColumn
        );
        this.editAuthorInput = page.locator(
            DataTablesLocators.editBookModalAuthorInput
        );
        this.editBookNameInput = page.locator(
            DataTablesLocators.editBookModalBookNameInput
        );
        this.editAuthorInput = page.locator(
            DataTablesLocators.editBookModalAuthorInput
        );
        this.editIsbnInput = page.locator(
            DataTablesLocators.editBookModalIsbnInput
        );
        this.editPublishedInput = page.locator(
            DataTablesLocators.editBookModalPublishedInput
        );

    }

    // Async
    async clickAddBookButton() {
        await this.page
            .locator(
                DataTablesLocators.addBookButton
            )
            .click();
    }

    async clickAddNewBookModalAddBookButton() {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalAddBookButton
            )
            .click();
    }

    async clickAddNewBookModalCancelButton() {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalCancelButton
            )
            .click();
    }

    async clickDeleteBookModalCancelButton() {
        await this.page
            .locator(
                DataTablesLocators.deleteBookModalCancelButton
            ).click();
    }

    async clickDeleteBookModalDeleteButton() {
        await this.page
            .locator(
                'button[aria-label^="Confirm delete"]'
            ).click();
    }

    async clickDeleteButton(bookName) {
        const row = this.page.locator(
            DataTablesLocators.interactiveTableRow
        ).filter({ 
            hasText: bookName 
        });
        await row.getByRole('button', { 
            name: /delete/i 
        }).click();
    }

    async clickEditBookModalCancelButton() {
        await this.page
            .locator(
                DataTablesLocators.editBookModalCancelButton
            )
            .click();
    }

    async clickEditBookModalSaveChangesButton() {
        await this.page
            .locator(
                DataTablesLocators.editBookModalSaveChangesButton
            )
            .click();
    }

    async clickEditButton() {
        await this.page
            .locator(
                DataTablesLocators.editButton
            )
            .click();
    }

    async clickNextButton() {
        await this.page
            .locator(
                DataTablesLocators.paginationNextButton
            )
            .click();
    }

    async clickPage(pageNumber) {
        await this.page
        .getByRole('button', { 
            name: pageNumber.toString() 
        })
        .click();
    }

    async clickPreviousButton() {
        await this.page
            .locator(
                DataTablesLocators.paginationPreviousButton
            )
            .click();
    }

    async enterAddNewBookModalAuthorField(author) {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalAuthorInput
            )
            .fill(author);
    }

    async enterAddNewBookModalBookNameField(bookName) {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalBookNameInput
            )
            .fill(bookName);
    }

    async enterAddNewBookModalIsbnField(isbn) {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalIsbnInput
            )
            .fill(isbn);
    }

    async enterAddNewBookModalPublishedField(publishedDate) {
        await this.page
            .locator(
                DataTablesLocators.addNewBookModalPublishedInput
            )
            .fill(publishedDate);
    }

    async enterBookField(bookName) {
        await this.page
            .locator(
                DataTablesLocators.searchBooksField
            )
            .fill(bookName);
    }

    async enterEditBookModalAuthorField(author) {
        await this.editAuthorInput.clear();
        await this.editAuthorInput.fill(author);
    }

    async enterEditBookModalBookNameField(bookName) {
        await this.editBookNameInput.clear();
        await this.editBookNameInput.fill(bookName);
    }

    async enterEditBookModalIsbnField(isbn) {
        await this.editIsbnInput.clear();
        await this.editIsbnInput.fill(isbn);
    }

    async enterEditBookModalPublishedField(published) {
        await this.editPublishedInput.clear();
        await this.editPublishedInput.fill(published);
    }

    async enterNewBookDetails(book) {
        await this.enterAddNewBookModalBookNameField(book.bookName);
        await this.enterAddNewBookModalAuthorField(book.author);
        await this.selectAddNewBookModalGenre(book.genre);
        await this.enterAddNewBookModalIsbnField(book.isbn);
        await this.enterAddNewBookModalPublishedField(book.published);
    }

    async getAddNewBookModalAuthorErrorMessage() {
        return await this.page.locator(
            DataTablesLocators.addNewBookModalAuthorError
        )
        .textContent();
    }

    async getAddNewBookModalBookNameErrorMessage() {
        return await this.page.locator(
            DataTablesLocators.addNewBookModalBookNameError
        )
        .textContent();
    }

    async getBookAuthorRows() {
        const bookAuthors =
            await this.page.locator(
                DataTablesLocators.bookAuthorRowValue
            ).allTextContents();
        return bookAuthors.map(
            bookAuthor => bookAuthor.trim()
        );
    }

    async getBookGenreRows() {
        const bookGenres =
            await this.page.locator(
                DataTablesLocators.bookGenreRowValue
            ).allTextContents();
        return bookGenres.map(
            bookGenre => bookGenre.trim()
        );
    }

    async getBookIsbnRows() {
        const bookIsbns =
            await this.page.locator(
                DataTablesLocators.bookIsbnRowValue
            ).allTextContents();
        return bookIsbns.map(
            bookIsbn => bookIsbn.trim()
        );
    }

    async getBookNameRows() {
        const bookNames =
            await this.page.locator(
                DataTablesLocators.bookNameRowValue
            ).allTextContents();
        return bookNames.map(
            bookName => bookName.trim()
        );
    }

    async getBookPublishedRows() {
        const bookPublish =
            await this.page.locator(
                DataTablesLocators.bookPublishedRowValue
            ).allTextContents();
        return bookPublish.map(
            bookPublished => bookPublished.trim()
        );
    }

    async getBookRecord(rowIndex = 0) {
        const row = this.page.locator(
            DataTablesLocators.interactiveTableRow
        ).nth(rowIndex);
        const cells = 
            await row.locator('td').allTextContents();

        return {
            bookName: cells[1]?.trim(),
            genre: cells[2]?.trim(),
            author: cells[3]?.trim(),
            isbn: cells[4]?.trim(),
            published: cells[5]?.trim()
        };
    }

    async getCurrentPageText() {
        const pageInfo = await this.page.locator(
            DataTablesLocators.interactiveTableRowCount
        )
        .textContent();
        // Example:
        // "25 books — page 3 of 5"
        const match = pageInfo.match(/page\s+(\d+)/i);
        return match ? Number(match[1]) : null;
    }

    async getDeleteBookModalMessageText() {
        return (
            await this.getDeleteBookModalMessage()
                .innerText()
        ).trim();
    }

    async getGenreOptions() {
        return await this.getGenreDropdown()
        .locator('option')
        .allTextContents();
    }

    async getNoBookMatched() {
        return await this.page.locator(
            DataTablesLocators.noBookMatchedMessage
        )
        .textContent();
    }

    async getTableHeaders() {
        const headers = await this.page.locator(
            DataTablesLocators.interactiveTableHeader
        )
        .allTextContents();
        return headers.map(header =>
            header.replace('⇅', '').trim()
        );
    }

    // Get Column Header by exact index
    async getTableHeadersByIndex(columnNumber) {
        const headers = await this.page.locator(
            DataTablesLocators.interactiveTableHeader
        )
        .nth(columnNumber-1)
        .allTextContents();
        return headers.map(header =>
            header.replace('⇅', '').trim()
        );
    }

    async getTableRowCount(columnNumber) {
        return await this.page.locator(
            DataTablesLocators.interactiveTableRowCount
        )
        .textContent();
    }

    async getTotalPages() {
        return await this.page.locator(
            '[data-testid^="pagination-page-"]'
        ).count();
    }

    // async getVisibleRowCount(columnNumber) {
    async getVisibleRowCount() {
        return await this.page.locator(
            DataTablesLocators.interactiveTableRow
        )
        .count();
    }

    async navigateToDataTable() {
        await this.navigate(
            QaPlaygroundUrls.dataTablesPage
        );
    }

    async openAddBookModal() {
        await this.clickAddBookButton();
        await expect(
            this.getAddNewBookModalTitle()
        ).toBeVisible();
    }

    async selectAddNewBookModalGenre(genre) {
        const dropdown = this.page.locator(
            DataTablesLocators.addNewBookModalGenreDropdown
        );
        await dropdown.selectOption({ 
            value: genre 
        });
    }

    async selectEditBookModalGenre(genre) {
        const dropdown = this.page.locator(
            DataTablesLocators.editBookModalGenreDropdown
        );
        await dropdown.selectOption({ 
            value: genre 
        });
    }

    async selectGenre(genre) {
        const dropdown = this.page.locator(
            DataTablesLocators.allGenresDropdown
        );
        await dropdown.selectOption({ 
            value: genre 
        });
    }

    async sortBookAuthorAscending() {
        await this.bookAuthorHeader.click();
    }

    async sortBookAuthorDescending() {
        await this.bookAuthorHeader.click();
        await this.bookAuthorHeader.click();
    }

    async sortBookGenreAscending() {
        await this.bookGenreHeader.click();
    }

    async sortBookGenreDescending() {
        await this.bookGenreHeader.click();
        await this.bookGenreHeader.click();
    }

    async sortBookIsbnAscending() {
        await this.bookIsbnHeader.click();
    }

    async sortBookIsbnDescending() {
        await this.bookIsbnHeader.click();
        await this.bookIsbnHeader.click();
    }

    async sortBookNameAscending() {
        await this.bookNameHeader.click();
    }

    async sortBookNameDescending() {
        await this.bookNameHeader.click();
        await this.bookNameHeader.click();
    }

    async sortBookPublishedAscending() {
        await this.bookPublishedHeader.click();
    }

    async sortBookPublishedDescending() {
        await this.bookPublishedHeader.click();
        await this.bookPublishedHeader.click();
    }

    async updateBookDetails(book) {
        await this.enterEditBookModalBookNameField(book.bookName);
        await this.enterEditBookModalAuthorField(book.author);
        await this.selectEditBookModalGenre(book.genre);
        await this.enterEditBookModalIsbnField(book.isbn);
        await this.enterEditBookModalPublishedField(book.published);
    }

    // Sync
    getAddNewBookModalAuthor() {
        return this.page
            .locator(
                DataTablesLocators.addNewBookModalAuthorInput
        );
    }

    getAddNewBookModalBookName() {
        return this.page
            .locator(
                DataTablesLocators.addNewBookModalBookNameInput
        );
    }

    getAddNewBookModalIsbn() {
        return this.page
            .locator(
                DataTablesLocators.addNewBookModalIsbnInput
        );
    }

    getAddNewBookModalPublished() {
        return this.page
            .locator(
                DataTablesLocators.addNewBookModalPublishedInput
        );
    }

    getAddNewBookModalTitle() {
        return this.page
            .locator(
                DataTablesLocators.addNewBookModalTitle
        );
    }

    getBookAuthorColumn() {
        return this.page
            .locator(
                DataTablesLocators.bookAuthorColumn
        );
    }

    getBookGenreColumn() {
        return this.page
            .locator(
                DataTablesLocators.bookGenreColumn
        );
    }

    getBookIsbnColumn() {
        return this.page
            .locator(
                DataTablesLocators.bookIsbnColumn
        );
    }

    getBookNameColumn() {
        return this.page
            .locator(
                DataTablesLocators.bookNameColumn
        );
    }

    getBookPublishedColumn() {
        return this.page
            .locator(
                DataTablesLocators.bookPublishedColumn
        );
    }

    getDeleteBookModalBookName() {
        return this.page.getByTestId(
            'delete-dialog-book-name'
        );
    }

    getDeleteBookModalTitle() {
        return this.page
            .locator(
                DataTablesLocators.deleteBookModalTitle
        );
    }

    getDeleteBookModalMessage() {
        return this.page
            .getByTestId('delete-dialog-book-name')
            .locator('..');
    }

    getEditBookModalTitle() {
        return this.page
            .locator(
                DataTablesLocators.editBookModalTitle
        );
    }

    getGenreDropdown() {
        return this.page
            .locator(
                DataTablesLocators.allGenresDropdown
        );
    }

    getInteractiveTableSection() {
        return this.page
            .locator(
                DataTablesLocators.interactiveTableSection
        );
    }

    getNextButton() {
        return this.page
            .locator(
                DataTablesLocators.paginationNextButton
        );
    }

    getPageButton(pageNumber) {
        return this.page.getByTestId(
            `pagination-page-${pageNumber}`
        );
    }

    getPreviousButton() {
        return this.page
            .locator(
                DataTablesLocators.paginationPreviousButton
        );
    }
}

module.exports = { DataTablesPage };