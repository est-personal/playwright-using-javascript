const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');
const { FormsPage } = require('../pages/FormsPage');
const { FormsData } = require('../testData/FormsData');
const { GenericData } = require('../testData/GenericData');

test.describe('QA Playground - Forms Tests', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    qase(453, test('Successful Login', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Login section to be visible
        await expect(
            formsPage.getLoginSection()
        ).toBeVisible();
        // Input Email
        await formsPage.enterEmail(
            FormsData.positive.validUser.email
        );
        await expect(
            formsPage.getEmailInput()
        ).toHaveValue(
            FormsData.positive.validUser.email
        );
        // Input Password
        await formsPage.enterLoginPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getLoginPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Click Login button
        await formsPage.clickLoginButton();
        // Validate text in Login result
        await expect(
            formsPage.getLoginResult()
        ).toBeVisible();
        await expect(
            formsPage.getLoginResult()
        ).toHaveText(
            FormsData.positive.expectedResults.loginSuccessUserMessage
        );
    }));

    qase(454, test('Blank Email and Password', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Login section to be visible
        await expect(
            formsPage.getLoginSection()
        ).toBeVisible();
        // Click Login button
        await formsPage.clickLoginButton();
        // Validate Email error message
        await expect(
            formsPage.getLoginEmailError()
        ).toHaveText(
            FormsData.negative.expectedResults.emailRequiredMessage
        );
        // Validate Password error message
        await expect(
            formsPage.getLoginPasswordError()
        ).toHaveText(
            FormsData.negative.expectedResults.passwordRequiredMessage
        );
        // Validate Login result not displayed
        await expect(
            formsPage.getLoginResult()
        ).not.toBeVisible();
    }));

    qase(455, test('Invalid Email', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Login section to be visible
        await expect(
            formsPage.getLoginSection()
        ).toBeVisible();
        // Input Email
        await formsPage.enterEmail(
            FormsData.negative.invalidUser.email
        );
        await expect(
            formsPage.getEmailInput()
        ).toHaveValue(
            FormsData.negative.invalidUser.email
        );
        // Input Password
        await formsPage.enterLoginPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getLoginPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Click Login button
        await formsPage.clickLoginButton();
        // Validate Email error message
        await expect(
            formsPage.getLoginEmailError()
        ).toHaveText(
            FormsData.negative.expectedResults.invalidEmailMessage
        );
        // Validate Login result not displayed
        await expect(
            formsPage.getLoginResult()
        ).not.toBeVisible();
    }));

    qase(456, test('Login Reset Button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Login section to be visible
        await expect(
            formsPage.getLoginSection()
        ).toBeVisible();
        // Input Email
        await formsPage.enterEmail(
            FormsData.positive.validUser.email
        );
        await expect(
            formsPage.getEmailInput()
        ).toHaveValue(
            FormsData.positive.validUser.email
        );
        // Input Password
        await formsPage.enterLoginPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getLoginPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Click Reset button
        await formsPage.clickLoginResetButton();
        // Validate text in Email input
        await expect(
            formsPage.getEmailInput()
        ).toBeEmpty();
        // Validate text in Password input
        await expect(
            formsPage.getLoginPasswordInput()
        ).toBeEmpty();
        // Validate Login result not displayed
        await expect(
            formsPage.getLoginResult()
        ).not.toBeVisible();
    }));

    qase(457, test('Login Section Placeholder', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Login section to be visible
        await expect(
            formsPage.getLoginSection()
        ).toBeVisible();
        // Email placeholder
        await expect(
            formsPage.getEmailInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.emailPlaceholder
        );
        // Password placeholder
        await expect(
            formsPage.getLoginPasswordInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.loginPasswordPlaceholder
        );
    }));

    qase(458, test('Successful Personal Details', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate text in Personal result
        await expect(
            formsPage.getPersonalResult()
        ).toBeVisible();
        await expect(
            formsPage.getPersonalResult()
        ).toHaveText(
            FormsData.positive.expectedResults.personalSuccessUserMessage
        );
    }));

    qase(459, test('Blank First Name', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate First Name error message
        await expect(
            formsPage.getPersonalFirstNameError()
        ).toHaveText(
            FormsData.negative.expectedResults.firstNameRequiredMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(460, test('Blank Last Name', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Last Name error message
        await expect(
            formsPage.getPersonalLastNameError()
        ).toHaveText(
            FormsData.negative.expectedResults.lastNameRequiredMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(461, test('Blank Phone', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Phone error message
        await expect(
            formsPage.getPersonalPhoneError()
        ).toHaveText(
            FormsData.negative.expectedResults.phoneRequiredMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(462, test('Blank Date of Birth', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Date of Birth error message
        await expect(
            formsPage.getPersonalDateOfBirthError()
        ).toHaveText(
            FormsData.negative.expectedResults.dateOfBirthRequiredMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(463, test('Blank Gender', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Gender error message
        await expect(
            formsPage.getPersonalGenderError()
        ).toHaveText(
            FormsData.negative.expectedResults.genderRequiredMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(464, test('Invalid Phone', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.negative.invalidUser.phoneAlphanumeric
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.negative.invalidUser.phoneAlphanumeric
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Phone error message
        await expect(
            formsPage.getPersonalPhoneError()
        ).toHaveText(
            FormsData.negative.expectedResults.invalidPhoneMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(465, test('Phone is less than required', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.negative.invalidUser.phoneRequirement
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.negative.invalidUser.phoneRequirement
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Save Details button
        await formsPage.clickSaveDetailsButton();
        // Validate Phone error message
        await expect(
            formsPage.getPersonalPhoneError()
        ).toHaveText(
            FormsData.negative.expectedResults.invalidPhoneMessage
        );
        // Validate Personal result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(466, test('Personal Reset Button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // Input First Name
        await formsPage.enterFirstName(
            FormsData.positive.validUser.firstName
        );
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.firstName
        );
        // Input Last Name
        await formsPage.enterLastName(
            FormsData.positive.validUser.lastName
        );
        await expect(
            formsPage.getLastNameInput()
        ).toHaveValue(
            FormsData.positive.validUser.lastName
        );
        // Input Phone
        await formsPage.enterPhone(
            FormsData.positive.validUser.phone
        );
        await expect(
            formsPage.getPhoneInput()
        ).toHaveValue(
            FormsData.positive.validUser.phone
        );
        // Input Date of Birth
        await formsPage.enterDateOfBirth(
            FormsData.positive.validUser.dateOfBirth
        );
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveValue(
            FormsData.positive.validUser.dateOfBirth
        );
        // Select Gender
        await formsPage.selectGender(
            FormsData.positive.validUser.gender
        );
        // Click Reset button
        await formsPage.clickPersonalResetButton();
        // Validate text in First Name input
        await expect(
            formsPage.getFirstNameInput()
        ).toBeEmpty();
        // Validate text in Last Name input
        await expect(
            formsPage.getLastNameInput()
        ).toBeEmpty();
        // Validate text in Phone input
        await expect(
            formsPage.getPhoneInput()
        ).toBeEmpty();
        // Validate text in Date of Birth input
        await expect(
            formsPage.getDateOfBirthInput()
        ).toBeEmpty();
        // Validate selection in Gender
        await expect(
            formsPage.getMaleRadioButton()
        ).not.toBeChecked;
        await expect(
            formsPage.getFemaleRadioButton()
        ).not.toBeChecked;
        await expect(
            formsPage.getOtherRadioButton()
        ).not.toBeChecked;
        // Validate Login result not displayed
        await expect(
            formsPage.getPersonalResult()
        ).not.toBeVisible();
    }));

    qase(467, test('Personal Section Placeholder', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Personal Details section to be visible
        await expect(
            formsPage.getPersonalSection()
        ).toBeVisible();
        // First Name placeholder
        await expect(
            formsPage.getFirstNameInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.firstNamePlaceholder
        );
        // Last Name placeholder
        await expect(
            formsPage.getLastNameInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.lastNamePlaceholder
        );
        // Phone placeholder
        await expect(
            formsPage.getPhoneInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.phonePlaceholder
        );
        // Date of Birth placeholder
        await expect(
            formsPage.getDateOfBirthInput()
        ).toHaveText(
            ''
        );
    }));
    
    qase(468, test('Successful Address', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Select Country
        await formsPage.selectCountry(
            FormsData.positive.validUser.country
        );
        await expect(
            formsPage.getCountryDropdown()
        ).toHaveValue(
            FormsData.positive.validUser.countryCode
        );
        // Input City
        await formsPage.enterCity(
            FormsData.positive.validUser.city
        );
        await expect(
            formsPage.getCityInput()
        ).toHaveValue(
            FormsData.positive.validUser.city
        );
        // Input About You
        await formsPage.enterAboutYou(
            FormsData.positive.validUser.aboutYou
        );
        await expect(
            formsPage.getAboutYouInput()
        ).toHaveValue(
            FormsData.positive.validUser.aboutYou
        );
        // Click Save Address button
        await formsPage.clickSaveAddressButton();
        // Validate text in Address result
        await expect(
            formsPage.getAddressResult()
        ).toBeVisible();
        await expect(
            formsPage.getAddressResult()
        ).toHaveText(
            FormsData.positive.expectedResults.addressSuccessUserMessage
        );
    }));

    qase(469, test('Blank Country', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Input City
        await formsPage.enterCity(
            FormsData.positive.validUser.city
        );
        await expect(
            formsPage.getCityInput()
        ).toHaveValue(
            FormsData.positive.validUser.city
        );
        // Input About You
        await formsPage.enterAboutYou(
            FormsData.positive.validUser.aboutYou
        );
        await expect(
            formsPage.getAboutYouInput()
        ).toHaveValue(
            FormsData.positive.validUser.aboutYou
        );
        // Click Save Address button
        await formsPage.clickSaveAddressButton();
        // Validate Country error message
        await expect(
            formsPage.getAddressCountryError()
        ).toHaveText(
            FormsData.negative.expectedResults.countryRequiredMessage
        );
        // Validate Address result not displayed
        await expect(
            formsPage.getAddressResult()
        ).not.toBeVisible();
    }));

    qase(470, test('Blank City', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Select Country
        await formsPage.selectCountry(
            FormsData.positive.validUser.country
        );
        await expect(
            formsPage.getCountryDropdown()
        ).toHaveValue(
            FormsData.positive.validUser.countryCode
        );
        // Input About You
        await formsPage.enterAboutYou(
            FormsData.positive.validUser.aboutYou
        );
        await expect(
            formsPage.getAboutYouInput()
        ).toHaveValue(
            FormsData.positive.validUser.aboutYou
        );
        // Click Save Address button
        await formsPage.clickSaveAddressButton();
        // Validate City error message
        await expect(
            formsPage.getAddressCityError()
        ).toHaveText(
            FormsData.negative.expectedResults.cityRequiredMessage
        );
        // Validate Address result not displayed
        await expect(
            formsPage.getAddressResult()
        ).not.toBeVisible();
    }));

    qase(471, test('Blank About You', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Select Country
        await formsPage.selectCountry(
            FormsData.positive.validUser.country
        );
        await expect(
            formsPage.getCountryDropdown()
        ).toHaveValue(
            FormsData.positive.validUser.countryCode
        );
        // Input City
        await formsPage.enterCity(
            FormsData.positive.validUser.city
        );
        await expect(
            formsPage.getCityInput()
        ).toHaveValue(
            FormsData.positive.validUser.city
        );
        // Click Save Address button
        await formsPage.clickSaveAddressButton();
        // Validate text in Address result
        await expect(
            formsPage.getAddressResult()
        ).toBeVisible();
        await expect(
            formsPage.getAddressResult()
        ).toHaveText(
            FormsData.positive.expectedResults.addressSuccessUserMessage
        );
    }));

    qase(472, test('Address Reset Button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Select Country
        await formsPage.selectCountry(
            FormsData.positive.validUser.country
        );
        await expect(
            formsPage.getCountryDropdown()
        ).toHaveValue(
            FormsData.positive.validUser.countryCode
        );
        // Input City
        await formsPage.enterCity(
            FormsData.positive.validUser.city
        );
        await expect(
            formsPage.getCityInput()
        ).toHaveValue(
            FormsData.positive.validUser.city
        );
        // Input About You
        await formsPage.enterAboutYou(
            FormsData.positive.validUser.aboutYou
        );
        await expect(
            formsPage.getAboutYouInput()
        ).toHaveValue(
            FormsData.positive.validUser.aboutYou
        );
        // Click Reset button
        await formsPage.clickAddressResetButton();
        // Validate text in Country dropdown
        await expect(
            formsPage.getCountryDropdown()
        ).toContainText(
            FormsData.placeholder.countryPlaceholder
        );
        // Validate text in City input
        await expect(
            formsPage.getCityInput()
        ).toBeEmpty();
        // Validate text in About You input
        await expect(
            formsPage.getAboutYouInput()
        ).toBeEmpty();
        // Validate Address result not displayed
        await expect(
            formsPage.getAddressResult()
        ).not.toBeVisible();
    }));

    qase(473, test('Address Section Placeholder', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Address section to be visible
        await expect(
            formsPage.getAddressSection()
        ).toBeVisible();
        // Country placeholder
        await expect(
            formsPage.getCountryDropdown()
        ).toHaveValue(
            ''
        );
        // City placeholder
        await expect(
            formsPage.getCityInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.cityPlaceholder
        );
        // About You placeholder
        await expect(
            formsPage.getAboutYouInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.aboutYouPlaceholder
        );
    }));

    qase(474, test('Successful Interests Form', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Interests section to be visible
        await expect(
            formsPage.getInterestsSection()
        ).toBeVisible();
        // Set Variable
        const expectedInterests = 
            FormsData.positive.expectedResults.interestsSavedMessage + FormsData.positive.validUser.interests.join(', ');
        // Select Interest/s
        await formsPage.selectInterest(
            FormsData.positive.validUser.interests
        );
        // Click Save Interests button
        await formsPage.clickSaveInterestsButton();
        // Validate text in Interests result
        await expect(
            formsPage.getInterestsResult()
        ).toBeVisible();
        await expect(
            formsPage.getInterestsResult()
        ).toHaveText(
            expectedInterests
        );
    }));

    qase(475, test('One Interest selected', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Interests section to be visible
        await expect(
            formsPage.getInterestsSection()
        ).toBeVisible();
        // Set Variable
        const expectedInterests = 
            FormsData.positive.expectedResults.interestsSavedMessage + FormsData.positive.validUser.oneInterest.join(', ');
        // Select Interest/s
        await formsPage.selectInterest(
            FormsData.positive.validUser.oneInterest
        );
        // Click Save Interests button
        await formsPage.clickSaveInterestsButton();
        // Validate text in Interests result
        await expect(
            formsPage.getInterestsResult()
        ).toBeVisible();
        await expect(
            formsPage.getInterestsResult()
        ).toHaveText(
            expectedInterests
        );
    }));

    qase(476, test('All Interests selected', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Interests section to be visible
        await expect(
            formsPage.getInterestsSection()
        ).toBeVisible();
        // Select Interest/s
        await formsPage.selectInterest(
            FormsData.positive.validUser.allInterests
        );
        // Click Save Interests button
        await formsPage.clickSaveInterestsButton();
        // Validate text in Interests result
        await expect(
            formsPage.getInterestsResult()
        ).toBeVisible();
        const resultText =
            await formsPage.getInterestsResult().textContent();
        for (const interest of FormsData.positive.validUser.interests) {
            expect(resultText).toContain(interest);
        }
    }));

    qase(477, test('No Interests selected', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Interests section to be visible
        await expect(
            formsPage.getInterestsSection()
        ).toBeVisible();
        // Click Save Interests button
        await formsPage.clickSaveInterestsButton();
        // Validate Interest error message
        await expect(
            formsPage.getInterestsError()
        ).toHaveText(
            FormsData.negative.expectedResults.interestsRequiredMessage
        );
        // Validate Interests result not displayed
        await expect(
            formsPage.getInterestsResult()
        ).not.toBeVisible();
    }));

    qase(478, test('Interests Reset Button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Interests section to be visible
        await expect(
            formsPage.getInterestsSection()
        ).toBeVisible();
        // Select Interest/s
        await formsPage.selectInterest(
            FormsData.positive.validUser.allInterests
        );
        // Click Reset button
        await formsPage.clickInterestsResetButton();
        // Validate Interests checkbox
        await formsPage.noInterestSelected();
        // Validate Interests result not displayed
        await expect(
            formsPage.getInterestsResult()
        ).not.toBeVisible();
    }));

    qase(479, test('Successful Account Setup', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.positive.validUser.confirmPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.confirmPassword
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate Account result
        await expect(
            formsPage.getAccountResult()
        ).toBeVisible();
        await expect(
            formsPage.getAccountResult()
        ).toContainText(FormsData.positive.expectedResults.accountSetupCompleteMessage)
        await expect(
            formsPage.getAccountResult()
        ).toContainText(FormsData.positive.expectedResults.accoutSecureMessage)
        await expect(
            formsPage.getFillAgainButton()
        ).toBeVisible();
        // Validate Account section
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
    }));

    qase(480, test('Click Fill Again', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.positive.validUser.confirmPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.confirmPassword
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate text in Account result
        await expect(
            formsPage.getAccountResult()
        ).toBeVisible();
        // Click Fill Again Button
        await formsPage.clickFillAgainButton();
        // Validate Account result
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
        await expect(
            formsPage.getFillAgainButton()
        ).not.toBeVisible();
        // Validate Account section
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
    }));

    qase(481, test('Blank Password', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.positive.validUser.confirmPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.confirmPassword
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate Password error message
        await expect(
            formsPage.getPasswordError()
        ).toHaveText(
            FormsData.negative.expectedResults.passwordRequiredMessage
        );
        // Validate Account result not displayed
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
    }));

    qase(482, test('Blank Confirm Password', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate Confirm Password error message
        await expect(
            formsPage.getConfirmPasswordError()
        ).toHaveText(
            FormsData.negative.expectedResults.confirmPasswordRequiredMessage
        );
        // Validate Account result not displayed
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
    }));

    qase(483, test('Unchecked Terms and Condition', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.positive.validUser.confirmPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.confirmPassword
        );
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate Terms and Condition error message
        await expect(
            formsPage.getTermsAndConditionError()
        ).toHaveText(
            FormsData.negative.expectedResults.termsAndConditionRequiredMessage
        );
        // Validate Account result not displayed
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
    }));

    qase(484, test('Mismatched Password', 
        {
            tag: ['@regression', '@negative']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.negative.invalidUser.mismatchedPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.negative.invalidUser.mismatchedPassword
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Submit button
        await formsPage.clickSubmitButton();
        // Validate Confirm Password error message
        await expect(
            formsPage.getConfirmPasswordError()
        ).toHaveText(
            FormsData.negative.expectedResults.passwordsDoNotMatchMessage
        );
        // Validate Account result not displayed
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
    }));

    qase(485, test('Account Reset Button', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Input Password
        await formsPage.enterPassword(
            FormsData.positive.validUser.password
        );
        await expect(
            formsPage.getPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.password
        );
        // Input Confirm Password
        await formsPage.enterConfirmPassword(
            FormsData.positive.validUser.confirmPassword
        );
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveValue(
            FormsData.positive.validUser.confirmPassword
        );
        // Check Terms & Conditions
        await formsPage.selectTermsAndConditions();
        // Click Reset button
        await formsPage.clickAccountResetButton();
        // Validate text in Password input
        await expect(
            formsPage.getPasswordInput()
        ).toBeEmpty();
        // Validate text in Confirm Password input
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toBeEmpty();
        // Validate checkbox in Terms and Condition checkbox
        await expect(
            formsPage.getTermsAndConditionCheckBox()
        ).not.toBeChecked();
        // Validate Account result not displayed
        await expect(
            formsPage.getAccountResult()
        ).not.toBeVisible();
    }));

    qase(486, test('Account Section Placeholder', 
        {
            tag: ['@regression', '@positive']
        },
    async () => {
        // Wait for Account section to be visible
        await expect(
            formsPage.getAccountSection()
        ).toBeVisible();
        // Password placeholder
        await expect(
            formsPage.getPasswordInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.passwordPlaceholder
        );
        // Confirm Password placeholder
        await expect(
            formsPage.getConfirmPasswordInput()
        ).toHaveAttribute(
            GenericData.placeholder, FormsData.placeholder.confirmPasswordPlaceholder
        );
    }));

});