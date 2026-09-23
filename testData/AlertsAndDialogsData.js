// Arrange Alphabetically
// Test Data for QA Playground - Alerts and Dialogs Page
const AlertsAndDialogsData = {
    buttonText: {
        assertContent:
            'Open Notification',
        backdropClick:
            'Open Backdrop Dialog',
        cancelStay:
            'Open Unsaved Dialog',
        confirmAction:
            'Open Confirm Dialog',
        closeInfoDialog:
            'Open Info Dialog',
        destructiveConfirm:
            'Open Delete Dialog',
        escapeKey:
            'Open Keyboard Dialog',
        scopedDismiss:
            'Dismiss',
        scopedDismissNotification: [
            'Low Disk Space',
            'Session Expiring Soon',
            'Security Alert'
        ]
    },
    modalMessage: {
        assertContent:
            'Service will be offline from Sunday 3:00–5:00 AM UTC. Please plan accordingly and save any active work before the window begins.',
        backdropClick:
            'Click the dark backdrop around this dialog box to close it. There is no close button — only the overlay area dismisses it.',
        cancelStay:
            'You have unsaved changes. Leave without saving?',
        confirmAction:
            'Submit this form response? This action cannot be reversed.',
        closeInfoDialog:
            'Your session will expire in 30 minutes. Please save your work before the session ends.',
        destructiveConfirm:
            'Permanently delete user@example.com? This cannot be undone.',
        escapeKey:
            'This dialog has no close button. Use the Escape key on your keyboard to dismiss it.',
        scopedDismiss: {
            lowDiskSpace:
                'This notification will be removed from your list.',
            sessionExpiringSoon:
                'This notification will be removed from your list.',
            securityAlert:
                'This notification will be removed from your list.',
        }
    },
    modalTitle: {
        assertContent:
            'Maintenance Window',
        backdropClick:
            'Dismiss by Clicking Outside',
        cancelStay:
            'Unsaved Changes',
        confirmAction:
            'Confirm Submission',
        closeInfoDialog:
            'Session Notice',
        destructiveConfirm:
            'Delete Account',
        escapeKey:
            'Press Escape to Close',
        scopedDismiss: {
            lowDiskSpace:
                'Dismiss Low Disk Space?',
            sessionExpiringSoon:
                'Dismiss Session Expiring Soon?',
            securityAlert:
                'Dismiss Security Alert?',
        }
    },
    placeholder: {
        assertContent:
            'Awaiting acknowledgement',
        backdropClick:
            'Dialog not opened',
        cancelStay:
            'Dialog not opened',
        confirmAction:
            'Awaiting confirmation',
        closeInfoDialog:
            'No action yet',
        destructiveConfirm:
            'No deletion yet',
        escapeKey:
            'Dialog not opened',
        scopedDismiss:
            'No notification dismissed'
    },
    result: {
        assertContent:
            'Notification acknowledged',
        backdropClick:
            'Dialog closed via backdrop',
        cancelStay:
            'Stayed — changes preserved',
        confirmAction:
            'Submission confirmed!',
        closeInfoDialog:
            'Info dialog dismissed',
        destructiveConfirm:
            'Account deleted!',
        escapeKey:
            'Dialog closed via Escape key',
        scopedDismiss: {
            lowDiskSpace:
                'Low Disk Space — notification dismissed',
            securityAlert:
                'Security Alert — notification dismissed',
            sessionExpiringSoon:
                'Session Expiring Soon — notification dismissed'
        }
    }
};

module.exports = { AlertsAndDialogsData };