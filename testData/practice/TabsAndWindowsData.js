// Arrange Alphabetically
// Test Data for QA Playground - Tabs and Windows Page
const TabsAndWindowsData = {
    placeholder: {
        assertTab:
            'URL not asserted',
        closeTab:
            'Tab not closed',
        dynamic:
            'Registry not asserted',
        multiTab:
            'No tabs opened',
        newTab:
            'No tab opened',
        popup:
            'Popup not handled',    
        siblingTabs:
            'Sibling not located',
        switchBack:
            'Not switched'
    },
    result: {
        assertTab:
            'Tab opened → assert newPage.url() and newPage.title()',
        closeTab: {
            markAsClosed:
                'Tab closed → context.pages().length === 1 ✓',
            openTab:
                'New tab opened → call newPage.close()'
        },
        dynamic: {
            tabA:
                'Tab A (/)',
            tabB:
                'Tab B (/practice)',
            tabC:
                'Tab C (/practice/links)',
        },
        multiTab: {
            oneTab:
                '1 tab opened',
            threeTabs:
                '3 tabs opened',
            twoTabs:
                '2 tabs opened'
        },
        newTab:
            'New tab opened → assert context.pages().length === 2',
        popup:
            "Popup opened via window.open() → capture with waitForEvent('popup')",    
        siblingTabs: {
            tabA:
                'Open Tab A opened via sibling locator',
            tabB:
                'Open Tab B opened via sibling locator',
            tabC:
                'Open Tab C opened via sibling locator',
        },
        switchBack: {
            markAsReturned:
                'Switched back to original tab ✓',
            openNewtab:
                'New tab opened — now switch back to this tab'
        }
    },
    static: {
        focus:
            'Focused: ',
    }   
}

module.exports = { TabsAndWindowsData };