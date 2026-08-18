const base = require('@playwright/test');
// const { expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/ButtonsPage');

exports.test = base.test.extend({

    buttonsPage: async ({ page }, use) => {
        const buttonsPage =
            new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
        await use(buttonsPage);
    }
});

exports.expect = base.expect;