const {test, expect} = require('../../fixtures/Pages.fixture');
const { DataTablesData } = require('../../testData/DataTablesData');

const { 
    addBook, 
    deleteBook,
    openDeleteBookModal,
    verifyBookRecord
} = require('../../helpers/DataTablesActions');

const deleteBookScenarios = [
    {
        title: 'Delete Book',
        button: 'delete',
        expectedBookExists: 'deleted'
    },
    {
        title: 'Cancel Delete Book',
        button: 'deleteCancel',
        expectedBookExists: 'notDeleted'
    }
];

const originalBook =
    DataTablesData.positive.validBook;

test.describe('QA Playground - Data Table - Successful Delete Validations', () => {
    deleteBookScenarios.forEach(data => {
        test(`${data.title}`, {
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
            await dataTablesPage.clickModalButton(
                data.button
            );
            // Validate Book
            if (data.expectedBookExists=='notDeleted') {
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

test.describe('QA Playground - Data Table - Delete Book Modal', () => {
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
        await dataTablesPage.clickModalButton(
            'delete'
        );
    });
});
