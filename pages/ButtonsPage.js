// Arrange Alphabetically
// Keywords for QA Playground - Buttons Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { ButtonsLocators } = require('../locators/ButtonsLocators');
const { ButtonsData } = require('../testData/ButtonsData');
const { BasePage } = require('./BasePage');

class ButtonsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickAndHold(duration) {
        const button = this.page.locator(
            ButtonsLocators.clickHoldButton
        );
        await button.hover();
        await this.page.mouse.down();
        await this.page.waitForTimeout(duration);
    }

    async clickDialogButton(locator) {
        await this.click(
            locator
        );
    }

    async doubleClickDialogButton(locator) {
        await this.doubleClick(
            locator
        );
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

    async getDisplayedColor() {
        const result =
            this.page.locator(
                ButtonsLocators.getColorResult
            );
        await result.waitFor({ 
            state: 'visible' 
        });
        let text = '';
        await this.page.waitForFunction(
            ({ selector }) => {
                const el = document.querySelector(selector);
                return /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/i.test(
                    el?.textContent || ''
                );
            }, { 
                selector: ButtonsLocators.getColorResult 
            }
        );
        text = (await result.textContent())?.trim();
        // const text = await result.textContent();
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
        await result.waitFor({ 
            state: 'visible' 
        });
        let text = '';
        await this.page.waitForFunction(
            ({ selector }) => {
                const el = document.querySelector(selector);
                return /X:\s*\d+px,\s*Y:\s*\d+px/.test(
                    el?.textContent || ''
                );
            }, { 
                selector: ButtonsLocators.getCoordinatesResult 
            }
        );
        text = (await result.textContent())?.trim();
        // const finalText = await result.textContent();
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
        await result.waitFor({ 
            state: 'visible' 
        });
        let text = '';
        await this.page.waitForFunction(
            ({ selector }) => {
                const el = document.querySelector(selector);
                return /W:\s*\d+px,\s*H:\s*\d+px/.test(
                    el?.textContent || ''
                );
            }, { 
                selector: ButtonsLocators.getSizeResult 
            }
        );
        text = (await result.textContent())?.trim();
        // const text = await result.textContent();
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

    async getResultText(locator) {
        const result = this.page.locator(locator);
        await result.waitFor({
            state: 'visible'
        });
        return (
            await result.textContent()
        )?.trim();
    }

    async holdButton() {
        const button = this.page.locator(
            ButtonsLocators.clickHoldButton
        );
        await button.hover();
        await this.page.mouse.down();
    }

    async navigateToButtons() {
        await this.navigate(
            QaPlaygroundUrls.buttonsPage
        );
    }

    async releaseHold() {
        const button = this.page.locator(
            ButtonsLocators.clickAndHoldButton
        );
        await this.page.mouse.up();
    }

    async rightClickDialogButton(locator) {
        await this.rightClick(
            locator
        );
    }

    // Non-Async
    async getResult(locator) {
        return await this.getText(
            locator
        );
    }
}

module.exports = { ButtonsPage };