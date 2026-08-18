const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');
const { DataTablesAssertions } = require('../../helpers/DataTablesAssertions');

const { 
    addBook, 
    deleteBook,
    openDeleteBookModal,
    verifyBookRecord
} = require('../../helpers/DataTablesActions');

const deleteBookScenarios = [
    {
        title: 'Delete Book',
        action: async page => {
            await page.clickDeleteBookModalDeleteButton();
        },
        expectedBookExists: 'deleted'
    },
    {
        title: 'Cancel Delete Book',
        action: async page => {
            await page.clickDeleteBookModalCancelButton();
        },
        expectedBookExists: 'notDeleted'
    }
];

const originalBook =
    DataTablesData.positive.validBook;

test.describe('QA Playground - Data Table Successful Delete Validation', () => {
    deleteBookScenarios.forEach(({ title, action, expectedBookExists }) => {
        test(title, {
            tag: ['@regression', '@positive']
        }, async ({ dataTablesPage }) => {
            // Add Book
            await addBook(
                dataTablesPage,
                originalBook
            );
            // Open Delete Book Modal
            await openDeleteBookModal(
                dataTablesPage,
                originalBook.bookName
            );
            // Delete Book or Cancel Delete Book
            await action(dataTablesPage);
            // Validate Book
            if (expectedBookExists=='notDeleted') {
                await verifyBookRecord(
                    dataTablesPage,
                    originalBook
                );
                await deleteBook(
                    dataTablesPage,
                    originalBook.bookName
                );
            } else {
                const noBookMatchedMessage =
                    await dataTablesPage.getNoBookMatched();
                expect(
                    noBookMatchedMessage
                ).toBe(
                    DataTablesData.noBookMatched
                );
            }
        });
    });
});

test.describe('QA Playground - Data Table Delete Book Modal', () => {
    test('Delete Book Modal Displays Correct Message',
    {
        tag: ['@regression', '@positive']
    },async ({ dataTablesPage }) => {
        // Add Book
        await addBook(
            dataTablesPage,
            originalBook
        );
        // Open Delete Book Modal
        await openDeleteBookModal(
            dataTablesPage,
            originalBook.bookName
        );
        // Validate Delete Book Modal
        const expectedMessage =
            `${originalBook.bookName} will be permanently removed.`;
        expect(
            await dataTablesPage
                .getDeleteBookModalMessageText()
        ).toBe(expectedMessage);
        // Click Delete Book Modal - Delete button
        await dataTablesPage.clickDeleteBookModalDeleteButton();
    });
});
