// Arrange Alphabetically
// Keywords for QA Playground - Alerts and Dialogs Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { AlertsAndDialogsLocators } = require('../locators/AlertsAndDialogsLocators');
const { AlertsAndDialogsActions } = require('../helpers/AlertsAndDialogsActions');
const { BasePage } = require('./BasePage');

class AlertsAndDialogsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickBackdropClickInsideModalArea() {
        const dialogBox = this.page.locator(
            AlertsAndDialogsLocators.backdropClickDialog
        );
        await dialogBox.click({
            position: { x: 50, y: 50 }
        });
    }

    async clickBackdropClickOutsideModalArea() {
        const dialogBox = this.page.locator(
            AlertsAndDialogsLocators.backdropClickDialog
        );
        const box = await dialogBox.boundingBox();
        await this.page.mouse.click(
            box.x - 20,
            box.y - 20
        );
    }

    async clickDialogButton(locator) {
        await this.click(
            locator
        );
    }

    async clickScenarioButton(section, notifId) {
        if (notifId) {
            await this.clickScopedDismissDialogButton(
                notifId
            );
            return;
        }
        await this.clickDialogButton(
            AlertsAndDialogsActions[section].button
        );
    }

    async clickScopedDismissDialogButton(notifId) {
        await this.click(
            this.getScopedDismissButton(notifId)
        );
    }

    async clickScopedDismissModalLowDiskSpaceDismissButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissLowDiskSpaceModalDismissButton
        );
    }

    async clickScopedDismissModalSecurityAlertDismissButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissSecurityAlertModalDismissButton
        );
    }

    async clickScopedDismissModalSessionExpiringSoonDismissButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissSessionExpiringSoonModalDismissButton
        );
    }

    async getModalContent(titleLocator, messageLocator) {
        return {
            title: await this.getText(titleLocator),
            message: await this.getText(messageLocator)
        };
    }

    async getModalMessage(locator) {
        return await this.getText(locator);
    }

    async getModalTitle(locator) {
        return await this.getText(locator);
    }

    async getResult(locator) {
        return await this.getText(
            locator
        );
    }

    async navigateToAlertsAndDialogs() {
        await this.navigate(
            QaPlaygroundUrls.alertsAndDialogsPage
        );
    }

    // Non-Async
    getButtonLocator(section, notifId) {
        return notifId
            ? this.getScopedDismissButton(notifId)
            : AlertsAndDialogsActions[section].button;
    }

    getDialogButton(locator) {
        return this.page
            .locator(locator);
    }

    getNotificationDismissButton(notifId) {
        return this.page
            .locator(
                `[data-notif-id="notif-${notifId}"] [data-testid="notif-dismiss-btn"]`
        );
    }

    getScopedDismissButton(notifId) {
        return `[data-notif-id="notif-${notifId}"] [data-testid="notif-dismiss-btn"]`;
    };
}

module.exports = { AlertsAndDialogsPage };