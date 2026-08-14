// Arrange Alphabetically
// Test Data for QA Playground - Data Tables Page
const DataTablesData = {
    addNewModalPlaceholder: {
        author:
            'Author name',
        bookName:
            'Enter book title',
        isbn:
            '9780000000000',
        published:
            'YYYY-MM-DD',
    },
    ascending:
        'ascending',
    bookNames: [
        'The Pragmatic Programmer',
        'Clean Code',
        'Design Patterns',
        'The Hobbit',
        'Dune'
    ],
    defaultRowCount:
        5,
    descending:
        'descending',
    existingBook: {
        author: 
            'William Gibson',
        bookName:
            'Neuromancer',
        genre:
            'Science Fiction',
        isbn:
            'ISBN-9780441569595',
        notAssociatedGenre:
            'Technology',
        published:
            '1984-07-01',
    },
    genreOptions: [
        'All Genres',
        'Technology',
        'Fantasy',
        'Science Fiction',
        'Dystopian',
        'Fiction',
        'Non-Fiction',
    ],
    headers: [
        'Sr No.',
        'Book Name',
        'Book Genre',
        'Book Author',
        'Book ISBN',
        'Book Published',
        'Actions'
    ],
    noBookMatched:
        'No books match your search',
    notApplicable:
        'N/A',
    oneBook:
        '1 book',
    pageOne:
        'page 1',
    pageTwo:
        'page 2',
    positive: {
        validBook: {
            author:
                'Mistine Santos',
            bookName:
                'Playwright Design Patterns',
            genre:
                'Technology',
            isbn:
                '9781234567890',
            published:
                '2025-01-01',
            get isbnNumber() {
                return 'ISBN-' + this.isbn;
            },
        },
        blankIsbn: {
            author:
                'Mistine Santos',
            bookName:
                'Playwright Design Patterns',
            genre:
                'Technology',
            isbn:
                '',
            published:
                '2025-01-01',
            get isbnNumber() {
                return 'ISBN-' + 'N/A';
            },
        },
        blankPublished: {
            author:
                'Mistine Santos',
            bookName:
                'Playwright Design Patterns',
            genre:
                'Technology',
            isbn:
                '9781234567890',
            published:
                '',
            get isbnNumber() {
                return 'ISBN-' + this.isbn;
            },
        },
        expectedResult: {
            searchedBookCount:
                '1 book',
            totalRow:
                '26 books',
        },
    },
    negative: {
        blankBookName: {
            author:
                'Mistine Santos',
            bookName:
                '',
            genre:
                'Technology',
            isbn:
                '9781234567890',
            published:
                '2025-01-01',
        },
        blankAuthor: {
            author:
                '',
            bookName:
                'Playwright Design Patterns',
            genre:
                'Technology',
            isbn:
                '9781234567890',
            published:
                '2025-01-01',
        },
        errorMessage: {
            bookNameRequired:
                'Book name is required',
            authorRequired:
                'Author is required',
        },
    },
    nonExistingBook:
        'The Alchemiste',
    totalRow:
        '25 books',
    zeroBook:
        '0 books'
};

module.exports = { DataTablesData };