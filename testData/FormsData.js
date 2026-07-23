// Arrange Alphabetically
// Test Data for QA Playground - Forms Page
const FormsData = {
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
    positive: {
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

        expectedResults: {
            accoutSecureMessage:
                'Your account has been secured.',
            accountSetupCompleteMessage:
                'Account Setup Complete!',
            addressSavedMessage:
                'Address saved: ',
            interestsSavedMessage:
                'Interests saved: ',
            loginSuccessMessage:
                'Login successful! Welcome, ',
            fillAgainButton:
                'Fill Again',
            savedMessage:
                'Saved: ',
            get interestsSuccessUserMessage() {
                return this.interestsSavedMessage + FormsData.positive.validUser.interests;
            },
            get addressSuccessUserMessage() {
                return this.addressSavedMessage + FormsData.positive.validUser.city + ', ' + FormsData.positive.validUser.country;
            },
            get loginSuccessUserMessage() {
                return this.loginSuccessMessage + FormsData.positive.validUser.email + '.';
            },
            get personalSuccessUserMessage() {
                return this.savedMessage + FormsData.positive.validUser.firstName + " " + FormsData.positive.validUser.lastName;
            }
        }

    },

    negative: {
        invalidUser: {
            email:
                'abc.com',
            mismatchedPassword:
                'Password124',
            phoneAlphanumeric:
                '0956448w89',
            phoneRequirement:
                '095614889'
        },
        
        expectedResults: {
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
            firstNameRequiredMessage:
                'First name is required.',
            genderRequiredMessage:
                'Please select your gender.',
            interestsRequiredMessage:
                'Please select at least one interest.',
            invalidEmailMessage:
                'Enter a valid email address.',
            invalidPhoneMessage:
                'Phone must be exactly 10 digits.',
            lastNameRequiredMessage:
                'Last name is required.',
            passwordRequiredMessage:
                'Password is required.',
            passwordsDoNotMatchMessage:
                'Passwords do not match.',
            phoneRequiredMessage:
                'Phone is required.',
            termsAndConditionRequiredMessage:
                'You must accept the Terms & Conditions.'
        }

    }

};

module.exports = { FormsData };
