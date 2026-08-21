const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');

const { 
    addBook, 
    deleteBook,
    openEditBookModal,
    verifyBookRecord
} = require('../../helpers/DataTablesActions');

const editBookScenarios = [
    {
        title: 'Book Name',
        data: DataTablesData.editExistingBook.updateBookName,
        editAction: async (page, data) => {
            await page.enterEditBookModalBookNameField(
                data.bookName
            );
        }
    },
    {
        title: 'Author',
        data: DataTablesData.editExistingBook.updateAuthor,
        editAction: async (page, data) => {
            await page.enterEditBookModalAuthorField(
                data.author
            );
        }
    },
    {
        title: 'ISBN',
        data: DataTablesData.editExistingBook.updateIsbn,
        editAction: async (page, data) => {
            await page.enterEditBookModalIsbnField(
                data.isbn
            );
        }
    },
    {
        title: 'Genre',
        data: DataTablesData.editExistingBook.updateGenre,
        editAction: async (page, data) => {
            await page.selectEditBookModalGenre(
                data.genre
            );
        }
    },
    {
        title: 'Published',
        data: DataTablesData.editExistingBook.updatePublished,
        editAction: async (page, data) => {
            await page.enterEditBookModalPublishedField(
                data.published
            );
        }
    },
    {
        title: 'All Fields',
        data: DataTablesData.editExistingBook.updateAll,
        editAction: async (page, data) => {
            await page.updateBookDetails(
                data
            );
        }
    }
];

const originalBook =
    DataTablesData.positive.validBook;

test.describe('QA Playground - Data Table - Successful Edit Validations', () => {
    editBookScenarios.forEach(({ title, data, editAction }) => {
        test(`Edit ${title} Successfully`, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Add Book
            await addBook(
                dataTablesPage,
                originalBook
            );
            // Open Edit Book Modal
            await openEditBookModal(
                dataTablesPage,
                originalBook.bookName
            );
            // Edit Book
            await editAction(
                dataTablesPage,
                data
            );
            // Click Edit Book Modal - Save Changes button
            await dataTablesPage.clickEditBookModalSaveChangesButton();
            // Validate Book Record
            await verifyBookRecord(
                dataTablesPage,
                data
            );
            // Delete Book
            await deleteBook(
                dataTablesPage,
                data.bookName
            );
        });
    });
});

test.describe('QA Playground - Data Table - Cancel Edit Validation', () => {
    editBookScenarios.forEach(({ title, data, editAction }) => {
        test(`Cancel ${title} Update`, {
            tag: ['@regression', '@positive']
        },
        async ({ dataTablesPage }) => {
            // Add Book
            await addBook(
                dataTablesPage,
                originalBook
            );
            // Open Edit Book Modal
            await openEditBookModal(
                dataTablesPage,
                originalBook.bookName
            );
            // Edit Book
            await editAction(
                dataTablesPage,
                data
            );
            // Click Edit Book Modal - Cancel button
            await dataTablesPage.clickEditBookModalCancelButton();
            // Validate Book Record
            await verifyBookRecord(
                dataTablesPage,
                originalBook
            );
            // Delete Book
            await deleteBook(
                dataTablesPage,
                originalBook.bookName
            );
        });
    });
});