const {test, expect} = require('../../fixtures/Pages.fixture');
const { DatePickerData } = require('../../testData/DatePickerData');

const scenarios = [
    {
        name: 'Basic Date Input',
        options: 'basicInput',
        expectedResult: DatePickerData.placeholder.dpBasicInput,
    },
    {
        name: 'Calendar Open & Select',
        options: 'calendar',
        expectedResult: DatePickerData.placeholder.dpCalendar,
    },
    {
        name: 'Month Navigation',
        options: 'monthNav',
        expectedResult: DatePickerData.placeholder.dpMonthNav,
    },
    {
        name: 'Date Range Picker',
        options: 'range',
        expectedResult: DatePickerData.placeholder.dpRange,
    },
    {
        name: 'Disabled / Min-Max Dates',
        options: 'constraints',
        expectedResult: DatePickerData.placeholder.dpConstraints,
    },
    {
        name: 'Sibling-Located Date Fields',
        options: 'sibling',
        expectedResult: DatePickerData.placeholder.dpSibling,
    },
    {
        name: 'Repeated Date Cards (Scoped)',
        options: 'cards',
        expectedResult: DatePickerData.placeholder.dpCards,
    },
    {
        name: 'Dynamic Date Display',
        options: 'dynamic',
        expectedResult: DatePickerData.placeholder.dpDynamic,
    },
];

test.describe('QA Playground - Date Picker - Default Value Validation', () => {
    scenarios.forEach(data => {
        test(`Scenario: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ datePickerPage }) => {
            // Validate default value of result
            await expect(
                await datePickerPage.getResult(data.options)
            ).toBe(
                data.expectedResult
            );
        });
    });
});