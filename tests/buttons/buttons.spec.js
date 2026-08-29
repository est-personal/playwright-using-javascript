const {test, expect} = require('../../fixtures/Pages.fixture');
const { ButtonsLocators } = require('../../locators/ButtonsLocators');
const { ButtonsData } = require('../../testData/ButtonsData');
const { ButtonsActions } = require('../../helpers/ButtonsActions');

const { 
    expectColorWithinTolerance, 
    expectCoordinatesNear,
    expectSizeWithinTolerance,
    expectValidCoordinates, 
    expectValidRgb,
    expectValidSize 
} = require('../../helpers/ButtonsAssertions');

const scenarios = [
    {
        scenario: 'Navigate Home',
        name: 'Click Go To Home',
        section: 'navigateHome',
        action: page => page.clickDialogButton(ButtonsLocators.navigateHomeButton),
        // expectedButtonText: ButtonsData.navigateHomeButtonText,
        expectedResult: ButtonsData.result.navigateHome,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Double Click',
        name: 'Double Click Button',
        section: 'doubleClick',
        action: page => page.doubleClickDialogButton(ButtonsLocators.doubleClickButton),
        // expectedButtonText: ButtonsData.doubleClickButtonText,
        expectedResult: ButtonsData.result.doubleClick,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Double Click',
        name: 'Click Button',
        section: 'doubleClick',
        action: page => page.clickDialogButton(ButtonsLocators.doubleClickButton),
        // expectedButtonText: ButtonsData.doubleClickButtonText,
        expectedResult: ButtonsData.placeholder.doubleClick,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Double Click',
        name: 'Right Click Button',
        section: 'doubleClick',
        action: page => page.rightClickDialogButton(ButtonsLocators.doubleClickButton),
        // expectedButtonText: ButtonsData.doubleClickButtonText,
        expectedResult: ButtonsData.placeholder.doubleClick,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Right Click',
        name: 'Right Click Button',
        section: 'rightClick',
        action: page => page.rightClickDialogButton(ButtonsLocators.rightClickButton),
        // expectedButtonText: ButtonsData.rightClickButtonText,
        expectedResult: ButtonsData.result.rightClick,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Right Click',
        name: 'Click Button',
        section: 'rightClick',
        action: page => page.clickDialogButton(ButtonsLocators.rightClickButton),
        // expectedButtonText: ButtonsData.rightClickButtonText,
        expectedResult: ButtonsData.placeholder.rightClick,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Right Click',
        name: 'Double Click Button',
        section: 'rightClick',
        action: page => page.doubleClickDialogButton(ButtonsLocators.rightClickButton),
        // expectedButtonText: ButtonsData.rightClickButtonText,
        expectedResult: ButtonsData.placeholder.rightClick,
        tags: ['@regression', '@negative']
    }
];

test.describe('QA Playground - Buttons Tests', () => {

    scenarios.forEach(data => {
        test.describe(`${data.scenario} Section`, () => {
            test(`${data.name}`, {
                tag: data.tags
            }, async ({ buttonsPage }) => {
                // Click button
                await data.action(buttonsPage);
                // Validate result
                expect(
                    await buttonsPage.getResult(
                        ButtonsActions[data.section].result
                    )
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });

    test.describe('Get Coordinates Section', () => {
        test('Click Find Location', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Click Find Location button
            await buttonsPage.clickDialogButton(
                ButtonsLocators.getCoordinatesButton
            );
            // Get coordinates
            const coordinates = 
                await buttonsPage.getDisplayedCoordinates();
            // Validate coordinates
            expectValidCoordinates(coordinates);
            // Get displayed coordinates
            const displayedCoordinates = 
                await buttonsPage.getDisplayedCoordinates();
            // Validate button coordinates vs result
            expectCoordinatesNear(displayedCoordinates, coordinates);
        });
    });

    test.describe('Get Color Section', () => {
        test('Click Find My Color', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Click Find My Color button
            await buttonsPage.clickDialogButton(
                ButtonsLocators.getColorButton
            );
            // Get color
            const color = 
                await buttonsPage.getDisplayedColor();
            // Validate color
            expectValidRgb(color);
            // Get displayed color
            const displayedColor = 
                await buttonsPage.getDisplayedColor();
            // Validate button color vs result
            expectColorWithinTolerance(
                displayedColor, 
                color
            );
        });
    });

    test.describe('Get Size Section', () => {
        test('Click Do You Know My Size', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Click Do You Know My Size button
            await buttonsPage.clickDialogButton(
                ButtonsLocators.getSizeButton
            );
            // Get size
            const size = 
                await buttonsPage.getDisplayedSize();
            // Validate size
            expectValidSize(size);
            // Get displayed size
            const displayedSize = 
                await buttonsPage.getDisplayedSize();
            // Validate button size vs result
            expectSizeWithinTolerance(displayedSize, size);
        });
    });

    test.describe('Disabled Section', () => {
        test('Validate Attribute', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Validate button disabled
            await expect(
                await buttonsPage.isDisabled(
                    ButtonsLocators.disabledButton
                )
            ).toBeTruthy();
            // Validate attribute
            const buttonAttribute = 
                await buttonsPage.getAttribute(
                    ButtonsLocators.disabledButton,
                    'disabled'
                );
            expect(buttonAttribute).not.toBeNull();
        });
    });

    const holdScenarios = [
        {
            scenario: 'Click Hold',
            name: 'Click And Hold for more than 1.5 sec',
            section: 'clickHold',
            holdTime: 2000,
            expectedResult: ButtonsData.result.clickHold.clickAndHold,
            tags: ['@smoke', '@regression', '@positive']
        },
        {
            scenario: 'Click Hold',
            name: 'Click And Hold for less than 1.5 sec',
            section: 'clickHold',
            holdTime: 500,
            expectedResult: ButtonsData.result.clickHold.tooEarly,
            tags: ['@regression', '@positive']
        },
    ];

    holdScenarios.forEach(data => {
        test.describe(`${data.scenario} Section`, () => {
            test(`${data.name}`, {
                tag: data.tags
            }, async ({ buttonsPage }) => {
                // Click and hold button
                await buttonsPage.clickAndHold(
                    data.holdTime
                );
                // Release hold
                await buttonsPage.releaseHold();
                // Validate result
                expect(
                    await buttonsPage.getResult(
                        ButtonsActions[data.section].result
                    )
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });

    test('Value of Scenario Click Hold when holding the button', 
        {
            tag: ['@regression', '@positive']
        },
    async ({ buttonsPage }) => {
        // Action for Click And Hold button
        await buttonsPage.holdButton();
        // Validate Click Hold result
        expect(
            await buttonsPage.getResult(
                ButtonsLocators.clickHoldResult
            )
        ).toBe(
            ButtonsData.result.clickHold.holdingText
        );
        // Release Hold
        await buttonsPage.releaseHold();
        // Validate Click Hold result
        expect(
            buttonsPage.getResult(
                ButtonsLocators.clickHoldResult
            )
        ).not.toBe(
            ButtonsData.result.clickHold.holdingText
        );
    });
});