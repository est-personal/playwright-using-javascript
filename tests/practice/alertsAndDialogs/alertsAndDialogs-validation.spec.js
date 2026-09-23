const {test, expect} = require('../../fixtures/Pages.fixture');
const { AlertsAndDialogsData } = require('../../testData/AlertsAndDialogsData');
const { AlertsAndDialogsActions } = require('../../helpers/AlertsAndDialogsActions');
const { AlertsAndDialogsAssertions } = require('../../helpers/AlertsAndDialogsAssertions');

const scenarios = [
    {
        name: 'Close Info Dialog',
        section: 'closeInfoDialog',
        expectedButton: AlertsAndDialogsData.buttonText.closeInfoDialog,
        expectedResult: AlertsAndDialogsData.placeholder.closeInfoDialog,
        expectedTitle: AlertsAndDialogsData.modalTitle.closeInfoDialog,
        expectedMessage: AlertsAndDialogsData.modalMessage.closeInfoDialog
    },
    {
        name: 'Confirm Action',
        section: 'confirmAction',
        expectedButton: AlertsAndDialogsData.buttonText.confirmAction,
        expectedResult: AlertsAndDialogsData.placeholder.confirmAction,
        expectedTitle: AlertsAndDialogsData.modalTitle.confirmAction,
        expectedMessage: AlertsAndDialogsData.modalMessage.confirmAction
    },
    {
        name: 'Cancel Stay',
        section: 'cancelStay',
        expectedButton: AlertsAndDialogsData.buttonText.cancelStay,
        expectedResult: AlertsAndDialogsData.placeholder.cancelStay,
        expectedTitle: AlertsAndDialogsData.modalTitle.cancelStay,
        expectedMessage: AlertsAndDialogsData.modalMessage.cancelStay
    },
    {
        name: 'Destructive Confirm',
        section: 'destructiveConfirm',
        expectedButton: AlertsAndDialogsData.buttonText.destructiveConfirm,
        expectedResult: AlertsAndDialogsData.placeholder.destructiveConfirm,
        expectedTitle: AlertsAndDialogsData.modalTitle.destructiveConfirm,
        expectedMessage: AlertsAndDialogsData.modalMessage.destructiveConfirm
    },
    {
        name: 'Backdrop Click',
        section: 'backdropClick',
        expectedButton: AlertsAndDialogsData.buttonText.backdropClick,
        expectedResult: AlertsAndDialogsData.placeholder.backdropClick,
        expectedTitle: AlertsAndDialogsData.modalTitle.backdropClick,
        expectedMessage: AlertsAndDialogsData.modalMessage.backdropClick
    },
    {
        name: 'Escape Key',
        section: 'escapeKey',
        expectedButton: AlertsAndDialogsData.buttonText.escapeKey,
        expectedResult: AlertsAndDialogsData.placeholder.escapeKey,
        expectedTitle: AlertsAndDialogsData.modalTitle.escapeKey,
        expectedMessage: AlertsAndDialogsData.modalMessage.escapeKey
    },
    {
        name: 'Assert Content',
        section: 'assertContent',
        expectedButton: AlertsAndDialogsData.buttonText.assertContent,
        expectedResult: AlertsAndDialogsData.placeholder.assertContent,
        expectedTitle: AlertsAndDialogsData.modalTitle.assertContent,
        expectedMessage: AlertsAndDialogsData.modalMessage.assertContent
    },
    {
        name: 'Scoped Dismiss: Low Disk Space',
        section: 'scopedDismiss',
        notifId: 1,
        expectedButton: AlertsAndDialogsData.buttonText.scopedDismiss,
        expectedResult: AlertsAndDialogsData.placeholder.scopedDismiss,
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.lowDiskSpace,
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.lowDiskSpace
    },
    {
        name: 'Scoped Dismiss: Session Expiring Soon',
        section: 'scopedDismiss',
        notifId: 2,
        expectedButton: AlertsAndDialogsData.buttonText.scopedDismiss,
        expectedResult: AlertsAndDialogsData.placeholder.scopedDismiss,
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.sessionExpiringSoon,
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.sessionExpiringSoon
    },
    {
        name: 'Scoped Dismiss: Security Alert',
        section: 'scopedDismiss',
        notifId: 3,
        expectedButton: AlertsAndDialogsData.buttonText.scopedDismiss,
        expectedResult: AlertsAndDialogsData.placeholder.scopedDismiss,
        expectedTitle: AlertsAndDialogsData.modalTitle.scopedDismiss.securityAlert,
        expectedMessage: AlertsAndDialogsData.modalMessage.scopedDismiss.securityAlert
    }
];

test.describe('QA Playground - Alerts And Dialogs - Button Text Validations', () => {
    scenarios.forEach(data => {
        test(`${data.name} Section`, {
            tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            // Validate Button text
            await expect(
                await alertsAndDialogsPage.getText(
                    alertsAndDialogsPage.getButtonLocator(
                        data.section,
                        data.notifId
                    )
                )
            ).toBe(
                data.expectedButton
            );
        });
    });
});

const placeholderScenarios = scenarios.filter(
    (data, index, array) =>
        index === array.findIndex(
            item => item.section === data.section
        )
);

test.describe('QA Playground - Alerts And Dialogs - Default Result Text Validations', () => {
    placeholderScenarios.forEach(data => {
        test(`${data.name} Section`, {
                tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            // Validate default text in Result
            await expect(
                await alertsAndDialogsPage.getResult(
                    AlertsAndDialogsActions[data.section].result
                )
            ).toBe(
                data.expectedResult
            );
        });
    });
});

test.describe('QA Playground - Alerts And Dialogs - Modal Content Validations', () => {
    scenarios.forEach(data => {
        test(`${data.name} Section`, {
            tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            // Click button
            await alertsAndDialogsPage.clickScenarioButton(
                data.section,
                data.notifId
            );
            // Use Actions helper
            const modalContent = 
                AlertsAndDialogsActions[data.section];
            // Validate modal content
            await AlertsAndDialogsAssertions.validateModalContent(
                alertsAndDialogsPage,
                modalContent.title,
                data.expectedTitle,
                modalContent.message,
                data.expectedMessage
            );
        });
    });
});