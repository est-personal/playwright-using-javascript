const base = require('@playwright/test');
const { expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { DataTablesPage } = require('../pages/DataTablesPage');
const { DropdownsPage } = require('../pages/DropdownsPage');

exports.test = base.test.extend({

    buttonsPage: async ({ page }, use) => {
        const buttonsPage =
            new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
        await use(buttonsPage);
    },
    
    dataTablesPage: async ({ page }, use) => {
        const dataTablesPage =
            new DataTablesPage(page);
        await dataTablesPage.navigateToDataTable();
        await expect(
            dataTablesPage.getInteractiveTableSection()
        ).toBeVisible();
        await use(dataTablesPage);
    },

    dropdownsPage: async ({ page }, use) => {
        const dropdownsPage =
            new DropdownsPage(page);
        await dropdownsPage.navigateToDropdowns();
        await use(dropdownsPage);
    }

});

exports.expect = base.expect;