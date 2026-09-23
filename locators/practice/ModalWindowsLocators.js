// Arrange Alphabetically
// Locators for QA Playground - Modal Windows Page
const ModalWindowsLocators = {
    modalCard: {
        card:
            '[data-testid="card-course"]',
        cardButton:
            '[data-testid="btn-open-course"]',
        modal:
            '[data-testid="modal-card"]',
        modalClose:
            '[data-testid="btn-close-course"]',
        result:
            '[data-testid="result-s02"]'
    },
    modalChallenge: {
        button:
            '[data-testid="btn-open-challenge-modal"]',
        modal:
            '[aria-labelledby="challenge-modal-title"]',
        modalAccept:
            '[aria-label="Accept terms"]',
        modalDecline:
            '[aria-label="Decline terms"]',
        result:
            '[data-testid="result-s04"]'
    },
    modalDynamic: {
        button:
            '[data-testid="btn-open-dynamic-modal"]',
        modal:
            '[data-testid="modal-dynamic"]',
        modalCancel:
            'button[id^="cancel-modal-"]',
            // button[id*="cancel-modal-"]
        modalConfirm:
            'button[id^="confirm-modal-"]',
        result:
            '[data-testid="result-s03"]'
    },
    modalSimple: {
        button:
            '[data-testid="btn-open-simple-modal"]',
        modal:
            '[data-testid="modal-simple"]',
        modalConfirm:
            '[data-testid="btn-confirm-simple-modal"]',
        modalX:
            '[data-testid="btn-close-simple-modal"]',
        result:
            '[data-testid="result-s01"]'
    }
};

module.exports = { ModalWindowsLocators };