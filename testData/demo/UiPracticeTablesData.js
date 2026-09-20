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