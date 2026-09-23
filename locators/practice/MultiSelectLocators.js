// Arrange Alphabetically
// Locators for QA Playground - Multi-Select Page
const MultiSelectLocators = {
    msCustom: {
        option: 
            '[data-testid="ms-custom-option"]',
        optionValue: (option) =>
            `[data-testid="ms-custom-option"][data-value="${option}"]`,
        result:
            '[data-testid="result-s04"]',
        section:
            '[data-testid="scenario-ms-custom"]',
        text:
            '[data-testid="scenario-ms-custom"] p',
        trigger:
            '[data-testid="scenario-ms-custom"] [data-testid="ms-custom-trigger"]'
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
        chosen:
            '[data-testid="ms-search-chosen"]',
        tag: option =>
            `[data-testid="ms-search-chosen"] li:has-text("${option}")`,
        input:
            '[data-testid="ms-search-input"]',
        noResult:
            '[data-testid="ms-search-results"]',
        optionValue: (option) =>
            `[role="option"][data-option-id="opt-${option}"]`,
        result:
            '[data-testid="result-s07"]',
        searchResult:
            '[data-testid="ms-search-results"]'
    },
    msSelectAll: {
        clearAllButton:
            '[data-testid="ms-clear-all-btn"]',
        optionValue: (option) =>
            `[data-testid="scenario-ms-select-all"][data-value="${option}"]`,
        result:
            '[data-testid="result-s05"]',
        selectAllButton:
            '[data-testid="ms-select-all-btn"]',
        section:
            '[data-testid="scenario-ms-select-all"]',
        text:
            '[data-testid="scenario-ms-select-all"] p',
        trigger:
            ' [data-testid="scenario-ms-select-all"] [data-testid="ms-custom-trigger"]'
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
            'button:has-text("Reset Tags")',
        removeTagValue: (tag) =>
            `[data-tag-value="${tag.toLowerCase()}"] button`,
        result:
            '[data-testid="result-s06"]',
        section:
            '[data-testid="scenario-ms-tag-remove"]',
        tag: tag =>
            `[data-tag-value="${tag.toLowerCase()}"]`,
        tagList:
            '[data-testid="ms-tag-list"]'
    },
};

module.exports = { MultiSelectLocators };