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
    async clickPreSelectAllButton() {
        await this.click(
            MultiSelectLocators.msDeselect.button
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

    async navigateToMultiSelect() {
        await this.navigate(
            QaPlaygroundUrls.multiSelectPage
        );
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
            // msCustom: MultiSelectLocators.msCustom.result,
            msDeselect: MultiSelectLocators.msDeselect.button,
            // msGrouped: MultiSelectLocators.msGrouped.result,
            // msMulti: MultiSelectLocators.msMulti.result,
            // msSearchable: MultiSelectLocators.msSearchable.result,
            // msSelectAll: MultiSelectLocators.msSelectAll.result,
            // msSingle: MultiSelectLocators.msSingle.result,
            // msTagRemove: MultiSelectLocators.msTagRemove.result
        };
        return sections[section];
    }

    getOptionsLocator(section) {
        const sections = {
            // msCustom: MultiSelectLocators.msCustom.result,
            msDeselect: MultiSelectLocators.msDeselect.option,
            // msGrouped: MultiSelectLocators.msGrouped.result,
            msMulti: MultiSelectLocators.msMulti.option,
            // msSearchable: MultiSelectLocators.msSearchable.result,
            // msSelectAll: MultiSelectLocators.msSelectAll.result,
            msSingle: MultiSelectLocators.msSingle.option,
            // msTagRemove: MultiSelectLocators.msTagRemove.result
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
}

module.exports = { MultiSelectPage };