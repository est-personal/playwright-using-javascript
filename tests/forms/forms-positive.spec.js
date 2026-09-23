const {test, expect} = require('../../fixtures/Pages.fixture');
const { FormsData } = require('../../testData/FormsData');

test.describe('QA Playground - Forms Tests', () => {
    test.describe('Login Form', () => {
        test('Successful Login', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Login section to be visible
            await expect(
                formsPage.getLoginSection()
            ).toBeVisible();
            // Input Email
            await formsPage.enterEmail(
                FormsData.user.validUser.email
            );
            await expect(
                formsPage.getEmailInput()
            ).toHaveValue(
                FormsData.user.validUser.email
            );
            // Input Password
            await formsPage.enterLoginPassword(
                FormsData.user.validUser.password
            );
            await expect(
                formsPage.getLoginPasswordInput()
            ).toHaveValue(
                FormsData.user.validUser.password
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
                FormsData.expectedResults.loginSuccessUserMessage
            );
        });
    
    });

    test.describe('Personal Details Form', () => {
        test('Successful Personal Details', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Personal Details section to be visible
            await expect(
                formsPage.getPersonalSection()
            ).toBeVisible();
            // Input First Name
            await formsPage.enterFirstName(
                FormsData.user.validUser.firstName
            );
            await expect(
                formsPage.getFirstNameInput()
            ).toHaveValue(
                FormsData.user.validUser.firstName
            );
            // Input Last Name
            await formsPage.enterLastName(
                FormsData.user.validUser.lastName
            );
            await expect(
                formsPage.getLastNameInput()
            ).toHaveValue(
                FormsData.user.validUser.lastName
            );
            // Input Phone
            await formsPage.enterPhone(
                FormsData.user.validUser.phone
            );
            await expect(
                formsPage.getPhoneInput()
            ).toHaveValue(
                FormsData.user.validUser.phone
            );
            // Input Date of Birth
            await formsPage.enterDateOfBirth(
                FormsData.user.validUser.dateOfBirth
            );
            await expect(
                formsPage.getDateOfBirthInput()
            ).toHaveValue(
                FormsData.user.validUser.dateOfBirth
            );
            // Select Gender
            await formsPage.selectGender(
                FormsData.user.validUser.gender
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
                FormsData.expectedResults.personalSuccessUserMessage
            );
        });
    
    });
    
    test.describe('Address Form', () => {
        test('Successful Address', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Address section to be visible
            await expect(
                formsPage.getAddressSection()
            ).toBeVisible();
            // Select Country
            await formsPage.selectCountry(
                FormsData.user.validUser.country
            );
            await expect(
                formsPage.getCountryDropdown()
            ).toHaveValue(
                FormsData.user.validUser.countryCode
            );
            // Input City
            await formsPage.enterCity(
                FormsData.user.validUser.city
            );
            await expect(
                formsPage.getCityInput()
            ).toHaveValue(
                FormsData.user.validUser.city
            );
            // Input About You
            await formsPage.enterAboutYou(
                FormsData.user.validUser.aboutYou
            );
            await expect(
                formsPage.getAboutYouInput()
            ).toHaveValue(
                FormsData.user.validUser.aboutYou
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
                FormsData.expectedResults.addressSuccessUserMessage
            );
        });

        test('Blank About You', 
            {
                tag: ['@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Address section to be visible
            await expect(
                formsPage.getAddressSection()
            ).toBeVisible();
            // Select Country
            await formsPage.selectCountry(
                FormsData.user.validUser.country
            );
            await expect(
                formsPage.getCountryDropdown()
            ).toHaveValue(
                FormsData.user.validUser.countryCode
            );
            // Input City
            await formsPage.enterCity(
                FormsData.user.validUser.city
            );
            await expect(
                formsPage.getCityInput()
            ).toHaveValue(
                FormsData.user.validUser.city
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
                FormsData.expectedResults.addressSuccessUserMessage
            );
        });

    });

    test.describe('Interests Form', () => {
        test('Successful Interests Form', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Interests section to be visible
            await expect(
                formsPage.getInterestsSection()
            ).toBeVisible();
            // Set Variable
            const expectedInterests = 
                FormsData.expectedResults.interestsSavedMessage + FormsData.user.validUser.interests.join(', ');
            // Select Interest/s
            await formsPage.selectInterest(
                FormsData.user.validUser.interests
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
        async ({ formsPage }) => {
            // Wait for Interests section to be visible
            await expect(
                formsPage.getInterestsSection()
            ).toBeVisible();
            // Set Variable
            const expectedInterests = 
                FormsData.expectedResults.interestsSavedMessage + FormsData.user.validUser.oneInterest.join(', ');
            // Select Interest/s
            await formsPage.selectInterest(
                FormsData.user.validUser.oneInterest
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
        async ({ formsPage }) => {
            // Wait for Interests section to be visible
            await expect(
                formsPage.getInterestsSection()
            ).toBeVisible();
            // Select Interest/s
            await formsPage.selectInterest(
                FormsData.user.validUser.allInterests
            );
            // Click Save Interests button
            await formsPage.clickSaveInterestsButton();
            // Validate text in Interests result
            await expect(
                formsPage.getInterestsResult()
            ).toBeVisible();
            const resultText =
                await formsPage.getInterestsResult().textContent();
            for (const interest of FormsData.user.validUser.interests) {
                expect(resultText).toContain(interest);
            }
        });

    });

    test.describe('Account Setup Form', () => {
        test('Successful Account Setup', 
            {
                tag: ['@smoke', '@regression', '@positive']
            },
        async ({ formsPage }) => {
            // Wait for Account section to be visible
            await expect(
                formsPage.getAccountSection()
            ).toBeVisible();
            // Input Password
            await formsPage.enterPassword(
                FormsData.user.validUser.password
            );
            await expect(
                formsPage.getPasswordInput()
            ).toHaveValue(
                FormsData.user.validUser.password
            );
            // Input Confirm Password
            await formsPage.enterConfirmPassword(
                FormsData.user.validUser.confirmPassword
            );
            await expect(
                formsPage.getConfirmPasswordInput()
            ).toHaveValue(
                FormsData.user.validUser.confirmPassword
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
            ).toContainText(FormsData.expectedResults.accountSetupCompleteMessage)
            await expect(
                formsPage.getAccountResult()
            ).toContainText(FormsData.expectedResults.accoutSecureMessage)
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
        async ({ formsPage }) => {
            // Wait for Account section to be visible
            await expect(
                formsPage.getAccountSection()
            ).toBeVisible();
            // Input Password
            await formsPage.enterPassword(
                FormsData.user.validUser.password
            );
            await expect(
                formsPage.getPasswordInput()
            ).toHaveValue(
                FormsData.user.validUser.password
            );
            // Input Confirm Password
            await formsPage.enterConfirmPassword(
                FormsData.user.validUser.confirmPassword
            );
            await expect(
                formsPage.getConfirmPasswordInput()
            ).toHaveValue(
                FormsData.user.validUser.confirmPassword
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