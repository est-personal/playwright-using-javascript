// Arrange Alphabetically
// Keywords for QA Playground - FormsLocators Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { FormsLocators } = require('../locators/FormsLocators');
const { BasePage } = require('./BasePage');

class FormsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickAccountResetButton() {
        await this.click(
            FormsLocators.accountResetButton
        );
    }

    async clickAddressResetButton() {
        await this.click(
            FormsLocators.addressResetButton
        );
    }

    async clickFillAgainButton() {
        await this.click(
            FormsLocators.fillAgainButton
        );
    }

    async clickInterestsResetButton() {
        await this.click(
            FormsLocators.interestResetButton
        );
    }

    async clickLoginButton() {
        await this.click(
            FormsLocators.loginButton
        );
    }

    async clickLoginResetButton() {
        await this.click(
            FormsLocators.loginResetButton
        );
    }

    async clickPersonalResetButton() {
        await this.click(
            FormsLocators.personalResetButton
        );
    }

    async clickSaveAddressButton() {
        await this.click(
            FormsLocators.saveAddressButton
        );
    }

    async clickSaveDetailsButton() {
        await this.click(
            FormsLocators.saveDetailsButton
        );
    }

    async clickSaveInterestsButton() {
        await this.click(
            FormsLocators.saveInterestButton
        );
    }

    async clickSubmitButton() {
        await this.click(
            FormsLocators.submitButton
        );
    }

    async enterAboutYou(aboutYou) {
        await this.fill(
            FormsLocators.aboutYouInput,
            aboutYou
        );
    }

    async enterCity(city) {
        await this.fill(
            FormsLocators.cityInput,
            city
        );
    }

    async enterConfirmPassword(password) {
        await this.fill(
            FormsLocators.confirmPasswordInput,
            password
        );
    }

    async enterDateOfBirth(dob) {
        await this.fill(
            FormsLocators.dateOfBirthInput,
            dob
        );
    }

    async enterEmail(email) {
        await this.fill(
            FormsLocators.emailInput,
            email
        );
    }

    async enterFirstName(firstName) {
        await this.fill(
            FormsLocators.firstNameInput,
            firstName
        );
    }

    async enterLastName(lastName) {
        await this.fill(
            FormsLocators.lastNameInput,
            lastName
        );
    }

    async enterLoginPassword(password) {
        await this.fill(
            FormsLocators.loginPasswordInput,
            password
        );
    }

    async enterPassword(password) {
        await this.fill(
            FormsLocators.accountPasswordInput,
            password
        );
    }

    async enterPhone(phone) {
        await this.fill(
            FormsLocators.phoneInput,
            phone
        );
    }

    async navigateToForms() {
        await this.navigate(
            QaPlaygroundUrls.formsPage
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
            const isChecked = await this.isChecked(
                checkbox
            );
            if (isChecked) {
                throw new Error(
                    `Checkbox ${checkbox} is checked but should not be`
                );
            }
        }
    }

    async selectAppium() {
        await this.check(
            FormsLocators.appiumCheckBox
        );
    }

    async selectCountry(country) {
        await this.selectByLabel(
            FormsLocators.countryDropdown,
            country 
        );
    }

    async selectCypress() {
        await this.check(
            FormsLocators.cypressCheckBox
        );
    }

    async selectFemaleGender() {
        await this.check(
            FormsLocators.femaleRadioButton
        );
    }

    async selectGender(gender) {
        const genderMap = {
            male: FormsLocators.maleRadioButton,
            female: FormsLocators.femaleRadioButton,
            other: FormsLocators.otherRadioButton
        };
        if (!genderMap[gender]) {
            throw new Error(
                `Unsupported gender: ${gender}`
            );
        }
        await this.waitForVisible(
            genderMap[gender]
        );
        await this.click(
            genderMap[gender]
        );
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
        }
    }

    async selectJest() {
        await this.check(
            FormsLocators.jestCheckBox
        );
    }

    async selectMaleGender() {
        await this.check(
            FormsLocators.maleRadioButton
        );
    }

    async selectOtherGender() {
        await this.check(
            FormsLocators.otherRadioButton
        );
    }

    async selectPlaywright() {
        await this.check(
            FormsLocators.playwrightCheckBox
        );
    }

    async selectSelenium() {
        await this.check(
            FormsLocators.seleniumCheckBox
        );
    }

    async selectTermsAndConditions() {
        await this.check(
            FormsLocators.termsAndConditionCheckBox
        );
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