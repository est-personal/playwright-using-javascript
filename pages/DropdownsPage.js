// Arrange Alphabetically
// Keywords for QA Playground - Dropdowns Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { DropdownsLocators } = require('../locators/DropdownsLocators');
const { BasePage } = require('./BasePage');

class DropdownsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickDropdown(type) {
        const dropdowns = {
            priority:
                DropdownsLocators.customPriorityDropdown,
            city:
                DropdownsLocators.searchCityDropdown
        };
        const dropdown =
            this.page.locator(
                dropdowns[type]
            );
        await dropdown.scrollIntoViewIfNeeded();
        await dropdown.click();
    }

    async clickSelectLastButton() {
        await this.click(
            DropdownsLocators.selectLastButton
        )
    }

    async getCityPlaceholderAttribute() {
        return await this.page
            .locator(DropdownsLocators.searchCityDropdown)
            .getAttribute('placeholder');
    }

    async getCustomPriorityOptions() {
        await this.clickDropdown(
            'priority'
        );
        const options = this.page.locator(
            '[data-priority-id] span:first-child'
        );
        await options.first().waitFor();
        return await options.allTextContents();
    }

    async getDropdownOptions(type) {
        const dropdowns = {
            country:
                DropdownsLocators.selectCountryDropdown,
            fruit:
                DropdownsLocators.selectFruitDropdown,
            language:
                DropdownsLocators.selectLanguageDropdown
        };
        return await this.page
            .locator(dropdowns[type])
            .locator('option')
            .allTextContents();
    }

    async getMultiSelectHeroesOptions() {
        return await this.getMultiSelectHeroesMultiSelect()
            .locator('option')
            .allTextContents();
    }

    async getSearchableCityOptions() {
        await this.clickDropdown(
            'city'
        );
        const options = this.page.locator(
            '[data-city-id]'
        );
        await options.first().waitFor();
        return await options.allTextContents();
    }

    async getSelectedDropdownValue(type) {
        const dropdowns = {
            country:
                DropdownsLocators.selectCountryDropdown,

            fruit:
                DropdownsLocators.selectFruitDropdown,

            language:
                DropdownsLocators.selectLanguageDropdown
        };
        return await this.getSelectedOptionText(
            dropdowns[type]
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

    async getSelectedPriority() {
        return await this
            .getDropdown('priority')
            .textContent();
    }

    async navigateToDropdowns() {
        await this.navigate(
            QaPlaygroundUrls.dropdownsPage
        );
    }

    async selectCity(city) {
        await this.getDropdown('city').click();
        await this.page.waitForTimeout(500);
        await this.getDropdown('city').fill(city);
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

    async selectDropdown(type, value) {
        const dropdown = {
            country: () =>
                this.selectByValue(
                    DropdownsLocators.selectCountryDropdown,
                    value
                ),
            fruit: () =>
                this.selectByLabel(
                    DropdownsLocators.selectFruitDropdown,
                    value
                ),
            language: () =>
                this.selectByLabel(
                    DropdownsLocators.selectLanguageDropdown,
                    value
                )
        };
        await dropdown[type]();
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
    getDropdown(type) {
        const dropdowns = {
            city: DropdownsLocators.searchCityDropdown,
            country: DropdownsLocators.selectCountryDropdown,
            fruit: DropdownsLocators.selectFruitDropdown,
            heroes: DropdownsLocators.multiSelectHeroesMultiSelect,
            language: DropdownsLocators.selectLanguageDropdown,
            priority: DropdownsLocators.customPriorityDropdown
        };
        return this.page.locator(
            dropdowns[type]
        );
    }

    getMultiSelectHeroesMultiSelect() {
        return this.page
            .locator(
                DropdownsLocators.multiSelectHeroesMultiSelect
        );
    }

    getPriorityOption(priority) {
        return this.page
            .getByRole('listbox')
            .getByText(priority);
    }

    getResult(type) {
        const results = {
            country:
                DropdownsLocators.selectCountryResult,
            fruit:
                DropdownsLocators.selectFruitResult,
            language:
                DropdownsLocators.selectLanguageResult,
            heroes:
                DropdownsLocators.multiSelectHeroesResult,
            city:
                DropdownsLocators.searchCityResult,
            priority:
                DropdownsLocators.customPriorityResult
        };
        return this.page.locator(
            results[type]
        );
    }

    getSection(type) {
        const sections = {
            country:
                DropdownsLocators.selectCountrySection,
            fruit:
                DropdownsLocators.selectFruitSection,
            language:
                DropdownsLocators.selectLanguageSection,
            heroes:
                DropdownsLocators.multiSelectHeroesSection,
            city:
                DropdownsLocators.searchCitySection,
            priority:
                DropdownsLocators.customPrioritySection
        };
        return this.page.locator(
            sections[type]
        );
    }
}

module.exports = { DropdownsPage };