// Arrange Alphabetically
// Locators for QA Playground - UI Practice - Tables Page
const UiPracticeTablesLocators = {
    departmentsTable: {
        clearAllButton: 
            '[data-testid="departments-clear-btn"]',
        columnHeader: 
            '[data-testid="departments-table"] th',
        dropdown: 
            '[data-testid="departments-filter"]',
        editButton: (productName) =>
            `tr:has(td:text-is("${productName}")) [data-testid*="products-edit-btn-"]   `,
        nextButton: 
            '[data-testid="departments-next"]',
        pageInfo: 
            '[data-testid="departments-info"]',
        pageNumber: (number) =>
            `[data-testid="departments-btn-${(number)}"]`,
        previousButton: 
            '[data-testid="departments-prev"]',
        searchInput: 
            '[data-testid="departments-search"]',
        table: 
            '[data-testid="departments-table"]',
        tableRow:
            '[data-testid="departments-table"] tr',
        totalText: 
            '[data-testid="departments-row-count"]',
    },
    shoppingProductsTable: {
        clearAllButton: 
            '[data-testid="products-clear-btn"]',
        columnHeader: 
            '[data-testid="products-table"] th',
        dropdown: 
            '[data-testid="products-category-filter"]',
        editButton: (productName) =>
            `tr:has(td:text-is("${productName}")) [data-testid*="products-edit-btn-"]   `,
        nextButton: 
            '[data-testid="products-next"]',
        pageInfo: 
            '[data-testid="products-info"]',
        pageNumber: (number) =>
            `[data-testid="products-btn-${(number)}"]`,
        previousButton: 
            '[data-testid="products-prev"]',
        searchInput: 
            '[data-testid="products-search"]',
        table: 
            '[data-testid="products-table"]',
        tableRow:
            '[data-testid="products-table"] tr',
        totalText: 
            '[data-testid="products-row-count"]',
    }
};

module.exports = { UiPracticeTablesLocators };