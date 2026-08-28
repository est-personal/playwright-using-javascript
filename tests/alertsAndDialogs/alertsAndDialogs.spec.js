const {test, expect} = require('../../fixtures/Pages.fixture');
const { AlertsAndDialogsLocators } = require('../../locators/AlertsAndDialogsLocators');
const { AlertsAndDialogsData } = require('../../testData/AlertsAndDialogsData');
const { AlertsAndDialogsActions } = require('../../helpers/AlertsAndDialogsActions');
const { ConstantsData } = require('../../testData/ConstantsData');

const scenarios = [
    {
        scenario: 'Close Info Dialog',
        name: 'Click Got It',
        section: 'closeInfoDialog',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.closeInfoDialogModalGotItButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.closeInfoDialog,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Close Info Dialog',
        name: 'Click X',
        section: 'closeInfoDialog',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.closeInfoDialogModalXButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.closeInfoDialog,
        tags: ['@regression', '@positive']
    },
    {
        scenario: 'Confirm Action',
        name: 'Click Confirm',
        section: 'confirmAction',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.confirmActionModalConfirmButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.confirmAction,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Confirm Action',
        name: 'Click Cancel',
        section: 'confirmAction',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.confirmActionModalCancelButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.placeholder.confirmAction,
        tags: ['@regression', '@positive']
    },
    {
        scenario: 'Cancel Stay',
        name: 'Click Stay',
        section: 'cancelStay',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.cancelStayModalStayButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.cancelStay,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Cancel Stay',
        name: 'Click Leave',
        section: 'cancelStay',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.cancelStayModalLeaveButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.placeholder.cancelStay,
        tags: ['@regression', '@positive']
    },
    {
        scenario: 'Destructive Confirm',
        name: 'Click Delete Account',
        section: 'destructiveConfirm',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.destructiveConfirmModalDeleteAccountButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.destructiveConfirm,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Destructive Confirm',
        name: 'Click Cancel',
        section: 'destructiveConfirm',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.destructiveConfirmModalCancelButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.placeholder.destructiveConfirm,
        tags: ['@regression', '@positive']
    },
    {
        scenario: 'Backdrop Click',
        name: 'Click Outside Of Modal',
        section: 'backdropClick',
        action: page => page.clickBackdropClickOutsideModalArea(),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.backdropClick,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Backdrop Click',
        name: 'Click Inside Of Modal',
        section: 'backdropClick',
        action: page => page.clickBackdropClickInsideModalArea(),
        expectedVisible: true,
        validateResult: false,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Escape Key',
        name: 'Click Esc Key',
        section: 'escapeKey',
        action: page => page.pressKey(ConstantsData.keyboard.ESCAPE),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.escapeKey,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Escape Key',
        name: 'Click Enter Key',
        section: 'escapeKey',
        action: page => page.pressKey(ConstantsData.keyboard.ENTER),
        expectedVisible: true,
        validateResult: false,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Escape Key',
        name: 'Click Tab Key',
        section: 'escapeKey',
        action: page => page.pressKey(ConstantsData.keyboard.TAB),
        expectedVisible: true,
        validateResult: false,
        tags: ['@regression', '@negative']
    },
    {
        scenario: 'Assert Content',
        name: 'Click Got It',
        section: 'assertContent',
        action: page => page.clickDialogButton(AlertsAndDialogsLocators.assertContentModalGotItButton),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.assertContent,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Scoped Dismiss',
        name: 'Low Disk Space',
        section: 'scopedDismiss',
        notifId: 1,
        action: page => page.clickScopedDismissModalLowDiskSpaceDismissButton(),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.scopedDismiss.lowDiskSpace,
        tags: ['@smoke', '@regression', '@positive']
    },
    {
        scenario: 'Scoped Dismiss',
        name: 'Session Expiring Soon',
        section: 'scopedDismiss',
        notifId: 2,
        action: page => page.clickScopedDismissModalSessionExpiringSoonDismissButton(),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.scopedDismiss.sessionExpiringSoon,
        tags: ['@regression', '@positive']
    },
    {
        scenario: 'Scoped Dismiss',
        name: 'Security Alert',
        section: 'scopedDismiss',
        notifId: 3,
        action: page => page.clickScopedDismissModalSecurityAlertDismissButton(),
        expectedVisible: false,
        validateResult: true,
        expectedResult: AlertsAndDialogsData.result.scopedDismiss.securityAlert,
        tags: ['@regression', '@positive']
    },
];

test.describe('QA Playground - Alerts And Dialogs Tests', () => {

    scenarios.forEach(data => {
        test.describe(`${data.scenario} Section`, () => {
        // scenarios.forEach(data => {
            test(`${data.name}`, {
                tag: data.tags
            }, async ({ alertsAndDialogsPage }) => {
                // Click button
                await alertsAndDialogsPage.clickScenarioButton(
                    data.section,
                    data.notifId
                );
                // Validate modal
                expect(
                    await alertsAndDialogsPage.isVisible(
                        AlertsAndDialogsActions[data.section].title
                    )
                ).toBeTruthy();
                // Click modal button
                await data.action(alertsAndDialogsPage);
                // Validate modal state
                expect(
                    await alertsAndDialogsPage.isVisible(
                        AlertsAndDialogsActions[data.section].title
                    )
                ).toBe(
                    data.expectedVisible
                );
                if (data.validateResult !== false) {
                    expect(
                        await alertsAndDialogsPage.getResult(
                            AlertsAndDialogsActions[data.section].result
                        )
                    ).toBe(
                        data.expectedResult
                    );
                }
            });
        });
    });
});