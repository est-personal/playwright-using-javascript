const { test, expect } = require('@playwright/test');
const { DropdownsPage } = require('../pages/DropdownsPage');
const { DropdownsData } = require('../testData/DropdownsData');

test.describe('QA Playground - Dropdowns Tests', () => {

    let dropdownsPage;

    test.beforeEach(async ({ page }) => {
        dropdownsPage = new DropdownsPage(page);
        await dropdownsPage.navigateToDropdowns();
    });

    test('Select Fruit', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Select Fruit section to be visible
        await expect(
            dropdownsPage.getSelectFruitSection()
        ).toBeVisible();
        // Select option from Select Fruit dropdown
        await dropdownsPage.selectFruit(
            DropdownsData.input.fruit
        );
        await expect(
            dropdownsPage.getSelectFruitDropdown()
        ).toHaveValue(
            DropdownsData.input.fruit.toLowerCase()
        );
        await expect(
            dropdownsPage.getSelectFruitDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.input.fruit
        );
        // Validate text is reflected in Select Fruit result
        await expect(
            dropdownsPage.getSelectFruitResult()
        ).toHaveText(
            DropdownsData.result.selectFruitResult
        );
    });

    test('Select Fruit options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Fruit section to be visible
        await expect(
            dropdownsPage.getSelectFruitSection()
        ).toBeVisible();
        // Get Select Fruit options
        const actualOptions = 
            await dropdownsPage.getSelectFruitOptions();
        console.log(actualOptions);
        // Validate Select Fruit options
        DropdownsData.options.fruit.forEach(option => {
            expect(actualOptions).toContain(option);
        });
    });

    test('Default Value of Scenario Select Fruit', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Fruit section to be visible
        await expect(
            dropdownsPage.getSelectFruitSection()
        ).toBeVisible();
        // Validate Default value to the Select Fruit dropdown
        await expect(
            dropdownsPage.getSelectFruitDropdown()
        ).toHaveValue("");
        await expect(
            dropdownsPage.getSelectFruitDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.defaultValue.selectFruitDropdown
        );
        // Validate Default value to the Select Fruit result
        await expect(
            dropdownsPage.getSelectFruitResult()
        ).toHaveText(
            DropdownsData.defaultValue.selectFruitResult
        );
    });

    test('Select Country', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Select Country section to be visible
        await expect(
            dropdownsPage.getSelectCountrySection()
        ).toBeVisible();
        // Select option from Select Country dropdown
        await dropdownsPage.selectCountry(
            DropdownsData.valueAttribute.country.argentina
        );
        await expect(
            dropdownsPage.getSelectCountryDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.input.country.argentina
        );
        // Validate text is reflected in Select Country result
        await expect(
            dropdownsPage.getSelectCountryResult()
        ).toHaveText(
            DropdownsData.result.selectedCountry + 
                DropdownsData.input.country.argentina + ' (' +
                DropdownsData.valueAttribute.country.argentina + ')'
        );
    });

    test('Select Country options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Country section to be visible
        await expect(
            dropdownsPage.getSelectCountrySection()
        ).toBeVisible();
        // Get Select Country options
        const actualOptions = 
            await dropdownsPage.getSelectCountryOptions();
        console.log(actualOptions);
        // Validate Select Country options
        DropdownsData.options.country.forEach(option => {
            expect(actualOptions).toContain(option);
        });
    });

    test('Default Value of Scenario Select Country', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Country section to be visible
        await expect(
            dropdownsPage.getSelectCountrySection()
        ).toBeVisible();
        // Validate Default value to the Select Country dropdown
        await expect(
            dropdownsPage.getSelectCountryDropdown()
        ).toHaveValue("");
        await expect(
            dropdownsPage.getSelectCountryDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.defaultValue.selectCountryDropdown
        );
        // Validate Default value to the Select Country result
        await expect(
            dropdownsPage.getSelectCountryResult()
        ).toHaveText(
            DropdownsData.defaultValue.selectCountryResult
        );
    });

    test('Select Language', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Select Language section to be visible
        await expect(
            dropdownsPage.getSelectLanguageSection()
        ).toBeVisible();
        // Select option from Select Language dropdown
        await dropdownsPage.selectLanguage(
            DropdownsData.input.language.javaScript
        );
        await expect(
            dropdownsPage.getSelectLanguageDropdown()
        ).toHaveValue(
            DropdownsData.input.language.javaScript.toLowerCase()
        );
        await expect(
            dropdownsPage.getSelectLanguageDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.input.language.javaScript
        );
        // Validate text is reflected in Select Fruit result
        await expect(
            dropdownsPage.getSelectLanguageResult()
        ).toHaveText(
            DropdownsData.result.selectedLanguage + 
                DropdownsData.input.language.javaScript
        );
    });

    test('Click Select Last', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Language section to be visible
        await expect(
            dropdownsPage.getSelectLanguageSection()
        ).toBeVisible();
        // Click Select Last button
        await dropdownsPage.clickSelectLastButton();
        // Validate text is reflected in Select Language dropdown
        await expect(
            dropdownsPage.getSelectLanguageDropdown()
        ).toHaveValue(
            DropdownsData.input.language.typeScript.toLowerCase()
        );
        // Validate text is reflected in Select Language result
        await expect(
            dropdownsPage.getSelectLanguageResult()
        ).toHaveText(
            DropdownsData.result.selectLanguageAllResult
        );
    });

    test('Select Language options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Language section to be visible
        await expect(
            dropdownsPage.getSelectLanguageSection()
        ).toBeVisible();
        // Get Select Language options
        const actualOptions = 
            await dropdownsPage.getSelectLanguageOptions();
        console.log(actualOptions);
        // Validate Select Language options
        DropdownsData.options.language.forEach(option => {
            expect(actualOptions).toContain(option);
        });
    });

    test('Default Value of Scenario Select Language', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select Language section to be visible
        await expect(
            dropdownsPage.getSelectLanguageSection()
        ).toBeVisible();
        // Validate Default value to the Select Language dropdown
        await expect(
            dropdownsPage.getSelectLanguageDropdown()
            .locator('option:checked')
        ).toHaveText(
            DropdownsData.defaultValue.selectLanguageDropdown
        );
        // Validate Default value to the Select Language result
        await expect(
            dropdownsPage.getSelectLanguageResult()
        ).toHaveText(
            DropdownsData.defaultValue.selectLanguageResult
        );
    });

    test('Select Heroes', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Multi-Select Heroes section to be visible
        await expect(
            dropdownsPage.getMultiSelectHeroesSection()
        ).toBeVisible();
        // Select option from Multi-Select Heroes dropdown
        await dropdownsPage.selectHeroes(
            DropdownsData.input.heroes
        );
        // Retrieve selected heroes
        const selectedHeroes = await dropdownsPage
            .getMultiSelectHeroesMultiSelect()
            .evaluate(select =>
                Array.from(select.selectedOptions)
                    .map(option => option.text)
        );
        // Validate selected Heroes
        expect(selectedHeroes).toHaveLength(
            DropdownsData.input.heroesCount
        );
        // Validate text is reflected in Select Fruit result
        await expect(
            dropdownsPage.getMultiSelectHeroesResult()
        ).toHaveText(
            DropdownsData.result.multiSelectHeroesResult
        );
    });

    test('Deselect Heroes', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Multi-Select Heroes section to be visible
        await expect(
            dropdownsPage.getMultiSelectHeroesSection()
        ).toBeVisible();
        // Select option from Multi-Select Heroes dropdown
        await dropdownsPage.selectHeroes(
            DropdownsData.input.heroes
        );
        // Validate text is reflected in Select Fruit result
        await expect(
            dropdownsPage.getMultiSelectHeroesResult()
        ).toHaveText(
            DropdownsData.result.multiSelectHeroesResult
        );
        // Deselect option from Multi-Select Heroes dropdown
        await dropdownsPage.deselectHeroes(
            DropdownsData.input.heroesAfterDeselect
        );
        // Retrieve selected heroes
        const selectedHeroes = await dropdownsPage
            .getMultiSelectHeroesMultiSelect()
            .evaluate(select =>
                Array.from(select.selectedOptions)
                    .map(option => option.text)
        );
        // Validate selected Heroes
        expect(selectedHeroes).toHaveLength(
            DropdownsData.input.heroesAfterDeselect.length
        );
        // Validate hero removed
        DropdownsData.input.deselectedHeroes.forEach(hero => {
            expect(selectedHeroes).not.toContain(hero);
        });
        // Validate text is reflected in Select Fruit result
        await expect(
            dropdownsPage.getMultiSelectHeroesResult()
        ).toHaveText(
            DropdownsData.result.selectedHeroes +
                DropdownsData.input.heroesAfterDeselect.join(', ')
        );
    });

    test('Multi-Select Heroes options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Multi-Select Heroes section to be visible
        await expect(
            dropdownsPage.getMultiSelectHeroesSection()
        ).toBeVisible();
        // Get Multi-Select Heroes options
        const actualOptions = 
            await dropdownsPage.getMultiSelectHeroesOptions();
        console.log(actualOptions);
        // Validate Multi-Select Heroes options
        DropdownsData.options.heroes.forEach(option => {
            expect(actualOptions).toContain(option);
        });
    });

    test('Default Value of Scenario Multi-Select Heroes', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Multi-Select Heroes section to be visible
        await expect(
            dropdownsPage.getMultiSelectHeroesSection()
        ).toBeVisible();
        // Retrieve selected heroes
        const selectedHeroes = await dropdownsPage
            .getMultiSelectHeroesMultiSelect()
            .evaluate(select =>
                Array.from(select.selectedOptions)
                    .map(option => option.text)
        );
        // Validate Default value to the Multi-Select Heroes dropdown
        expect(selectedHeroes).toHaveLength(0);
        // Validate Default value to the Multi-Select Heroes result
        await expect(
            dropdownsPage.getMultiSelectHeroesResult()
        ).toHaveText(
            DropdownsData.defaultValue.multiSelectHeroesResult
        );
    });

    test('Select Priority', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Custom Priority section to be visible
        await expect(
            dropdownsPage.getCustomPrioritySection()
        ).toBeVisible();
        // Select option from Custom Priority dropdown
        await dropdownsPage.selectPriority(
            DropdownsData.input.priority.highPriority
        );
        await expect(
            dropdownsPage.getCustomPriorityDropdown()
        ).toHaveText(
            DropdownsData.input.priority.highPriority
        );
        // Validate text is reflected in Custom Priority result
        await expect(
            dropdownsPage.getCustomPriorityResult()
        ).toHaveText(
            DropdownsData.result.prioritySelected +
                DropdownsData.input.priority.highPriority
        );
    });

    test('Select Priority via getter', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Custom Priority section to be visible
        await expect(
            dropdownsPage.getCustomPrioritySection()
        ).toBeVisible();
        // Select option from Custom Priority dropdown
        await dropdownsPage.getCustomPriorityDropdown().click();
        await dropdownsPage.getPriorityOption(
            DropdownsData.input.priority.mediumPriority
        ).click();
        await expect(
            dropdownsPage.getCustomPriorityDropdown()
        ).toHaveText(
            DropdownsData.input.priority.mediumPriority
        );
        // Validate text is reflected in Custom Priority result
        await expect(
            dropdownsPage.getCustomPriorityResult()
        ).toHaveText(
            DropdownsData.result.prioritySelected +
                DropdownsData.input.priority.mediumPriority
        );
    });

    test('Custom Priority options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Custom Priority section to be visible
        await expect(
            dropdownsPage.getCustomPrioritySection()
        ).toBeVisible();
        // Get Custom Priority options
        const actualOptions = 
            await dropdownsPage.getCustomPriorityOptions();
        console.log(actualOptions);
        // Validate Custom Priority options
        DropdownsData.options.priority.forEach(option => {
            expect(actualOptions).toContain(option);
        });
    });

    test('Default Value of Scenario Custom Priority', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Custom Priority section to be visible
        await expect(
            dropdownsPage.getCustomPrioritySection()
        ).toBeVisible();
        // Validate Default value to the Custom Priority dropdown
        await expect(
            dropdownsPage.getCustomPriorityDropdown()
        ).toHaveText(
            DropdownsData.defaultValue.customPriorityDropdown
        );
        // Validate Default value to the Custom Priority result
        await expect(
            dropdownsPage.getCustomPriorityResult()
        ).toHaveText(
            DropdownsData.defaultValue.customPriorityResult
        );
    });

    test('Select City', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Select City section to be visible
        await expect(
            dropdownsPage.getSearchCitySection()
        ).toBeVisible();
        // Select option from Select City dropdown
        await dropdownsPage.selectCity(
            DropdownsData.input.city.pune
        );
        // Validate text is reflected in Select City result
        await expect(
            dropdownsPage.getSearchCityResult()
        ).toHaveText(
            DropdownsData.result.citySelected +
                DropdownsData.input.city.pune +
                ' (' + DropdownsData.valueAttribute.city.pune + ')'
        );
    });

    test('Select City options', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select City section to be visible
        await expect(
            dropdownsPage.getSearchCitySection()
        ).toBeVisible();
        // Get Select City options
        const actualOptions = 
            await dropdownsPage.getSelectCityOptions();
        console.log(actualOptions);
        // Validate Select City options
        DropdownsData.options.city.forEach(option => {
            expect(
                actualOptions.some(option =>
                    option.startsWith(option)
                )
            ).toBeTruthy();
        });
    });

    test('Default Value of Scenario Select City', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Select City section to be visible
        await expect(
            dropdownsPage.getSearchCitySection()
        ).toBeVisible();
        // Validate Default value to the Select City dropdown
        const placeholder = 
            await dropdownsPage.getCityPlaceholderAttribute();
        expect(placeholder)
            .toBe(DropdownsData.defaultValue.searchCityDropdown
        );
        // Validate Default value to the Select City result
        await expect(
            dropdownsPage.getSearchCityResult()
        ).toHaveText(
            DropdownsData.defaultValue.searchCityResult
        );
    });

});