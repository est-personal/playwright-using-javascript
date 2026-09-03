// Arrange Alphabetically
// Keywords for QA Playground - Tabs and Windows Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { TabsAndWindowsLocators } = require('../locators/TabsAndWindowsLocators');
const { AlertsAndDialogsActions } = require('../helpers/AlertsAndDialogsActions');
const { BasePage } = require('./BasePage');

class TabsAndWindowsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickDynamicFocusButton(tabName) {
        await this.getDynamicFocusButton(tabName)
            .click();
    }

    async clickScenarioButton(section, button) {
        await this.click(
            this.getButtonLocator(section, button)
        );
    }

    async getExpectedUrlContains() {
        return await this.getAttribute(
            TabsAndWindowsLocators.twAssertTab.container,
            'data-expected-url-contains'
        );
    }

    async getButtonAttribute(section, button, attribute) {
        return await this.getAttribute(
            this.getButtonLocator(section, button),
            attribute
        );
    }

    async getExpectedTitleContains() {
        return await this.getAttribute(
            TabsAndWindowsLocators.twAssertTab.container,
            'data-expected-title-contains'
        );
    }

    async getResult(section) {
        return await this.getText(
            this.getResultsLocator(section)
        );
    }

    async navigateToTabsAndWindows() {
        await this.navigate(
            QaPlaygroundUrls.tabsAndwindowsPage
        );
    }

    async openNewTab(scenario, button) {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.clickScenarioButton(scenario, button)
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }

    async openPopup(scenario, button) {
        const popupPromise =
            this.page.waitForEvent('popup');
        await this.clickScenarioButton(
            scenario,
            button
        );
        const popup =
            await popupPromise;
        await popup.waitForLoadState();
        return popup;
    }

    async switchBackToOriginalTab() {
        const originalPage = this.page;
        const [newTab] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.clickButton(
                'switchBack',
                'openTabButton'
            )
        ]);
        await newTab.waitForLoadState();
        await originalPage.bringToFront();
        await this.clickButton(
            'switchBack',
            'returnButton'
        );
    }

    // Non-Async
    getButtonLocator(section, button) {
        const sections = {
            assertTab: TabsAndWindowsLocators.twAssertTab,
            closeTab: TabsAndWindowsLocators.twCloseTab,
            dynamic: TabsAndWindowsLocators.twDynamic,
            multiTab: TabsAndWindowsLocators.twMultiTab,
            newTab: TabsAndWindowsLocators.twNewTab,
            popup: TabsAndWindowsLocators.twPopup,
            siblingTabs: TabsAndWindowsLocators.twSiblingTabs,
            switchBack: TabsAndWindowsLocators.twSwitchBack
        };
        return sections[section][button];
    }

    getDynamicFocusButton(tabName) {
        return this.page.locator(
            TabsAndWindowsLocators.twDynamic.focusButton(tabName)
        );
    }

    async getDynamicStatus(tabName) {
        return await this.getText(
            TabsAndWindowsLocators.twDynamic.status(tabName)
        );
    }

    getResultsLocator(section) {
        const sections = {
            assertTab: TabsAndWindowsLocators.twAssertTab.result,
            closeTab: TabsAndWindowsLocators.twCloseTab.result,
            dynamic: TabsAndWindowsLocators.twDynamic.result,
            multiTab: TabsAndWindowsLocators.twMultiTab.result,
            newTab: TabsAndWindowsLocators.twNewTab.result,
            popup: TabsAndWindowsLocators.twPopup.result,
            siblingTabs: TabsAndWindowsLocators.twSiblingTabs.result,
            switchBack: TabsAndWindowsLocators.twSwitchBack.result
        };
        return sections[section];
    }

    getTabCount() {
        return this.page.context().pages().length;
    }
}

module.exports = { TabsAndWindowsPage };