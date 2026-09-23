const base = require('@playwright/test');
const { expect } = require('@playwright/test');
const { AlertsAndDialogsPage } = require('../pages/practice/AlertsAndDialogsPage');
const { ButtonsPage } = require('../pages/practice/ButtonsPage');
const { DataTablesPage } = require('../pages/practice/DataTablesPage');
const { DatePickerPage } = require('../pages/practice/DatePickerPage');
const { DropdownsPage } = require('../pages/practice/DropdownsPage');
const { FormsPage } = require('../pages/practice/FormsPage');
const { InputFieldsPage } = require('../pages/practice/InputFieldsPage');
const { LinksPage } = require('../pages/practice/LinksPage');
const { ModalWindowsPage } = require('../pages/practice/ModalWindowsPage');
const { MultiSelectPage } = require('../pages/practice/MultiSelectPage');
const { RadioAndCheckboxPage } = require('../pages/practice/RadioAndCheckboxPage');
const { TabsAndWindowsPage } = require('../pages/practice/TabsAndWindowsPage');
const { UiPracticeTablesPage } = require('../pages/demo/UiPracticeTablesPage');

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

    datePickerPage: async ({ page }, use) => {
        const datePickerPage =
            new DatePickerPage(page);
        await datePickerPage.navigateToDatePicker();
        await use(datePickerPage);
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

    modalWindowsPage: async ({ page }, use) => {
        const modalWindowsPage =
            new ModalWindowsPage(page);
        await modalWindowsPage.navigateToModalWindows();
        await use(modalWindowsPage);
    },

    multiSelectPage: async ({ page }, use) => {
        const multiSelectPage =
            new MultiSelectPage(page);
        await multiSelectPage.navigateToMultiSelect();
        await use(multiSelectPage);
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

    uiPracticeTablesPage: async ({ page }, use) => {
        const uiPracticeTablesPage =
            new UiPracticeTablesPage(page);
        await uiPracticeTablesPage.navigateToUiPracticeTables();
        await use(uiPracticeTablesPage);
    },

});

exports.expect = base.expect;