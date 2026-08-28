const { expect } = require('@playwright/test');

class AlertsAndDialogsAssertions {
    static async validateModalContent(
        page,
        titleLocator,
        expectedModalTitle,
        messageLocator,
        expectedModalMessage
    ) {
        // Get Modal Title
        const actualTitle =
            await page
                .getText(titleLocator);
        // Get Modal Message
        const actualMessage =
            await page
                .getText(messageLocator);
        // Validate Modal Title
        expect(
            actualTitle
        ).toBe(
            expectedModalTitle
        );
        // Validate Modal Message
        expect(
            actualMessage
        ).toBe(
            expectedModalMessage
        );
    }

}

module.exports = { AlertsAndDialogsAssertions };