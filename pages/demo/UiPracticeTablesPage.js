// Arrange Alphabetically
// Keywords for QA Playground - UI Practice - Tables Page
const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');
const { UiPracticeTablesLocators } = require('../../locators/demo/UiPracticeTablesLocators');
const { BasePage } = require('../BasePage');

class UiPracticeTablesPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickColumnHeader(section, columnName) {
        const headers = this.page.locator(
            this.getTable(section).columnHeader
        );
        const count = await headers.count();
        for (let i = 0; i < count; i++) {
            const headerText = await headers.nth(i).textContent();

            if (headerText?.trim() === columnName) {
                await headers.nth(i).click();
                return i + 1;
            }
        }
        throw new Error(`Column '${columnName}' not found`);
    }

    async clearFilter(section) {
        await this.click(
            this.getTable(section)
                .clearAllButton
        );
    }

    async clickNextButton(section) {
        await this.click(
            this.getTable(section)
                .nextButton
        );
    }

    async clickPage(section, pageNumber) {
        await this.click(
            this.getTable(section)
                .pageButton(pageNumber)
        );
    }

    async clickPreviousButton(section) {
        await this.click(
            this.getTable(section)
                .previousButton
        );
    }

    async getActivePage(section) {
        return (
            await this.page
                .locator(this.getTable(section).activePage)
                .textContent()
        )?.trim();
    }

    async getColumnRows(section, column) {
        const columnMap = {
            Product: 'name',
            Name: 'name',
            Department: 'dept',
            Salary: 'salary',
            'Date Joined': 'date-joined',
            Category: 'category',
            Price: 'price',
            Rating: 'rating'
        };
        const mappedColumn = columnMap[column];
        if (!mappedColumn) {
            throw new Error(
                `Column mapping not found for: ${column}`
            );
        }
        const values = await this.page
            .locator(
                this.getTable(section)
                    .tableColumnData(mappedColumn)
            )
            .allTextContents();
        return values.map(value => value.trim());
    }

    async navigateToPage(section, pageNumber, column) {
        await this.clickPage(
            section,
            pageNumber
        );
        return await this.getColumnRows(
            section,
            column
        );
    }

    async navigateToUiPracticeTables() {
        await this.navigate(
            QaPlaygroundUrls.uiPracticeTablesPage
        );
    }

    async search(section, value) {
        await this.fill(
            this.getTable(section).searchInput,
            value
        );
    }

    async selectFilter(section, value) {
        await this.selectByValue(
            this.getTable(section).dropdown,
            value
        );
    }

    // Non-Async
    getNextButton(section) {
        return this.page.locator(
            this.getTable(section).nextButton
        );
    }

    getPageInfoLocator(section) {
        return this.page.locator(
            this.getTable(section).pageInfo
        );
    }

    getPreviousButton(section) {
        return this.page.locator(
            this.getTable(section).previousButton
        );
    }

    getResultCountLocator(section) {
        return this.page.locator(
            this.getTable(section).resultCount
        );
    }

    getTable(section) {
        return UiPracticeTablesLocators[section];
    }

};

module.exports = { UiPracticeTablesPage };