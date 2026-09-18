// Arrange Alphabetically
// Locators for QA Playground - Multi-Select Page
const MultiSelectLocators = {
    msCustom: {
        option:
            '[data-testid="ms-custom-trigger"]',
        result:
            '[data-testid="result-s04"]'
    },
    msDeselect: {
        button:
            '[data-testid="ms-deselect-trigger"]',
        option:
            '[data-testid="scenario-ms-deselect"] [data-testid="ms-native-select"]',
        result:
            '[data-testid="result-s03"]',
        section:
            '[data-testid="scenario-ms-deselect"]'
    },
    msGrouped: {
        option:
            '[data-testid="ms-grouped-select"]',
        result:
            '[data-testid="result-s08"]'
    },
    msMulti: {
        option:
            '[data-testid="scenario-ms-multi"] [data-testid="ms-native-select"]',
        result:
            '[data-testid="result-s02"]',
        section:
            '[data-testid="scenario-ms-multi"]'
    },
    msSearchable: {
        input:
            '[data-testid="ms-search-input"]',
        result:
            '[data-testid="result-s07"]'
    },
    msSelectAll: {
        clearAllButton:
            '[data-testid="ms-clear-all-btn"]',
        option:
            '[data-testid="ms-custom-trigger"]',
        result:
            '[data-testid="result-s05"]',
        selectAllButton:
            '[data-testid="ms-select-all-btn"]'
    },
    msSingle: {
        option:
            '[data-testid="scenario-ms-single"] [data-testid="ms-native-select"]',
        result:
            '[data-testid="result-s01"]',
        section:
            '[data-testid="scenario-ms-single"]'
    },
    msTagRemove: {
        button:
            '[data-testid="result-s06"]',
        result:
            '[data-testid="result-s06"]',
        tag:
            '[data-testid="ms-tag"]',
    },
};

module.exports = { MultiSelectLocators };