// Arrange Alphabetically
// Test Data for QA Playground - UI Practice - Tables Page
const UiPracticeTablesData = {
    departmentsTable: {
        headers:[
            'Name', 
            'Department', 
            'Salary', 
            'Date Joined', 
            'Status', 
            'Actions'
        ]
    },
    shoppingProductsTable: {
        headers:[
            'Product', 
            'Category', 
            'Price', 
            'Rating', 
            'Stock', 
            'Actions'
        ]
    },
    // Scenario Data
    sortData: [
        {
            name: 'Product Ascending',
            section: 'shoppingProductsTable',
            column: 'Product',
            order: 'asc',
            type: 'text'
        },
        {
            name: 'Product Descending',
            // bugId: 'ISSUE-241',
            section: 'shoppingProductsTable',
            column: 'Product',
            order: 'desc',
            type: 'text'
        },
        {
            name: 'Category Ascending',
            section: 'shoppingProductsTable',
            column: 'Category',
            order: 'asc',
            type: 'text'
        },
        {
            name: 'Category Descending',
            section: 'shoppingProductsTable',
            column: 'Category',
            order: 'desc',
            type: 'text'
        },
        {
            name: 'Price Ascending',
            section: 'shoppingProductsTable',
            column: 'Price',
            order: 'asc',
            type: 'currency'
        },
        {
            name: 'Price Descending',
            section: 'shoppingProductsTable',
            column: 'Price',
            order: 'desc',
            type: 'currency'
        },
        {
            name: 'Rating Ascending',
            section: 'shoppingProductsTable',
            column: 'Rating',
            order: 'asc',
            type: 'number'
        },
        {
            name: 'Rating Descending',
            section: 'shoppingProductsTable',
            column: 'Rating',
            order: 'desc',
            type: 'number'
        },
        {
            name: 'Name Ascending',
            section: 'departmentsTable',
            column: 'Name',
            order: 'asc',
            type: 'text'
        },
        {
            name: 'Name Descending',
            section: 'departmentsTable',
            column: 'Name',
            order: 'desc',
            type: 'text'
        },
        {
            name: 'Department Ascending',
            section: 'departmentsTable',
            column: 'Department',
            order: 'asc',
            type: 'text'
        },
        {
            name: 'Department Descending',
            section: 'departmentsTable',
            column: 'Department',
            order: 'desc',
            type: 'text'
        },
        {
            name: 'Date Joined Ascending',
            section: 'departmentsTable',
            column: 'Date Joined',
            order: 'asc',
            type: 'date'
        },
        {
            name: 'Date Joined Descending',
            section: 'departmentsTable',
            column: 'Date Joined',
            order: 'desc',
            type: 'date'
        },
        {
            name: 'Salary Ascending',
            section: 'departmentsTable',
            column: 'Salary',
            order: 'asc',
            type: 'currency'
        },
        {
            name: 'Salary Descending',
            section: 'departmentsTable',
            column: 'Salary',
            order: 'desc',
            type: 'currency'
        }
    ],
    tableData: [
        {
            name: 'Shopping Products Table',
            section: 'shoppingProductsTable',
        },
        {
            name: 'Departments Table',
            section: 'departmentsTable',
        }
    ]
};

module.exports = { UiPracticeTablesData };