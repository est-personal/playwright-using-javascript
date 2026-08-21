const {test, expect} = require('../../fixtures/Pages.fixture');
const { FormsData } = require('../../testData/FormsData');
const { GenericData } = require('../../testData/GenericData');

const loginFormValidationScenarios = [
    {
        name: 'Blank Email and Password',
        email: '',
        password: '',
        expectedEmailError: FormsData.expectedResults.emailRequiredMessage,
        expectedPasswordError: FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Email',
        email: '',
        password: FormsData.user.validUser.password,
        expectedEmailError: FormsData.expectedResults.emailRequiredMessage
    },
    {
        name: 'Blank Password',
        email: FormsData.user.validUser.email,
        password: '',
        expectedPasswordError: FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Invalid Email',
        email: FormsData.user.invalidUser.email,
        password: FormsData.user.validUser.password,
        expectedEmailError: FormsData.expectedResults.invalidEmailMessage
    }
];

test.describe('Login Form Validation', () => {
    loginFormValidationScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
            // Wait for Login section to be visible
            await expect(
                formsPage.getLoginSection()
            ).toBeVisible();
            // Enter Email
            if (data.email) {
                await formsPage.enterEmail(
                    data.email
                );
            }
            // Enter Password
            if (data.password) {
                await formsPage.enterLoginPassword(
                    data.password
                );
            }
            // Click Login button
            await formsPage.clickLoginButton();
            // Validate Login Result
            await expect(
                formsPage.getLoginResult()
            ).not.toBeVisible();
            // Validate Email error message
            if (data.expectedEmailError) {
                await expect(
                    formsPage.getLoginEmailError()
                ).toHaveText(
                    data.expectedEmailError
                );
            }
            // Validate Password error message
            if (data.expectedPasswordError) {
                await expect(
                    formsPage.getLoginPasswordError()
                ).toHaveText(
                    data.expectedPasswordError
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
        expectedFirstNameError: FormsData.expectedResults.firstNameRequiredMessage,
        expectedLastNameError: FormsData.expectedResults.lastNameRequiredMessage,
        expectedPhoneError: FormsData.expectedResults.phoneRequiredMessage,
        expectedDateOfBirthError: FormsData.expectedResults.dateOfBirthRequiredMessage,
        expectedGenderError: FormsData.expectedResults.genderRequiredMessage
    },
    {
        name: 'Blank First Name',
        firstName: '',
        lastName: FormsData.user.validUser.LastName,
        phone: FormsData.user.validUser.phone,
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: FormsData.user.validUser.gender,
        expectedFirstNameError: FormsData.expectedResults.firstNameRequiredMessage
   },
    {
        name: 'Blank Last Name',
        firstName: FormsData.user.validUser.FirstName,
        lastName: '',
        phone: FormsData.user.validUser.phone,
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: FormsData.user.validUser.gender,
        expectedLastNameError: FormsData.expectedResults.lastNameRequiredMessage
    },
    {
        name: 'Blank Phone',
        firstName: FormsData.user.validUser.FirstName,
        lastName: FormsData.user.validUser.LastName,
        phone: '',
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: FormsData.user.validUser.gender,
        expectedPhoneError: FormsData.expectedResults.phoneRequiredMessage
    },
    {
        name: 'Blank Date Of Birth',
        firstName: FormsData.user.validUser.FirstName,
        lastName: FormsData.user.validUser.LastName,
        phone: FormsData.user.validUser.phone,
        dateOfBirth: '',
        gender: FormsData.user.validUser.gender,
        expectedDateOfBirthError: FormsData.expectedResults.dateOfBirthRequiredMessage
    },
    {
        name: 'Blank Gender',
        firstName: FormsData.user.validUser.FirstName,
        lastName: FormsData.user.validUser.LastName,
        phone: FormsData.user.validUser.phone,
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: '',
        expectedGenderError: FormsData.expectedResults.genderRequiredMessage
    },
    {
        name: 'Invalid Phone',
        firstName: FormsData.user.validUser.FirstName,
        lastName: FormsData.user.validUser.LastName,
        phone: FormsData.user.invalidUser.phoneAlphanumeric,
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: FormsData.user.validUser.gender,
        expectedPhoneError: FormsData.expectedResults.invalidPhoneMessage
    },
    {
        name: 'Phone Is Less Than 10 Digits',
        firstName: FormsData.user.validUser.firstName,
        lastName: FormsData.user.validUser.lastName,
        phone: FormsData.user.invalidUser.phoneRequirement,
        dateOfBirth: FormsData.user.validUser.dateOfBirth,
        gender: FormsData.user.validUser.gender,
        expectedPhoneError: FormsData.expectedResults.invalidPhoneMessage
    }
];

test.describe('Personal Details Form Validation', () => {

    personalDetailsFormValidationScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
            // Wait for Personal section to be visible
            await expect(
                formsPage.getPersonalSection()
            ).toBeVisible();
            // Enter First Name
            if (data.firstName) {
                await formsPage.enterFirstName(
                    data.firstName
                );
            }
            // Enter Last Name
            if (data.lastName) {
                await formsPage.enterLastName(
                    data.lastName
                );
            }
            // Enter Phone
            if (data.phone) {
                await formsPage.enterPhone(
                    data.phone
                );
            }
            // Enter Date of Birth
            if (data.dateOfBirth) {
                await formsPage.enterDateOfBirth(
                    data.dateOfBirth
                );
            }
            // Enter Gender
            if (data.gender) {
                await formsPage.selectGender(
                    data.gender
                );
            }
            // Click Save Details button
            await formsPage.clickSaveDetailsButton();
            // Validate Personal Result
            await expect(
                formsPage.getPersonalResult()
            ).not.toBeVisible();
            // Validate First Name error message
            if (data.expectedFirstNameError) {
                await expect(
                    formsPage.getPersonalFirstNameError()
                ).toHaveText(
                    data.expectedFirstNameError
                );
            }
            // Validate Last name error message
            if (data.expectedLastNameError) {
                await expect(
                    formsPage.getPersonalLastNameError()
                ).toHaveText(
                    data.expectedLastNameError
                );
            }
            // Validate Phone error message
            if (data.expectedPhoneError) {
                await expect(
                    formsPage.getPersonalPhoneError()
                ).toHaveText(
                    data.expectedPhoneError
                );
            }
            // Validate Date of Birth error message
            if (data.expectedDateOfBirthError) {
                await expect(
                    formsPage.getPersonalDateOfBirthError()
                ).toHaveText(
                    data.expectedDateOfBirthError
                );
            }
            // Validate Gender error message
            if (data.expectedGenderError) {
                await expect(
                    formsPage.getPersonalGenderError()
                ).toHaveText(
                    data.expectedGenderError
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
        expectedCountryError: FormsData.expectedResults.countryRequiredMessage,
        expectedCityError: FormsData.expectedResults.cityRequiredMessage
    },
    {
        name: 'Blank Country',
        country: '',
        city: FormsData.user.validUser.city,
        aboutYou: FormsData.user.validUser.aboutYou,
        expectedCountryError: FormsData.expectedResults.countryRequiredMessage
    },
    {
        name: 'Blank City',
        country: FormsData.user.validUser.country,
        city: '',
        aboutYou: FormsData.user.validUser.aboutYou,
        expectedCityError: FormsData.expectedResults.cityRequiredMessage
    }
];

test.describe('Address Form Validation', () => {
    addressFormValidationScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
            // Wait for Address section to be visible
            await expect(
                formsPage.getAddressSection()
            ).toBeVisible();
            // Enter Country
            if (data.country) {
                await formsPage.selectCountry(
                    data.country
                );
            }
            // Enter City
            if (data.city) {
                await formsPage.enterCity(
                    data.city
                );
            }
            // Enter About You
            if (data.aboutYou) {
                await formsPage.enterAboutYou(
                    data.aboutYou
                );
            }
            // Click Save Address button
            await formsPage.clickSaveAddressButton();
            // Validate Address Result
            await expect(
                formsPage.getAddressResult()
            ).not.toBeVisible();
            // Validate Country error message
            if (data.expectedCountryError) {
                await expect(
                    formsPage.getAddressCountryError()
                ).toHaveText(
                    data.expectedCountryError
                );
            }
            // Validate City error message
            if (data.expectedCityError) {
                await expect(
                    formsPage.getAddressCityError()
                ).toHaveText(
                    data.expectedCityError
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
    interestsFormValidationScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
            // Wait for Interests section to be visible
            await expect(
                formsPage.getInterestsSection()
            ).toBeVisible();
            // Select Interests
            if (data.interest) {
                await formsPage.enterInterest(
                    data.interest
                );
            }
            // Click Save Interests button
            await formsPage.clickSaveInterestsButton();
            // Validate Interests Result
            await expect(
                formsPage.getInterestsResult()
            ).not.toBeVisible();
            // Validate Interests error message
            if (data.expectedInterestError) {
                await expect(
                    formsPage.getInterestsError()
                ).toHaveText(
                    data.expectedInterestError
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
        expectedPasswordError: FormsData.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError: FormsData.expectedResults.confirmPasswordRequiredMessage,
        expectedTermsError: FormsData.expectedResults.termsRequiredMessage
    },
    {
        name: 'Blank Password And Confirm Password',
        password: '',
        confirmPassword: '',
        selectTerms: true,
        expectedPasswordError: FormsData.expectedResults.passwordRequiredMessage,
        expectedConfirmPasswordError: FormsData.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Blank Password',
        password: '',
        confirmPassword: FormsData.user.validUser.confirmPassword,
        selectTerms: true,
        expectedPasswordError: FormsData.expectedResults.passwordRequiredMessage
    },
    {
        name: 'Blank Confirm Password',
        password: FormsData.user.validUser.password,
        confirmPassword: '',
        selectTerms: true,
        expectedConfirmPasswordError: FormsData.expectedResults.confirmPasswordRequiredMessage
    },
    {
        name: 'Unchecked Terms and Conditions',
        password: FormsData.user.validUser.password,
        confirmPassword: FormsData.user.validUser.confirmPassword,
        selectTerms: false,
        expectedTermsError: FormsData.expectedResults.termsRequiredMessage
    },
    {
        name: 'Mismatched Password And Confirm Password',
        password: FormsData.user.validUser.password,
        confirmPassword: FormsData.user.invalidUser.mismatchedPassword,
        selectTerms: true,
        expectedConfirmPasswordError: FormsData.expectedResults.passwordsDoNotMatchMessage
    },
    {
        name: 'Password Is Less Than 6 Characters',
        password: FormsData.user.invalidUser.lessThanSixCharPassword,
        confirmPassword: FormsData.user.invalidUser.lessThanSixCharPassword,
        selectTerms: true,
        expectedPasswordError: FormsData.expectedResults.passwordLengthMessage
    }
];

test.describe('Account Setup Form Validation', () => {
    accountSetupFormValidationScenarios.forEach((data) => {
        test(data.name, {
            tag: ['@regression', '@negative']
        }, async ({ formsPage }) => {
            // Wait for Account section to be visible
            await expect(
                formsPage.getAccountSection()
            ).toBeVisible();
            // Enter Password
            if (data.password) {
                await formsPage.enterPassword(
                    data.password
                );
            }
            // Enter Confirm Password
            if (data.confirmPassword) {
                await formsPage.enterConfirmPassword(
                    data.confirmPassword
                );
            }
            // Tick Select Terms
            if (data.selectTerms) {
                await formsPage.selectTermsAndConditions(
                    data.selectTerms
                );
            }
            // Click Submit button
            await formsPage.clickSubmitButton();
            // Validate Account Result
            await expect(
                formsPage.getAccountResult()
            ).not.toBeVisible();
            // Validate Password error message
            if (data.expectedPasswordError) {
                await expect(
                    formsPage.getPasswordError()
                ).toHaveText(
                    data.expectedPasswordError
                );
            }
            // Validate Confirm Password error message
            if (data.expectedConfirmPasswordError) {
                await expect(
                    formsPage.getConfirmPasswordError()
                ).toHaveText(
                    data.expectedConfirmPasswordError
                );
            }
            // Validate Terms error message
            if (data.expectedTermsError) {
                await expect(
                    formsPage.getTermsError()
                ).toHaveText(
                    data.expectedTermsError
                );
            }
        });
    });
});