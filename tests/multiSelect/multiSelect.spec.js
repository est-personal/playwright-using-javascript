const {test, expect} = require('../../fixtures/Pages.fixture');
const { MultiSelectData } = require('../../testData/MultiSelectData');

test.describe('QA Playground - Multi-Select Tests', () => {
    test.describe('Scenario: Single Option', () => {
        const singleOptionScenarios = [
            {
                name: 'Playwright',
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Cypress',
                tags: ['@regression', '@positive']
            },
            {
                name: 'Selenium',
                tags: ['@regression', '@positive']
            },
            {
                name: 'WebdriverIO',
                tags: ['@regression', '@positive']
            }
        ];

        singleOptionScenarios.forEach(data => {
            test(`Select ${data.name}`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Select option
                await multiSelectPage.selectOptions(
                    'msSingle',
                    data.name
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msSingle')
                ).toBe(
                    `${data.name}${MultiSelectData.result.msSingle}`
                );
            });
        });
    });

    test.describe('Scenario: Multiple Options', () => {
        const multipleOptionScenarios = [
            {
                name: 'All Options Selected',
                options: ['Playwright', 'Cypress', 'Selenium', 'WebdriverIO'],
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Only 2 Options Selected',
                options: ['Playwright', 'Selenium'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Only 3 Options Selected',
                options: ['Cypress', 'Selenium', 'WebdriverIO'],
                tags: ['@regression', '@positive']
            },
        ];

        multipleOptionScenarios.forEach(data => {
            test(`${data.name}`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Select option
                await multiSelectPage.selectOptions(
                    'msMulti',
                    data.options
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msMulti')
                ).toBe(
                    `${data.options.join(', ')}${MultiSelectData.result.msMulti}`
                );
            });
        });
    });

    test.describe('Scenario: Deselect Options', () => {
        test('Initial Button Text', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Validate button
            await expect(
                await multiSelectPage.getButtonText('msDeselect')
            ).toBe(
                MultiSelectData.button.msDeselect.unselected
            );
        });

        test('Click Pre-select All', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Click Pre-select All button
            await multiSelectPage.clickPreSelectAllButton();
            // Validate button
            await expect(
                await multiSelectPage.getButtonText('msDeselect')
            ).toBe(
                MultiSelectData.button.msDeselect.selected
            );
            // Validate result
            await expect(
                await multiSelectPage.getResult('msDeselect')
            ).toBe(
                MultiSelectData.placeholder.msDeselect
            );
        });

        const deselectOptionScenarios = [
            {
                name: 'Playwright',
                expectedResult: ['Cypress', 'Selenium', 'WebdriverIO']
            },
            {
                name: 'Cypress',
                expectedResult: ['Playwright', 'Selenium', 'WebdriverIO']
            },
            {
                name: 'Selenium',
                expectedResult: ['Playwright', 'Cypress', 'WebdriverIO']
            },
            {
                name: 'WebdriverIO',
                expectedResult: ['Playwright', 'Cypress', 'Selenium']
            }
        ];

        deselectOptionScenarios.forEach(data => {
            test(`Select ${data.name}`, {
                    tag: ['@regression', '@positive']
            }, async ({ multiSelectPage }) => {
                // Click Pre-select All button
                await multiSelectPage.clickPreSelectAllButton();
                // Select option
                await multiSelectPage.selectOptions(
                    'msDeselect',
                    data.name
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msDeselect')
                ).toBe(
                    `${MultiSelectData.result.msDeselect}${data.name}`
                );
            });
        });

        deselectOptionScenarios.forEach(data => {
            test(`Ctrl + Select ${data.name}`, {
                    tag: ['@regression', '@positive']
            }, async ({ multiSelectPage }) => {
                // Click Pre-select All button
                await multiSelectPage.clickPreSelectAllButton();
                // Select option
                await multiSelectPage.ctrlClickOption(
                    'msDeselect',
                    data.name
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msDeselect')
                ).toBe(
                    `${MultiSelectData.result.msDeselect}${data.expectedResult.join(', ')}`
                );
            });
        });
    });
});