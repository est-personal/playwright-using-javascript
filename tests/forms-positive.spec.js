const { test, expect } = require('@playwright/test');
const { FormsPage } = require('../pages/FormsPage');
const { FormsData } = require('../testData/FormsData');
const { GenericData } = require('../testData/GenericData');

test.describe('QA Playground - Forms Tests', () => {

    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    test.describe('Login Form', () => {
        test('Successful Login', 
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
        });
    
    });

    test.describe('Personal Details Form', () => {
        test('Successful Personal Details', 
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
        });
    
    });
    
    test.describe('Address Form', () => {
        test('Successful Address', 
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
        });

        test('Blank About You', 
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
        });

    });

    test.describe('Interests Form', () => {
        test('Successful Interests Form', 
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
        });

        test('One Interest selected', 
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
        });

        test('All Interests selected', 
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
        });

    });

    test.describe('Account Setup Form', () => {
        test('Successful Account Setup', 
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
        });

        test('Click Fill Again', 
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
        });

    });

});