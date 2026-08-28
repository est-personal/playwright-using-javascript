const { AlertsAndDialogsLocators } = require('../locators/AlertsAndDialogsLocators');

const AlertsAndDialogsActions = {
    closeInfoDialog: {
        title: AlertsAndDialogsLocators.closeInfoDialogModalTitle,
        message: AlertsAndDialogsLocators.closeInfoDialogModalMessage,
        button: AlertsAndDialogsLocators.closeInfoDialogButton,
        result: AlertsAndDialogsLocators.closeInfoDialogResult
    },

    confirmAction: {
        title: AlertsAndDialogsLocators.confirmActionModalTitle,
        message: AlertsAndDialogsLocators.confirmActionModalMessage,
        button: AlertsAndDialogsLocators.confirmActionButton,
        result: AlertsAndDialogsLocators.confirmActionResult
    },

    cancelStay: {
        title: AlertsAndDialogsLocators.cancelStayModalTitle,
        message: AlertsAndDialogsLocators.cancelStayModalMessage,
        button: AlertsAndDialogsLocators.cancelStayButton,
        result: AlertsAndDialogsLocators.cancelStayResult
    },

    destructiveConfirm: {
        title: AlertsAndDialogsLocators.destructiveConfirmModalTitle,
        message: AlertsAndDialogsLocators.destructiveConfirmModalMessage,
        button: AlertsAndDialogsLocators.destructiveConfirmButton,
        result: AlertsAndDialogsLocators.destructiveConfirmResult
    },

    backdropClick: {
        title: AlertsAndDialogsLocators.backdropClickModalTitle,
        message: AlertsAndDialogsLocators.backdropClickModalMessage,
        button: AlertsAndDialogsLocators.backdropClickButton,
        result: AlertsAndDialogsLocators.backdropClickResult
    },

    escapeKey: {
        title: AlertsAndDialogsLocators.escapeKeyModalTitle,
        message: AlertsAndDialogsLocators.escapeKeyModalMessage,
        button: AlertsAndDialogsLocators.escapeKeyButton,
        result: AlertsAndDialogsLocators.escapeKeyResult
    },

    assertContent: {
        title: AlertsAndDialogsLocators.assertContentModalTitle,
        message: AlertsAndDialogsLocators.assertContentModalMessage,
        button: AlertsAndDialogsLocators.assertContentButton,
        result: AlertsAndDialogsLocators.assertContentResult
    },

    scopedDismiss: {
        title: AlertsAndDialogsLocators.scopedDismissModalTitle,
        message: AlertsAndDialogsLocators.scopedDismissModalMessage,
        result: AlertsAndDialogsLocators.scopedDismissResult
    }
    
};

module.exports = { AlertsAndDialogsActions };