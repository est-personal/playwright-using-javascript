const { expect } = require('@playwright/test');

class TabsAndWindowsAssertions {
    static async validateDynamicStatuses(tabsAndWindowsPage, expectedStatuses) {
        for (const [tabName, status] of Object.entries(expectedStatuses)) {
            expect(
                await tabsAndWindowsPage.getDynamicStatus(tabName)
            ).toBe(status);
        }
    }
}

module.exports = { TabsAndWindowsAssertions };