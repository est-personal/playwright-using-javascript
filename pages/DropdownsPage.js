// Arrange Alphabetically
// Keywords for QA Playground - Dropdowns Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { DropdownsLocators } = require('../locators/DropdownsLocators');
const { DropdownsData } = require('../testData/DropdownsData');
const { BasePage } = require('./BasePage');

class DropdownsPage {

    constructor(page) {
        this.page = page;
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
        await this.page.locator(
            DropdownsLocators.selectLastButton
        )
        .click();
    }

    async deselectHeroes(heroes) {
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
        return await this
            .getSelectCountryDropdown()
            .locator('option:checked')
            .textContent();
    }

    async getSelectedFruit() {
        return await this
            .getSelectFruitDropdown()
            .locator('option:checked')
            .textContent();
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
        return await this
            .getSelectLanguageDropdown()
            .locator('option:checked')
            .textContent();
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
        await this.page.goto(
            QaPlaygroundUrls.dropdownsPage,
            {
                waitUntil: 'domcontentloaded'
            }
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
        await this.page
            .locator(DropdownsLocators.selectCountryDropdown)
            .selectOption({
                value: country
            });
        // const dropdown = this.page.locator(
        //     DropdownsLocators.selectCountryDropdown
        // );
        // await dropdown.selectOption({ 
        //     value: country 
        // });
        // await dropdown.dispatchEvent('change');
    }

    async selectFruit(fruit) {
        const dropdown = this.page.locator(
            DropdownsLocators.selectFruitDropdown
        );
        await dropdown.selectOption({ 
            label: fruit 
        });
        await dropdown.dispatchEvent('change');
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
        await this.page
            .locator(DropdownsLocators.selectLanguageDropdown)
            .selectOption({
                label: language
            })
        // const dropdown = this.page.locator(
        //     DropdownsLocators.selectLanguageDropdown
        // );
        // await dropdown.selectOption({ 
        //     label: language 
        // });
        // await dropdown.dispatchEvent('change');
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