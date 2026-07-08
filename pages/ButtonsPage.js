// Arrange Alphabetically
// Keywords for QA PLayground - Buttons Page
const { ButtonsLocators } = require('../locators/ButtonsLocators');
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { BasePage } = require('./BasePage');

class ButtonsPage extends BasePage {

    constructor(page) {
        super(page)
    }

    async clickDoubleClickButtonOnce() {
        await this.page
            .locator(ButtonsLocators.doubleClickButton)
            .click();
    }

    async clickRightClickButtonOnce() {
        await this.page
            .locator(ButtonsLocators.rightClickButton)
            .click();
    }

    async clickHomeButton() {
        await this.page
            .locator(ButtonsLocators.homeButton)
            .click();
    }

    async doubleClickButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickButton)
            .dblclick();
    }

    async doubleClickRightClickButton() {
        await this.page
            .locator(ButtonsLocators.rightClickButton)
            .dblclick();
    }

    async getButtonColor() {
        return await this.page
            .locator(ButtonsLocators.colorButton)
            .evaluate(element =>
                getComputedStyle(element).backgroundColor
            );
    }

    async getButtonCoordinates() {
        const button =
            this.page.locator(
                ButtonsLocators.coordinateButton
            );
        const box =
            await button.boundingBox();
        return {
            x: box.x,
            y: box.y
        };
    }

    async getButtonCssSize() {
        return await this.page
            .locator(ButtonsLocators.sizeButton)
            .evaluate(el => {
                const styles =
                    getComputedStyle(el);
                return {
                    width: styles.width,
                    height: styles.height
                };
            });
    }

    async getButtonSize() {
        const button =
            this.page.locator(
                ButtonsLocators.sizeButton
            );
        const box =
            await button.boundingBox();
        return {
            width: box.width,
            height: box.height
        };
    }

    async getClickAndHoldButton() {
        return this.page.locator(
            ButtonsLocators.clickAndHoldButton
        );
    }

    async getClickAndHoldButtonText() {
        return await this.page
            .locator(ButtonsLocators.clickAndHoldButton)
            .textContent();
    }

    async getColourButton() {
        return this.page.locator(
            ButtonsLocators.colorButton
        );
    }

    async getColourButtonText() {
        return await this.page
            .locator(ButtonsLocators.colorButton)
            .innerText();
    }

    async getCoordinateButton() {
        return this.page.locator(
            ButtonsLocators.coordinateButton
        );
    }

    async getCoordinateButtonText() {
        return await this.page
            .locator(ButtonsLocators.coordinateButton)
            .innerText();
    }

    async getDisabledButtonAttribute() {
        return await this.page
            .locator(ButtonsLocators.disabledButton)
            .getAttribute('disabled');
    }

    async getDisabledButton() {
        return this.page.locator(
            ButtonsLocators.disabledButton
        );
    }

    async getDisabledButtonText() {
        return await this.page
            .locator(ButtonsLocators.disabledButton)
            .innerText();
    }

    async getDoubleClickButton() {
        return this.page.locator(
            ButtonsLocators.doubleClickButton
        );
    }

    async getDoubleClickButtonText() {
        return await this.page
            .locator(ButtonsLocators.doubleClickButton)
            .textContent();
    }

    async getHomeButton() {
        return this.page.locator(
            ButtonsLocators.homeButton
        );
    }

    async getHomeButtonText() {
        return await this.page
            .locator(ButtonsLocators.homeButton)
            .innerText();
    }

    async getMessageBox() {
        return this.page
            .locator(ButtonsLocators.messageBox);
    }    

    async getMessageText() {
        return await this.page
            .locator(ButtonsLocators.messageBox)
            .textContent();
    }

    async getRightClickButton() {
        return this.page.locator(
            ButtonsLocators.rightClickButton
        );
    }

    async getRightClickButtonText() {
        return await this.page
            .locator(ButtonsLocators.rightClickButton)
            .textContent();
    }

    async getSizeButton() {
        return this.page.locator(
            ButtonsLocators.sizeButton
        );
    }

    async getSizeButtonText() {
        return await this.page
            .locator(ButtonsLocators.sizeButton)
            .innerText();
    }

    async holdFor(seconds) {
        await this.page.waitForTimeout(
            seconds * 1000
        );
    }

    async isDisabledButton() {
        return await this.page
            .locator(ButtonsLocators.disabledButton)
            .isDisabled();
    }

    async navigateToButtons() {
        await this.page.goto(
            QaPlaygroundUrls.buttonsPage
        );
            await this.waitForPageToLoad();
    }

    async releaseButton() {
        await this.page.mouse.up();
    }

    async rightClickButton() {
        await this.page
            .locator(ButtonsLocators.rightClickButton)
            .click({ button: 'right' });
    }

    async rightClickDoubleClickButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickButton)
            .click({ button: 'right' });
    }

    async startHoldButton() {
        const button =
            this.page.locator(
                ButtonsLocators.clickAndHoldButton
            );
        await button.hover();
        await this.page.mouse.down();
    }

}

module.exports = { ButtonsPage };