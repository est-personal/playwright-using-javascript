// Arrange Alphabetically
// Keywords for QA Playground - Dropdowns Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { DropdownsLocators } = require('../locators/DropdownsLocators');
const { DropdownsData } = require('../testData/DropdownsData');
const { BasePage } = require('./BasePage');

class DropdownsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickCustomPriorityDropdown() {
        const dropdown = this.page.locator(
            DropdownsLocators.customPriorityDropdown
        );
        await dropdown.scrollIntoViewIfNeeded();
        await dropdown.click();
    }

    async clickSearchCityDropdown() {
        const dropdown = this.page.locator(
            DropdownsLocators.searchCityDropdown
        );
        await dropdown.scrollIntoViewIfNeeded();
        await dropdown.click();
    }

    async clickSelectLastButton() {
        await this.click(
            DropdownsLocators.selectLastButton
        )
    }

    async updateSelectedHeroes(heroes) {
        await this.page.locator(
            DropdownsLocators.multiSelectHeroesMultiSelect
        )
        .selectOption(
            heroes.map(
                hero => ({
                    label: hero
                })
            )
        )
    }

    async getCityPlaceholderAttribute() {
        return await this.page
            .locator(DropdownsLocators.searchCityDropdown)
            .getAttribute('placeholder');
    }

    async getCustomPriorityOptions() {
        await this.clickCustomPriorityDropdown();
        const options = this.page.locator(
            '[data-priority-id] span:first-child'
        );
        await options.first().waitFor();
        return await options.allTextContents();
    }

    async getMultiSelectHeroesOptions() {
        return await this.getMultiSelectHeroesMultiSelect()
            .locator('option')
            .allTextContents();
    }

    async getSearchableCityOptions() {
        await this.clickSearchCityDropdown();
        const options = this.page.locator(
            '[data-city-id]'
        );
        await options.first().waitFor();
        return await options.allTextContents();
    }

    async getSelectCountryOptions() {
        return await this.getSelectCountryDropdown()
            .locator('option')
            .allTextContents();
    }

    async getSelectedCountry() {
        return this.getSelectedOptionText(
            DropdownsLocators.selectCountryDropdown
        );
    }

    async getSelectedFruit() {
        return this.getSelectedOptionText(
            DropdownsLocators.selectFruitDropdown
        );
    }

    async getSelectedHeroes() {
        return await this
            .getMultiSelectHeroesMultiSelect()
            .evaluate(select =>
                Array.from(select.selectedOptions)
                    .map(option => option.text)
            );
    }

    async getSelectedLanguage() {
        return this.getSelectedOptionText(
            DropdownsLocators.selectLanguageDropdown
        );
    }

    async getSelectedPriority() {
        return await this
            .getCustomPriorityDropdown()
            .textContent();
    }

    async getSelectFruitOptions() {
        return await this.getSelectFruitDropdown()
            .locator('option')
            .allTextContents();
    }

    async getSelectLanguageOptions() {
        return await this.getSelectLanguageDropdown()
            .locator('option')
            .allTextContents();
    }

    async navigateToDropdowns() {
        await this.navigate(
            QaPlaygroundUrls.dropdownsPage
        );
    }

    async selectCity(city) {
        await this.getSearchCityDropdown().click();
        await this.page.waitForTimeout(500);
        await this.getSearchCityDropdown().fill(city);
        const option = this.page.getByRole('option', {
            name: new RegExp(city, 'i')
        })
        .or(
            this.page.locator(
                `[data-city-value="${city.toLowerCase()}"]`
            )
        );
        await option.waitFor({
            state: 'visible'
        });
        await option.click();
    }

    async selectCountry(country) {
        await this.selectByValue(
            DropdownsLocators.selectCountryDropdown,
            country
        );
    }

    async selectFruit(fruit) {
        await this.selectByLabel(
            DropdownsLocators.selectFruitDropdown,
            fruit
        );
    }

    async selectHeroes(heroes) {
        await this.page.locator(
            DropdownsLocators.multiSelectHeroesMultiSelect
        )
        .selectOption(
            heroes.map(
                hero => ({
                    label: hero
                })
            )
        )
    }

    async selectLanguage(language) {
        await this.selectByLabel(
            DropdownsLocators.selectLanguageDropdown,
            language
        );
    }

    async selectPriority(priority) {
        await this.page.locator(
            DropdownsLocators.customPriorityDropdown
        )
        .click();
        await this.page.getByRole(
            'option', {
                name: priority
            })
        .click();
    }

    // Sync
    getCustomPriorityDropdown() {
        return this.page
            .locator(
                DropdownsLocators.customPriorityDropdown
        );
    }

    getCustomPriorityResult() {
        return this.page
            .locator(
                DropdownsLocators.customPriorityResult
        );
    }

    getCustomPrioritySection() {
        return this.page
            .locator(
                DropdownsLocators.customPrioritySection
        );
    }

    getMultiSelectHeroesMultiSelect() {
        return this.page
            .locator(
                DropdownsLocators.multiSelectHeroesMultiSelect
        );
    }

    getMultiSelectHeroesResult() {
        return this.page
            .locator(
                DropdownsLocators.multiSelectHeroesResult
        );
    }

    getMultiSelectHeroesSection() {
        return this.page
            .locator(
                DropdownsLocators.multiSelectHeroesSection
        );
    }

    getPriorityOption(priority) {
        return this.page
            .getByRole('listbox')
            .getByText(priority);
    }

    getSearchCityDropdown() {
        return this.page
            .locator(
                DropdownsLocators.searchCityDropdown
        );
    }

    getSearchCityResult() {
        return this.page
            .locator(
                DropdownsLocators.searchCityResult
        );
    }

    getSearchCitySection() {
        return this.page
            .locator(
                DropdownsLocators.searchCitySection
        );
    }

    getSelectCountryDropdown() {
        return this.page
            .locator(
                DropdownsLocators.selectCountryDropdown
        );
    }

    getSelectCountryResult() {
        return this.page
            .locator(
                DropdownsLocators.selectCountryResult
        );
    }

    getSelectCountrySection() {
        return this.page
            .locator(
                DropdownsLocators.selectCountrySection
        );
    }

    getSelectFruitDropdown() {
        return this.page
            .locator(
                DropdownsLocators.selectFruitDropdown
        );
    }

    getSelectFruitResult() {
        return this.page
            .locator(
                DropdownsLocators.selectFruitResult
        );
    }

    getSelectFruitSection() {
        return this.page
            .locator(
                DropdownsLocators.selectFruitSection
        );
    }

    getSelectLanguageDropdown() {
        return this.page
            .locator(
                DropdownsLocators.selectLanguageDropdown
        );
    }

    getSelectLanguageResult() {
        return this.page
            .locator(
                DropdownsLocators.selectLanguageResult
        );
    }

    getSelectLanguageSection() {
        return this.page
            .locator(
                DropdownsLocators.selectLanguageSection
        );
    }
    
}

module.exports = { DropdownsPage };