const {test, expect} = require('../../fixtures/Pages.fixture');
const { AlertsAndDialogsData } = require('../../testData/AlertsAndDialogsData');
const { ConstantsData } = require('../../testData/ConstantsData');

test.describe('QA Playground - Alerts And Dialogs Tests', () => {

    test.describe('Scenario Close Info Dialog', () => {
        test('Click Got It', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Close Info Dialog button
            await alertsAndDialogsPage.clickCloseInfoDialogButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCloseInfoDialogModalVisible()
            ).toBeTruthy();
            // Click Close Info Dialog Modal - Got It button
            await alertsAndDialogsPage.clickCloseInfoDialogModalGotItButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCloseInfoDialogModalVisible()
            ).toBeFalsy();
            // Validate Close Info Dialog result
            expect(
                await alertsAndDialogsPage.getCloseInfoDialogResult()
            ).toBe(
                AlertsAndDialogsData.result.closeInfoDialog
            );
        });

        test('Click X', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Close Info Dialog button
            await alertsAndDialogsPage.clickCloseInfoDialogButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCloseInfoDialogModalVisible()
            ).toBeTruthy();
            // Click Close Info Dialog Modal - X button
            await alertsAndDialogsPage.clickCloseInfoDialogModalXButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCloseInfoDialogModalVisible()
            ).toBeFalsy();
            // Validate Close Info Dialog result
            expect(
                await alertsAndDialogsPage.getCloseInfoDialogResult()
            ).toBe(
                AlertsAndDialogsData.result.closeInfoDialog
            );
        });

    });

    test.describe('Scenario Confirm Action', () => {
        test('Click Confirm', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Confirm Dialog button
            await alertsAndDialogsPage.clickConfirmActionButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isConfirmActionModalVisible()
            ).toBeTruthy();
            // Click Confirm Action Modal - Confirm button
            await alertsAndDialogsPage.clickConfirmActionModalConfirmButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isConfirmActionModalVisible()
            ).toBeFalsy();
            // Validate Confirm Action result
            expect(
                await alertsAndDialogsPage.getConfirmActionResult()
            ).toBe(
                AlertsAndDialogsData.result.confirmAction
            );
        });

        test('Click Cancel', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Confirm Dialog button
            await alertsAndDialogsPage.clickConfirmActionButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isConfirmActionModalVisible()
            ).toBeTruthy();
            // Click Confirm Action Modal - Cancel button
            await alertsAndDialogsPage.clickConfirmActionModalCancelButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isConfirmActionModalVisible()
            ).toBeFalsy();
            // Validate Confirm Action result
            expect(
                await alertsAndDialogsPage.getConfirmActionResult()
            ).toBe(
                AlertsAndDialogsData.placeholder.confirmAction
            );
        });

    });

    test.describe('Scenario Cancel Stay', () => {
        test('Click Stay', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Unsaved Dialog button
            await alertsAndDialogsPage.clickCancelStayButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCancelStayModalVisible()
            ).toBeTruthy();
            // Click Cancel Stay Modal - Stay button
            await alertsAndDialogsPage.clickCancelStayModalStayButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCancelStayModalVisible()
            ).toBeFalsy();
            // Validate Cancel Stay result
            expect(
                await alertsAndDialogsPage.getCancelStayResult()
            ).toBe(
                AlertsAndDialogsData.result.cancelStay
            );
        });

        test('Click Leave', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Unsaved Dialog button
            await alertsAndDialogsPage.clickCancelStayButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCancelStayModalVisible()
            ).toBeTruthy();
            // Click Cancel Stay Modal - Leave button
            await alertsAndDialogsPage.clickCancelStayModalLeaveButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isCancelStayModalVisible()
            ).toBeFalsy();
            // Validate Cancel Stay result
            expect(
                await alertsAndDialogsPage.getCancelStayResult()
            ).toBe(
                AlertsAndDialogsData.placeholder.cancelStay
            );
        });

    });

    test.describe('Scenario Destructive Confirm', () => {
        test('Click Delete Account', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Delete Dialog button
            await alertsAndDialogsPage.clickDestructiveConfirmButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isDestructiveConfirmModalVisible()
            ).toBeTruthy();
            // Click Destructive Confirm Modal - Delete Account button
            await alertsAndDialogsPage.clickDestructiveConfirmModalDeleteAccountButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isDestructiveConfirmModalVisible()
            ).toBeFalsy();
            // Validate Destructive Confirm result
            expect(
                await alertsAndDialogsPage.getDestructiveConfirmResult()
            ).toBe(
                AlertsAndDialogsData.result.destructiveConfirm
            );
        });

        test('Click Cancel', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Delete Dialog button
            await alertsAndDialogsPage.clickDestructiveConfirmButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isDestructiveConfirmModalVisible()
            ).toBeTruthy();
            // Click Destructive Confirm Modal - Cancel button
            await alertsAndDialogsPage.clickDestructiveConfirmModalCancelButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isDestructiveConfirmModalVisible()
            ).toBeFalsy();
            // Validate Destructive Confirm result
            expect(
                await alertsAndDialogsPage.getDestructiveConfirmResult()
            ).toBe(
                AlertsAndDialogsData.placeholder.destructiveConfirm
            );
        });

    });

    test.describe('Scenario Backdrop Click', () => {
        test('Click Outside Modal', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Backdrop Dialog button
            await alertsAndDialogsPage.clickBackdropClickButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isBackdropClickModalVisible()
            ).toBeTruthy();
            // Click outside Backdrop Click Modal
            await alertsAndDialogsPage.clickBackdropClickDismissArea();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isBackdropClickModalVisible()
            ).toBeFalsy();
            // Validate Backdrop Click result
            expect(
                await alertsAndDialogsPage.getBackdropClickResult()
            ).toBe(
                AlertsAndDialogsData.result.backdropClick
            );
        });

        test('Click Inside Modal', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Backdrop Dialog button
            await alertsAndDialogsPage.clickBackdropClickButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isBackdropClickModalVisible()
            ).toBeTruthy();
            // Click inside Backdrop Click Modal
            await alertsAndDialogsPage.clickBackdropClickInsideArea();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isBackdropClickModalVisible()
            ).toBeTruthy();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isBackdropClickModalVisible()
            ).toBeTruthy();
        });

    });

    test.describe('Scenario Escape Key', () => {
        test('Click Esc Key', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Keyboard Dialog button
            await alertsAndDialogsPage.clickEscapeKeyButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeTruthy();
            // Click Esc key
            await alertsAndDialogsPage.pressKey(
                ConstantsData.keyboard.ESCAPE
            );
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeFalsy();
            // Validate Escape Key result
            expect(
                await alertsAndDialogsPage.getEscapeKeyResult()
            ).toBe(
                AlertsAndDialogsData.result.escapeKey
            );
        });

        test('Click Enter Key', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Keyboard Dialog button
            await alertsAndDialogsPage.clickEscapeKeyButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeTruthy();
            // Click Enter key
            await alertsAndDialogsPage.pressKey(
                ConstantsData.keyboard.ENTER
            );
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeTruthy();
        });

        test('Click Tab Key', 
        {
            tag: ['@regression', '@negative']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Keyboard Dialog button
            await alertsAndDialogsPage.clickEscapeKeyButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeTruthy();
            // Click Tab key
            await alertsAndDialogsPage.pressKey(
                ConstantsData.keyboard.TAB
            );
            // Validate modal
            expect(
                await alertsAndDialogsPage.isEscapeKeyModalVisible()
            ).toBeTruthy();
        });

    });

    test.describe('Scenario Assert Content', () => {
        test('Click Got It', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ alertsAndDialogsPage }) => {
            // Click Open Notification button
            await alertsAndDialogsPage.clickAssertContentButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isAssertContentModalVisible()
            ).toBeTruthy();
            // Click Assert Content Modal - Got It button
            await alertsAndDialogsPage.clickAssertContentModalGotItButton();
            // Validate modal
            expect(
                await alertsAndDialogsPage.isAssertContentModalVisible()
            ).toBeFalsy();
            // Validate Assert Content result
            expect(
                await alertsAndDialogsPage.getAssertContentResult()
            ).toBe(
                AlertsAndDialogsData.result.assertContent
            );
        });

    });

    const scopedDismissScenarios = [
        {
            name: 'Low Disk Space',
            button: page => page.clickScopedDismissLowDiskSpaceButton(),
            action: page => page.clickScopedDismissModalLowDiskSpaceDismissButton(),
            expected: AlertsAndDialogsData.result.scopedDismiss.lowDiskSpace
        },
        {
            name: 'Session Expiring Soon',
            button: page => page.clickScopedDismissSessionExpiringSoonButton(),
            action: page => page.clickScopedDismissModalSessionExpiringSoonDismissButton(),
            expected: AlertsAndDialogsData.result.scopedDismiss.sessionExpiringSoon
        },
        {
            name: 'Security Alert',
            button: page => page.clickScopedDismissSecurityAlertButton(),
            action: page => page.clickScopedDismissModalSecurityAlertDismissButton(),
            expected: AlertsAndDialogsData.result.scopedDismiss.securityAlert
        }
    ];

    test.describe('Scenario Scoped Dismiss', () => {
        scopedDismissScenarios.forEach(data => {
            test(`Click Dismiss For ${data.name}`,
            {
                tag: ['@smoke', '@regression', '@positive']
            },
            async ({ alertsAndDialogsPage }) => {
                // Click button
                await data.button(alertsAndDialogsPage);
                // Validate modal
                expect(
                    await alertsAndDialogsPage.isScopedDismissModalVisible()
                ).toBeTruthy();
                // Click Scoped Dismiss Modal - Dismiss button
                await data.action(alertsAndDialogsPage);
                // Validate modal
                expect(
                    await alertsAndDialogsPage.isScopedDismissModalVisible()
                ).toBeFalsy();
                // Validate Scoped Dismiss result
                expect(
                    await alertsAndDialogsPage.getScopedDismissResult()
                ).toBe(
                    data.expected
                );
            });

            test(`Click Cancel For ${data.name}`,
            {
                tag: ['@regression', '@positive']
            },
            async ({ alertsAndDialogsPage }) => {
                // Click button
                await data.button(alertsAndDialogsPage);
                // Validate modal
                expect(
                    await alertsAndDialogsPage.isScopedDismissModalVisible()
                ).toBeTruthy();
                // Click Scoped Dismiss Modal - Cancel button
                await alertsAndDialogsPage.clickScopedDismissModalCancelButton();
                // Validate modal
                expect(
                    await alertsAndDialogsPage.isScopedDismissModalVisible()
                ).toBeFalsy();
                // Validate Scoped Dismiss result
                expect(
                    await alertsAndDialogsPage.getScopedDismissResult()
                ).toBe(
                    AlertsAndDialogsData.placeholder.scopedDismiss
                );
            });

        });
    });
});