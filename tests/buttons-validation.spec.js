const { test, expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { ButtonsData } = require('../testData/ButtonsData');

const buttonTextTests = [
    {
        name: 'Scenario Navigate Home Button',
        locator: page => page.getGoToHomeButton(),
        expected: ButtonsData.navigateHomeButtonText
    },
    {
        name: 'Scenario Get Coordinates Button',
        locator: page => page.getFindLocationButton(),
        expected: ButtonsData.getCoordinatesButtonText
    },
    {
        name: 'Scenario Get Color Button',
        locator: page => page.getFindMyColorButton(),
        expected: ButtonsData.getColorButtonText
    },
    {
        name: 'Scenario Get Size Button',
        locator: page => page.getDoYouKnowMySizeButton(),
        expected: ButtonsData.getSizeButtonText
    },
    {
        name: 'Scenario Disabled Button',
        locator: page => page.getDisabledButton(),
        expected: ButtonsData.disabledButtonText
    },
    {
        name: 'Scenario Click Hold Button',
        locator: page => page.getClickAndHoldButton(),
        expected: ButtonsData.clickHoldButtonText
    },
    {
        name: 'Scenario Double Click Button',
        locator: page => page.getDoubleClickMeButton(),
        expected: ButtonsData.doubleClickButtonText
    },
    {
        name: 'Scenario Right Click Button',
        locator: page => page.getRightClickMeButton(),
        expected: ButtonsData.rightClickButtonText
    }
];

test.describe('QA Playground - Buttons Text Validations', () => {

    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
    });

    buttonTextTests.forEach(data => {
        test(`${data.name} button text`, {
            tag: ['@regression', '@positive']
        }, async () => {
            await expect(
                data.locator(buttonsPage)
            ).toHaveText(
                data.expected
            );
        });
    });

});

const defaultValueTests = [
    {
        name: 'Scenario Navigate Home Default Value',
        locator: page => page.getNavigateHomeResult(),
        expected: ButtonsData.noNavigationYetText
    },
    {
        name: 'Scenario Get Coordinates Default Value',
        locator: page => page.getGetCoordinatesResult(),
        expected: ButtonsData.coordinatesText
    },
    {
        name: 'Scenario Get Color Default Value',
        locator: page => page.getGetColorResult(),
        expected: ButtonsData.colorText
    },
    {
        name: 'Scenario Get Size Default Value',
        locator: page => page.getGetSizeResult(),
        expected: ButtonsData.sizeText
    },
    {
        name: 'Scenario Disabled Default Value',
        locator: page => page.getDisabledResult(),
        expected: ButtonsData.disabledText
    },
    {
        name: 'Scenario Click Hold Default Value',
        locator: page => page.getClickHoldResult(),
        expected: ButtonsData.notHoldYetText
    },
    {
        name: 'Scenario Double Click Default Value',
        locator: page => page.getDoubleClickResult(),
        expected: ButtonsData.notDoubleClickYetText
    },
    {
        name: 'Scenario Right Click Default Value',
        locator: page => page.getRightClickResult(),
        expected: ButtonsData.noActionPerformedText
    }
];

test.describe('QA Playground - Buttons Default Value Validations', () => {

    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
    });

    defaultValueTests.forEach(data => {
        test(`${data.name} default value`, {
            tag: ['@regression', '@positive']
        }, async () => {
            await expect(
                data.locator(buttonsPage)
            ).toHaveText(
                data.expected
            );
        });
    });

});