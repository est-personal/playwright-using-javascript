const { test, expect } = require('@playwright/test');
const { FormsPage } = require('../pages/FormsPage');
const { FormsData } = require('../testData/FormsData');
const { GenericData } = require('../testData/GenericData');

const loginFormValidationScenarios = [
    {
        name: 'Blank Email and Password',
        email: '',
        password: '',
        expectedEmailError:
            FormsData.negative.expectedResults.emailRequiredMessage,
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Email',
        email: '',
        password: 
            FormsData.positive.validUser.password,
        expectedEmailError:
            FormsData.negative.expectedResults.emailRequiredMessage
    },
    {
        name: 'Blank Password',
        email:
            FormsData.positive.validUser.email,
        password: '',
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Invalid Email',
        email:
            FormsData.negative.invalidUser.email,
        password:
            FormsData.positive.validUser.password,
        expectedEmailError:
            FormsData.negative.expectedResults.invalidEmailMessage
    }
];

test.describe('Login Form Validation', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    loginFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async () => {
            await expect(
                formsPage.getLoginSection()
            ).toBeVisible();
            if (scenario.email) {
                await formsPage.enterEmail(
                    scenario.email
                );
            }
            if (scenario.password) {
                await formsPage.enterLoginPassword(
                    scenario.password
                );
            }
            await formsPage.clickLoginButton();
            await expect(
                formsPage.getLoginResult()
            ).not.toBeVisible();
            if (scenario.expectedEmailError) {
                await expect(
                    formsPage.getLoginEmailError()
                ).toHaveText(
                    scenario.expectedEmailError
                );
            }
            if (scenario.expectedPasswordError) {
                await expect(
                    formsPage.getLoginPasswordError()
                ).toHaveText(
                    scenario.expectedPasswordError
                );
            }
        });
    });
});

const personalDetailsFormValidationScenarios = [
    {
        name: 'Blank Personal Details',
        firstName: '',
        lastName: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        expectedFirstNameError:
            FormsData.negative.expectedResults.firstNameRequiredMessage,
        expectedLastNameError:
            FormsData.negative.expectedResults.lastNameRequiredMessage,
        expectedPhoneError:
            FormsData.negative.expectedResults.phoneRequiredMessage,
        expectedDateOfBirthError:
            FormsData.negative.expectedResults.dateOfBirthRequiredMessage,
        expectedGenderError:
            FormsData.negative.expectedResults.genderRequiredMessage
    },
    {
        name: 'Blank First Name',
        firstName: '',
        lastName: 
            FormsData.positive.validUser.LastName,
        phone: 
            FormsData.positive.validUser.phone,
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender:
            FormsData.positive.validUser.gender,
        expectedFirstNameError:
            FormsData.negative.expectedResults.firstNameRequiredMessage
    },
    {
        name: 'Blank Last Name',
        firstName: 
            FormsData.positive.validUser.FirstName,
        lastName: '',
        phone: 
            FormsData.positive.validUser.phone,
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender:
            FormsData.positive.validUser.gender,
        expectedLastNameError:
            FormsData.negative.expectedResults.lastNameRequiredMessage
    },
    {
        name: 'Blank Phone',
        firstName: 
            FormsData.positive.validUser.FirstName,
        lastName: 
            FormsData.positive.validUser.LastName,
        phone: '',
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender:
            FormsData.positive.validUser.gender,
        expectedPhoneError:
            FormsData.negative.expectedResults.phoneRequiredMessage
    },
    {
        name: 'Blank Date Of Birth',
        firstName: 
            FormsData.positive.validUser.FirstName,
        lastName: 
            FormsData.positive.validUser.LastName,
        phone:
            FormsData.positive.validUser.phone,
        dateOfBirth: '',
        gender:
            FormsData.positive.validUser.gender,
        expectedDateOfBirthError:
            FormsData.negative.expectedResults.dateOfBirthRequiredMessage
    },
    {
        name: 'Blank Gender',
        firstName: 
            FormsData.positive.validUser.FirstName,
        lastName: 
            FormsData.positive.validUser.LastName,
        phone:
            FormsData.positive.validUser.phone,
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender: '',
        expectedGenderError:
            FormsData.negative.expectedResults.genderRequiredMessage
    },
    {
        name: 'Invalid Phone',
        firstName: 
            FormsData.positive.validUser.FirstName,
        lastName: 
            FormsData.positive.validUser.LastName,
        phone:
            FormsData.negative.invalidUser.phoneAlphanumeric,
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender: 
            FormsData.positive.validUser.gender,
        expectedPhoneError:
            FormsData.negative.expectedResults.invalidPhoneMessage
    },
    {
        name: 'Phone Is Less Than 10 Digits',
        firstName: 
            FormsData.positive.validUser.firstName,
        lastName: 
            FormsData.positive.validUser.lastName,
        phone:
            FormsData.negative.invalidUser.phoneRequirement,
        dateOfBirth:
            FormsData.positive.validUser.dateOfBirth,
        gender: 
            FormsData.positive.validUser.gender,
        expectedPhoneError:
            FormsData.negative.expectedResults.invalidPhoneMessage
    }

];

test.describe('Personal Details Form Validation', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    personalDetailsFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async () => {
            await expect(
                formsPage.getPersonalSection()
            ).toBeVisible();
            if (scenario.firstName) {
                await formsPage.enterFirstName(
                    scenario.firstName
                );
            }
            if (scenario.lastName) {
                await formsPage.enterLastName(
                    scenario.lastName
                );
            }
            if (scenario.phone) {
                await formsPage.enterPhone(
                    scenario.phone
                );
            }
            if (scenario.dateOfBirth) {
                await formsPage.enterDateOfBirth(
                    scenario.dateOfBirth
                );
            }
            if (scenario.gender) {
                await formsPage.selectGender(
                    scenario.gender
                );
            }
            await formsPage.clickSaveDetailsButton();
            await expect(
                formsPage.getPersonalResult()
            ).not.toBeVisible();
            if (scenario.expectedFirstNameError) {
                await expect(
                    formsPage.getPersonalFirstNameError()
                ).toHaveText(
                    scenario.expectedFirstNameError
                );
            }
            if (scenario.expectedLastNameError) {
                await expect(
                    formsPage.getPersonalLastNameError()
                ).toHaveText(
                    scenario.expectedLastNameError
                );
            }
            if (scenario.expectedPhoneError) {
                await expect(
                    formsPage.getPersonalPhoneError()
                ).toHaveText(
                    scenario.expectedPhoneError
                );
            }
            if (scenario.expectedDateOfBirthError) {
                await expect(
                    formsPage.getPersonalDateOfBirthError()
                ).toHaveText(
                    scenario.expectedDateOfBirthError
                );
            }
            if (scenario.expectedGenderError) {
                await expect(
                    formsPage.getPersonalGenderError()
                ).toHaveText(
                    scenario.expectedGenderError
                );
            }
        });
    });
});

const addressFormValidationScenarios = [
    {
        name: 'Blank Address',
        country: '',
        city: '',
        aboutYou: '',
        expectedCountryError:
            FormsData.negative.expectedResults.countryRequiredMessage,
        expectedCityError:
            FormsData.negative.expectedResults.cityRequiredMessage
    },
    {
        name: 'Blank Country',
        country: '',
        city: 
            FormsData.positive.validUser.city,
        aboutYou: 
            FormsData.positive.validUser.aboutYou,
        expectedCountryError:
            FormsData.negative.expectedResults.countryRequiredMessage
    },
    {
        name: 'Blank City',
        country: 
            FormsData.positive.validUser.country,
        city: '',
        aboutYou: 
            FormsData.positive.validUser.aboutYou,
        expectedCityError:
            FormsData.negative.expectedResults.cityRequiredMessage
    }
];

test.describe('Address Form Validation', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    addressFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async () => {
            await expect(
                formsPage.getAddressSection()
            ).toBeVisible();
            if (scenario.country) {
                await formsPage.selectCountry(
                    scenario.country
                );
            }
            if (scenario.city) {
                await formsPage.enterCity(
                    scenario.city
                );
            }
            if (scenario.aboutYou) {
                await formsPage.enterAboutYou(
                    scenario.aboutYou
                );
            }
            await formsPage.clickSaveAddressButton();
            await expect(
                formsPage.getAddressResult()
            ).not.toBeVisible();
            if (scenario.expectedCountryError) {
                await expect(
                    formsPage.getAddressCountryError()
                ).toHaveText(
                    scenario.expectedCountryError
                );
            }
            if (scenario.expectedCityError) {
                await expect(
                    formsPage.getAddressCityError()
                ).toHaveText(
                    scenario.expectedCityError
                );
            }
        });
    });
});

const interestsFormValidationScenarios = [
    {
        name: 'Blank Interest',
        interest: '',
        expectedInterestError:
            FormsData.negative.expectedResults.interestsRequiredMessage
    }
];

test.describe('Interest Form Validation', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    interestsFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async () => {
            await expect(
                formsPage.getInterestsSection()
            ).toBeVisible();
            if (scenario.interest) {
                await formsPage.enterInterest(
                    scenario.interest
                );
            }
            await formsPage.clickSaveInterestsButton();
            await expect(
                formsPage.getInterestsResult()
            ).not.toBeVisible();
            if (scenario.expectedInterestError) {
                await expect(
                    formsPage.getInterestsError()
                ).toHaveText(
                    scenario.expectedInterestError
                );
            }
        });
    });
});

const accountSetupFormValidationScenarios = [
    {
        name: 'Blank Account Setup Fields',
        password: '',
        confirmPassword: '',
        selectTerms: false,
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError:
            FormsData.negative.expectedResults.confirmPasswordRequiredMessage,
        expectedTermsError:
            FormsData.negative.expectedResults.termsRequiredMessage
    },
    {
        name: 'Blank Password And Confirm Password',
        password: '',
        confirmPassword: '',
        selectTerms: true,
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError:
            FormsData.negative.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Blank Password',
        password: '',
        confirmPassword: 
            FormsData.positive.validUser.confirmPassword,
        selectTerms: true,
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Confirm Password',
        password: 
            FormsData.positive.validUser.password,
        confirmPassword: '',
        selectTerms: true,
        expectedConfirmPasswordError:
            FormsData.negative.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Unchecked Terms and Conditions',
        password: 
            FormsData.positive.validUser.password,
        confirmPassword:
            FormsData.positive.validUser.confirmPassword,
        selectTerms: false,
        expectedTermsError:
            FormsData.negative.expectedResults.termsRequiredMessage
    },
    {
        name: 'Mismatched Password And Confirm Password',
        password: 
            FormsData.positive.validUser.password,
        confirmPassword:
            FormsData.negative.invalidUser.mismatchedPassword,
        selectTerms: true,
        expectedConfirmPasswordError:
            FormsData.negative.expectedResults.passwordsDoNotMatchMessage
    },
    {
        name: 'Password Is Less Than 6 Characters',
        password: 
            FormsData.negative.invalidUser.lessThanSixCharPassword,
        confirmPassword:
            FormsData.negative.invalidUser.lessThanSixCharPassword,
        selectTerms: true,
        expectedPasswordError:
            FormsData.negative.expectedResults.passwordLengthMessage
    }
];

test.describe('Account Setup Form Validation', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    accountSetupFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async () => {
            await expect(
                formsPage.getAccountSection()
            ).toBeVisible();
            if (scenario.password) {
                await formsPage.enterPassword(
                    scenario.password
                );
            }
            if (scenario.confirmPassword) {
                await formsPage.enterConfirmPassword(
                    scenario.confirmPassword
                );
            }
            if (scenario.selectTerms) {
                await formsPage.selectTermsAndConditions(
                    scenario.selectTerms
                );
            }
            await formsPage.clickSubmitButton();
            await expect(
                formsPage.getAccountResult()
            ).not.toBeVisible();
            if (scenario.expectedPasswordError) {
                await expect(
                    formsPage.getPasswordError()
                ).toHaveText(
                    scenario.expectedPasswordError
                );
            }
            if (scenario.expectedConfirmPasswordError) {
                await expect(
                    formsPage.getConfirmPasswordError()
                ).toHaveText(
                    scenario.expectedConfirmPasswordError
                );
            }
            if (scenario.expectedTermsError) {
                await expect(
                    formsPage.getTermsError()
                ).toHaveText(
                    scenario.expectedTermsError
                );
            }
        });
    });
});