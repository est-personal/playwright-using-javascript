const {test, expect} = require('../../fixtures/Pages.fixture');
const { FormsPage } = require('../../pages/FormsPage');
const { FormsData } = require('../../testData/FormsData');
const { GenericData } = require('../../testData/GenericData');

const loginFormValidationScenarios = [
    {
        name: 'Blank Email and Password',
        email: '',
        password: '',
        expectedEmailError:
            FormsData.expectedResults.emailRequiredMessage,
        expectedPasswordError:
            FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Email',
        email: '',
        password: 
            FormsData.user.validUser.password,
        expectedEmailError:
            FormsData.expectedResults.emailRequiredMessage
    },
    {
        name: 'Blank Password',
        email:
            FormsData.user.validUser.email,
        password: '',
        expectedPasswordError:
            FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Invalid Email',
        email:
            FormsData.user.invalidUser.email,
        password:
            FormsData.user.validUser.password,
        expectedEmailError:
            FormsData.expectedResults.invalidEmailMessage
    }
];

test.describe('Login Form Validation', () => {

    loginFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
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
            FormsData.expectedResults.firstNameRequiredMessage,
        expectedLastNameError:
            FormsData.expectedResults.lastNameRequiredMessage,
        expectedPhoneError:
            FormsData.expectedResults.phoneRequiredMessage,
        expectedDateOfBirthError:
            FormsData.expectedResults.dateOfBirthRequiredMessage,
        expectedGenderError:
            FormsData.expectedResults.genderRequiredMessage
    },
    {
        name: 'Blank First Name',
        firstName: '',
        lastName: 
            FormsData.user.validUser.LastName,
        phone: 
            FormsData.user.validUser.phone,
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender:
            FormsData.user.validUser.gender,
        expectedFirstNameError:
            FormsData.expectedResults.firstNameRequiredMessage
    },
    {
        name: 'Blank Last Name',
        firstName: 
            FormsData.user.validUser.FirstName,
        lastName: '',
        phone: 
            FormsData.user.validUser.phone,
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender:
            FormsData.user.validUser.gender,
        expectedLastNameError:
            FormsData.expectedResults.lastNameRequiredMessage
    },
    {
        name: 'Blank Phone',
        firstName: 
            FormsData.user.validUser.FirstName,
        lastName: 
            FormsData.user.validUser.LastName,
        phone: '',
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender:
            FormsData.user.validUser.gender,
        expectedPhoneError:
            FormsData.expectedResults.phoneRequiredMessage
    },
    {
        name: 'Blank Date Of Birth',
        firstName: 
            FormsData.user.validUser.FirstName,
        lastName: 
            FormsData.user.validUser.LastName,
        phone:
            FormsData.user.validUser.phone,
        dateOfBirth: '',
        gender:
            FormsData.user.validUser.gender,
        expectedDateOfBirthError:
            FormsData.expectedResults.dateOfBirthRequiredMessage
    },
    {
        name: 'Blank Gender',
        firstName: 
            FormsData.user.validUser.FirstName,
        lastName: 
            FormsData.user.validUser.LastName,
        phone:
            FormsData.user.validUser.phone,
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender: '',
        expectedGenderError:
            FormsData.expectedResults.genderRequiredMessage
    },
    {
        name: 'Invalid Phone',
        firstName: 
            FormsData.user.validUser.FirstName,
        lastName: 
            FormsData.user.validUser.LastName,
        phone:
            FormsData.user.invalidUser.phoneAlphanumeric,
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender: 
            FormsData.user.validUser.gender,
        expectedPhoneError:
            FormsData.expectedResults.invalidPhoneMessage
    },
    {
        name: 'Phone Is Less Than 10 Digits',
        firstName: 
            FormsData.user.validUser.firstName,
        lastName: 
            FormsData.user.validUser.lastName,
        phone:
            FormsData.user.invalidUser.phoneRequirement,
        dateOfBirth:
            FormsData.user.validUser.dateOfBirth,
        gender: 
            FormsData.user.validUser.gender,
        expectedPhoneError:
            FormsData.expectedResults.invalidPhoneMessage
    }

];

test.describe('Personal Details Form Validation', () => {

    personalDetailsFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
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
            FormsData.expectedResults.countryRequiredMessage,
        expectedCityError:
            FormsData.expectedResults.cityRequiredMessage
    },
    {
        name: 'Blank Country',
        country: '',
        city: 
            FormsData.user.validUser.city,
        aboutYou: 
            FormsData.user.validUser.aboutYou,
        expectedCountryError:
            FormsData.expectedResults.countryRequiredMessage
    },
    {
        name: 'Blank City',
        country: 
            FormsData.user.validUser.country,
        city: '',
        aboutYou: 
            FormsData.user.validUser.aboutYou,
        expectedCityError:
            FormsData.expectedResults.cityRequiredMessage
    }
];

test.describe('Address Form Validation', () => {

    addressFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
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
            FormsData.expectedResults.interestsRequiredMessage
    }
];

test.describe('Interest Form Validation', () => {

    interestsFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
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
            FormsData.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError:
            FormsData.expectedResults.confirmPasswordRequiredMessage,
        expectedTermsError:
            FormsData.expectedResults.termsRequiredMessage
    },
    {
        name: 'Blank Password And Confirm Password',
        password: '',
        confirmPassword: '',
        selectTerms: true,
        expectedPasswordError:
            FormsData.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError:
            FormsData.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Blank Password',
        password: '',
        confirmPassword: 
            FormsData.user.validUser.confirmPassword,
        selectTerms: true,
        expectedPasswordError:
            FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Confirm Password',
        password: 
            FormsData.user.validUser.password,
        confirmPassword: '',
        selectTerms: true,
        expectedConfirmPasswordError:
            FormsData.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Unchecked Terms and Conditions',
        password: 
            FormsData.user.validUser.password,
        confirmPassword:
            FormsData.user.validUser.confirmPassword,
        selectTerms: false,
        expectedTermsError:
            FormsData.expectedResults.termsRequiredMessage
    },
    {
        name: 'Mismatched Password And Confirm Password',
        password: 
            FormsData.user.validUser.password,
        confirmPassword:
            FormsData.user.invalidUser.mismatchedPassword,
        selectTerms: true,
        expectedConfirmPasswordError:
            FormsData.expectedResults.passwordsDoNotMatchMessage
    },
    {
        name: 'Password Is Less Than 6 Characters',
        password: 
            FormsData.user.invalidUser.lessThanSixCharPassword,
        confirmPassword:
            FormsData.user.invalidUser.lessThanSixCharPassword,
        selectTerms: true,
        expectedPasswordError:
            FormsData.expectedResults.passwordLengthMessage
    }
];

test.describe('Account Setup Form Validation', () => {

    accountSetupFormValidationScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
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