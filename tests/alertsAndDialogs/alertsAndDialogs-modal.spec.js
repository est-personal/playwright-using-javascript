const {test, expect} = require('../../fixtures/Pages.fixture');
const { AlertsAndDialogsData } = require('../../testData/AlertsAndDialogsData');
const { AlertsAndDialogsAssertions } = require('../../helpers/AlertsAndDialogsAssertions');

const modalTitleScenarios = [
    {
        name: 'Close Info Dialog',
        button: page => page.clickCloseInfoDialogButton(),
        titleLocator: page => page.getCloseInfoDialogModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.closeInfoDialog,
        messageLocator: page => page.getCloseInfoDialogModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.closeInfoDialog
    },
    {
        name: 'Confirm Action',
        button: page => page.clickConfirmActionButton(),
        titleLocator: page => page.getConfirmActionModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.confirmAction,
        messageLocator: page => page.getConfirmActionModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.confirmAction
    },
    {
        name: 'Cancel Stay',
        button: page => page.clickCancelStayButton(),
        titleLocator: page => page.getCancelStayModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.cancelStay,
        messageLocator: page => page.getCancelStayModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.cancelStay
    },
    {
        name: 'Destructive Confirm',
        button: page => page.clickDestructiveConfirmButton(),
        titleLocator: page => page.getDestructiveConfirmModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.destructiveConfirm,
        messageLocator: page => page.getDestructiveConfirmModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.destructiveConfirm
    },
    {
        name: 'Backdrop Click',
        button: page => page.clickBackdropClickButton(),
        titleLocator: page => page.getBackdropClickModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.backdropClick,
        messageLocator: page => page.getBackdropClickModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.backdropClick
    },
    {
        name: 'Escape Key',
        button: page => page.clickEscapeKeyButton(),
        titleLocator: page => page.getEscapeKeyModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.escapeKey,
        messageLocator: page => page.getEscapeKeyModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.escapeKey
    },
    {
        name: 'Assert Content',
        button: page => page.clickAssertContentButton(),
        titleLocator: page => page.getAssertContentModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.assertContent,
        messageLocator: page => page.getAssertContentModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.assertContent
    },
    {
        name: 'Scoped Dismiss: Low Disk Space',
        button: page => page.clickScopedDismissLowDiskSpaceButton(),
        titleLocator: page => page.getScopedDismissModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.lowDiskSpace,
        messageLocator: page => page.getScopedDismissModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.lowDiskSpace
    },
    {
        name: 'Scoped Dismiss: Session Expiring Soon',
        button: page => page.clickScopedDismissSessionExpiringSoonButton(),
        titleLocator: page => page.getScopedDismissModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.sessionExpiringSoon,
        messageLocator: page => page.getScopedDismissModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.sessionExpiringSoon
    },
    {
        name: 'Scoped Dismiss: Security Alert',
        button: page => page.clickScopedDismissSecurityAlertButton(),
        titleLocator: page => page.getScopedDismissModalTitle(),
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.securityAlert,
        messageLocator: page => page.getScopedDismissModalMessage(),
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.securityAlert
    }
];

test.describe('QA Playground - Alerts And Dialogs - Modal Content Validations', () => {
    modalTitleScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
                tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            // Click button
            await data.button(alertsAndDialogsPage);
            // Validate modal content
            await AlertsAndDialogsAssertions.validateModalContent(
                data.titleLocator(alertsAndDialogsPage),
                data.expectedTitle,
                data.messageLocator(alertsAndDialogsPage),
                data.expectedMessage
            );
        });
    });
});