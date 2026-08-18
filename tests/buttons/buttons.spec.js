const {test, expect} = require('../../fixtures/Pages.fixture');
const { ButtonsPage } = require('../../pages/ButtonsPage');
const { ButtonsData } = require('../../testData/ButtonsData');
const { BasePage } = require('../../pages/BasePage');

const { 
    expectColorWithinTolerance, 
    expectCoordinatesNear,
    expectSizeWithinTolerance,
    expectValidCoordinates, 
    expectValidRgb,
    expectValidSize 
} = require('../../helpers/ButtonsAssertions');

test.describe('QA Playground - Buttons Tests', () => {

    test.describe('Navigation Button', () => {
        test('Click Go To Home', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Go To Home button to be visible
            await expect(
                buttonsPage.getGoToHomeButton()
            ).toBeVisible();
            // Click Go To Home button
            await buttonsPage.clickGoToHomeButton();
            await expect(
                buttonsPage.getNavigateHomeResult()
            ).toHaveText(
                ButtonsData.navigatedToHomePageText
            );
        });

    });

    test.describe('Coordinates Button', () => {
        test('Click Find Location', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Find Location button to be visible
            await expect(
                buttonsPage.getFindLocationButton()
            ).toBeVisible();
            // Click Find Location button
            await buttonsPage.clickFindLocationButton();
            const coordinates = 
                await buttonsPage.getDisplayedCoordinates();
            await test.info().attach(
                'button coordinates',
                {
                    body: JSON.stringify(coordinates, null, 2),
                    contentType: 'application/json'
                }
            );
            expectValidCoordinates(coordinates);
        });

        test('Get Button Coordinates', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Find Location button to be visible
            await expect(
                buttonsPage.getFindLocationButton()
            ).toBeVisible();
            // Get button coordinates
            const coordinates = 
                await buttonsPage.getButtonCoordinates();
            await test.info().attach(
                'x-coordinate',
                {
                    body: JSON.stringify(coordinates.x, null, 2),
                    contentType: 'application/json'
                }
            );
            await test.info().attach(
                'y-coordinate',
                {
                    body: JSON.stringify(coordinates.y, null, 2),
                    contentType: 'application/json'
                }
            );
            // Validate button coordinates
            expectValidCoordinates(coordinates);
            await buttonsPage.clickFindLocationButton();
            // Validate button coordinates vs result
            const displayedCoordinates = 
                await buttonsPage.getDisplayedCoordinates();
            expectCoordinatesNear(displayedCoordinates, coordinates);
        });

    });

    test.describe('Color Button', () => {
        test('Click Find My Color', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Find My Color button to be visible
            await expect(
                buttonsPage.getFindMyColorButton()
            ).toBeVisible();
            // Click Find My Color button
            await buttonsPage.clickFindMyColorButton();
            const color = 
                await buttonsPage.getDisplayedColor();
            await test.info().attach(
                'button text color',
                {
                    body: JSON.stringify(color, null, 2),
                    contentType: 'application/json'
                }
            );
            expectValidRgb(color);
        });
    
        test('Get Button Color', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ buttonsPage }) => {
            // Wait for Find My Color button to be visible
            await expect(
                buttonsPage.getFindMyColorButton()
            ).toBeVisible();
            // Get button color
            const color = 
                await buttonsPage.getButtonColor();
            await test.info().attach(
                'button background color',
                {
                    body: JSON.stringify(color.backgroundColor, null, 2),
                    contentType: 'application/json'
                }
            );
            await test.info().attach(
                'button text color',
                {
                    body: JSON.stringify(color.textColor, null, 2),
                    contentType: 'application/json'
                }
            );
            await test.info().attach(
                'button red component',
                {
                    body: JSON.stringify(color.r, null, 2),
                    contentType: 'application/json'
                }
            );
            await test.info().attach(
                'button green component',
                {
                    body: JSON.stringify(color.g, null, 2),
                    contentType: 'application/json'
                }
            );
            await test.info().attach(
                'button blue component',
                {
                    body: JSON.stringify(color.b, null, 2),
                    contentType: 'application/json'
                }
            );
            // Validate button color
            expectValidRgb(color);
            // Click Find My Color button
            await buttonsPage.clickFindMyColorButton();
            // Validate button color vs result
            const displayedColor = 
                await buttonsPage.getDisplayedColor();
            expectColorWithinTolerance(
                displayedColor, 
                color
            );
        });

    });

    test.describe('Size Button', () => {
        test('Click Do You Know My Size', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Do You Know My Size button to be visible
            await expect(
                buttonsPage.getDoYouKnowMySizeButton()
            ).toBeVisible();
            // Click Do You Know My Size button
            await buttonsPage.clickDoYouKnowMySizeButton();
            // Validate text is reflected in Get Size result
            const size = 
                await buttonsPage.getDisplayedSize();
            await test.info().attach(
                'button size',
                {
                    body: JSON.stringify(size, null, 2),
                    contentType: 'application/json'
                }
            );
            expectValidSize(size);
        });

        test('Get Button Size', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Do You Know My Size button to be visible
            await expect(
                buttonsPage.getDoYouKnowMySizeButton()
            ).toBeVisible();
            // Get button size
            const size = 
                await buttonsPage.getButtonSize();
            await test.info().attach(
                'button size',
                {
                    body: JSON.stringify(size, null, 2),
                    contentType: 'application/json'
                }
            );
            // Validate button size
            expectValidSize(size);
            // Click Do You Know My Size button
            await buttonsPage.clickDoYouKnowMySizeButton();
            // Validate button size vs result
            const displayedSize = 
                await buttonsPage.getDisplayedSize();
            expectSizeWithinTolerance(displayedSize, size);
        });

    });

    test.describe('Disabled Button', () => {
        test('Click Disabled', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Disabled button to be visible
            await expect(
                buttonsPage.getDisabledButton()
            ).toBeVisible();
            // // Get Disabled button Initial State
            // const initialState = 
            //     await buttonsPage.getDisabledButtonState();
            // Validate Disabled button attribute
            await expect(
                buttonsPage.getDisabledButton()
            ).toBeDisabled();
            const buttonAttribute = 
                await buttonsPage.getDisabledButtonAttribute();
            expect(buttonAttribute).not.toBeNull();
            // // Click Disabled button
            // await buttonsPage.clickDisabledButton();
            // Validate button is disabled
            // await expect(
            //     buttonsPage.isDisabledButtonDisabled()
            // ).toBeTruthy();
            expect(
                await buttonsPage.isDisabledButtonDisabled()
            ).toBeTruthy();
            // // Get Disabled button Final State
            // const finalState = 
            //     await buttonsPage.getDisabledButtonState();
            // // Validate no change occurs in the state
            // expect(finalState).toBe(initialState);
        });

    });

    test.describe('Click Hold Button', () => {
        test('Click And Hold for more than 1.5 sec', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Click And Hold button to be visible
            await expect(
                buttonsPage.getClickAndHoldButton()
            ).toBeVisible();
            // Action for Click And Hold button
            await buttonsPage.clickAndHold(2000);
            await buttonsPage.releaseHold()
            // Validate text is reflected in Click Hold result
            await expect(
                buttonsPage.getClickHoldResult()
            ).toHaveText(
                ButtonsData.expectedClickAndHoldValue
            );
            // Validate success state
            const result = 
                await buttonsPage.getHoldResultMessage();
            expect(result).toBeTruthy();
            expect(result).toContain(ButtonsData.heldForText);
            expect(
                await buttonsPage.isSuccessDisplayed()
            ).toBeTruthy();

        });

        test('Click And Hold for less than 1.5 sec', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ buttonsPage }) => {
            // Wait for Click And Hold button to be visible
            await expect(
                buttonsPage.getClickAndHoldButton()
            ).toBeVisible();
            // Action for Click And Hold button
            await buttonsPage.clickAndHold(500);
            await buttonsPage.releaseHold()
            // Validate text is reflected in Click Hold result
            await expect(
                buttonsPage.getClickHoldResult()
            ).toHaveText(
                ButtonsData.releasedTooEarlyText
            );
            // Validate success state
            const result = 
                await buttonsPage.getHoldResultMessage();
            expect(result).not.toContain(ButtonsData.heldForText);
            expect(
                await buttonsPage.isSuccessDisplayed()
            ).toBeFalsy();
        });

        test('Value of Scenario Click Hold when holding the button', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ buttonsPage }) => {
            // Wait for Click And Hold button to be visible
            await expect(
                buttonsPage.getClickAndHoldButton()
            ).toBeVisible();
            // Action for Click And Hold button
            await buttonsPage.holdButton();
            // Validate Keep Holding text is reflected in Click Hold result
            await expect(
                buttonsPage.getClickHoldResult()
            ).toHaveText(
                ButtonsData.holdingText
            );
            // Release Hold
            await buttonsPage.releaseHold();
            // Validate Keep Holding text is not reflected in Click Hold result
            await expect(
                buttonsPage.getClickHoldResult()
            ).not.toHaveText(
                ButtonsData.holdingText
            );
        });

    });

    test.describe('Double Click Button', () => {
        test('Action Double Click', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ buttonsPage }) => {
        // Wait for Double Click Me button to be visible
        await expect(
            buttonsPage.getDoubleClickMeButton()
        ).toBeVisible();
        // Double Click Double Click Me button
        await buttonsPage.doubleClickDoubleClickMeButton();
        // Validate text is reflected in Double Click result
        await expect(
            buttonsPage.getDoubleClickResult()
        ).toHaveText(
            ButtonsData.doubleClickText
        );
    });

    test('Click Double Click Me', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ buttonsPage }) => {
            // Wait for Double Click Me button to be visible
            await expect(
                buttonsPage.getDoubleClickMeButton()
            ).toBeVisible();
            // Single Click Double Click Me button
            await buttonsPage.clickDoubleClickMeButton();
            // Validate text is reflected in Double Click result
            await expect(
                buttonsPage.getDoubleClickResult()
            ).toHaveText(
                ButtonsData.notDoubleClickYetText
            );
        });

        test('Right Click Double Click Me', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ buttonsPage }) => {
            // Wait for Double Click Me button to be visible
            await expect(
                buttonsPage.getDoubleClickMeButton()
            ).toBeVisible();
            // Right Click Double Click Me button
            await buttonsPage.rightClickDoubleClickMeButton();
            // Validate text is reflected in Double Click result
            await expect(
                buttonsPage.getDoubleClickResult()
            ).toHaveText(
                ButtonsData.notDoubleClickYetText
            );
        });

    });

    test.describe('Right Click Button', () => {
        test('Action Right Click', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ buttonsPage }) => {
            // Wait for Right Click Me button to be visible
            await expect(
                buttonsPage.getRightClickMeButton()
            ).toBeVisible();
            // Right Click Right Click Me button
            await buttonsPage.rightClickRightClickMeButton();
            // Validate text is reflected in Right Click result
            await expect(
                buttonsPage.getRightClickResult()
            ).toHaveText(
                ButtonsData.contextMenuTriggered
            );
        });

        test('Click Right Click Me', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ buttonsPage }) => {
            // Wait for Right Click Me button to be visible
            await expect(
                buttonsPage.getRightClickMeButton()
            ).toBeVisible();
            // Single Click Right Click Me button
            await buttonsPage.clickRightClickMeButton();
            // Validate text is reflected in Right Click result
            await expect(
                buttonsPage.getRightClickResult()
            ).toHaveText(
                ButtonsData.noActionPerformedText
            );
        });

        test('Double Click Right Click Me', 
            {
                tag: ['@regression', '@negative']
            },
        async ({ buttonsPage }) => {
            // Wait for Right Click Me button to be visible
            await expect(
                buttonsPage.getRightClickMeButton()
            ).toBeVisible();
            // Double Click Right Click Me button
            await buttonsPage.doubleClickRightClickMeButton();
            // Validate text is reflected in Double Click result
            await expect(
                buttonsPage.getRightClickResult()
            ).toHaveText(
                ButtonsData.noActionPerformedText
            );
        });

    });

});