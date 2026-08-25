// Arrange Alphabetically
// Keywords for QA Playground - Radio and Checkbox Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { RadioAndCheckboxLocators } = require('../locators/RadioAndCheckboxLocators');
const { BasePage } = require('./BasePage');

const { 
    getPermissionName 
} = require('../helpers/RadioAndCheckboxActions');

class RadioAndCheckboxPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async checkRcAssertStateSubscribeNewsletter() {
        await this.check(
            RadioAndCheckboxLocators.rcAssertStateSubscribeNewsletter
        );
    }

    async checkRcBasicCheckboxAcceptTerms() {
        await this.check(
            RadioAndCheckboxLocators.rcBasicCheckboxAcceptTerms
        );
    }

    async checkRcCheckboxGroupOptionCypress() {
        await this.check(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionCypress
        );
    }

    async checkRcCheckboxGroupOptionPlaywright() {
        await this.check(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionPlaywright
        );
    }

    async checkRcCheckboxGroup(option) {
        await this.page
            .getByLabel(option.toLowerCase())
            // ${option.toLowerCase()}
            .check();  
    }

    async checkRcCheckboxGroupOptionSelenium() {
        await this.check(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionSelenium
        );
    }

    async checkRcCheckboxGroupOptionWebdriverIo() {
        await this.check(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionWebdriverIo
        );
    }

    async checkRcDynamic(option) {
        await this.page
            .locator(`[name="${getPermissionName(option)}"]`)
            .check();
    }

    async checkRcDynamicOptionDeleteAll() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionDeleteAll
        );
    }

    async checkRcDynamicOptionReadBilling() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionReadBilling
        );
    }

    async checkRcDynamicOptionReadReports() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionReadReports
        );
    }

    async checkRcDynamicOptionReadUsers() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionReadUsers
        );
    }

    async checkRcDynamicOptionWriteReports() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionWriteReports
        );
    }

    async checkRcDynamicOptionWriteUsers() {
        await this.check(
            RadioAndCheckboxLocators.rcDynamicOptionWriteUsers
        );
    }

    async checkRcSiblingCheckbox(label) {
        await this.check(
            this.getRcSiblingCheckbox(label)
        );
    }

    async checkRcSiblingOptionMarketingEmails() {
        await this.check(
            RadioAndCheckboxLocators.rcSiblingOptionMarketingEmails
        );
    }

    async checkRcSiblingOptionSmsAlerts() {
        await this.check(
            RadioAndCheckboxLocators.rcSiblingOptionSmsAlerts
        );
    }

    async checkRcSiblingOptionWeeklyDigest() {
        await this.check(
            RadioAndCheckboxLocators.rcSiblingOptionWeeklyDigest
        );
    }

    async clickRcDisabledAssertDisabledStateButton() {
        await this.click(
            RadioAndCheckboxLocators.rcDisabledAssertDisabledStateButton
        );
    }

    async getRcAssertStateLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcAssertStateOptionLabel
        );
    }

    async getRcAssertStateResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcAssertStateResult
        );
    }

    async getRcBasicCheckboxLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcBasicCheckboxOptionLabel
        );
    }

    async getRcBasicCheckboxResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcBasicCheckboxResult
        );
    }

    async getRcCardsLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcCardsOptionLabel
        );
    }

    async getRcPlanPriceText(plan) {
        return await this.getRcPlanPrice(plan)
            .textContent();
    }

    async getRcCardsResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcCardsResult
        );
    }

    async getRcCheckboxGroupLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionLabel
        );
    }

    async getRcCheckboxGroupResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcCheckboxGroupResult
        );
    }

    async getRcDisabledLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcDisabledOptionLabel
        );
    }

    async getRcDisabledResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcDisabledResult
        );
    }

    async getRcDynamicLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcDynamicOptionLabel
        );
    }

    async getRcDynamicResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcDynamicResult
        );
    }

    async getRcRadioGroupLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcRadioGroupOptionLabel
        );
    }

    async getRcRadioGroupResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcRadioGroupResult
        );
    }

    async getRcSiblingLabel() {
        return await this.getTexts(
            RadioAndCheckboxLocators.rcSiblingOptionLabel
        );
    }

    async getRcSiblingResult() {
        return await this.getText(
            RadioAndCheckboxLocators.rcSiblingResult
        );
    }

    async isRcAssertStateSubscribeNewsletterChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcAssertStateSubscribeNewsletter
        );
    }

    async isRcBasicCheckboxAcceptTermsChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcBasicCheckboxAcceptTerms
        );
    }

    async isRcCardsPlanOptionChecked(option) {
        return await this.page
            .locator(`[data-plan="${option.toLowerCase()}"]`)
            .getByRole('radio')
            .isChecked();
    }

    async isRcCardsPlanOptionEnterpriseChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCardsPlanOptionEnterprise
        );
    }

    async isRcCardsPlanOptionProChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCardsPlanOptionPro
        );
    }

    async isRcCardsPlanOptionStarterChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCardsPlanOptionStarter
        );
    }

    async isRcCheckboxGroupChecked(option) {
        return await this.page
            .getByLabel(option)
            .isChecked();
    }

    async isRcCheckboxGroupOptionCypressChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionCypress
        );
    }

    async isRcCheckboxGroupOptionPlaywrightChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionPlaywright
        );
    }

    async isRcCheckboxGroupOptionSeleniumChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionSelenium
        );
    }

    async isRcCheckboxGroupOptionWebdriverIoChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcCheckboxGroupOptionWebdriverIo
        );
    }

    async isRcDisabledCheckboxDisabled() {
        return await this.isDisabled(
            RadioAndCheckboxLocators.rcDisabledCheckbox
        );
    }

    async isRcDisabledRadioDisabled() {
        return await this.isDisabled(
            RadioAndCheckboxLocators.rcDisabledRadio
        );
    }

    async isRcDynamicChecked(option) {
        return await this.page
            .locator(`[name="${getPermissionName(option)}"]`)
            .isChecked();
    }

    async isRcDynamicOptionDeleteAllChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionDeleteAll
        );
    }

    async isRcDynamicOptionReadBillingChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionReadBilling
        );
    }

    async isRcDynamicOptionReadReportsChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionReadReports
        );
    }

    async isRcDynamicOptionReadUsersChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionReadUsers
        );
    }

    async isRcDynamicOptionWriteReportsChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionWriteReports
        );
    }

    async isRcDynamicOptionWriteUsersChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcDynamicOptionWriteUsers
        );
    }

    async isRcRadioGroupOptionChecked(option) {
        return await this.page
            .getByTestId(`radio-plan-${option.toLowerCase()}`)
            .isChecked();
    }

    async isRcRadioGroupOptionBusinessChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcRadioGroupOptionBusiness
        );
    }

    async isRcRadioGroupOptionProChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcRadioGroupOptionPro
        );
    }

    async isRcRadioGroupOptionStarterChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcRadioGroupOptionStarter
        );
    }

    async isRcSiblingOptionMarketingEmailsChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcSiblingOptionMarketingEmails
        );
    }

    async isRcSiblingOptionSmsAlertsChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcSiblingOptionSmsAlerts
        );
    }

    async isRcSiblingOptionWeeklyDigestChecked() {
        return await this.isChecked(
            RadioAndCheckboxLocators.rcSiblingOptionWeeklyDigest
        );
    }

    async navigateToRadioAndCheckbox() {
        await this.navigate(
            QaPlaygroundUrls.radioAndCheckBoxPage
        );
    }

    async checkRcCardsPlan(option) {
        await this.page
            .locator(`[data-plan="${option.toLowerCase()}"]`)
            .getByRole('radio')
            .check();
    }

    async selectRcCardsPlanOptionEnterprise() {
        await this.check(
            RadioAndCheckboxLocators.rcCardsPlanOptionEnterprise
        );
    }

    async selectRcCardsPlanOptionPro() {
        await this.check(
            RadioAndCheckboxLocators.rcCardsPlanOptionPro
        );
    }

    async selectRcCardsPlanOptionStarter() {
        await this.check(
            RadioAndCheckboxLocators.rcCardsPlanOptionStarter
        );
    }

    async selectRcRadioGroup(option) {
        await this.page
            .getByTestId(`radio-plan-${option.toLowerCase()}`)
            .check();  
    }

    async selectRcRadioGroupOptionBusiness() {
        await this.check(
            RadioAndCheckboxLocators.rcRadioGroupOptionBusiness
        );
    }

    async selectRcRadioGroupOptionPro() {
        await this.check(
            RadioAndCheckboxLocators.rcRadioGroupOptionPro
        );
    }

    async selectRcRadioGroupOptionStarter() {
        await this.check(
            RadioAndCheckboxLocators.rcRadioGroupOptionStarter
        );
    }

    async uncheckRcAssertStateSubscribeNewsletter() {
        await this.uncheck(
            RadioAndCheckboxLocators.rcAssertStateSubscribeNewsletter
        );
    }

    async uncheckRcBasicCheckboxAcceptTerms() {
        await this.uncheck(
            RadioAndCheckboxLocators.rcBasicCheckboxAcceptTerms
        );
    }

    async uncheckRcSiblingCheckbox(label) {
        await this.uncheck(
            this.getRcSiblingCheckbox(label)
        );
    }

    async uncheckRcSiblingOptionMarketingEmails() {
        await this.uncheck(
            RadioAndCheckboxLocators.rcSiblingOptionMarketingEmails
        );
    }

    async uncheckRcSiblingOptionSmsAlerts() {
        await this.uncheck(
            RadioAndCheckboxLocators.rcSiblingOptionSmsAlerts
        );
    }

    async uncheckRcSiblingOptionWeeklyDigest() {
        await this.uncheck(
            RadioAndCheckboxLocators.rcSiblingOptionWeeklyDigest
        );
    }

    // Non-Async
    getRcSiblingCheckbox(label) {
        return `//span[normalize-space()='${label}']/preceding-sibling::input`;
    }

    getRcPlanPrice(plan) {
        return this.page
            .locator(`[data-plan="${plan}"]`)
            .locator('span')
            .nth(1);
    }
}

module.exports = { RadioAndCheckboxPage };