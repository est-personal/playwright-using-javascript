const {test, expect} = require('../../fixtures/Pages.fixture');
const { RadioAndCheckboxData } = require('../../testData/RadioAndCheckboxData');

test.describe('QA Playground - Radio And Checkbox Tests', () => {

    test.describe('Basic Checkbox', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Accept Terms checkbox
            expect(
                await radioAndCheckboxPage.isRcBasicCheckboxAcceptTermsChecked()
            ).toBeFalsy();
        });

        test('Check Accept Terms', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Check Accept Terms checkbox
            await radioAndCheckboxPage.checkRcBasicCheckboxAcceptTerms();
            // Validate Accept Terms checkbox
            expect(
                await radioAndCheckboxPage.isRcBasicCheckboxAcceptTermsChecked()
            ).toBeTruthy();
            // Validate RC Basic Checkbox result
            expect(
                await radioAndCheckboxPage.getRcBasicCheckboxResult()
            ).toBe(
                RadioAndCheckboxData.result.basicCheckbox.checked
            );
        });

        test('UnCheck Accept Terms If Checked', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Check Accept Terms checkbox
            await radioAndCheckboxPage.checkRcBasicCheckboxAcceptTerms();
            // Validate Accept Terms checkbox
            expect(
                await radioAndCheckboxPage.isRcBasicCheckboxAcceptTermsChecked()
            ).toBeTruthy();
            // Uncheck Accept Terms checkbox
            await radioAndCheckboxPage.uncheckRcBasicCheckboxAcceptTerms();
            // Validate Accept Terms checkbox
            expect(
                await radioAndCheckboxPage.isRcBasicCheckboxAcceptTermsChecked()
            ).toBeFalsy();
            // Validate RC Basic Checkbox result
            expect(
                await radioAndCheckboxPage.getRcBasicCheckboxResult()
            ).toBe(
                RadioAndCheckboxData.result.basicCheckbox.unchecked
            );
        });

    });

    test.describe('Radio Button Group', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Starter radiobutton
            expect(
                await radioAndCheckboxPage.isRcRadioGroupOptionStarterChecked()
            ).toBeFalsy();
            // Validate default value of Pro radiobutton
            expect(
                await radioAndCheckboxPage.isRcRadioGroupOptionProChecked()
            ).toBeFalsy();
            // Validate default value of Business radiobutton
            expect(
                await radioAndCheckboxPage.isRcRadioGroupOptionBusinessChecked()
            ).toBeFalsy();
        });

        const radioGroupScenarios = [
            {
                option: 'Starter',
                expected: RadioAndCheckboxData.result.radioGroup.starter,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                option: 'Pro',
                expected: RadioAndCheckboxData.result.radioGroup.pro,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Business',
                expected: RadioAndCheckboxData.result.radioGroup.business,
                tags: ['@regression', '@positive']
            }
        ];

        radioGroupScenarios.forEach(data => {
            test(`Select ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Select radiobutton
                await radioAndCheckboxPage.selectRcRadioGroup(data.option);
                // Validate radiobutton
                // await radioAndCheckboxPage.isRcRadioGroupOptionChecked(data.option);
                expect(
                    await radioAndCheckboxPage.isRcRadioGroupOptionChecked(data.option)
                ).toBeTruthy();
                // Validate RC Radio Group result
                expect(
                    await radioAndCheckboxPage.getRcRadioGroupResult()
                ).toBe(
                    `${RadioAndCheckboxData.static.selected}${data.expected}`
                );
            });
        });

    });

    test.describe('Checkbox Group', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Playwright checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionPlaywrightChecked()
            ).toBeFalsy();
            // Validate default value of Selenium checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionSeleniumChecked()
            ).toBeFalsy();
            // Validate default value of Cypress checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionCypressChecked()
            ).toBeFalsy();
            // Validate default value of WebdriverIO checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionWebdriverIoChecked()
            ).toBeFalsy();
        });

        const checkboxGroupScenarios = [
            {
                option: 'Playwright',
                expected: RadioAndCheckboxData.result.checkboxGroup.playwright,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                option: 'Selenium',
                expected: RadioAndCheckboxData.result.checkboxGroup.selenium,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Cypress',
                expected: RadioAndCheckboxData.result.checkboxGroup.cypress,
                tags: ['@regression', '@positive']
            },
            {
                option: 'WebdriverIO',
                expected: RadioAndCheckboxData.result.checkboxGroup.webdriverIo,
                tags: ['@regression', '@positive']
            },
        ];

        checkboxGroupScenarios.forEach(data => {
            test(`Select ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Select radiobutton
                await radioAndCheckboxPage.checkRcCheckboxGroup(data.option);
                // Validate radiobutton
                // await radioAndCheckboxPage.isRcCheckboxGroupChecked(data.option);
                expect(
                    await radioAndCheckboxPage.isRcCheckboxGroupChecked()
                ).toBeTruthy();
                // Validate RC Radio Group result
                expect(
                    await radioAndCheckboxPage.getRcCheckboxGroupResult()
                ).toBe(
                    data.expected
                );
            });
        });

        test('Select All', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select all checkbox
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.playwright
            );
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.selenium
            );
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.cypress
            );
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.webdriverIo
            );
            // Validate all checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupChecked(RadioAndCheckboxData.option.checkboxGroup.playwright)
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupChecked(RadioAndCheckboxData.option.checkboxGroup.selenium)
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupChecked(RadioAndCheckboxData.option.checkboxGroup.cypress)
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupChecked(RadioAndCheckboxData.option.checkboxGroup.webdriverIo)
            ).toBeTruthy();
            // Validate RC Checkbox Group result
            expect(
                await radioAndCheckboxPage.getRcCheckboxGroupResult()
            ).toBe(
                RadioAndCheckboxData.result.checkboxGroup.all
            );
        });

        test('Select Only Two', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select only 2 checkbox
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.playwright
            );
            await radioAndCheckboxPage.checkRcCheckboxGroup(
                RadioAndCheckboxData.option.checkboxGroup.cypress
            );
            // Validate checkbox
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionPlaywrightChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionSeleniumChecked()
            ).toBeFalsy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionCypressChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcCheckboxGroupOptionWebdriverIoChecked()
            ).toBeFalsy();
            // Validate RC Checkbox Group result
            expect(
                await radioAndCheckboxPage.getRcCheckboxGroupResult()
            ).toBe(
                `${RadioAndCheckboxData.result.checkboxGroup.playwright}, ${RadioAndCheckboxData.result.checkboxGroup.cypress}`
            );
        });

    });

    test.describe('Assert Checked State', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Subscribe Newsletter checkbox
            expect(
                await radioAndCheckboxPage.isRcAssertStateSubscribeNewsletterChecked()
            ).toBeTruthy(); 
        });

        test('Uncheck Subscribe Newsletter', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Uncheck Subscribe Newsletters checkbox
            await radioAndCheckboxPage.uncheckRcAssertStateSubscribeNewsletter();
            // Validate Subscribe Newsletters checkbox
            expect(
                await radioAndCheckboxPage.isRcAssertStateSubscribeNewsletterChecked()
            ).toBeFalsy();
            // Validate RC Basic Checkbox result
            expect(
                await radioAndCheckboxPage.getRcAssertStateResult()
            ).toBe(
                RadioAndCheckboxData.result.assertState.unchecked
            );
        });

        test('UnCheck Accept Terms If Checked', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Uncheck Subscribe Newsletters checkbox
            await radioAndCheckboxPage.uncheckRcAssertStateSubscribeNewsletter();
            // Validate Subscribe Newsletters checkbox
            expect(
                await radioAndCheckboxPage.isRcAssertStateSubscribeNewsletterChecked()
            ).toBeFalsy();
            // Check Subscribe Newsletters checkbox
            await radioAndCheckboxPage.checkRcAssertStateSubscribeNewsletter();
            // Validate Subscribe Newsletters checkbox
            expect(
                await radioAndCheckboxPage.isRcAssertStateSubscribeNewsletterChecked()
            ).toBeTruthy();
            // Validate RC Basic Checkbox result
            expect(
                await radioAndCheckboxPage.getRcAssertStateResult()
            ).toBe(
                RadioAndCheckboxData.result.assertState.checked
            );
        });

    });

    test.describe('Disabled Controls', () => {
        test('Disabled Checkbox', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate Checkbox disabled
            expect(
                await radioAndCheckboxPage.isRcDisabledCheckboxDisabled()
            ).toBeTruthy(); 
        });

        test('Disabled Radio Button', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate Radiobutton disabled
            expect(
                await radioAndCheckboxPage.isRcDisabledRadioDisabled()
            ).toBeTruthy(); 
        });

        test('Click Assert Disabled State', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Click Assert Disabled State button
            await radioAndCheckboxPage.clickRcDisabledAssertDisabledStateButton();
            // Validate RC Basic Checkbox result
            expect(
                await radioAndCheckboxPage.getRcDisabledResult()
            ).toBe(
                RadioAndCheckboxData.result.disabled
            );
        });

    });

    test.describe('Sibling Located Controls', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Marketing Emails checkbox
            expect(
                await radioAndCheckboxPage.isRcSiblingOptionMarketingEmailsChecked()
            ).toBeFalsy(); 
            // Validate default value of SMS Alerts checkbox
            expect(
                await radioAndCheckboxPage.isRcSiblingOptionSmsAlertsChecked()
            ).toBeFalsy();
            // Validate default value of Marketing Emails checkbox
            expect(
                await radioAndCheckboxPage.isRcSiblingOptionWeeklyDigestChecked()
            ).toBeFalsy();
        });

        const siblingScenarios = [
            {
                option: 'Marketing Emails',
                check: page => page.checkRcSiblingOptionMarketingEmails(),
                uncheck: page => page.uncheckRcSiblingOptionMarketingEmails(),
                validate: page => page.isRcSiblingOptionMarketingEmailsChecked(),
                checkedResult: RadioAndCheckboxData.result.sibling.checkedMarketingEmails,
                uncheckedResult: RadioAndCheckboxData.result.sibling.uncheckedMarketingEmails,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                option: 'SMS Alerts',
                check: page => page.checkRcSiblingOptionSmsAlerts(),
                uncheck: page => page.uncheckRcSiblingOptionSmsAlerts(),
                validate: page => page.isRcSiblingOptionSmsAlertsChecked(),
                checkedResult: RadioAndCheckboxData.result.sibling.checkedSmsAlerts,
                uncheckedResult: RadioAndCheckboxData.result.sibling.uncheckedSmsAlerts,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Weekly Digest',
                check: page => page.checkRcSiblingOptionWeeklyDigest(),
                uncheck: page => page.uncheckRcSiblingOptionWeeklyDigest(),
                validate: page => page.isRcSiblingOptionWeeklyDigestChecked(),
                checkedResult: RadioAndCheckboxData.result.sibling.checkedWeeklyDigest,
                uncheckedResult: RadioAndCheckboxData.result.sibling.uncheckedWeeklyDigest,
                tags: ['@regression', '@positive']
            },
        ];

        siblingScenarios.forEach(data => {
            test(`Check ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Select checkbox
                await data.check(radioAndCheckboxPage)
                // Validate checkbox
                expect(
                    await data.validate(radioAndCheckboxPage)
                ).toBeTruthy();
                // Validate RC Radio Group result
                expect(
                    await radioAndCheckboxPage.getRcSiblingResult()
                ).toBe(
                    data.checkedResult
                );
            });
        });

        siblingScenarios.forEach(data => {
            test(`Uncheck ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Check checkbox
                await data.check(radioAndCheckboxPage)
                // Validate checkbox
                expect(
                    await data.validate(radioAndCheckboxPage)
                ).toBeTruthy();
                // Uncheck checkbox
                await data.uncheck(radioAndCheckboxPage)
                // Validate checkbox
                expect(
                    await data.validate(radioAndCheckboxPage)
                ).toBeFalsy();
                // Validate RC Radio Group result
                expect(
                    await radioAndCheckboxPage.getRcSiblingResult()
                ).toBe(
                    data.uncheckedResult
                );
            });
        });

    });

    test.describe('Scoped Card Controls', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Starter radiobutton
            expect(
                await radioAndCheckboxPage.isRcCardsPlanOptionStarterChecked()
            ).toBeFalsy(); 
            // Validate default value of Pro radiobutton
            expect(
                await radioAndCheckboxPage.isRcCardsPlanOptionProChecked()
            ).toBeFalsy();
            // Validate default value of Enterprise radiobutton
            expect(
                await radioAndCheckboxPage.isRcCardsPlanOptionEnterpriseChecked()
            ).toBeFalsy();
        });

        const cardScenarios = [
            {
                option: 'Starter',
                plan: RadioAndCheckboxData.option.cards.starter,
                price: RadioAndCheckboxData.option.cards.price.starter,
                expected: RadioAndCheckboxData.result.cards.starter,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                option: 'Pro',
                plan: RadioAndCheckboxData.option.cards.pro,
                price: RadioAndCheckboxData.option.cards.price.pro,
                expected: RadioAndCheckboxData.result.cards.pro,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Enterprise',
                plan: RadioAndCheckboxData.option.cards.enterprise,
                price: RadioAndCheckboxData.option.cards.price.enterprise,
                expected: RadioAndCheckboxData.result.cards.enterprise,
                tags: ['@regression', '@positive']
            },
        ];

        cardScenarios.forEach(data => {
            test(`Select ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Validate Price
                expect(
                    await radioAndCheckboxPage.getRcPlanPriceText(data.plan)
                ).toBe(
                    data.price
                );
                // Select radiobutton
                await radioAndCheckboxPage.checkRcCardsPlan(
                    data.plan
                );
                // Validate radiobutton
                expect(
                    await radioAndCheckboxPage.isRcCardsPlanOptionChecked(data.plan)
                ).toBeTruthy();
                // Validate RC Radio Group result
                expect(
                    await radioAndCheckboxPage.getRcCardsResult()
                ).toBe(
                    `${RadioAndCheckboxData.static.selectedPlan}${data.expected}`
                );
            });
        });
    });

    test.describe('Dynamic Checkbox List', () => {
        test('Default Value', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Validate default value of Read Users checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadUsersChecked()
            ).toBeFalsy(); 
            // Validate default value of Write Users checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteUsersChecked()
            ).toBeFalsy();
            // Validate default value of Read Reports checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadReportsChecked()
            ).toBeFalsy();
            // Validate default value of Write Reports checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteReportsChecked()
            ).toBeFalsy();
            // Validate default value of Read Billing checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadBillingChecked()
            ).toBeFalsy();
            // Validate default value of Delete All checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionDeleteAllChecked()
            ).toBeFalsy();
        });

        const dynamicScenarios = [
            {
                option: 'Read Users',
                expected: RadioAndCheckboxData.result.dynamic.readUsers,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                option: 'Write Users',
                expected: RadioAndCheckboxData.result.dynamic.writeOrDelete,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Read Reports',
                expected: RadioAndCheckboxData.result.dynamic.readReports,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Write Reports',
                expected: RadioAndCheckboxData.result.dynamic.writeOrDelete,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Read Billing',
                expected: RadioAndCheckboxData.result.dynamic.readBilling,
                tags: ['@regression', '@positive']
            },
            {
                option: 'Delete All',
                expected: RadioAndCheckboxData.result.dynamic.writeOrDelete,
                tags: ['@regression', '@positive']
            },
        ];

        dynamicScenarios.forEach(data => {
            test(`Select ${data.option}`,{
                    tag: data.tags
            }, async ({ radioAndCheckboxPage }) => {
                // Select checkbox
                await radioAndCheckboxPage.checkRcDynamic(
                    data.option
                );
                // Validate checkbox
                expect(
                    await radioAndCheckboxPage.isRcDynamicChecked(data.option)
                ).toBeTruthy();
                // Validate RC Dynamic result
                expect(
                    await radioAndCheckboxPage.getRcDynamicResult()
                ).toBe(
                    data.option.includes('Read')
                    ? `${RadioAndCheckboxData.static.readPerms}${data.expected}`
                    : data.expected
                );
            });
        });

        test('Select All Read Options', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select all checkbox with 'Read'
            await radioAndCheckboxPage.checkRcDynamicOptionReadUsers();
            await radioAndCheckboxPage.checkRcDynamicOptionReadReports();
            await radioAndCheckboxPage.checkRcDynamicOptionReadBilling();
            // Validate checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadUsersChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadReportsChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadBillingChecked()
            ).toBeTruthy();
            // Validate RC Dynamic result
            expect(
                await radioAndCheckboxPage.getRcDynamicResult()
            ).toBe(
                `${RadioAndCheckboxData.static.readPerms}${RadioAndCheckboxData.result.dynamic.allRead}`
            );
        });

        test('Select All Options', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select all checkbox
            await radioAndCheckboxPage.checkRcDynamicOptionReadUsers();
            await radioAndCheckboxPage.checkRcDynamicOptionReadReports();
            await radioAndCheckboxPage.checkRcDynamicOptionReadBilling();
            await radioAndCheckboxPage.checkRcDynamicOptionWriteUsers();
            await radioAndCheckboxPage.checkRcDynamicOptionWriteReports();
            await radioAndCheckboxPage.checkRcDynamicOptionDeleteAll();
            // Validate checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadUsersChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteUsersChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadReportsChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteReportsChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadBillingChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionDeleteAllChecked()
            ).toBeTruthy();
            // Validate RC Dynamic result
            expect(
                await radioAndCheckboxPage.getRcDynamicResult()
            ).toBe(
                `${RadioAndCheckboxData.static.readPerms}${RadioAndCheckboxData.result.dynamic.allRead}`
            );
        });

        test('Select All Write Options', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select all checkbox with 'Write'
            await radioAndCheckboxPage.checkRcDynamicOptionWriteUsers();
            await radioAndCheckboxPage.checkRcDynamicOptionWriteReports();
            await radioAndCheckboxPage.checkRcDynamicOptionDeleteAll();
            // Validate checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteUsersChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionWriteReportsChecked()
            ).toBeTruthy();
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionDeleteAllChecked()
            ).toBeTruthy();
            // Validate RC Dynamic result
            expect(
                await radioAndCheckboxPage.getRcDynamicResult()
            ).toBe(
                RadioAndCheckboxData.result.dynamic.writeOrDelete
            );
        });

        test('Select Combination Of Read And Write Options', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ radioAndCheckboxPage }) => {
            // Select all checkbox
            await radioAndCheckboxPage.checkRcDynamicOptionReadUsers();
            await radioAndCheckboxPage.checkRcDynamicOptionWriteReports();
            await radioAndCheckboxPage.checkRcDynamicOptionDeleteAll();
            // Validate checkbox
            expect(
                await radioAndCheckboxPage.isRcDynamicOptionReadUsersChecked()
            ).toBeTruthy();
            // Validate RC Dynamic result
            expect(
                await radioAndCheckboxPage.getRcDynamicResult()
            ).toBe(
                `${RadioAndCheckboxData.static.readPerms}${RadioAndCheckboxData.result.dynamic.readUsers}`
            );
        });

    });
});
