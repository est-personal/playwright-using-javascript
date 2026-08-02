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

});