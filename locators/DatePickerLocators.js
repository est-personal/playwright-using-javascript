// Arrange Alphabetically
// Locators for QA Playground - Date Picker Page
const DatePickerLocators = {
    dpBasicInput: {
        dateInput:
            '[data-testid="dp-basic-input"]',
        result:
            '[data-testid="result-s01"]'
    },
    dpCalendar: {
        button:
            '[data-testid="dp-calendar-trigger"]',
        calendar:
            '[data-testid="dp-calendar-panel"]',
        dayButton: (date) =>
            `[data-testid="dp-day-btn"][data-date="${date}"]`,
        monthYear:
            '[data-testid="dp-calendar-month-heading"]',
        nextButton:
            '[data-testid="dp-next-month"]',
        previousButton:
            '[data-testid="dp-prev-month"]',
        result:
            '[data-testid="result-s02"]'
    },
    dpCards: {
        afternoonButton:
            '[data-testid="booking-card"][data-slot="afternoon"] button',
        bookingCard:
            '[data-testid="booking-card"]',
        bookingCardList:
            '[data-testid="booking-cards-list"]',
        card: (slot) =>
            `[data-testid="booking-card"][data-slot="${slot}"]`,
        eveningButton:
            '[data-testid="booking-card"][data-slot="evening"] button',
        morningButton:
            '[data-testid="booking-card"][data-slot="morning"] button',
        result:
            '[data-testid="result-s07"]'
    },
    dpConstraints: {
        dateInput:
            '[data-testid="dp-constrained-input"]',
        result:
            '[data-testid="result-s05"]'
    },
    dpDynamic: {
        button:
            '[data-testid="dp-dynamic-section"] button',
        displayDate:
            '[id="dynamic-date-display"]',
        dynamicSection:
            '[data-testid="dp-dynamic-section"]',
        result:
            '[data-testid="result-s08"]'
    },
    dpMonthNav: {
        display:
            '[data-testid="dp-nav-month-display"]',
        nextButton:
            '[data-testid="dp-nav-next-month"]',
        previousButton:
            '[data-testid="dp-nav-prev-month"]',
        result:
            '[data-testid="result-s03"]'
    },
    dpRange: {
        endDateInput:
            '[data-testid="dp-range-end"]',
        result:
            '[data-testid="result-s04"]',
        startDateInput:
            '[data-testid="dp-range-start"]'
    },
    dpSibling: {
        appointmentDateInput:
            'input[aria-label="Appointment date"]',
        dateForm:
            '[data-testid="dp-sibling-form"]',
        result:
            '[data-testid="result-s06"]',
        returnDateInput:
            'input[aria-label="Return date"]'
    }
};

module.exports = { DatePickerLocators };