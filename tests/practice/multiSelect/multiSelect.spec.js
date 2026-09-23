const {test, expect} = require('../../../fixtures/Pages.fixture');
const { MultiSelectData } = require('../../../testData/practice/MultiSelectData');

import { MultiSelectAssertions } from '../../../helpers/practice/MultiSelectAssertions';

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
            await multiSelectPage.clickButton('msDeselect');
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
                await multiSelectPage.clickButton('msDeselect');
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
                await multiSelectPage.clickButton('msDeselect');
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

    test.describe('Scenario: Custom Checkbox Option', () => {
        const customOptionScenarios = [
            {
                name: 'React Only',
                options: ['React'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Vue.js Only',
                options: ['Vue.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Angular Only',
                options: ['Angular'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Svelte Only',
                options: ['Svelte'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'React And Vue.js',
                options: ['React', 'Vue.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'React, Angular, And Svelte',
                options: ['React', 'Angular', 'Svelte'],
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'All',
                options: ['React', 'Vue.js', 'Angular', 'Svelte'],
                tags: ['@regression', '@positive']
            }
        ];

        customOptionScenarios.forEach(data => {
            test(`Select ${data.name}`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Select option
                await multiSelectPage.selectCustomOptions(
                    'msCustom',
                    data.options
                );
                // Validate text
                await expect(
                    await multiSelectPage.getTextResult('msCustom')
                ).toBe(
                    `${MultiSelectData.static.selected}${data.options.join(', ')}`
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msCustom')
                ).toBe(
                    `${data.options.join(', ')}${MultiSelectData.result.msCustom.selected}`
                );
            });
        });

        test('Deselect Selected Option', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Select option
            await multiSelectPage.selectCustomOptions(
                'msCustom',
                MultiSelectData.options.msCustom.Angular
            );
            // Deselect option
            await multiSelectPage.selectCustomOptions(
                'msCustom',
                MultiSelectData.options.msCustom.Angular
            );
            // Validate result
            await expect(
                await multiSelectPage.getResult('msCustom')
            ).toBe(
                MultiSelectData.result.msCustom.unselected
            );
        });
    });

    test.describe('Scenario: Select/Clear All', () => {
        test('Click Select All', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Click Select All button
            await multiSelectPage.clickButton('msSelectAll');
            // Validate text
            await expect(
                await multiSelectPage.getTextResult('msSelectAll')
            ).toBe(
                `${MultiSelectData.static.selected}${MultiSelectData.options.msSelectAll.join(', ')}`
            );
            // Validate result
            await expect(
                await multiSelectPage.getResult('msSelectAll')
            ).toBe(
                MultiSelectData.result.msSelectAll.select
            );
        });

        test('Click Clear All', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Click Select All button
            await multiSelectPage.clickButton('msSelectAll');
            // Click Clear All button
            await multiSelectPage.clickButton('msSelectAllClear');
            // Validate text
            await expect(
                multiSelectPage.page.locator(
                    multiSelectPage.getTextsLocator('msSelectAll'))
            ).not.toBeVisible();
            // Validate result
            await expect(
                await multiSelectPage.getResult('msSelectAll')
            ).toBe(
                MultiSelectData.result.msSelectAll.clear
            );
        });
    });

    test.describe('Scenario: Remove Tag', () => {
        const removeTagScenarios = [
            {
                name: 'JavaScript',
                tag: ['JavaScript'],
                removedTag: MultiSelectData.options.msTagRemove.JavaScript,
                remaining: MultiSelectData.static.threeRemaining,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'TypeScript',
                tag: ['TypeScript'],
                removedTag: MultiSelectData.options.msTagRemove.TypeScript,
                remaining: MultiSelectData.static.threeRemaining,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Python',
                tag: ['Python'],
                removedTag: MultiSelectData.options.msTagRemove.Python,
                remaining: MultiSelectData.static.threeRemaining,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Java',
                tag: ['Java'],
                removedTag: MultiSelectData.options.msTagRemove.Java,
                remaining: MultiSelectData.static.threeRemaining,
                tags: ['@regression', '@positive']
            },
            {
                name: '2 Tags',
                tag: ['Java', 'JavaScript'],
                removedTag: MultiSelectData.options.msTagRemove.JavaScript,
                remaining: MultiSelectData.static.twoRemaining,
                tags: ['@regression', '@positive']
            },
            {
                name: '3 Tags',
                tag: ['Java', 'JavaScript', 'Python'],
                removedTag: MultiSelectData.options.msTagRemove.Python,
                remaining: MultiSelectData.static.oneRemaining,
                tags: ['@regression', '@positive']
            },
            {
                name: 'All Tags',
                tag: ['Java', 'JavaScript', 'Python', 'TypeScript'],
                removedTag: MultiSelectData.options.msTagRemove.TypeScript,
                remaining: MultiSelectData.static.zeroRemaining,
                tags: ['@regression', '@positive']
            }
        ];

        removeTagScenarios.forEach(data => {
            test(`Remove ${data.name}`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Remove tag
                await multiSelectPage.removeTag(
                    data.tag
                );
                // Validate pill
                await MultiSelectAssertions.validateRemoved(
                    multiSelectPage,
                    'msTagRemove',
                    data.tag
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msTagRemove')
                ).toBe(
                    `\"${data.removedTag}\"${MultiSelectData.static.tagRemoved}${data.remaining}`
                );
            });
        });

        test('Click Reset Tags', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ multiSelectPage }) => {
            // Remove tag
            await multiSelectPage.removeTag(
                MultiSelectData.allMsTagsRemove
            );
            // Click Reset Tags button
            await multiSelectPage.clickButton('msTagRemove');
            // Validate pill
            await MultiSelectAssertions.validateDisplayed(
                multiSelectPage,
                'msTagRemove',
                MultiSelectData.allMsTagsRemove
            );
        });
    });

    test.describe('Scenario: Search Multi-Select', () => {
        const searchScenarios = [
            {
                name: 'React',
                searchText: ['React'],
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Vue.js',
                searchText: ['Vue.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Angular',
                searchText: ['Angular'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Svelte',
                searchText: ['Svelte'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Next.js',
                searchText: ['Next.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'React And Next.js',
                searchText: ['React', 'Next.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Vue.js, Svelte, And Next.js',
                searchText: ['Vue.js', 'Svelte', 'Next.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'Next.js, Angular, React, And Vue.js',
                searchText: ['Next.js', 'Angular', 'React', 'Vue.js'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'All',
                searchText: ['Next.js', 'Svelte', 'Angular', 'React', 'Vue.js'],
                tags: ['@regression', '@positive']
            }
        ];

        searchScenarios.forEach(data => {
            test(`Search ${data.name} Then Select`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Search and Select option
                await multiSelectPage.searchAndSelectOptions(
                    data.searchText
                );
                // Validate text
                await MultiSelectAssertions.validateDisplayed(
                    multiSelectPage,
                    'msSearchable',
                    data.searchText
                );
                // Validate result
                await expect(
                    await multiSelectPage.getResult('msSearchable')
                ).toBe(
                    `${data.searchText.join(', ')}${MultiSelectData.result.msSearchable}`
                );
            });
        });

        test('Search Non-existing Option', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ multiSelectPage }) => {
            // Search option
            await multiSelectPage.searchOption(
                MultiSelectData.options.msSearchable.nonExisting
            );
            // Validate Searchbox
            await expect(
                multiSelectPage.getNoResultsLocator()
            ).toHaveText(
                MultiSelectData.static.noResults
            );
        });

        const removeSearchScenarios = [
            {
                name: 'Select React Then Remove',
                searchText: ['React'],
                removeOption: ['React'],
                tags: ['@regression', '@positive']
            },
            {
                name: 'All',
                searchText: ['Next.js', 'Svelte', 'Angular', 'React', 'Vue.js'],
                removeOption: ['Svelte'],
                tags: ['@regression', '@positive']
            }
        ];

        removeSearchScenarios.forEach(data => {
            test(`${data.name}`, {
                    tag: data.tags
            }, async ({ multiSelectPage }) => {
                // Search and Select option
                await multiSelectPage.searchAndSelectOptions(
                    data.searchText
                );
                // Remove selected option
                await multiSelectPage.searchAndSelectOptions(
                    data.removeOption
                );
                // Validate text
                await MultiSelectAssertions.validateRemoved(
                    multiSelectPage,
                    'msSearchable',
                    data.removeOption
                );
            });
        });
    });
});