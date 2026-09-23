// Arrange Alphabetically
// Keywords for QA Playground - Multi-Select Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { MultiSelectLocators } = require('../locators/MultiSelectLocators');
const { BasePage } = require('./BasePage');

class MultiSelectPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickButton(section) {
        if (section.includes('msSelectAll')) {
            await this.openDropdown('msSelectAll');
        }
        await this.click(
            this.getButtonsLocator(section)
        );
    }

    async ctrlClickOption(section, option) {
        const modifier =
            process.platform === 'darwin'
                ? 'Meta'
                : 'Control';
        await this.page.keyboard.down(modifier);
        await this.page
            .locator(this.getOptionsLocator(section))
            .locator(`option:text-is("${option}")`)
            .click();
        await this.page.keyboard.up(modifier);
    }

    async getButtonText(section) {
        return await this.getText(
            this.getButtonsLocator(section)
        );
    }

    async getResult(section) {
        return await this.getText(
            this.getResultsLocator(section)
        );
    }

    async getTextResult(section) {
        return await this.getText(
            this.getTextsLocator(section)
        );
    }

    async navigateToMultiSelect() {
        await this.navigate(
            QaPlaygroundUrls.multiSelectPage
        );
    }

    async openDropdown(section) {
        const trigger = this.page.locator(
            this.getTriggersLocator(section)
        );
        const isOpen =
            await trigger.getAttribute('aria-expanded');
        if (isOpen !== 'true') {
            await trigger.click();
        }
    }

    async removeTag(tags) {
        const tagList = Array.isArray(tags)
            ? tags
            : [tags];
        for (const tag of tagList) {
            await this.click(
                this.getButtonTagsValue(tag)
            );
        }
        await this.page.keyboard.press('Escape');
    }

    async searchAndSelectOptions(options) {
        const optionList = Array.isArray(options)
            ? options
            : [options];
        for (const option of optionList) {
            await this.searchOption(option)
            await this.page
                .locator('[role="option"]')
                .first()
                .click();
        }
    }

    async searchOption(value) {
        await this.fill(
            MultiSelectLocators.msSearchable.input,
            value
        );
    }

    async selectCustomOptions(section, options) {
        const optionList = Array.isArray(options)
            ? options
            : [options];
        await this.openDropdown(section)
        for (const option of optionList) {
            await this.click(
                this.getCustomOptionsValue(option)
            );
        }
        await this.page.keyboard.press('Escape');
    }

    async selectOptions(section, options) {
        const locator = this.getOptionsLocator(section);
        const optionList = Array.isArray(options)
            ? options
            : [options];
        await this.page
            .locator(locator)
            .selectOption(
                optionList.map(option => ({
                    label: option
                }))
            );
    }

    // Non-Async
    getButtonsLocator(section) {
        const sections = {
            msDeselect: MultiSelectLocators.msDeselect.button,
            msSelectAll: MultiSelectLocators.msSelectAll.selectAllButton,
            msSelectAllClear: MultiSelectLocators.msSelectAll.clearAllButton,
            msTagRemove: MultiSelectLocators.msTagRemove.button
        };
        return sections[section];
    }

    getButtonTagsValue(tag) {
        return MultiSelectLocators.msTagRemove.removeTagValue(tag);
    }

    getCustomOptionsValue(option) {
        const optionMap = {
            'React': 'react',
            'Vue.js': 'vue',
            'Angular': 'angular',
            'Svelte': 'svelte'
        };
        return MultiSelectLocators.msCustom.optionValue(
            optionMap[option]
        );
    }

    getNoResultsLocator() {
        return this.page.locator(
            MultiSelectLocators.msSearchable.noResult
        );
    }

    getOptionsLocator(section) {
        const sections = {
            msDeselect: MultiSelectLocators.msDeselect.option,
            msMulti: MultiSelectLocators.msMulti.option,
            msSingle: MultiSelectLocators.msSingle.option,
        };
        return sections[section];
    }

    getResultsLocator(section) {
        const sections = {
            msCustom: MultiSelectLocators.msCustom.result,
            msDeselect: MultiSelectLocators.msDeselect.result,
            msGrouped: MultiSelectLocators.msGrouped.result,
            msMulti: MultiSelectLocators.msMulti.result,
            msSearchable: MultiSelectLocators.msSearchable.result,
            msSelectAll: MultiSelectLocators.msSelectAll.result,
            msSingle: MultiSelectLocators.msSingle.result,
            msTagRemove: MultiSelectLocators.msTagRemove.result
        };
        return sections[section];
    }

    getSearchOption(option) {
        const optionMap = {
            'React': 'react',
            'Vue.js': 'vue',
            'Angular': 'angular',
            'Svelte': 'svelte',
            'Next.js': 'next'
        };
        return this.page.locator(
            MultiSelectLocators.msSearchable.optionValue(optionMap[option])
        );
    }

    getTagsOption(section, tag) {
        const sections = {
            msSearchable: MultiSelectLocators.msSearchable.tag(tag),
            msTagRemove: MultiSelectLocators.msTagRemove.tag(tag)
        };
        return this.page.locator(sections[section]);
    }

    getTextsLocator(section) {
        const sections = {
            msCustom: MultiSelectLocators.msCustom.text,
            msSelectAll: MultiSelectLocators.msSelectAll.text,
        };
        return sections[section];
    }

    getTriggersLocator(section) {
        const sections = {
            msCustom: MultiSelectLocators.msCustom.trigger,
            msSelectAll: MultiSelectLocators.msSelectAll.trigger,
        };
        return sections[section];
    }
}

module.exports = { MultiSelectPage };