const base = require('@playwright/test');
const { expect } = require('@playwright/test');
const { DataTablesPage } = require('../pages/DataTablesPage');

exports.test = base.test.extend({

    dataTablesPage: async ({ page }, use) => {
        const dataTablesPage =
            new DataTablesPage(page);
        await dataTablesPage.navigateToDataTable();
        await expect(
            dataTablesPage.getInteractiveTableSection()
        ).toBeVisible();
        await use(dataTablesPage);
    }
});

exports.expect = base.expect;