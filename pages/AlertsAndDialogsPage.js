// Arrange Alphabetically
// Keywords for QA Playground - Alerts and Dialogs Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { AlertsAndDialogsLocators } = require('../locators/AlertsAndDialogsLocators');
const { BasePage } = require('./BasePage');

class AlertsAndDialogsPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickAssertContentButton() {
       await this.click(
            AlertsAndDialogsLocators.assertContentButton
        );
    }

    async clickAssertContentModalGotItButton() {
       await this.click(
            AlertsAndDialogsLocators.assertContentModalGotItButton
        );
    }

    async clickBackdropClickButton() {
       await this.click(
            AlertsAndDialogsLocators.backdropClickButton
        );
    }

    async clickBackdropClickDismissArea() {
        const dialogBox = this.page.locator(
            AlertsAndDialogsLocators.backdropClickDialog
        );
        const box = await dialogBox.boundingBox();
        await this.page.mouse.click(
            box.x - 20,
            box.y - 20
        );
    }

    async clickBackdropClickInsideArea() {
        const dialogBox = this.page.locator(
            AlertsAndDialogsLocators.backdropClickDialog
        );
        await dialogBox.click({
            position: { x: 50, y: 50 }
        });
    }

    async clickCancelStayButton() {
       await this.click(
            AlertsAndDialogsLocators.cancelStayButton
        );
    }

    async clickCancelStayModalLeaveButton() {
       await this.click(
            AlertsAndDialogsLocators.cancelStayModalLeaveButton
        );
    }

    async clickCancelStayModalStayButton() {
       await this.click(
            AlertsAndDialogsLocators.cancelStayModalStayButton
        );
    }

    async clickCloseInfoDialogButton() {
       await this.click(
            AlertsAndDialogsLocators.closeInfoDialogButton
        );
    }

    async clickCloseInfoDialogModalGotItButton() {
       await this.click(
            AlertsAndDialogsLocators.closeInfoDialogModalGotItButton
        );
    }

    async clickCloseInfoDialogModalXButton() {
       await this.click(
            AlertsAndDialogsLocators.closeInfoDialogModalXButton
        );
    }

    async clickConfirmActionButton() {
       await this.click(
            AlertsAndDialogsLocators.confirmActionButton
        );
    }

    async clickConfirmActionModalCancelButton() {
       await this.click(
            AlertsAndDialogsLocators.confirmActionModalCancelButton
        );
    }

    async clickConfirmActionModalConfirmButton() {
       await this.click(
            AlertsAndDialogsLocators.confirmActionModalConfirmButton
        );
    }

    async clickDestructiveConfirmButton() {
       await this.click(
            AlertsAndDialogsLocators.destructiveConfirmButton
        );
    }

    async clickDestructiveConfirmModalCancelButton() {
       await this.click(
            AlertsAndDialogsLocators.destructiveConfirmModalCancelButton
        );
    }

    async clickDestructiveConfirmModalDeleteAccountButton() {
       await this.click(
            AlertsAndDialogsLocators.destructiveConfirmModalDeleteAccountButton
        );
    }

    async clickEscapeKeyButton() {
       await this.click(
            AlertsAndDialogsLocators.escapeKeyButton
        );
    }

    async clickScopedDismissLowDiskSpaceButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissLowDiskSpaceDismissButton
        );
    }

    async clickScopedDismissModalCancelButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissModalCancelButton
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

    async clickScopedDismissSecurityAlertButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissSecurityAlertDismissButton
        );
    }

    async clickScopedDismissSessionExpiringSoonButton() {
       await this.click(
            AlertsAndDialogsLocators.scopedDismissSessionExpiringSoonDismissButton
        );
    }

    async getAssertContentModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.assertContentModalMessage
        );
    }

    async getAssertContentModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.assertContentModalTitle
        );
    }

    async getAssertContentResult() {
        return await this.getText(
            AlertsAndDialogsLocators.assertContentResult
        );
    }

    async getBackdropClickModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.backdropClickModalMessage
        );
    }

    async getBackdropClickModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.backdropClickModalTitle
        );
    }

    async getBackdropClickResult() {
        return await this.getText(
            AlertsAndDialogsLocators.backdropClickResult
        );
    }

    async getCancelStayModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.cancelStayModalMessage
        );
    }

    async getCancelStayModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.cancelStayModalTitle
        );
    }

    async getCancelStayResult() {
        return await this.getText(
            AlertsAndDialogsLocators.cancelStayResult
        );
    }

    async getCloseInfoDialogModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.closeInfoDialogModalMessage
        );
    }

    async getCloseInfoDialogModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.closeInfoDialogModalTitle
        );
    }

    async getCloseInfoDialogResult() {
        return await this.getText(
            AlertsAndDialogsLocators.closeInfoDialogResult
        );
    }

    async getConfirmActionModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.confirmActionModalMessage
        );
    }

    async getConfirmActionModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.confirmActionModalTitle
        );
    }

    async getConfirmActionResult() {
        return await this.getText(
            AlertsAndDialogsLocators.confirmActionResult
        );
    }

    async getDestructiveConfirmModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.destructiveConfirmModalMessage
        );
    }

    async getDestructiveConfirmModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.destructiveConfirmModalTitle
        );
    }

    async getDestructiveConfirmResult() {
        return await this.getText(
            AlertsAndDialogsLocators.destructiveConfirmResult
        );
    }

    async getEscapeKeyModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.escapeKeyModalMessage
        );
    }

    async getEscapeKeyModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.escapeKeyModalTitle
        );
    }

    async getEscapeKeyResult() {
        return await this.getText(
            AlertsAndDialogsLocators.escapeKeyResult
        );
    }

    async getScopedDismissModalMessage() {
        return await this.getText(
            AlertsAndDialogsLocators.scopedDismissModalMessage
        );
    }

    async getScopedDismissModalTitle() {
        return await this.getText(
            AlertsAndDialogsLocators.scopedDismissModalTitle
        );
    }

    async getScopedDismissResult() {
        return await this.getText(
            AlertsAndDialogsLocators.scopedDismissResult
        );
    }

    async isAssertContentModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.assertContentModalTitle
        );
    }

    async isBackdropClickModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.backdropClickModalTitle
        );
    }

    async isCancelStayModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.cancelStayModalTitle
        );
    }

    async isCloseInfoDialogModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.closeInfoDialogModalTitle
        );
    }

    async isConfirmActionModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.confirmActionModalTitle
        );
    }

    async isDestructiveConfirmModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.destructiveConfirmModalTitle
        );
    }

    async isEscapeKeyModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.escapeKeyModalTitle
        );
    }

    async isScopedDismissModalVisible() {
        return await this.isVisible(
            AlertsAndDialogsLocators.scopedDismissModalTitle
        );
    }

    async navigateToAlertsAndDialogs() {
        await this.navigate(
            QaPlaygroundUrls.alertsAndDialogsPage
        );
    }

    // Non-Async
    getNotificationDismissButton(notifId) {
        return this.page
            .locator(
                `[data-notif-id="notif-${notifId}"] [data-testid="notif-dismiss-btn"]`
        );
    }

    getOpenBackdropDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openBackdropDialogButton
        );
    }

    getOpenConfirmDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openConfirmDialogButton
        );
    }

    getOpenDeleteDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openDeleteDialogButton
        );
    }

    getOpenKeyboardDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openKeyboardDialogButton
        );
    }

    getOpenInfoDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openInfoDialogButton
        );
    }

    getOpenNotificationButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openNotificationButton
        );
    }

    getUnsavedDialogButton() {
        return this.page
            .locator(
                AlertsAndDialogsLocators.openUnsavedDialogButton
        );
    }

}

module.exports = { AlertsAndDialogsPage };