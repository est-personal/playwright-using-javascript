const { test, expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { ButtonsData } = require('../testData/ButtonsData');
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');

test.describe('QA Playground - Buttons Tests', () => {

    let buttonsPage;

    test.beforeEach(async ({ page }) => {
        buttonsPage = new ButtonsPage(page);
        await buttonsPage.navigateToButtons();
    });

    test('TC01: Validate if Home button is clicked', async () => {
        const homeButton =
            await buttonsPage.getHomeButton();
        await expect(homeButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getHomeButtonText();
        expect(buttonText.trim())
            .toBe('Go To Home');
        console.log(
            'Button Text:', buttonText
        );
        await buttonsPage.clickHomeButton();
        await expect(buttonsPage.page).toHaveURL(
            QaPlaygroundUrls.homePage
        );
    });

    test('TC02: Validate button coordinates', async () => { 
        const coordinateButton =
            await buttonsPage.getCoordinateButton();
        await expect(coordinateButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getCoordinateButtonText();
        expect(buttonText.trim())
            .toBe('Find Location');
        console.log(
            'Button Text:', buttonText
        );
        const coordinates =
            await buttonsPage.getButtonCoordinates();
        console.log(
            `X Coordinate: ${coordinates.x}`
        );
        console.log(
            `Y Coordinate: ${coordinates.y}`
        );
        expect(coordinates.x)
            .toBeGreaterThan(0);
        expect(coordinates.y)
            .toBeGreaterThan(0);
        expect(coordinates.x)
            .toBe(181);
        expect(coordinates.y)
            .toBe(424);
    });

    test('TC03: Validate color of Find Color button', async () => {
        const colourButton =
            await buttonsPage.getColourButton();
        await expect(colourButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getColourButtonText();
        expect(buttonText.trim())
            .toBe('Find my color?');
        console.log(
            'Button Text:', buttonText
        );
        const actualColor =
            await buttonsPage.getButtonColor();
        console.log(
            `Button Color: ${actualColor}`
        );
        expect(actualColor)
            .toBeTruthy();
        expect(actualColor)
            .toBe('rgb(147, 197, 253)');
    });

    test('TC04: Validate button height and width', async () => {
        const sizeButton =
            await buttonsPage.getSizeButton();
        await expect(sizeButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getSizeButtonText();
        expect(buttonText.trim())
            .toBe('Do you know my size?');
        console.log(
            'Button Text:', buttonText
        );
        const size =
            await buttonsPage.getButtonSize();
        console.log(
            `Button Width: ${size.width}`
        );
        console.log(
            `Button Height: ${size.height}`
        );
        const cssSize = 
            await buttonsPage.getButtonCssSize();
        console.log(
            `CSS Width: ${cssSize.width}`
        );
        console.log(
            `CSS Height: ${cssSize.height}`
        );
        expect(size.width)
            .toBeGreaterThan(0);
        expect(size.height)
            .toBeGreaterThan(0);
        expect(size.height)
            .toBe(36);
        expect(size.width)
            .toBeGreaterThan(180);
    });

    test('TC05: Validate disabled button', async () => {
        const disabledButton =
            await buttonsPage.getDisabledButton();
        await expect(disabledButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getDisabledButtonText();
        expect(buttonText.trim())
            .toBe('Disabled');
        console.log(
            'Button Text:', buttonText
        );
        const isDisabled =
            await buttonsPage.isDisabledButton();
        expect(isDisabled).toBeTruthy();
        const disabledAttribute =
            await buttonsPage.getDisabledButtonAttribute();
        expect(disabledAttribute)
            .not.toBeNull();
    });

    test('TC06: Validate click and hold', async () => {
        const clickAndHoldButton =
            await buttonsPage.getClickAndHoldButton();
        await expect(clickAndHoldButton)
            .toBeVisible();
        const initialText =
            await buttonsPage.getClickAndHoldButtonText();
        expect(initialText.trim())
            .toBe('Click and Hold!');
        console.log(
            'Before Hold:', initialText
        );
        await buttonsPage.startHoldButton();
        const changedText =
        await buttonsPage.getClickAndHoldButtonText();
        expect(changedText.trim())
            .toBe('Keep Holding...');
        console.log(
            'After 1 second:', changedText
        );
        await buttonsPage.holdFor(1.5);
        const completedText =
        await buttonsPage.getClickAndHoldButtonText();
        expect(completedText.trim())
        .toBe('Hold Complete!');
        console.log(
            'After 1.5 seconds:', completedText
        );
        await buttonsPage.releaseButton();
    });

    test('TC:07: Validate double click action', async () => {
        const doubleClickButton =
            await buttonsPage.getDoubleClickButton();
        await expect(doubleClickButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getDoubleClickButtonText();
        expect(buttonText.trim())
            .toBe('Double Click Me');
        console.log(
            'Button Text:', buttonText
        );
        await buttonsPage.doubleClickButton();
        await expect(
            await buttonsPage.getMessageBox()
        ).toBeVisible();
        const message =
            await buttonsPage.getMessageText();
        expect(message.trim())
            .toBe('You Double-clicked on button!');
        console.log(
            'Output Message:', message
        );  
    });

    test('TC08: Validate right click action', async () => {
        const rightClickButton =
            await buttonsPage.getRightClickButton();
        await expect(rightClickButton)
            .toBeVisible();
        const buttonText =
            await buttonsPage.getRightClickButtonText();
        expect(buttonText.trim())
            .toBe('Right Click Me');
        console.log(
            'Button Text:', buttonText
        );
        await buttonsPage.rightClickButton();
        await expect(
            await buttonsPage.getMessageBox()
        ).toBeVisible();
        const message =
            await buttonsPage.getMessageText();
        expect(message.trim())
            .toBe('You Right-clicked on button!');
        console.log(
            'Output Message:', message
        );
    });

});