const {test, expect} = require('../../fixtures/Pages.fixture');
const { TabsAndWindowsData } = require('../../testData/TabsAndWindowsData');

const scenarios = [
    {
        name: 'Open Link in New Tab',
        options: 'newTab',
        expectedResult: TabsAndWindowsData.placeholder.newTab,
    },
    {
        name: 'Open Multiple Tabs',
        options: 'multiTab',
        expectedResult: TabsAndWindowsData.placeholder.multiTab,
    },
    {
        name: 'Switch Back to Original Tab',
        options: 'switchBack',
        expectedResult: TabsAndWindowsData.placeholder.switchBack,
    },
    {
        name: 'Assert New Tab URL and Title',
        options: 'assertTab',
        expectedResult: TabsAndWindowsData.placeholder.assertTab,
    },
    {
        name: 'Close a Tab',
        options: 'closeTab',
        expectedResult: TabsAndWindowsData.placeholder.closeTab,
    },
    {
        name: 'Window Popup',
        options: 'popup',
        expectedResult: TabsAndWindowsData.placeholder.popup,
    },
    {
        name: 'Sibling Tab Buttons',
        options: 'siblingTabs',
        expectedResult: TabsAndWindowsData.placeholder.siblingTabs,
    },
    {
        name: 'Dynamic Tab Registry',
        options: 'dynamic',
        expectedResult: TabsAndWindowsData.placeholder.dynamic,
    },
];

test.describe('QA Playground - Tabs and Windows - Default Value Validation', () => {
    scenarios.forEach(data => {
        test(`Scenario: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ tabsAndWindowsPage }) => {
            // Validate default value of result
            await expect(
                await tabsAndWindowsPage.getResult(data.options)
            ).toBe(
                data.expectedResult
            );
        });
    });

});