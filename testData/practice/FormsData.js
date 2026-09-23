// Arrange Alphabetically
// Test Data for QA Playground - Forms Page
const FormsData = {
    expectedResults: {
        accoutSecureMessage:
            'Your account has been secured.',
        accountSetupCompleteMessage:
            'Account Setup Complete!',
        addressSavedMessage:
            'Address saved: ',
        cityRequiredMessage:
            'City is required.',
        confirmPasswordRequiredMessage:
            'Please confirm your password.',
        countryRequiredMessage:
            'Please select a country.',
        dateOfBirthRequiredMessage:
            'Date of birth is required.',
        emailRequiredMessage: 
            'Email is required.',
        fillAgainButton:
            'Fill Again',
        firstNameRequiredMessage:
            'First name is required.',
        genderRequiredMessage:
            'Please select your gender.',
        interestsRequiredMessage:
            'Please select at least one interest.',
        interestsSavedMessage:
            'Interests saved: ',
        invalidEmailMessage:
            'Enter a valid email address.',
        invalidPhoneMessage:
            'Phone must be exactly 10 digits.',
        lastNameRequiredMessage:
            'Last name is required.',
        loginSuccessMessage:
            'Login successful! Welcome, ',
        passwordLengthMessage:
            'Password must be at least 6 characters.',
        passwordRequiredMessage:
            'Password is required.',
        passwordsDoNotMatchMessage:
            'Passwords do not match.',
        phoneRequiredMessage:
            'Phone is required.',
        savedMessage:
            'Saved: ',
        termsAndConditionRequiredMessage:
            'You must accept the Terms & Conditions.',
        get interestsSuccessUserMessage() {
            return this.interestsSavedMessage + FormsData.user.validUser.interests;
        },
        get addressSuccessUserMessage() {
            return this.addressSavedMessage + FormsData.user.validUser.city + ', ' + FormsData.user.validUser.country;
        },
        get loginSuccessUserMessage() {
            return this.loginSuccessMessage + FormsData.user.validUser.email + '.';
        },
        get personalSuccessUserMessage() {
            return this.savedMessage + FormsData.user.validUser.firstName + " " + FormsData.user.validUser.lastName;
        }
    },
    placeholder: {
        aboutYouPlaceholder:
            'Tell us a little about yourself…',
        cityPlaceholder:
            'Enter city',
        confirmPasswordPlaceholder:
            'Re-enter password',
        countryPlaceholder:
            'Select country', //IndiaUnited StatesUnited KingdomAustraliaCanadaGermanyJapanSingapore,
        dateOfBirthPlaceholder:
            'dd/mm/yyyy',
        emailPlaceholder:
            'you@example.com',
        firstNamePlaceholder:
            'First name',
        lastNamePlaceholder:
            'Last name',
        loginPasswordPlaceholder:
            'Enter password',
        passwordPlaceholder:
            'Min. 6 characters',
        phonePlaceholder:
            '10-digit number'
    },
    user: {
        invalidUser: {
            email:
                'abc.com',
            lessThanSixCharPassword:
                'Pass1',
            mismatchedPassword:
                'Password124',
            phoneAlphanumeric:
                '0956448w89',
            phoneRequirement:
                '095614889'
        },
        validUser: {
            aboutYou: 'I am a QA Automation Engineer.',
            allInterests: [
                'Playwright',
                'Cypress',
                'Jest',
                'Selenium',
                'Appium'
            ],
            city: 'Mumbai',
            confirmPassword: 'Password123',
            country: 'India',
            countryCode: 'IN',
            dateOfBirth: '1990-01-01',
            email: 'asdf@test.com',
            firstName: 'asdf',
            gender: 'male',
            interests: [
                'Playwright',
                'Cypress'
            ],
            lastName: 'asdf',
            oneInterest: [
                'Jest'
            ],
            password: 'Password123',
            phone: '0917123467'
        },
    }

};

module.exports = { FormsData };
