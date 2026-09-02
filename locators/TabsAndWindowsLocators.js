// Arrange Alphabetically
// Locators for QA Playground - Tabs and Windows Page
const TabsAndWindowsLocators = {
    twAssertTab: {
        button:
            '[data-testid="tw-assert-tab-btn"]',
        result:
            '[data-testid="result-s04"]',
        section:
            '[data-testid="scenario-tw-assert-tab"]'
    },
    twCloseTab: {
        markAsClosedButton:
            '[data-testid="tw-close-tab-btn"] + button',
        openTabButton:
            '[data-testid="tw-close-tab-btn"]',
        result:
            '[data-testid="result-s05"]',
        section:
            '[data-testid="scenario-tw-close-tab"]'
    },
    twDynamic: {
        focusButton: (tabName) =>
            `//tr[td[normalize-space()="${tabName}"]]//button[normalize-space()="Focus"]`,
        result:
            '[data-testid="result-s08"]',
        status: (tabName) =>
            `//tr[td[normalize-space()="${tabName}"]]//td[3]`,
        table:
            '[data-testid="scenario-tw-dynamic"] table',
        section:
            '[data-testid="scenario-tw-dynamic"]'
    },
    twMultiTab: {
        tabAButton:
            '[data-testid="tw-tab-a"]',
        tabBButton:
            '[data-testid="tw-tab-b"]',
        tabCButton:
            '[data-testid="tw-tab-c"]',
        result:
            '[data-testid="result-s02"]',
        section:
            '[data-testid="scenario-tw-multi-tab"]'
    },
    twNewTab: {
        button:
            '[data-testid="tw-open-new-tab"]',
        result:
            '[data-testid="result-s01"]',
        section:
            '[data-testid="scenario-tw-new-tab"]'
    },
    twPopup: {
        button:
            '[data-testid="tw-popup-btn"]',
        result:
            '[data-testid="result-s06"]',
        section:
            '[data-testid="scenario-tw-popup"]'
    },
    twSiblingTabs: {
        panel:
            '[data-testid="tw-sibling-panel"]',
        result:
            '[data-testid="result-s07"]',
        section:
            '[data-testid="scenario-tw-sibling-tabs"]',
        tabAButton:
            '[data-testid="tw-sibling-panel"] button:nth-of-type(1)',
            // '//div[@data-testid="tw-sibling-panel"]//button[normalize-space()="Open Tab A"]',
        tabBButton:
            '[data-testid="tw-sibling-panel"] button:nth-of-type(2)',
        tabCButton:
            '[data-testid="tw-sibling-panel"] button:nth-of-type(3)'
    },
    twSwitchBack: {
        markAsReturnedButton:
            '[data-testid="tw-open-and-return"] + button',
        newTabButton:
            '[data-testid="tw-open-and-return"]',
        result:
            '[data-testid="result-s03"]',
        section:
            '[data-testid="scenario-tw-switch-back"]'
    }
};

module.exports = { TabsAndWindowsLocators };