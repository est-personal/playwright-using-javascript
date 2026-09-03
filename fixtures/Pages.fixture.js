const base = require('@playwright/test');
const { expect } = require('@playwright/test');
const { AlertsAndDialogsPage } = require('../pages/AlertsAndDialogsPage');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { DataTablesPage } = require('../pages/DataTablesPage');
const { DropdownsPage } = require('../pages/DropdownsPage');
const { FormsPage } = require('../pages/FormsPage');
const { InputFieldsPage } = require('../pages/InputFieldsPage');
const { LinksPage } = require('../pages/LinksPage');
const { RadioAndCheckboxPage } = require('../pages/RadioAndCheckboxPage');
const { TabsAndWindowsPage } = require('../pages/TabsAndWindowsPage');

exports.test = base.test.extend({

    alertsAndDialogsPage: async ({ page }, use) => {
        const alertsAndDialogsPage =
            new AlertsAndDialogsPage(page);
        await alertsAndDialogsPage.navigateToAlertsAndDialogs();
        await use(alertsAndDialogsPage);
    },

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
    },

    formsPage: async ({ page }, use) => {
        const formsPage =
            new FormsPage(page);
        await formsPage.navigateToForms();
        await use(formsPage);
    },

    inputFieldsPage: async ({ page }, use) => {
        const inputFieldsPage =
            new InputFieldsPage(page);
        await inputFieldsPage.navigateToInputFields();
        await use(inputFieldsPage);
    },

    linksPage: async ({ page }, use) => {
        const linksPage =
            new LinksPage(page);
        await linksPage.navigateToLinks();
        await use(linksPage);
    },

    radioAndCheckboxPage: async ({ page }, use) => {
        const radioAndCheckboxPage =
            new RadioAndCheckboxPage(page);
        await radioAndCheckboxPage.navigateToRadioAndCheckbox();
        await use(radioAndCheckboxPage);
    },

    tabsAndWindowsPage: async ({ page }, use) => {
        const tabsAndWindowsPage =
            new TabsAndWindowsPage(page);
        await tabsAndWindowsPage.navigateToTabsAndWindows();
        await use(tabsAndWindowsPage);
    },

});

exports.expect = base.expect;