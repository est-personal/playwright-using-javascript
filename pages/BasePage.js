// Arrange Alphabetically
// Common page used by all page objects.
class BasePage {

    constructor(page) {
        this.page = page;
    }

    async check(locator) {
        await this.page
            .locator(locator)
            .check();
    }

    async clear(locator) {
        await this.page
            .locator(locator)
            .clear();
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

    async getAttribute(locator, attribute) {
        return await this.page
            .locator(locator)
            .getAttribute(attribute);
    }

    async getCurrentUrl() {
        return this.page
            .url();
    }

    async getResponseStatus(responsePromise) {
        const response = 
            await responsePromise;
        return response.status();
    }

    async getSelectedOptionText(locator) {
        return (await this.page
            .locator(locator)
            .locator('option:checked')
            .textContent()
        )?.trim();
    }

    async getStatusCode(request, url) {
        const response =
            await request.get(url);
        return response.status();
    }

    async getText(locator) {
        return (await this.page
            .locator(locator)
            .textContent()
        )?.trim();
    }

    async getTexts(locator) {
        return (await this.page
            .locator(locator)
            .allTextContents()
        ).map(text => text.trim());
    }

    async getValue(locator) {
        return await this.page
            .locator(locator)
            .inputValue();
    }

    async hover(locator) {
        await this.page
            .locator(locator)
            .hover();
    }

    async isChecked(locator) {
        return await this.page
            .locator(locator)
            .isChecked();
    }

    async isDisabled(locator) {
        return await this.page
            .locator(locator)
            .isDisabled();
    }

    async isImageLoaded(locator) {
        return await this.page
            .locator(locator)
            .evaluate(
                img => img.complete && img.naturalWidth > 0
            );
    }


    async isVisible(locator) {
        return await this.page
            .locator(locator)
            .isVisible();
    }

    async navigate(url) {
        await this.page
            .goto(url);
    }

    async navigateBack() {
        await this.page
            .goBack();
    }

    async pressKey(key) {
        await this.page
            .keyboard
            .press(key);
    }

    async rightClick(locator) {
        await this.page
            .locator(locator)
            .click({
                button: 'right'
            });
    }

    async selectByLabel(locator, label) {
        await this.page
            .locator(locator)
            .selectOption({ label });
    }

    async selectByValue(locator, value) {
        await this.page
            .locator(locator)
            .selectOption({ value });
    }

    async uncheck(locator) {
        await this.page
            .locator(locator)
            .uncheck();
    }

    async waitForNewPage() {
        const newPagePromise =
            this.page.
                context()
                .waitForEvent('page');
        return newPagePromise;
    }

    async waitForPageToLoad() {
        await this.page
            .waitForLoadState('networkidle');
    }

    async waitForVisible(locator) {
        await this.page
            .locator(locator)
            .waitFor({
                state: 'visible'
            });
    }
}

module.exports = { BasePage };