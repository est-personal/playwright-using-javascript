const {test, expect} = require('../../fixtures/Pages.fixture');
const { MultiSelectData } = require('../../testData/MultiSelectData');

const scenarios = [
    {
        name: 'Select a Single Option',
        section: 'msSingle',
        expectedResult: MultiSelectData.placeholder.msSingle,
    },
    {
        name: 'Select Multiple Options',
        section: 'msMulti',
        expectedResult: MultiSelectData.placeholder.msMulti,
    },
    {
        name: 'Deselect a Specific Option',
        section: 'msDeselect',
        expectedResult: MultiSelectData.placeholder.msDeselect,
    },
    {
        name: 'Custom Checkbox Multi-Select',
        section: 'msCustom',
        expectedResult: MultiSelectData.placeholder.msCustom,
    },
    {
        name: 'Select All / Clear All',
        section: 'msSelectAll',
        expectedResult: MultiSelectData.placeholder.msSelectAll,
    },
    {
        name: 'Remove a Tag/Pill',
        section: 'msTagRemove',
        expectedResult: MultiSelectData.placeholder.msTagRemove,
    },
    {
        name: 'Searchable Multi-Select',
        section: 'msSearchable',
        expectedResult: MultiSelectData.placeholder.msSearchable,
    },
    {
        name: 'Grouped Options',
        section: 'msGrouped',
        expectedResult: MultiSelectData.placeholder.msGrouped,
    },
];

test.describe('QA Playground - Multi-Select - Default Value Validation', () => {
    scenarios.forEach(data => {
        test(`Scenario: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ multiSelectPage }) => {
            // Validate default value of result
            await expect(
                await multiSelectPage.getResult(data.section)
            ).toBe(
                data.expectedResult
            );
        });
    });
});