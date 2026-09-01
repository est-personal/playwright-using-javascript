const {test, expect} = require('../../fixtures/Pages.fixture');
const { DropdownsData } = require('../../testData/DropdownsData');

test.describe('QA Playground - Dropdowns Tests', () => {

    test.describe('Fruit Dropdown', () => {
        test('Select Fruit', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Select Fruit section to be visible
            // await expect(
            //     dropdownsPage.getDropdownOptions(
            //         'fruit'
            //     )
            // ).toBeVisible();
            // Select option from Select Fruit dropdown
            await dropdownsPage.selectDropdown(
                'fruit',
                DropdownsData.input.fruit
            );
            // Retrieve selected fruit
            const selectedFruit = 
                await dropdownsPage.getSelectedDropdownValue(
                    'fruit'
                );
            expect(selectedFruit).toBe(
                DropdownsData.input.fruit
            );
            // Validate text is reflected in Select Fruit result
            await expect(
                dropdownsPage.getResult(
                    'fruit'
                )
            ).toHaveText(
                `${DropdownsData.result.selectedFruit}${DropdownsData.input.fruit}`
            );
        });

    });

    test.describe('Country Dropdown', () => {
        test('Select Country', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Select Country section to be visible
            // await expect(
            //     dropdownsPage.getDropdownOptions(
            //         'country'
            //     )
            // ).toBeVisible();
            // Select option from Select Country dropdown
            await dropdownsPage.selectDropdown(
                'country',
                DropdownsData.valueAttribute.country.argentina
            );
            // Retrieve selected country
            const selectedCountry = 
                await dropdownsPage.getSelectedDropdownValue(
                    'country'
                );
            expect(selectedCountry).toBe(
                DropdownsData.input.country.argentina
            );
            // Validate text is reflected in Select Country result
            const expectedResult =
                `${DropdownsData.result.selectedCountry}${DropdownsData.input.country.argentina} (${DropdownsData.valueAttribute.country.argentina})`;
            await expect(
                dropdownsPage.getResult(
                    'country'
                )
            ).toHaveText(expectedResult);
        });

    });

    test.describe('Language Dropdown', () => {
        test('Select Language', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Select Language section to be visible
            // await expect(
            //     dropdownsPage.getDropdownOptions(
            //         'language'
            //     )
            // ).toBeVisible();
            // Select option from Select Language dropdown
            await dropdownsPage.selectDropdown(
                'language',
                DropdownsData.input.language.javaScript
            );
            // Retrieve selected language
            const selectedLanguage = 
                await dropdownsPage.getSelectedDropdownValue(
                    'language'
                );
            expect(selectedLanguage).toBe(
                DropdownsData.input.language.javaScript
            );
            // Validate text is reflected in Select Language result
            const expectedResult =
                `${DropdownsData.result.selectedLanguage}${DropdownsData.input.language.javaScript}`;
            await expect(
                dropdownsPage.getResult(
                    'language'
                )
            ).toHaveText(expectedResult);
        });

        test('Click Select Last', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ dropdownsPage }) => {
            // // Wait for Select Language section to be visible
            // await expect(
            //     dropdownsPage.getSection(
            //         'langauge'
            //     )
            // ).toBeVisible();
            // Click Select Last button
            await dropdownsPage.clickSelectLastButton();
            // Retrieve selected language
            const selectedLanguage = 
                await dropdownsPage.getSelectedDropdownValue(
                    'language'
                );
            expect(selectedLanguage).toBe(
                DropdownsData.input.language.typeScript
            );
            // Validate text is reflected in Select Language result
            await expect(
                dropdownsPage.getResult(
                    'language'
                )
            ).toHaveText(
                DropdownsData.result.selectLanguageAllResult
            );
        });

    });

    test.describe('Heroes Multi-Select', () => {
        test('Select Heroes', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async ({ dropdownsPage }) => {
        // // Wait for Multi-Select Heroes section to be visible
        // await expect(
        //     dropdownsPage.getSection(
        //         'heroes'
        //     )
        // ).toBeVisible();
        // Select option from Multi-Select Heroes dropdown
        await dropdownsPage.selectHeroes(
            DropdownsData.input.heroes
        );
        // Retrieve selected heroes
        const selectedHeroes = 
            await dropdownsPage.getSelectedHeroes();
        // Validate selected Heroes
        expect(selectedHeroes).toHaveLength(
            DropdownsData.input.heroesCount
        );
        // Validate text is reflected in Multi-Select Heroes result
        await expect(
            dropdownsPage.getResult(
                'heroes'
            )
        ).toHaveText(
            DropdownsData.result.multiSelectHeroesResult
        );
    });

    test('Deselect Heroes', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Multi-Select Heroes section to be visible
            // await expect(
            //     dropdownsPage.getSection(
            //         'heroes'
            //     )
            // ).toBeVisible();
            // Select option from Multi-Select Heroes dropdown
            await dropdownsPage.selectHeroes(
                DropdownsData.input.heroes
            );
            // Validate text is reflected in Multi-Select Heroes result
            await expect(
                dropdownsPage.getResult(
                    'heroes'
                )
            ).toHaveText(
                DropdownsData.result.multiSelectHeroesResult
            );
            // Deselect option from Multi-Select Heroes dropdown
            await dropdownsPage.selectHeroes(
                DropdownsData.input.remainingHeroes
            );
            // Retrieve selected heroes
            const selectedHeroes = 
                await dropdownsPage.getSelectedHeroes();
            // Validate selected Heroes
            expect(selectedHeroes).toHaveLength(
                DropdownsData.input.remainingHeroes.length
            );
            // Validate hero removed
            DropdownsData.input.removedHeroes.forEach(hero => {
                expect(selectedHeroes).not.toContain(hero);
            });
            // Validate text is reflected in Multi-Select Heroes result
            await expect(
                dropdownsPage.getResult(
                    'heroes'
                )
            ).toHaveText(
                DropdownsData.result.selectedHeroes +
                    DropdownsData.input.remainingHeroes.join(', ')
            );
        });

    });

    test.describe('Custom Priority', () => {
        test('Select Priority', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Custom Priority section to be visible
            // await expect(
            //     dropdownsPage.getSection(
            //         'priority'
            //     )
            // ).toBeVisible();
            // Select option from Custom Priority dropdown
            await dropdownsPage.selectPriority(
                DropdownsData.input.priority.highPriority
            );
            // Retrieve selected custom priority
            const selectedPriority = 
                await dropdownsPage.getSelectedPriority();
            expect(selectedPriority).toBe(
                DropdownsData.input.priority.highPriority
            );
            // Validate text is reflected in Custom Priority result
            const expectedResult =
                `${DropdownsData.result.prioritySelected}${DropdownsData.input.priority.highPriority}`;
            await expect(
                dropdownsPage.getResult(
                    'priority'
                )
            ).toHaveText(expectedResult);
        });

        test('Select Priority via getter', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ dropdownsPage }) => {
            // // Wait for Custom Priority section to be visible
            // await expect(
            //     dropdownsPage.getSection(
            //         'priority'
            //     )
            // ).toBeVisible();
            // Select option from Custom Priority dropdown
            await dropdownsPage.getDropdown('priority').click();
            await dropdownsPage.getPriorityOption(
                DropdownsData.input.priority.mediumPriority
            ).click();
            // Retrieve selected custom priority
            const selectedPriority = 
                await dropdownsPage.getSelectedPriority();
            expect(selectedPriority).toBe(
                DropdownsData.input.priority.mediumPriority
            );
            // Validate text is reflected in Custom Priority result
            const expectedResult =
                `${DropdownsData.result.prioritySelected}${DropdownsData.input.priority.mediumPriority}`;
            await expect(
                dropdownsPage.getResult(
                    'priority'
                )
            ).toHaveText(expectedResult);
        });

    });

    test.describe('Searchable City', () => {
        test('Select City', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ dropdownsPage }) => {
            // // Wait for Select City section to be visible
            // await expect(
            //     dropdownsPage.getSection(
            //         'city'
            //     )
            // ).toBeVisible();
            // Select option from Select City dropdown
            await dropdownsPage.selectCity(
                DropdownsData.input.city.pune
            );
            // Validate text is reflected in Select City result
            const expectedResult =
                `${DropdownsData.result.citySelected}${DropdownsData.input.city.pune} (${DropdownsData.valueAttribute.city.pune})`;
            await expect(
                dropdownsPage.getResult(
                    'city'
                )
            ).toHaveText(expectedResult);
        });

    });
});