// Arrange Alphabetically
// Keywords for QA Playground - Modal Windows Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { ModalWindowsLocators } = require('../locators/ModalWindowsLocators');
const { BasePage } = require('./BasePage');

class ModalWindowsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    async clickScenarioButton(section, cardTitle) {
        if (section === 'card') {
            await this.page
                .getByTestId('card-course')
                .filter({ 
                    has: this.page.locator('h4', {
                        hasText: cardTitle })
                    })
                .getByTestId('btn-open-course')
                .click();
            return;
        }
        await this.click(this.getButtonLocator(section));
    }

    async clickModalButton(section, button) {
        await this.click(
            this.getModalButtonLocator(section, button)
        );
    }

    async getResult(section) {
        return await this.getText(
            this.getResultsLocator(section)
        );
    }

    async isModalDisplayed() {
        await this.waitForElementVisible(
            ModalLocators.modal
        );
    }

    async navigateToTabsAndWindows() {
        await this.navigate(
            QaPlaygroundUrls.modalWindowsPage
        );
    }

    // Non-Async
    getButtonLocator(section) {
        const sections = {
            card: ModalWindowsLocators,
            challenge: ModalWindowsLocators.modalChallenge.button,
            dynamic: ModalWindowsLocators.modalDynamic.button,
            simple: ModalWindowsLocators.modalSimple.button
        };
        return sections[section];
    }

    getModalLocator(section) {
        const sections = {
            card: ModalWindowsLocators.modalCard.modal,
            challenge: ModalWindowsLocators.modalChallenge.modal,
            dynamic: ModalWindowsLocators.modalDynamic.modal,
            simple: ModalWindowsLocators.modalSimple.modal
        };
        return sections[section];
    }

    getModalButtonLocator(section, button) {
        const sections = {
            card: ModalWindowsLocators.modalCard,
            challenge: ModalWindowsLocators.modalChallenge,
            dynamic: ModalWindowsLocators.modalDynamic,
            simple: ModalWindowsLocators.modalSimple
        };
        return sections[section][button];
    }

    getModalContentLocator(section) {
        return `${this.getModalLocator(section)} p`;
    }

    getModalTitleLocator(section) {
        return `${this.getModalLocator(section)} h3`;
    }

    getResultsLocator(section) {
        const sections = {
            card: ModalWindowsLocators.modalCard.result,
            challenge: ModalWindowsLocators.modalChallenge.result,
            dynamic: ModalWindowsLocators.modalDynamic.result,
            simple: ModalWindowsLocators.modalSimple.result
        };
        return sections[section];
    }

}

module.exports = { ModalWindowsPage };