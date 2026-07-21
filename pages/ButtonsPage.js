// Arrange Alphabetically
// Keywords for QA PLayground - Buttons Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { ButtonsLocators } = require('../locators/ButtonsLocators');
const { ButtonsData } = require('../testData/ButtonsData');
const { BasePage } = require('./BasePage');

class ButtonsPage {

    constructor(page) {
        this.page = page;
    }

    // Async
    async clickAndHold(duration) {
        const button = this.page.locator(
            ButtonsLocators.clickAndHoldButton
        );
        await button.hover();
        await this.page.mouse.down();
        await this.page.waitForTimeout(duration);
    }

    async clickDisabledButton() {
        await this.page
            .locator(ButtonsLocators.disabledButton)
            .click({
                force: true
            });
    }

    async clickDoubleClickMeButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickMeButton)
            .click();
    }

    async clickDoYouKnowMySizeButton() {
        await this.page
            .locator(ButtonsLocators.doYouKnowMySizeButton)
            .click();
    }

    async clickFindLocationButton() {
        await this.page
            .locator(ButtonsLocators.findLocationButton)
            .click();
    }

    async clickFindMyColorButton() {
        await this.page
            .locator(ButtonsLocators.findMyColorButton)
            .click();
    }

    async clickGoToHomeButton() {
        await this.page
            .locator(ButtonsLocators.goToHomeButton)
            .click();
    }

    async clickRightClickMeButton() {
        await this.page
            .locator(ButtonsLocators.rightClickMeButton)
            .click();
    }

    async doubleClickDoubleClickMeButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickMeButton)
            .dblclick();
    }

    async doubleClickRightClickMeButton() {
        await this.page
            .locator(ButtonsLocators.rightClickMeButton)
            .dblclick();
    }

    async getButtonColor() {
        const button =
            this.page.locator(
                ButtonsLocators.findMyColorButton
            );
        const colorBackground =
            await button.evaluate(
                element => getComputedStyle(element).backgroundColor
            );
        const colorText =
            await button.evaluate(
                element => getComputedStyle(element).color
            );
        if (!colorBackground) {
            throw new Error('Unable to retrieve button color');
        }
        const color = colorBackground.match(
            /rgb\((\d+),\s*(\d+),\s*(\d+)\)/
        );
        if (!color) {
            throw new Error(
                `Invalid RGB format: ${colorBackground}`
            );
        }
        return {
            backgroundColor: colorBackground,
            textColor: colorText,
            r: Number(color[1]),
            g: Number(color[2]),
            b: Number(color[3])
        };
    }

    async getButtonCoordinates() {
        const button =
            this.page.locator(
                ButtonsLocators.findLocationButton
            );
        const coordinates =
            await button.boundingBox();
        if (!coordinates) {
            throw new Error('Unable to retrieve button coordinates');
        }
        return {
            x: Math.round(coordinates.x),
            y: Math.round(coordinates.y)
        };
    }

    async getButtonSize() {
        const button =
            this.page.locator(
                ButtonsLocators.doYouKnowMySizeButton
            );
        const size =
            await button.boundingBox();
        if (!size) {
            throw new Error('Unable to retrieve button size');
        }
        return {
            width: Math.round(size.width),
            height: Math.round(size.height)
        };
    }

    async getDisabledButtonState() {
        return await this.page
        .locator(ButtonsLocators.disabledButton)
        .isEnabled();
    }

    async getDisabledButtonAttribute() {
        return await this.page
            .locator(ButtonsLocators.disabledButton)
            .getAttribute('disabled');
    }

    async getDisplayedColor() {
        const result =
            this.page.locator(
                ButtonsLocators.getColorResult
            );
        const text = await result.textContent();
        if (!text?.trim()) {
            throw new Error('Color information is not displayed');
        }
        // Example: "Background: rgb(237, 233, 254)"
        const match = text.match(
            /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/
        );
        if (!match) {
            throw new Error(`Invalid color format: ${text}`);
        }
        return {
            r: Number(match[1]),
            g: Number(match[2]),
            b: Number(match[3])
        };
    }

    async getDisplayedCoordinates() {
        const result =
            this.page.locator(
                ButtonsLocators.getCoordinatesResult
            );
        const text = await result.textContent();
        if (!text?.trim()) {
            throw new Error(`Coordinate information is not displayed`);
        }
        // Example: "X: 193px, Y: 594px"
        const match = text.match(
            /X:\s*(\d+)px,\s*Y:\s*(\d+)px/
        );
        
        if (!match) {
            throw new Error(`Invalid coordinates format: ${text}`);
        }
        return {
            x: Number(match[1]),
            y: Number(match[2])
        };
    }

    async getDisplayedSize() {
        const result =
            this.page.locator(
                ButtonsLocators.getSizeResult
            );
        const text = await result.textContent();
        if (!text?.trim()) {
            throw new Error('Size information is not displayed');
        }
        // Example: "Background: rgb(237, 233, 254)"
        const match = text.match(
            /W:\s*(\d+)px.*H:\s*(\d+)px/
        );
        if (!match) {
            throw new Error(`Invalid size format: ${text}`);
        }
        return {
            width: Number(match[1]),
            height: Number(match[2]),
        };
    }

    async getHoldResultMessage() {
        const result = this.page.locator(
            ButtonsLocators.clickHoldResult
        );
        return (
            await result.textContent()
        )?.trim();
    }

    async holdButton() {
        const button = this.page.locator(
            ButtonsLocators.clickAndHoldButton
        );
        await button.hover();
        await this.page.mouse.down();
    }

    async isDisabledButtonDisabled() {
        return await this.page
            .locator(ButtonsLocators.disabledButton)
            .isDisabled();
    }
    
    async isSuccessDisplayed() {
        const result = await this.getHoldResultMessage();
        return result?.includes(ButtonsData.getClickAndHoldValue);
    }

    async navigateToButtons() {
        await this.page.goto(
            QaPlaygroundUrls.buttonsPage,
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async releaseHold() {
        const button = this.page.locator(
            ButtonsLocators.clickAndHoldButton
        );
        await this.page.mouse.up();
    }

    async rightClickDoubleClickMeButton() {
        await this.page
            .locator(ButtonsLocators.doubleClickMeButton)
            .click({ button: ButtonsData.rightText });
    }

    async rightClickRightClickMeButton() {
        await this.page
            .locator(ButtonsLocators.rightClickMeButton)
            .click({ button: ButtonsData.rightText });
    }

    // Non-Async
    getClickAndHoldButton() {
        return this.page
            .locator(
                ButtonsLocators.clickAndHoldButton
        );
    }

    getClickHoldResult() {
        return this.page
            .locator(
                ButtonsLocators.clickHoldResult
        );
    }

    getDisabledButton() {
        return this.page
            .locator(
                ButtonsLocators.disabledButton
        );
    }

    getDisabledResult() {
        return this.page
            .locator(
                ButtonsLocators.disabledResult
        );
    }

    getDoubleClickMeButton() {
        return this.page
            .locator(
                ButtonsLocators.doubleClickMeButton
        );
    }

    getDoubleClickResult() {
        return this.page
            .locator(
                ButtonsLocators.doubleClickResult
        );
    }

    getDoYouKnowMySizeButton() {
        return this.page
            .locator(
                ButtonsLocators.doYouKnowMySizeButton
        );
    }

    getFindLocationButton() {
        return this.page
            .locator(
                ButtonsLocators.findLocationButton
        );
    }

    getFindMyColorButton() {
        return this.page
            .locator(
                ButtonsLocators.findMyColorButton
        );
    }

    getGetColorResult() {
        return this.page
            .locator(
                ButtonsLocators.getColorResult
        );
    }

    getGetCoordinatesResult() {
        return this.page
            .locator(
                ButtonsLocators.getCoordinatesResult
        );
    }

    getGetSizeResult() {
        return this.page
            .locator(
                ButtonsLocators.getSizeResult
        );
    }

    getGoToHomeButton() {
        return this.page
            .locator(
                ButtonsLocators.goToHomeButton
        );
    }

    getNavigateHomeResult() {
        return this.page
            .locator(
                ButtonsLocators.navigateHomeResult
        );
    }

    getRightClickMeButton() {
        return this.page
            .locator(
                ButtonsLocators.rightClickMeButton
        );
    }

    getRightClickResult() {
        return this.page
            .locator(
                ButtonsLocators.rightClickResult
        );
    }

}

module.exports = { ButtonsPage };