const {test, expect} = require('../../fixtures/Pages.fixture');
const { FormsData } = require('../../testData/FormsData');

test.describe('QA Playground - Forms Reset Validations', () => {
    const resetScenarios = [
        {
            name: 'Login Form Reset Button',
            section: page => page.getLoginSection(),
            setup: async page => {
                await page.enterEmail(
                    FormsData.user.validUser.email
                );
                await page.enterLoginPassword(
                    FormsData.user.validUser.password
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
                    FormsData.user.validUser.firstName
                );
                await page.enterLastName(
                    FormsData.user.validUser.lastName
                );
                await page.enterPhone(
                    FormsData.user.validUser.phone
                );
                await page.enterDateOfBirth(
                    FormsData.user.validUser.dateOfBirth
                );
                await page.selectGender(
                    FormsData.user.validUser.gender
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
                    page.getMaleRadioButton()
                ).not.toBeChecked();
                await expect(
                    page.getFemaleRadioButton()
                ).not.toBeChecked();
                await expect(
                    page.getOtherRadioButton()
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
                    FormsData.user.validUser.country
                );
                await page.enterCity(
                    FormsData.user.validUser.city
                );
                await page.enterAboutYou(
                    FormsData.user.validUser.aboutYou
                );
            },
            reset: async page => {
                await page.clickAddressResetButton();
            },
            verify: async (page, expect) => {
                await expect(
                    page.getCountryDropdown()
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
                    FormsData.user.validUser.allInterests
                );
            },
            reset: async page => {
                await page.clickInterestsResetButton();
            },
            verify: async (page, expect) => {
                await page.noInterestSelected();
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
                    FormsData.user.validUser.password
                );
                await page.enterConfirmPassword(
                    FormsData.user.validUser.confirmPassword
                );
                await page.selectTermsAndConditions();
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
                    page.getTermsAndConditionCheckBox()
                ).not.toBeChecked();
                await expect(
                    page.getAccountResult()
                ).not.toBeVisible();
            }
        }
    ];

    resetScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@positive']
        }, async ({ formsPage }) => {
            await expect(
                data.section(formsPage)
            ).toBeVisible();
            await data.setup(formsPage);
            await data.reset(formsPage);
            await data.verify(
                formsPage,
                expect
            );
        });
    });
});