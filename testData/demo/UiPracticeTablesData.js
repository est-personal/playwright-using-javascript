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
    text: {
        of:
            ' of ',
        showing:
            'Showing '
    },
    // Scenario Data
    negativeSearchAndFilterData: [

    ],
    searchAndFilterData: [
        {
            name: 'Shopping Products - Apple Watch',
            section: 'shoppingProductsTable',
            search: 'Apple Watch',
            filter: 'Wearables',
            expectedCount: '1',
            defaultCount: '12',
            show: '1–1',
            defaultShow: '1–4',
            totalCount: '12',
            info: ' products',
            filterColumn: 'Category',
            column: 'Product',
        },
        {
            name: 'Shopping Products - Sony WH-1000XM5',
            section: 'shoppingProductsTable',
            search: 'Sony WH-1000XM5',
            filter: 'Accessories',
            expectedCount: '1',
            defaultCount: '12',
            show: '1–1',
            defaultShow: '1–4',
            totalCount: '12',
            info: ' products',
            filterColumn: 'Category',
            column: 'Product',
        },
        {
            name: 'Shopping Products - Non-Existing',
            section: 'shoppingProductsTable',
            search: 'Sony XX-1000XM5',
            filter: 'Accessories',
            expectedCount: '0',
            show: '0',
            totalCount: '12',
            info: ' products',
            column: 'Product',
        },
        {
            name: 'Shopping Departments - Rohan Mehta',
            section: 'departmentsTable',
            search: 'Rohan Mehta',
            filter: 'Engineering',
            expectedCount: '1',
            defaultCount: '15',
            show: '1–1',
            defaultShow: '1–5',
            totalCount: '15',
            info: ' employees',
            filterColumn: 'Department',
            column: 'Name',
        },
        {
            name: 'Shopping Departments - Suresh Kumar',
            section: 'departmentsTable',
            search: 'Suresh Kumar',
            filter: 'Sales',
            expectedCount: '1',
            defaultCount: '15',
            show: '1–1',
            defaultShow: '1–5',
            totalCount: '15',
            info: ' employees',
            filterColumn: 'Department',
            column: 'Name',
        },
        {
            name: 'Shopping Departments - Non-Existing',
            section: 'departmentsTable',
            search: 'Rohan Verma',
            filter: 'Sales',
            expectedCount: '0',
            show: '0',
            totalCount: '15',
            info: ' employees',
            column: 'Name',
        }
    ],
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
            column: 'Product',
            defaultActivePage: '1',
            pageInfo: {
                page1:
                    '1–4',
                page2:
                    '5–8',
                page3:
                    '9–12',
                totalCount:
                    '12'
            }
        },
        {
            name: 'Departments Table',
            section: 'departmentsTable',
            column: 'Name',
            defaultActivePage: '1',
            pageInfo: {
                page1:
                    '1–5',
                page2:
                    '6–10',
                page3:
                    '11–15',
                totalCount:
                    '15'
            }
        }
    ]
};

module.exports = { UiPracticeTablesData };