// Arrange Alphabetically
// Locators for QA Playground - Radio and CheckBox Page
const RadioAndCheckboxLocators = {
    rcAssertStateResult: 
        '[data-testid="result-s04"]',
    rcAssertStateSection: 
        '[data-testid="scenario-rc-assert-state"]',
    rcAssertStateSubscribeNewsletter: 
        '[data-testid="chk-newsletter"]',
    rcAssertStateOptionLabel: 
        '[data-testid="chk-newsletter"] + span',
    rcBasicCheckboxAcceptTerms: 
        '[data-testid="chk-accept-terms"]',
    rcBasicCheckboxOptionLabel: 
        '[data-testid="chk-accept-terms"] + span',
    rcBasicCheckboxResult: 
        '[data-testid="result-s01"]',
    rcBasicCheckboxSection: 
        '[data-testid="scenario-rc-basic-checkbox"]',
    rcCardsOptionLabel: 
        '[data-testid="plan-cards-list"] label span',
    rcCardsPlanEnterprise: 
        '[data-plan="enterprise"]',
    rcCardsPlanOptionEnterprise: 
        '[data-plan="enterprise"] input',
    rcCardsPlanOptionPro: 
        '[data-plan="pro"] input',
    rcCardsPlanOptionStarter: 
        '[data-plan="starter"] input',
    rcCardsPlanPro: 
        '[data-plan="pro"]',
    rcCardsPlanStarter: 
        '[data-plan="starter"]',
    rcCardsResult: 
        '[data-testid="result-s07"]',
    rcCardsSection: 
        '[data-testid="scenario-rc-cards"]',
    rcCheckboxGroupOptionCypress: 
        '[data-skill="skill-cypress"]',
    rcCheckboxGroupOptionLabel: 
        '[data-testid="rc-skill-group"] label span',
    rcCheckboxGroupOptionPlaywright: 
        '[data-skill="skill-playwright"]',
    rcCheckboxGroupOptionSelenium: 
        '[data-skill="skill-selenium"]',
    rcCheckboxGroupOptionWebdriverIo: 
        '[data-skill="skill-webdriverio"]',
    rcCheckboxGroupResult: 
        '[data-testid="result-s03"]',
    rcCheckboxGroupSection: 
        '[data-testid="scenario-rc-checkbox-group"]',
    rcDisabledAssertDisabledStateButton: 
        '[data-testid="scenario-rc-disabled"] label + button',
    rcDisabledCheckbox: 
        '[data-testid="chk-disabled"]',
    rcDisabledOptionLabel: 
        '[data-testid="scenario-rc-disabled"] label span',
    rcDisabledRadio: 
        '[data-testid="radio-disabled"]',
    rcDisabledResult: 
        '[data-testid="result-s05"]',
    rcDisabledSection: 
        '[data-testid="scenario-rc-disabled"]',
    rcDynamicOptionDeleteAll: 
        '[id="perm_delete_all"]',
    rcDynamicOptionLabel: 
        '[data-testid="rc-permissions-panel"] span',
    rcDynamicOptionReadBilling: 
        '[id="perm_read_billing"]',
    rcDynamicOptionReadReports: 
        '[id="perm_read_reports"]',
    rcDynamicOptionReadUsers: 
        '[id="perm_read_users"]',
    rcDynamicOptionWriteReports: 
        '[id="perm_write_reports"]',
    rcDynamicOptionWriteUsers: 
        '[id="perm_write_users"]',
    rcDynamicResult: 
        '[data-testid="result-s08"]',
    rcDynamicSection: 
        '[data-testid="scenario-rc-dynamic"]',
    rcRadioGroupOptionBusiness: 
        '[data-testid="radio-plan-business"]',
    rcRadioGroupOptionLabel: 
        '[data-testid="radio-plan-group"] span',
    rcRadioGroupOptionPro: 
        '[data-testid="radio-plan-pro"]',
    rcRadioGroupOptionStarter: 
        '[data-testid="radio-plan-starter"]',
    rcRadioGroupResult: 
        '[data-testid="result-s02"]',
    rcRadioGroupSection: 
        '[data-testid="scenario-rc-radio-group"]',
    rcSiblingOptionLabel: 
        '[data-testid="rc-notification-prefs"] span',
    rcSiblingOptionMarketingEmails: 
        '[id="notif_email_marketing"]',
        // '//span[normalize-space()="Marketing emails"]/preceding-sibling::input',
    rcSiblingOptionSmsAlerts: 
        '[id="notif_sms_alerts"]',
        // '//span[normalize-space()="SMS alerts"]/preceding-sibling::input',
    rcSiblingOptionWeeklyDigest: 
        '[id="notif_push_weekly"]',
        // '//span[normalize-space()="Weekly digest"]/preceding-sibling::input',
    rcSiblingResult: 
        '[data-testid="result-s06"]',
    rcSiblingSection: 
        '[data-testid="scenario-rc-sibling"]',
    // generic locator for OptionLabel
    controlLabel: testId =>
        `[data-testid="${testId}"] + span`
};

module.exports = { RadioAndCheckboxLocators };