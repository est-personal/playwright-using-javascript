// Arrange Alphabetically
// Locators for QA Playground - Alerts and Dialogs Page
const AlertsAndDialogsLocators = {
    assertContentButton: 
        '[data-testid="open-notification-dialog"]',
    assertContentDialog:
        '[data-testid="system-notification-dialog"]',
    assertContentModalGotItButton: 
        '[data-testid="notif-ack-btn"]',
    assertContentModalMessage:
        '[data-testid="system-notification-dialog"] p',
    assertContentModalTitle:
        '[id="notif-dialog-title"]',
    assertContentResult: 
        '[data-testid="result-s07"]',
    assertContentSection: 
        '[data-testid="scenario-assert-content"]',
    backdropClickButton: 
        '[data-testid="open-backdrop-dialog"]',
    backdropClickDialog:
        '[data-testid="backdrop-dialog-box"]',
    backdropClickDialogOutside:
        '[data-testid="backdrop-dismiss-dialog"]',
    backdropClickModalMessage:
        '[data-testid="backdrop-dialog-box"] p',
    backdropClickModalTitle:
        '[id="backdrop-dialog-title"]',
    backdropClickResult: 
        '[data-testid="result-s05"]',
    backdropClickSection: 
        '[data-testid="scenario-backdrop-click"]',
    cancelStayButton: 
        '[data-testid="open-unsaved-dialog"]',
    cancelStayDialog:
        '[data-testid="unsaved-changes-dialog"]',
    cancelStayModalLeaveButton: 
        '[aria-label="Leave page and discard changes"]',
    cancelStayModalMessage:
        '[data-testid="unsaved-changes-dialog"] p',
    cancelStayModalStayButton: 
        '[data-testid="stay-on-page-btn"]',
    cancelStayModalTitle:
        '[id="unsaved-dialog-title"]',
    cancelStayResult: 
        '[data-testid="result-s03"]',
    cancelStaySection: 
        '[data-testid="scenario-cancel-stay"]',
    closeInfoDialogButton: 
        'button[data-testid="open-info-dialog"]',
    closeInfoDialogDialog:
        '[data-testid="info-alert-dialog"]',
    closeInfoDialogModalGotItButton: 
        '[data-testid="info-dialog-ok-btn"]',
    closeInfoDialogModalMessage:
        '[data-testid="info-alert-dialog"] p',
    closeInfoDialogModalTitle:
        '[id="info-dialog-title"]',
    closeInfoDialogModalXButton: 
        '[data-testid="info-dialog-close-btn"]',
    closeInfoDialogResult: 
        '[data-testid="result-s01"]',
    closeInfoDialogSection: 
        '[data-testid="scenario-close-info-dialog"]',
    confirmActionButton: 
        '[data-testid="open-confirm-dialog"]',
    confirmActionDialog:
        '[data-testid="confirm-action-dialog"]',
    confirmActionModalCancelButton: 
        '[data-testid="confirm-cancel-btn"]',
    confirmActionModalConfirmButton: 
        '[data-testid="confirm-ok-btn"]',
    confirmActionModalMessage:
        '[data-testid="confirm-action-dialog"] p',
    confirmActionModalTitle:
        '[id="confirm-dialog-title"]',
    confirmActionResult: 
        '[data-testid="result-s02"]',
    confirmActionSection: 
        '[data-testid="scenario-confirm-action"]',
    destructiveConfirmButton: 
        '[data-testid="open-delete-dialog"]',
    destructiveConfirmDialog:
        '[data-testid="delete-account-dialog"]',
    destructiveConfirmModalCancelButton: 
        '[data-testid="delete-cancel-btn"]',
    destructiveConfirmModalDeleteAccountButton: 
        '[aria-label="Confirm account deletion"]',
    destructiveConfirmModalMessage:
        '[data-testid="delete-account-dialog"] p',
    destructiveConfirmModalTitle:
        '[id="delete-dialog-title"]',
    destructiveConfirmResult: 
        '[data-testid="result-s04"]',
    destructiveConfirmSection: 
        '[data-testid="scenario-destructive-confirm"]',
    escapeKeyButton: 
        '[data-testid="open-escape-dialog"]',
    escapeKeyDialog:
        '[data-testid="escape-dismiss-dialog"]',
    escapeKeyModalMessage:
        '[data-testid="escape-dismiss-dialog"] p',
    escapeKeyModalTitle:
        '[id="escape-dialog-title"]',
    escapeKeyResult: 
        '[data-testid="result-s06"]',
    escapeKeySection: 
        '[data-testid="scenario-escape-key"]',
    lowDiskSpaceSection: 
        '[data-notif-id="notif-1"]',
    scopedDismissDialog:
        '[data-testid="dismiss-confirm-dialog"]',
    scopedDismissLowDiskSpaceModalDismissButton:
        '[aria-label="Confirm dismiss Low Disk Space"]',
    scopedDismissModalCancelButton:
        '[data-testid="dismiss-cancel-btn"]',
    scopedDismissModalMessage:
        '[data-testid="dismiss-confirm-dialog"] p',
    scopedDismissModalTitle:
        '[id="dismiss-dialog-title"]',
    scopedDismissSecurityAlertModalDismissButton:
        '[aria-label="Confirm dismiss Security Alert"]',
    scopedDismissSessionExpiringSoonModalDismissButton:
        '[aria-label="Confirm dismiss Session Expiring Soon"]',
    scopedDismissResult: 
        '[data-testid="result-s08"]',
    scopedDismissSection: 
        '[data-testid="scenario-scoped-dismiss"]',
    securityAlertSection: 
        '[data-notif-id="notif-3"]',
    sessionExpiringSoonSection: 
        '[data-notif-id="notif-2"]',
    get scopedDismissLowDiskSpaceDismissButton() {
        return `${this.lowDiskSpaceSection} [data-testid="notif-dismiss-btn"]`;
    },
    get scopedDismissSecurityAlertDismissButton() {
        return `${this.securityAlertSection} [data-testid="notif-dismiss-btn"]`;
    },
    get scopedDismissSessionExpiringSoonDismissButton() {
        return `${this.sessionExpiringSoonSection} [data-testid="notif-dismiss-btn"]`;
    }
};

module.exports = { AlertsAndDialogsLocators };