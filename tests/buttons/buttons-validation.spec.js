const {test, expect} = require('../../fixtures/Pages.fixture');
const { ButtonsData } = require('../../testData/ButtonsData');
const { ButtonsActions } = require('../../helpers/ButtonsActions');

const scenarios = [
    {
        name: 'Navigate Home',
        section: 'navigateHome',
        expectedButtonText: ButtonsData.buttonText.navigateHomeButtonText,
        expectedResult: ButtonsData.placeholder.navigateHome
    },
    {
        name: 'Get Coordinates',
        section: 'getCoordinates',
        expectedButtonText: ButtonsData.buttonText.getCoordinatesButtonText,
        expectedResult: ButtonsData.placeholder.getCoordinates
    },
    {
        name: 'Get Color',
        section: 'getColor',
        expectedButtonText: ButtonsData.buttonText.getColorButtonText,
        expectedResult: ButtonsData.placeholder.getColor
    },
    {
        name: 'Get Size',
        section: 'getSize',
        expectedButtonText: ButtonsData.buttonText.getSizeButtonText,
        expectedResult: ButtonsData.placeholder.getSize
    },
    {
        name: 'Disabled',
        section: 'disabled',
        expectedButtonText: ButtonsData.buttonText.disabledButtonText,
        expectedResult: ButtonsData.placeholder.disabled
    },
    {
        name: 'Click Hold',
        section: 'clickHold',
        expectedButtonText: ButtonsData.buttonText.clickHoldButtonText,
        expectedResult: ButtonsData.placeholder.clickHold
    },
    {
        name: 'Double Click',
        section: 'doubleClick',
        expectedButtonText: ButtonsData.buttonText.doubleClickButtonText,
        expectedResult: ButtonsData.placeholder.doubleClick
    },
    {
        name: 'Right Click',
        section: 'rightClick',
        expectedButtonText: ButtonsData.buttonText.rightClickButtonText,
        expectedResult: ButtonsData.placeholder.rightClick
    }
];

test.describe('QA Playground - Buttons - Button Text Validations', () => {
    scenarios.forEach(data => {
        test(`${data.name} Section`, {
            tag: ['@regression', '@positive']
        }, async ({ buttonsPage }) => {
            // Validate Button text
            await expect(
                await buttonsPage.getText(
                    ButtonsActions[data.section].button
                )
            ).toBe(
                data.expectedButtonText
            );
        });
    });
});

test.describe('QA Playground - Buttons - Default Result Text Validations', () => {
    scenarios.forEach(data => {
        test(`${data.name} Section`, {
            tag: ['@regression', '@positive']
        }, async ({ buttonsPage }) => {
            // Validate default text in Result
            await expect(
                await buttonsPage.getResult(
                    ButtonsActions[data.section].result
                )
            ).toBe(
                data.expectedResult
            );
        });
    });
});