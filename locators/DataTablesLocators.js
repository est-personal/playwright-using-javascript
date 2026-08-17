// Arrange Alphabetically
// Locators for QA Playground - Data Tables Page
const DataTablesLocators = {
    actionsColumn: 
        '[data-testid="col-actions"]',
    actionsRowValue: 
        '[data-testid="book-row"] [data-col="actions"]',
    addBookButton: 
        '[data-testid="btn-add-book"]',
    addNewBookModalAddBookButton: 
        '[data-testid="add-dialog-save"]',
    addNewBookModalAuthorError: 
        '[data-testid="add-author-error"]',
    addNewBookModalAuthorInput: 
        '[data-testid="add-input-book-author"]',
    addNewBookModalBookNameError: 
        '[data-testid="add-name-error"]',
    addNewBookModalBookNameInput: 
        '[data-testid="add-input-book-name"]',
    addNewBookModalCancelButton: 
        '[data-testid="add-dialog-cancel"]',
    addNewBookModalGenreDropdown: 
        '[data-testid="add-select-genre"]',
    addNewBookModalIsbnInput: 
        '[name="isbn_field_new"]',
    addNewBookModalPublishedInput: 
        '[data-testid="add-input-book-published"]',
    addNewBookModalTitle: 
        '[id="add-dialog-title"]',
    allGenresDropdown: 
        '[data-testid="genre-filter"]',
    bookAuthorColumn: 
        '[data-testid="col-book-author"]',
    bookAuthorRowValue: 
        '[data-testid="book-row"] [data-col="book-author"]',
    bookGenreColumn: 
        '[data-testid="col-book-genre"]',
    bookGenreRowValue: 
        '[data-testid="book-row"] [data-col="book-genre"]',
    bookIsbnColumn: 
        '[data-testid="col-book-isbn"]',
    bookIsbnRowValue: 
        '[data-testid="book-row"] [data-col="book-isbn"]',
    bookNameColumn: 
        '[data-testid="col-book-name"]',
    bookNameRowValue: 
        '[data-testid="book-row"] [data-col="book-name"]',
    bookPublishedColumn: 
        '[data-testid="col-book-published"]',
    bookPublishedRowValue: 
        '[data-testid="book-row"] [data-col="book-published"]',
    deleteButton: 
        '[data-testid="btn-edit-book"]',
    deleteBookModalCancelButton: 
        '[data-testid="delete-dialog-cancel"]',
    deleteBookModalDeleteButton: 
        '[aria-label="Confirm delete sdcf"]',
    deleteBookModalMessage: 
        '[data-testid="delete-dialog-cancel"]',
    deleteBookModalTitle: 
        '[id="delete-dialog-title"]',
    editBookModalAuthorInput: 
        '[data-testid="edit-input-book-author"]',
    editBookModalBookNameInput: 
        '[data-testid="edit-input-book-name"]',
    editBookModalCancelButton: 
        '[data-testid="edit-dialog-cancel"]',
    editBookModalGenreDropdown: 
        '[data-testid="edit-select-genre"]',
    editBookModalIsbnInput: 
        'input[name^="isbn_field_book"]',
    editBookModalPublishedInput: 
        '[data-testid="edit-input-book-published"]',
    editBookModalSaveChangesButton: 
        '[data-testid="edit-dialog-save"]',
    editBookModalTitle: 
        '[id="edit-dialog-title"]',
    editButton: 
        '[data-testid="btn-edit-book"]',
    interactiveTableHeader: 
        '[data-testid="table-head"] th',
    interactiveTableRow: 
        '[data-testid="book-row"]',
    interactiveTableRowCount: 
        '[data-testid="row-count"]',
    interactiveTableSection: 
        '[data-testid="data-table-wrapper"]',
    noBookMatchedMessage: 
        '[data-testid="empty-table-msg"]',
    paginationNextButton: 
        '[data-testid="pagination-next"]',
    paginationPreviousButton: 
        '[data-testid="pagination-prev"]',
    searchBooksField: 
        '[data-testid="table-search"]',
    srNoColumn: 
        '[data-testid="col-sr-no"]',
};

module.exports = { DataTablesLocators };