const { test, expect } = require('@playwright/test');
const { FormsPage } = require('../../pages/FormsPage');
const { FormsData } = require('../../testData/FormsData');
const { GenericData } = require('../../testData/GenericData');

test.describe('QA Playground - Forms Reset Validations', () => {
    let formsPage;

    const resetScenarios = [
        {
            name: 'Login Form Reset Button',
            section: page => page.getLoginSection(),
            setup: async page => {
                await page.enterEmail(
                    FormsData.positive.validUser.email
                );
                await page.enterLoginPassword(
                    FormsData.positive.validUser.password
                );
            },
            reset: async page => {
                await page.clickLoginResetButton();
            },
            verify: async (page, expect) => {
                await expect(
                    page.getEmailInput()
                ).toBeEmpty();
                await expect(
                    page.getLoginPasswordInput()
                ).toBeEmpty();
                await expect(
                    page.getLoginResult()
                ).not.toBeVisible();
            }
        },
        {
            name: 'Personal Details Form Reset Button',
            section: page => page.getPersonalSection(),
            setup: async page => {
                await page.enterFirstName(
                    FormsData.positive.validUser.firstName
                );
                await page.enterLastName(
                    FormsData.positive.validUser.lastName
                );
                await page.enterPhone(
                    FormsData.positive.validUser.phone
                );
                await page.enterDateOfBirth(
                    FormsData.positive.validUser.dateOfBirth
                );
                await page.selectGender(
                    FormsData.positive.validUser.gender
                );
            },
            reset: async page => {
                await page.clickPersonalResetButton();
            },
            verify: async (page, expect) => {
                await expect(
                    page.getFirstNameInput()
                ).toBeEmpty();
                await expect(
                    page.getLastNameInput()
                ).toBeEmpty();
                await expect(
                    page.getPhoneInput()
                ).toBeEmpty();
                await expect(
                    page.getDateOfBirthInput()
                ).toBeEmpty();
                await expect(
                    formsPage.getMaleRadioButton()
                ).not.toBeChecked();
                await expect(
                    formsPage.getFemaleRadioButton()
                ).not.toBeChecked();
                await expect(
                    formsPage.getOtherRadioButton()
                ).not.toBeChecked();
                await expect(
                    page.getPersonalResult()
                ).not.toBeVisible();
            }
        },
        {
            name: 'Address Form Reset Button',
            section: page => page.getAddressSection(),
            setup: async page => {
                await page.selectCountry(
                    FormsData.positive.validUser.country
                );
                await page.enterCity(
                    FormsData.positive.validUser.city
                );
                await page.enterAboutYou(
                    FormsData.positive.validUser.aboutYou
                );
            },
            reset: async page => {
                await page.clickAddressResetButton();
            },
            verify: async (page, expect) => {
                await expect(
                    formsPage.getCountryDropdown()
                ).toContainText(
                    FormsData.placeholder.countryPlaceholder
                );
                await expect(
                    page.getCityInput()
                ).toBeEmpty();
                await expect(
                    page.getAboutYouInput()
                ).toBeEmpty();
                await expect(
                    page.getAddressResult()
                ).not.toBeVisible();
            }
        },
        {
            name: 'Interests Form Reset Button',
            section: page => page.getInterestsSection(),
            setup: async page => {
                await page.selectInterest(
                    FormsData.positive.validUser.allInterests
                );
            },
            reset: async page => {
                await page.clickInterestsResetButton();
            },
            verify: async (page, expect) => {
                await formsPage.noInterestSelected();
                await expect(
                    page.getInterestsResult()
                ).not.toBeVisible();
            }
        },
        {
            name: 'Account Setup Form Reset Button',
            section: page => page.getAccountSection(),
            setup: async page => {
                await page.enterPassword(
                    FormsData.positive.validUser.password
                );
                await page.enterConfirmPassword(
                    FormsData.positive.validUser.confirmPassword
                );
                await formsPage.selectTermsAndConditions();
            },
            reset: async page => {
                await page.clickAccountResetButton();
            },
            verify: async (page, expect) => {
                await expect(
                    page.getPasswordInput()
                ).toBeEmpty();
                await expect(
                    page.getConfirmPasswordInput()
                ).toBeEmpty();
                await expect(
                    formsPage.getTermsAndConditionCheckBox()
                ).not.toBeChecked();
                await expect(
                    page.getAccountResult()
                ).not.toBeVisible();
            }
        }
    ];

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    resetScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@positive']
        }, async () => {
            await expect(
                scenario.section(formsPage)
            ).toBeVisible();
            await scenario.setup(formsPage);
            await scenario.reset(formsPage);
            await scenario.verify(
                formsPage,
                expect
            );
        });
    });

});