// Arrange Alphabetically
// Locators for QA Playground - UI Practice - Tables Page
const UiPracticeTablesLocators = {
    departmentsTable: {
        activePage: 
            '[data-testid="section-departments"] [class="pag-btnactive"]',
        clearAllButton: 
            '[data-testid="departments-clear-btn"]',
        columnHeader: 
            '[data-testid="departments-table"] th',
        columnValues: (columnIndex) =>
            `[data-testid="departments-table"] tbody tr td:nth-child(${columnIndex})`,
        dropdown: 
            '[data-testid="departments-filter"]',
        editButton: (productName) =>
            `tr:has(td:text-is("${productName}")) [data-testid*="products-edit-btn-"]   `,
        nextButton: 
            '[data-testid="departments-next"]',
        pageButton: (number) =>
            `[data-testid="departments-btn-${(number)}"]`,
        pageInfo: 
            '[data-testid="departments-info"]',
        previousButton: 
            '[data-testid="departments-prev"]',
        resultCount:
            '[data-testid="departments-result-count"]',
        searchInput: 
            '[data-testid="departments-search"]',
        table: 
            '[data-testid="departments-table"]',
        tableColumnData: (column) =>
            `[data-testid="departments-table"] [data-testid*="departments-${(column)}"]`,
        tableRows:
            '[data-testid="departments-table"] tr',
        totalText: 
            '[data-testid="departments-row-count"]',
    },
    shoppingProductsTable: {
        activePage: 
            '[data-testid="section-shopping-products"] [class="pag-btnactive"]',
        clearAllButton: 
            '[data-testid="products-clear-btn"]',
        columnHeader: 
            '[data-testid="products-table"] th',
        columnValues: (columnIndex) =>
            `[data-testid="products-table"] tbody tr td:nth-child(${columnIndex})`,
        dropdown: 
            '[data-testid="products-category-filter"]',
        editButton: (productName) =>
            `tr:has(td:text-is("${productName}")) [data-testid*="products-edit-btn-"]   `,
        nextButton: 
            '[data-testid="products-next"]',
        pageButton: (number) =>
            `[data-testid="products-btn-${(number)}"]`,
        pageInfo: 
            '[data-testid="products-info"]',
        previousButton: 
            '[data-testid="products-prev"]',
        resultCount:
            '[data-testid="products-result-count"]',
        searchInput: 
            '[data-testid="products-search"]',
        table: 
            '[data-testid="products-table"]',
        tableColumnData: (column) =>
            `[data-testid="products-table"] [data-testid*="products-${(column)}"]`,
        tableRows:
            '[data-testid="products-table"] tr',
        totalText: 
            '[data-testid="products-row-count"]',
    }
};

module.exports = { UiPracticeTablesLocators };