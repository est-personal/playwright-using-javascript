const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { ButtonsData } = require('../testData/ButtonsData');
const { ButtonsLocators } = require('../locators/ButtonsLocators');

test.describe('QA Playground - Buttons Tests', () => {

    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
    });

    qase(321, test('Click Go To Home', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Go To Home button to be visible
        await expect(
            buttonsPage.getGoToHomeButton()
        ).toBeVisible();
        // Click Go To Home button
        await buttonsPage.clickGoToHomeButton();
        // Validate text is reflected in Navigate Home result
        await expect(
            buttonsPage.getNavigateHomeResult()
        ).toHaveText(
            ButtonsData.navigatedToHomePageText
        );
    }));

    qase(322, test('Navigation Home button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Go To Home button to be visible
        await expect(
            buttonsPage.getGoToHomeButton()
        ).toBeVisible();
        // Validate Navigate Home button text
        await expect(
            buttonsPage.getGoToHomeButton()
        ).toHaveText(
            ButtonsData.navigateHomeButtonText
        );
    }));

    qase(323, test('Default Value of Scenario Navigate Home', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Go To Home button to be visible
        await expect(
            buttonsPage.getGoToHomeButton()
        ).toBeVisible();
        // Validate Default value to the Navigate Home result
        await expect(
            buttonsPage.getNavigateHomeResult()
        ).toHaveText(
            ButtonsData.noNavigationYetText
        );
    }));

    qase(324, test('Click Find Location', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Find Location button to be visible
        await expect(
            buttonsPage.getFindLocationButton()
        ).toBeVisible();
        // Click Find Location button
        await buttonsPage.clickFindLocationButton();
        // Validate text is reflected in Get Coordinates result
        const coordinates = await buttonsPage.getDisplayedCoordinates();
        console.log(coordinates);
        expect(coordinates.x).toBeGreaterThan(0);
        expect(coordinates.y).toBeGreaterThan(0);
    }));

    qase(325, test('Get Button Coordinates', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find Location button to be visible
        await expect(
            buttonsPage.getFindLocationButton()
        ).toBeVisible();
        // Get button coordinates
        const coordinates = await buttonsPage.getButtonCoordinates();
        console.log(`X: ${coordinates.x}`);
        console.log(`Y: ${coordinates.y}`);
        // Validate button coordinates
        expect(coordinates.x).toBeGreaterThan(0);
        expect(coordinates.y).toBeGreaterThan(0);
        // Click Find Location button
        await buttonsPage.clickFindLocationButton();
        // Validate button coordinates vs result
        const displayedCoordinates = await buttonsPage.getDisplayedCoordinates();
        expect(displayedCoordinates.x).toBe(coordinates.x);
        expect(displayedCoordinates.y).toBe(coordinates.y);
    }));

    qase(326, test('Get Coordinates button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find Location button to be visible
        await expect(
            buttonsPage.getFindLocationButton()
        ).toBeVisible();
        // Validate Get Coordinates button text
        await expect(
            buttonsPage.getFindLocationButton()
        ).toHaveText(
            ButtonsData.getCoordinatesButtonText
        );
    }));

    qase(327, test('Default Value of Scenario Get Coordinates', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find Location button to be visible
        await expect(
            buttonsPage.getFindLocationButton()
        ).toBeVisible();
        // Validate Default value to the Get Coordinates result
        await expect(
            buttonsPage.getGetCoordinatesResult()
        ).toHaveText(
            ButtonsData.coodinatesText
        );
    }));

    qase(328, test('Click Find My Color', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Find My Color button to be visible
        await expect(
            buttonsPage.getFindMyColorButton()
        ).toBeVisible();
        // Click Find My Color button
        await buttonsPage.clickFindMyColorButton();
        // Validate text is reflected in Get Color result
        const color = await buttonsPage.getDisplayedColor();
        console.log(color);
        expect(color.r).toBeTruthy();
        expect(color.g).toBeTruthy();
        expect(color.b).toBeTruthy();
    }));
    
    qase(329, test('Get Button Color', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find My Color button to be visible
        await expect(
            buttonsPage.getFindMyColorButton()
        ).toBeVisible();
        // Get button color
        const color = await buttonsPage.getButtonColor();
        console.log(`Button Background Color: ${color.backgroundColor}`);
        console.log(`Button Text Color: ${color.textColor}`);
        console.log(`Button Text Color: ${color.r}`);
        console.log(`Button Text Color: ${color.g}`);
        console.log(`Button Text Color: ${color.b}`);
        // Validate button color
        expect(color).toBeTruthy();
        // Click Find My Color button
        await buttonsPage.clickFindMyColorButton();
        // Validate button color vs result
        const displayedColor = await buttonsPage.getDisplayedColor();
        expect(displayedColor.r).toBe(color.r);
        expect(displayedColor.g).toBe(color.g);
        expect(displayedColor.b).toBe(color.b);
    }));

    qase(330, test('Get Color button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find My Color button to be visible
        await expect(
            buttonsPage.getFindMyColorButton()
        ).toBeVisible();
        // Validate Get Color button text
        await expect(
            buttonsPage.getFindMyColorButton()
        ).toHaveText(
            ButtonsData.getColorButtonText
        );
    }));

    qase(331, test('Default Value of Scenario Get Color', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Find My Color button to be visible
        await expect(
            buttonsPage.getFindMyColorButton()
        ).toBeVisible();
        // Validate Default value to the Get Color result
        await expect(
            buttonsPage.getGetColorResult()
        ).toHaveText(
            ButtonsData.colorText
        );
    }));

    qase(332, test('Click Do You Know My Size', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Do You Know My Size button to be visible
        await expect(
            buttonsPage.getDoYouKnowMySizeButton()
        ).toBeVisible();
        // Click Do You Know My Size button
        await buttonsPage.clickDoYouKnowMySizeButton();
        // Validate text is reflected in Get Size result
        const size = await buttonsPage.getDisplayedSize();
        console.log(size);
        expect(size.height).toBeGreaterThan(0);
        expect(size.width).toBeGreaterThan(0);
    }));

    qase(333, test('Get Button Size', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Do You Know My Size button to be visible
        await expect(
            buttonsPage.getDoYouKnowMySizeButton()
        ).toBeVisible();
        // Get button size
        const size = await buttonsPage.getButtonSize();
        console.log(`Height: ${size.height}`);
        console.log(`Width: ${size.width}`);
        // Validate button size
        expect(size.height).toBeGreaterThan(0);
        expect(size.width).toBeGreaterThan(0);
        // Click Do You Know My Size button
        await buttonsPage.clickDoYouKnowMySizeButton();
        // Validate button size vs result
        const displayedSize = await buttonsPage.getDisplayedSize();
        expect(displayedSize.height).toBe(size.height);
        expect(displayedSize.width).toBe(size.width);
    }));

    qase(334, test('Get Size button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Do You Know My Size button to be visible
        await expect(
            buttonsPage.getDoYouKnowMySizeButton()
        ).toBeVisible();
        // Validate Get Size button text
        await expect(
            buttonsPage.getDoYouKnowMySizeButton()
        ).toHaveText(
            ButtonsData.getSizeButtonText
        );
    }));

    qase(335, test('Default Value of Scenario Get Size', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Do You Know My Size button to be visible
        await expect(
            buttonsPage.getDoYouKnowMySizeButton()
        ).toBeVisible();
        // Validate Default value to the Get Size result
        await expect(
            buttonsPage.getGetSizeResult()
        ).toHaveText(
            ButtonsData.sizeText
        );
    }));

    qase(336, test('Click Disabled', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Disbaled button to be visible
        await expect(
            buttonsPage.getDisabledButton()
        ).toBeVisible();
        // Get Disabled button Initial State
        const initialState = await buttonsPage.getDisabledButtonState();
        // Validate Disabled button attribute
        await expect(
            buttonsPage.getDisabledButton()
        ).toBeDisabled();
        const buttonAttribute = await buttonsPage.getDisabledButtonAttribute();
        expect(buttonAttribute).not.toBeNull();
        // Click Disabled button
        await buttonsPage.clickDisabledButton();
        // Validate button is disabled
        await expect(
            buttonsPage.isDisabledButtonDisabled
        ).toBeTruthy();
        // Get Disabled button Final State
        const finalState = await buttonsPage.getDisabledButtonState();
        // Validate no change occurs in the state
        expect(finalState).toBe(initialState);
    }));

    qase(337, test('Disabled button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Disbaled button to be visible
        await expect(
            buttonsPage.getDisabledButton()
        ).toBeVisible();
        // Validate Disabled button text
        await expect(
            buttonsPage.getDisabledButton()
        ).toHaveText(
            ButtonsData.disabledButtonText
        );
    }));

    qase(338, test('Default Value of Scenario Disabled', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Disbaled button to be visible
        await expect(
            buttonsPage.getDisabledButton()
        ).toBeVisible();
        // Validate Default value to the Disabled result
        await expect(
            buttonsPage.getDisabledResult()
        ).toHaveText(
            ButtonsData.disabledText
        );
    }));

    qase(339, test('Click And Hold for more than 1.5 sec', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Click And Hold button to be visible
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toBeVisible();
        // Action for Click And Hold button
        await buttonsPage.clickAndHold(1600);
        await buttonsPage.releaseHold()
        // Validate text is reflected in Click Hold result
        await expect(
            buttonsPage.getClickHoldResult()
        ).toHaveText(
            ButtonsData.getClickAndHoldValue
        );
        // Validate success state
        const result = await buttonsPage.getHoldResultMessage();
        expect(result).toBeTruthy();
        expect(result).toContain(ButtonsData.heldForText);
        expect(
            await buttonsPage.isSuccessDisplayed()
        ).toBeTruthy();

    }));

    qase(340, test('Click And Hold for less than 1.5 sec', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Click And Hold button to be visible
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toBeVisible();
        // Action for Click And Hold button
        await buttonsPage.clickAndHold(1400);
        await buttonsPage.releaseHold()
        // Validate text is reflected in Click Hold result
        await expect(
            buttonsPage.getClickHoldResult()
        ).toHaveText(
            ButtonsData.releasedTooEarlyText
        );
        // Validate success state
        const result = await buttonsPage.getHoldResultMessage();
        expect(result).not.toContain(ButtonsData.heldForText);
        expect(
            await buttonsPage.isSuccessDisplayed()
        ).toBeFalsy();
    }));

    qase(341, test('Value of Scenario Click Hold when holding the button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Click And Hold button to be visible
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toBeVisible();
        // Action for Click And Hold button
        await buttonsPage.holdButton();
        // Validate Keep Holding text is reflected in Click Hold result
        const text = await buttonsPage.getClickHoldResult()
            .textContent();
        console.log('Current text:', text);
        expect(text.trim()).toBe(
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
    }));
    
    qase(342, test('Click Hold button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Click And Hold button to be visible
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toBeVisible();
        // Validate Click Hold button text
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toHaveText(
            ButtonsData.clickHoldButtonText
        );
    }));

    qase(343, test('Default Value of Scenario Click Hold', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Click And Hold button to be visible
        await expect(
            buttonsPage.getClickAndHoldButton()
        ).toBeVisible();
        // Validate Default value to the CLick Hold result
        await expect(
            buttonsPage.getClickHoldResult()
        ).toHaveText(
            ButtonsData.notHoldYetText
        );
    }));

    qase(344, test('Action Double Click', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
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
    }));

    qase(345, test('Click Double Click Me', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
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
    }));

    qase(346, test('Right Click Double Click Me', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
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
    }));

    qase(347, test('Double Click button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Double Click Me button to be visible
        await expect(
            buttonsPage.getDoubleClickMeButton()
        ).toBeVisible();
        // Validate Double Click button text
        await expect(
            buttonsPage.getDoubleClickMeButton()
        ).toHaveText(
            ButtonsData.doubleClickButtonText
        );
    }));

    qase(348, test('Default Value of Scenario Double Click', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Double Click Me button to be visible
        await expect(
            buttonsPage.getDoubleClickMeButton()
        ).toBeVisible();
        // Validate Default value to the Double Click result
        await expect(
            buttonsPage.getDoubleClickResult()
        ).toHaveText(
            ButtonsData.notDoubleClickYetText
        );
    }));

    qase(349, test('Action Right Click', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
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
    }));

    qase(350, test('Click Right Click Me', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Right Click Me button to be visible
        await expect(
            buttonsPage.getRightClickMeButton()
        ).toBeVisible();
        // Single Click Right Click Me button
        await buttonsPage.clickRightClickMeButton();
        // Validate text is reflected in Double Click result
        await expect(
            buttonsPage.getRightClickResult()
        ).toHaveText(
            ButtonsData.noActionPerformedText
        );
    }));

    qase(351, test('Double Click Right Click Me', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
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
    }));

    qase(352, test('Right Click button text', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Right Click Me button to be visible
        await expect(
            buttonsPage.getRightClickMeButton()
        ).toBeVisible();
        // Validate Right Click button text
        await expect(
            buttonsPage.getRightClickMeButton()
        ).toHaveText(
            ButtonsData.rightClickButtonText
        );
    }));

    qase(353, test('Default Value of Scenario Right Click', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Right Click Me button to be visible
        await expect(
            buttonsPage.getRightClickMeButton()
        ).toBeVisible();
        // Validate Default value to the Right Click result
        await expect(
            buttonsPage.getRightClickResult()
        ).toHaveText(
            ButtonsData.noActionPerformedText
        );
    }));

});