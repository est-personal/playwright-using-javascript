// Arrange Alphabetically
// Keywords for QA Playground - FormsLocators Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { FormsLocators } = require('../locators/FormsLocators');

class FormsPage {

    constructor(page) {
        this.page = page;
    }

    // Async
    async clickAccountResetButton() {
        await this.page
            .locator(FormsLocators.accountResetButton)
            .click();
    }

    async clickAddressResetButton() {
        await this.page
            .locator(FormsLocators.addressResetButton)
            .click();
    }

    async clickFillAgainButton() {
        await this.page
            .locator(FormsLocators.fillAgainButton)
            .click();
    }

    async clickInterestsResetButton() {
        await this.page
            .locator(FormsLocators.interestResetButton)
            .click();
    }

    async clickLoginButton() {
        await this.page
            .locator(FormsLocators.loginButton)
            .click();
    }

    async clickLoginResetButton() {
        await this.page
            .locator(FormsLocators.loginResetButton)
            .click();
    }

    async clickPersonalResetButton() {
        await this.page
            .locator(FormsLocators.personalResetButton)
            .click();
    }

    async clickSaveAddressButton() {
        await this.page
            .locator(FormsLocators.saveAddressButton)
            .click();
    }

    async clickSaveDetailsButton() {
        await this.page
            .locator(FormsLocators.saveDetailsButton)
            .click();
    }

    async clickSaveInterestsButton() {
        await this.page
            .locator(FormsLocators.saveInterestButton)
            .click();
    }

    async clickSubmitButton() {
        await this.page
            .locator(FormsLocators.submitButton)
            .click();
    }

    async enterAboutYou(aboutYou) {
        await this.page
            .locator(FormsLocators.aboutYouInput)
            .fill(aboutYou);
    }

    async enterCity(city) {
        await this.page
            .locator(FormsLocators.cityInput)
            .fill(city);
    }

    async enterConfirmPassword(password) {
        await this.page
            .locator(FormsLocators.confirmPasswordInput)
            .fill(password);
    }

    async enterDateOfBirth(dob) {
        await this.page
            .locator(FormsLocators.dateOfBirthInput)
            .fill(dob);
    }

    async enterEmail(email) {
        await this.page
            .locator(FormsLocators.emailInput)
            .fill(email);
    }

    async enterFirstName(firstName) {
        await this.page
            .locator(FormsLocators.firstNameInput)
            .fill(firstName);
    }

    async enterLastName(lastName) {
        await this.page
            .locator(FormsLocators.lastNameInput)
            .fill(lastName);
    }

    async enterLoginPassword(password) {
        await this.page
            .locator(FormsLocators.loginPasswordInput)
            .fill(password);
    }

    async enterPassword(password) {
        await this.page
            .locator(FormsLocators.accountPasswordInput)
            .fill(password);
    }

    async enterPhone(phone) {
        await this.page
            .locator(FormsLocators.phoneInput)
            .fill(phone);
    }

    async navigateToForms() {
        await this.page.goto(
            QaPlaygroundUrls.formsPage,
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async noInterestSelected() {
        const checkboxes = [
            FormsLocators.seleniumCheckBox,
            FormsLocators.playwrightCheckBox,
            FormsLocators.cypressCheckBox,
            FormsLocators.appiumCheckBox,
            FormsLocators.jestCheckBox
        ];
        for (const checkbox of checkboxes) {
            const isChecked = await this.page
                .locator(checkbox)
                .isChecked();
            if (isChecked) {
                throw new Error(
                    `Checkbox ${checkbox} is checked but should not be`
                );
            }
        }
    }

    async selectAppium() {
        await this.page
            .locator(FormsLocators.appiumCheckBox)
            .check();
    }

    async selectCountry(country) {
        await this.page
            .locator(FormsLocators.countryDropdown)
            .selectOption({ 
                label: country 
            });
    }

    async selectCypress() {
        await this.page
            .locator(FormsLocators.cypressCheckBox)
            .check();
    }

    async selectFemaleGender() {
        await this.page
            .locator(FormsLocators.femaleRadioButton)
            .check();
    }

    async selectGender(gender) {
        const genderMap = {
            male: FormsLocators.maleRadioButton,
            female: FormsLocators.femaleRadioButton,
            other: FormsLocators.otherRadioButton
        };
        await this.page
            .locator(genderMap[gender])
            .waitFor(
                {State: 'visible'}
            );
        await this.page
            .locator(genderMap[gender])
            .click();
    }

    async selectInterest(interests) {
        const interestMap = {
            Selenium: FormsLocators.seleniumCheckBox,
            Playwright: FormsLocators.playwrightCheckBox,
            Cypress: FormsLocators.cypressCheckBox,
            Appium: FormsLocators.appiumCheckBox,
            Jest: FormsLocators.jestCheckBox
        };
        const items = Array.isArray(interests)
            ? interests
            : [interests];
        for (const interest of items) {
            if (!interestMap[interest]) {
                throw new Error(`Unsupported interest: ${interest}`);
            }
            const locator = this.page.locator(interestMap[interest]);
            if (!(await locator.isChecked())) {
                await locator.check();
            }
            // await expect(locator).toBeChecked();
        }
    }

    async selectJest() {
        await this.page
            .locator(FormsLocators.jestCheckBox)
            .check();
    }

    async selectMaleGender() {
        await this.page
            .locator(FormsLocators.maleRadioButton)
            .check();
    }

    async selectOtherGender() {
        await this.page
            .locator(FormsLocators.otherRadioButton)
            .check();
    }

    async selectPlaywright() {
        await this.page
            .locator(FormsLocators.playwrightCheckBox)
            .check();
    }

    async selectSelenium() {
        await this.page
            .locator(FormsLocators.seleniumCheckBox)
            .check();
    }

    async selectTermsAndConditions() {
        await this.page
            .locator(FormsLocators.termsAndConditionCheckBox)
            .check();
    }

    // Sync
    getAboutYouInput() {
        return this.page
            .locator(
                FormsLocators.aboutYouInput
        );
    }

    getAccountResult() {
        return this.page
            .locator(
                FormsLocators.accountResult
        );
    }

    getAccountSection() {
        return this.page
            .locator(
                FormsLocators.accountSection
        );
    }

    getAddressCityError() {
        return this.page
            .locator(
                FormsLocators.cityError
        );
    }

    getAddressCountryError() {
        return this.page
            .locator(
                FormsLocators.countryError
        );
    }

    getAddressResult() {
        return this.page
            .locator(
                FormsLocators.addressResult
        );
    }

    getAddressSection() {
        return this.page
            .locator(
                FormsLocators.addressSection
        );
    }

    getCityInput() {
        return this.page
            .locator(
                FormsLocators.cityInput
        );
    }

    getConfirmPasswordError() {
        return this.page
            .locator(
                FormsLocators.confirmPasswordError
        );
    }

    getConfirmPasswordInput() {
        return this.page
            .locator(
                FormsLocators.confirmPasswordInput
        );
    }

    getCountryDropdown() {
        return this.page
            .locator(
                FormsLocators.countryDropdown
        );
    }

    getDateOfBirthInput() {
        return this.page
            .locator(
                FormsLocators.dateOfBirthInput
        );
    }

    getEmailInput() {
        return this.page
            .locator(
                FormsLocators.emailInput
        );
    }

    getFemaleRadioButton() {
        return this.page
            .locator(
                FormsLocators.femaleRadioButton
        );
    }

    getFillAgainButton() {
        return this.page
            .locator(
                FormsLocators.fillAgainButton
        );
    }

    getFirstNameInput() {
        return this.page
            .locator(
                FormsLocators.firstNameInput
        );
    }

    getInterestsError() {
        return this.page
            .locator(
                FormsLocators.interestsError
        );
    }

    getInterestsResult() {
        return this.page
            .locator(
                FormsLocators.interestsResult
        );
    }

    getInterestsSection() {
        return this.page
            .locator(
                FormsLocators.interestsSection
        );
    }

    getLastNameInput() {
        return this.page
            .locator(
                FormsLocators.lastNameInput
        );
    }

    getLoginEmailError() {
        return this.page
            .locator(
                FormsLocators.loginEmailError
        );
    }

    getLoginPasswordError() {
        return this.page
            .locator(
                FormsLocators.loginPasswordError
        );
    }

    getLoginPasswordInput() {
        return this.page
            .locator(
                FormsLocators.loginPasswordInput
        );
    }

    getLoginResult() {
        return this.page
            .locator(
                FormsLocators.loginResult
        );
    }

    getLoginSection() {
        return this.page
            .locator(
                FormsLocators.loginSection
        );
    }

    getMaleRadioButton() {
        return this.page
            .locator(
                FormsLocators.maleRadioButton
        );
    }

    getOtherRadioButton() {
        return this.page
            .locator(
                FormsLocators.otherRadioButton
        );
    }

    getPasswordError() {
        return this.page
            .locator(
                FormsLocators.passwordError
        );
    }

    getPasswordInput() {
        return this.page
            .locator(
                FormsLocators.accountPasswordInput
        );
    }

    getPersonalDateOfBirthError() {
        return this.page
            .locator(
                FormsLocators.dateOfBirthError
        );
    }

    getPersonalSection() {
        return this.page
            .locator(
                FormsLocators.personalSection
        );
    }

    getPersonalFirstNameError() {
        return this.page
            .locator(
                FormsLocators.firstNameError
        );
    }

    getPersonalGenderError() {
        return this.page
            .locator(
                FormsLocators.genderError
        );
    }

    getPersonalLastNameError() {
        return this.page
            .locator(
                FormsLocators.lastNameError
        );
    }

    getPersonalPhoneError() {
        return this.page
            .locator(
                FormsLocators.phoneError
        );
    }

    getPersonalResult() {
        return this.page
            .locator(
                FormsLocators.personalResult
        );
    }

    getPhoneInput() {
        return this.page
            .locator(
                FormsLocators.phoneInput
        );
    }

    getTermsAndConditionCheckBox() {
        return this.page
            .locator(
                FormsLocators.termsAndConditionCheckBox
        );
    }

    getTermsAndConditionError() {
        return this.page
            .locator(
                FormsLocators.termsAndConditionError
        );
    }

}

module.exports = { FormsPage };