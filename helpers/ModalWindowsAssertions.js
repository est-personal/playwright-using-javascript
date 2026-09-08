const { expect } = require('@playwright/test');

class ModalWindowsAssertions {

    static async validateModalContent(
        page,
        titleLocator,
        expectedModalTitle,
        messageLocator,
        expectedModalMessage
    ) {
        await expect(
            page.page.locator(titleLocator)
        ).toHaveText(expectedModalTitle);

        await expect(
            page.page.locator(messageLocator)
        ).toHaveText(expectedModalMessage);
    }

}

module.exports = { ModalWindowsAssertions };