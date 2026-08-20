const { expect } = require('@playwright/test');

class AlertsAndDialogsAssertions {
    static async validateModalContent(
        actualModalTitle,
        expectedModalTitle,
        actualModalMessage,
        expectedModalMessage
    ) {
        expect(await actualModalTitle).toBe(expectedModalTitle);
        expect(await actualModalMessage).toBe(expectedModalMessage);
    }

}

module.exports = { AlertsAndDialogsAssertions };