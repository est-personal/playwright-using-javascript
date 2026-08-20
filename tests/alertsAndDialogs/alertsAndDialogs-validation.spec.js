const {test, expect} = require('../../fixtures/Pages.fixture');
const { AlertsAndDialogsData } = require('../../testData/AlertsAndDialogsData');

const buttonTextScenarios = [
    {
        name: 'Close Info Dialog',
        locator: page => page.getOpenInfoDialogButton(),
        expected: AlertsAndDialogsData.buttonText.closeInfoDialog
    },
    {
        name: 'Confirm Action',
        locator: page => page.getOpenConfirmDialogButton(),
        expected: AlertsAndDialogsData.buttonText.confirmAction
    },
    {
        name: 'Cancel Stay',
        locator: page => page.getUnsavedDialogButton(),
        expected: AlertsAndDialogsData.buttonText.cancelStay
    },
    {
        name: 'Destructive Confirm',
        locator: page => page.getOpenDeleteDialogButton(),
        expected: AlertsAndDialogsData.buttonText.destructiveConfirm
    },
    {
        name: 'Backdrop Click',
        locator: page => page.getOpenBackdropDialogButton(),
        expected: AlertsAndDialogsData.buttonText.backdropClick
    },
    {
        name: 'Escape Key',
        locator: page => page.getOpenKeyboardDialogButton(),
        expected: AlertsAndDialogsData.buttonText.escapeKey
    },
    {
        name: 'Assert Content',
        locator: page => page.getOpenNotificationButton(),
        expected: AlertsAndDialogsData.buttonText.assertContent
    },
    {
        name: 'Scoped Dismiss: Low Disk Space',
        locator: page => page.getNotificationDismissButton(1),
        expected: AlertsAndDialogsData.buttonText.scopedDismiss
    },
    {
        name: 'Scoped Dismiss: Session Expiring Soon',
        locator: page => page.getNotificationDismissButton(2),
        expected: AlertsAndDialogsData.buttonText.scopedDismiss
    },
    {
        name: 'Scoped Dismiss: Security Alert',
        locator: page => page.getNotificationDismissButton(3),
        expected: AlertsAndDialogsData.buttonText.scopedDismiss
    }
];

test.describe('QA Playground - Alerts And Dialogs - Button Text Validations', () => {
    buttonTextScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            await expect(
                data.locator(alertsAndDialogsPage)
            ).toHaveText(
                data.expected
            );
        });
    });
});

const placeholderScenarios = [
    {
        name: 'Close Info Dialog',
        locator: page => page.getCloseInfoDialogResult(),
        value: AlertsAndDialogsData.placeholder.closeInfoDialog,
        type: 'value'
    },
    {
        name: 'Confirm Action',
        locator: page => page.getConfirmActionResult(),
        value: AlertsAndDialogsData.placeholder.confirmAction,
        type: 'value'
    },
    {
        name: 'Cancel Stay',
        locator: page => page.getCancelStayResult(),
        value: AlertsAndDialogsData.placeholder.cancelStay,
        type: 'value'
    },
    {
        name: 'Destructive Confirm',
        locator: page => page.getDestructiveConfirmResult(),
        value: AlertsAndDialogsData.placeholder.destructiveConfirm,
        type: 'value'
    },
    {
        name: 'Backdrop Click',
        locator: page => page.getBackdropClickResult(),
        value: AlertsAndDialogsData.placeholder.backdropClick,
        type: 'value'
    },
    {
        name: 'Escape Key',
        locator: page => page.getEscapeKeyResult(),
        value: AlertsAndDialogsData.placeholder.escapeKey,
        type: 'value'
    },
    {
        name: 'Assert Content',
        locator: page => page.getAssertContentResult(),
        value: AlertsAndDialogsData.placeholder.assertContent,
        type: 'value'
    },
    {
        name: 'Scoped Dismiss',
        locator: page => page.getScopedDismissResult(),
        value: AlertsAndDialogsData.placeholder.scopedDismiss,
        type: 'value'
    }
];

test.describe('QA Playground - Alerts And Dialogs - Default Result Text Validations', () => {
    placeholderScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
                tag: ['@regression', '@positive']
        }, async ({ alertsAndDialogsPage }) => {
            if (data.type === 'placeholder') {
                expect(
                    await data.locator(alertsAndDialogsPage)
                ).toHaveAttribute(
                    'placeholder',
                    data.value
                );
            } 
            else {
                expect(
                    await data.locator(alertsAndDialogsPage)
                ).toBe(
                    data.value
                );
            }
        });
    });
});