// Arrange Alphabetically
// Common page used by all page objects.
class BasePage {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await this.page
            .locator(locator)
            .click();
    }

    async doubleClick(locator) {
        await this.page
            .locator(locator)
            .dblclick();
    }

    async fill(locator, value) {
        await this.page
            .locator(locator)
            .fill(value);
    }

    async getText(locator) {
        return (await this.page
            .locator(locator)
            .textContent()
        )?.trim();
    }

    async hover(locator) {
        await this.page
            .locator(locator)
            .hover();
    }

    async isVisible(locator) {
        return await this.page
            .locator(locator)
            .isVisible();
    }

    async rightClick(locator) {
        await this.page
            .locator(locator)
            .click({
                button: 'right'
            });
    }

    async waitForPageToLoad() {
        await this.page
            .waitForLoadState('networkidle');
    }
}

module.exports = { BasePage };