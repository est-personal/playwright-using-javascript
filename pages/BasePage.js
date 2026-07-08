// Arrange Alphabetically
// Common page used by all page objects.
class BasePage {

    constructor(page) {
        this.page = page;
    }

    async waitForPageToLoad() {
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = { BasePage };