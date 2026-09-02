const {test, expect} = require('../../fixtures/Pages.fixture');
const { TabsAndWindowsData } = require('../../testData/TabsAndWindowsData');
const { TabsAndWindowsAssertions } = require('../../helpers/TabsAndWindowsAssertions');
const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');

test.describe('QA Playground - Tabs and Windows Tests', () => {
    test.describe('Scenario: New Tab', () => {
        test('Click Open In New Tab', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open In New Tab button
            await tabsAndWindowsPage.openNewTab(
                'newTab',
                'button'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('newTab')
            ).toBe(
                TabsAndWindowsData.result.newTab
            );
        });
    });

    test.describe('Scenario: Multiple Tabs', () => {
        test('Click One Tab Only', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open In New Tab button
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabAButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('multiTab')
            ).toBe(
                TabsAndWindowsData.result.multiTab.oneTab
            );
        });

        test('Click Two Tabs', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open In New Tab button
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabAButton'
            );
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabBButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('multiTab')
            ).toBe(
                TabsAndWindowsData.result.multiTab.twoTabs
            );
        });

        test('Click All Tabs', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open In New Tab button
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabAButton'
            );
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabBButton'
            );
            await tabsAndWindowsPage.openNewTab(
                'multiTab',
                'tabCButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('multiTab')
            ).toBe(
                TabsAndWindowsData.result.multiTab.threeTabs
            );
        });
    });

    test.describe('Scenario: Switch Back', () => {
        test('Click Open New Tab', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open In New Tab button
            await tabsAndWindowsPage.openNewTab(
                'switchBack',
                'newTabButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('switchBack')
            ).toBe(
                TabsAndWindowsData.result.switchBack.openNewtab
            );
        });

        test('Switch Back To Original Tab', 
        {
            tag: ['@Smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Get inital tab count
            const initialTabCount =
                tabsAndWindowsPage.getTabCount();
            // Click Open In New Tab button
            const newTab =
                await tabsAndWindowsPage.openNewTab(
                    'switchBack',
                    'newTabButton'
                );
            // Validate tab
            expect(
                tabsAndWindowsPage.getTabCount()
            ).toBe(
                initialTabCount + 1
            );
            // Go to Original Tab
            await tabsAndWindowsPage.page.bringToFront();
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('switchBack')
            ).toBe(
                TabsAndWindowsData.result.switchBack.openNewtab
            );
            // Click Mark As Returned button
            await tabsAndWindowsPage.clickScenarioButton(
                'switchBack',
                'markAsReturnedButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('switchBack')
            ).toBe(
                TabsAndWindowsData.result.switchBack.markAsReturned
            );
        });
    });

    test.describe('Scenario: Assert Tab', () => {
        test('Click Open And Assert', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click button
            await tabsAndWindowsPage.openNewTab(
                'assertTab',
                'button'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('assertTab')
            ).toBe(
                TabsAndWindowsData.result.assertTab
            );
        });

        test('Validate New Tab URL and Title', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Get expected URL and Title
            const expectedUrlContains =
                await tabsAndWindowsPage.getButtonAttribute(
                    'assertTab',
                    'button',
                    'data-expected-url-contains'
                );
            const expectedTitleContains =
                await tabsAndWindowsPage.getButtonAttribute(
                    'assertTab',
                    'button',
                    'data-expected-title-contains'
                );
            // Get inital tab count
            const initialTabCount =
                tabsAndWindowsPage.getTabCount();
            // Click button
            const newTab =
                await tabsAndWindowsPage.openNewTab(
                    'assertTab',
                    'button'
                );
            // Validate tab count
            expect(
                tabsAndWindowsPage.getTabCount()
            ).toBe(
                initialTabCount + 1
            );
            // Validate new tab URL
            expect(
                newTab.url()
            ).toContain(
                expectedUrlContains
            );
            // Validate new tab title
            expect(
                await newTab.title()
            ).toContain(
                expectedTitleContains
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('assertTab')
            ).toBe(
                TabsAndWindowsData.result.assertTab
            );
        });
    });

    test.describe('Scenario: Close Tab', () => {
        test('Click Open Tab', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open Tab button
            await tabsAndWindowsPage.openNewTab(
                'closeTab',
                'openTabButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('closeTab')
            ).toBe(
                TabsAndWindowsData.result.closeTab.openTab
            );
        });

        test('Close Opened Tab', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Get inital tab count
            const initialTabCount =
                tabsAndWindowsPage.getTabCount();
            // Click Open Tab button
            const newTab =
                await tabsAndWindowsPage.openNewTab(
                    'closeTab',
                    'openTabButton'
                );
            // Validate tab count
            expect(
                tabsAndWindowsPage.getTabCount()
            ).toBe(
                initialTabCount + 1
            );
            // Close tab
            await newTab.close();
            // Validate tab count
            expect(
                tabsAndWindowsPage.getTabCount()
            ).toBe(
                initialTabCount
            );
            // Click Mark As Closed button
            await tabsAndWindowsPage.clickScenarioButton(
                'closeTab',
                'markAsClosedButton'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('closeTab')
            ).toBe(
                TabsAndWindowsData.result.closeTab.markAsClosed
            );
        });
    });

    test.describe('Scenario: Popup', () => {
        test('Click Open Popup Window', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Click Open Popup Window button
            await tabsAndWindowsPage.openPopup(
                'popup',
                'button'
            );
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('popup')
            ).toBe(
                TabsAndWindowsData.result.popup
            );
        });

        test('Validate Popup Window', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ tabsAndWindowsPage }) => {
            // Get expected URL
            const expectedUrlContains =
                await tabsAndWindowsPage.getButtonAttribute(
                    'popup',
                    'button',
                    'data-popup-url'
                );
            // Get inital window count
            const initialWindowCount =
                tabsAndWindowsPage.getTabCount();
            // Click Open Popup Window button
            const popup =
                await tabsAndWindowsPage.openPopup(
                    'popup',
                    'button'
                );
            // Validate window count
            expect(
                tabsAndWindowsPage.getTabCount()
            ).toBe(
                initialWindowCount + 1
            );
            // Validate popup URL
            expect(
                popup.url()
            ).toContain(
                expectedUrlContains
            );
            expect(
                await popup.title()
            ).not.toBe('');
            // Validate result
            await expect(
                await tabsAndWindowsPage.getResult('popup')
            ).toBe(
                TabsAndWindowsData.result.popup
            );
        });
    });

    test.describe('Scenario: Sibling Tabs', () => {
        const siblingTabs = [
            {
                name: 'Open Tab A',
                button: 'tabAButton',
                expected: TabsAndWindowsData.result.siblingTabs.tabA,
                url: QaPlaygroundUrls.homePage,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Open Tab B',
                button: 'tabBButton',
                expected: TabsAndWindowsData.result.siblingTabs.tabB,
                url: QaPlaygroundUrls.practicePage,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Open Tab C',
                button: 'tabCButton',
                expected: TabsAndWindowsData.result.siblingTabs.tabC,
                url: QaPlaygroundUrls.linksPage,
                tags: ['@regression', '@positive']
            }
        ];

        siblingTabs.forEach(data => {
            test(`Scenario: ${data.name}`, {
                    tag: data.tags
            }, async ({ tabsAndWindowsPage }) => {
                // Get initial tab count
                const initialTabCount =
                    tabsAndWindowsPage.getTabCount();
                // Click button
                const newTab =
                    await tabsAndWindowsPage.openNewTab(
                        'siblingTabs',
                        data.button
                    );
                // Validate tab count
                expect(
                    tabsAndWindowsPage.getTabCount()
                ).toBe(
                    initialTabCount + 1
                );
                // Validate new tab URL
                expect(
                    newTab.url()
                ).toContain(
                    data.url
                );
                // Validate result
                await expect(
                    await tabsAndWindowsPage.getResult('siblingTabs')
                ).toBe(
                    data.expected
                );
            });
        });
    });

    test.describe('Scenario: Dynamic', () => {
        const dynamic = [
            {
                name: 'Click Tab A Focus',
                TabName: 'Tab A',
                expected: TabsAndWindowsData.result.dynamic.tabA,
                expectedStatuses: {
                    'Tab A': 'Active',
                    'Tab B': 'Open',
                    'Tab C': 'Open'
                },
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Click Tab B Focus',
                TabName: 'Tab B',
                expected: TabsAndWindowsData.result.dynamic.tabB,
                expectedStatuses: {
                    'Tab A': 'Open',
                    'Tab B': 'Active',
                    'Tab C': 'Open'
                },
                tags: ['@regression', '@positive']
            },
            {
                name: 'Click Tab C Focus',
                TabName: 'Tab C',
                expected: TabsAndWindowsData.result.dynamic.tabC,
                expectedStatuses: {
                    'Tab A': 'Open',
                    'Tab B': 'Open',
                    'Tab C': 'Active'
                },
                tags: ['@regression', '@positive']
            }
        ];

        dynamic.forEach(data => {
            test(`Scenario: ${data.name}`, {
                    tag: data.tags
            }, async ({ tabsAndWindowsPage }) => {
                // Click button
                await tabsAndWindowsPage.clickDynamicFocusButton(
                    data.TabName
                );
                // Validate status
                await TabsAndWindowsAssertions.validateDynamicStatuses(
                    tabsAndWindowsPage,
                    data.expectedStatuses
                );
                // Validate result
                await expect(
                    await tabsAndWindowsPage.getResult('dynamic')
                ).toBe(
                    `${TabsAndWindowsData.static.focus}${data.expected}`
                );
            });
        });
    });
});