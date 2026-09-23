// Arrange Alphabetically
// Keywords for QA Playground - Date Picker Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { DatePickerLocators } = require('../locators/DatePickerLocators');
const { AlertsAndDialogsActions } = require('../helpers/AlertsAndDialogsActions');
const { BasePage } = require('./BasePage');

class DatePickerPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickScenarioButton(button) {
        await this.click(
            this.getButtonsLocator(button)
        );
    }

    async getBookCard(slot) {
        const card = this.page.locator(
            // .locator('[data-testid="dp-booking-card"]')
            DatePickerLocators.dpCards.card(slot)
        );
        const slotLabel = 
            await card.getAttribute('data-slot');
        const date = (
            await card.getAttribute('data-booking-date')
        );
        const time = (
            await card.locator('span').nth(2).textContent()
        )?.trim();
        const formattedSlot =
            slotLabel.charAt(0).toUpperCase() +
            slotLabel.slice(1);
        return `${formattedSlot} — ${date} ${time}`;
    }

    async getMonthHeader() {
        return await this.getText(
            DatePickerLocators.dpMonthNav.display
        );
    }

    async enterDate(input, date) {
        await this.fill(
            this.getInputsLocator(input),
            date
        );
    }

    async getDateInputAttribute(input, attribute) {
        return await this.getAttribute(
            this.getInputsLocator(input),
            attribute
        );
    }

    async getDisplayDate() {
        return await this.getText(
            DatePickerLocators.dpDynamic.displayDate
        );
    }

    async getResult(section) {
        return await this.getText(
            this.getResultsLocator(section)
        );
    }

    async navigateMonth(direction) {
        await this.clickScenarioButton(direction);
    }

    async navigateToDatePicker() {
        await this.navigate(
            QaPlaygroundUrls.datePickerPage
        );
    }

    async navigateToMonth(targetDate) {
        while (true) {
            const currentDate = new Date(
                await this.getText(
                    DatePickerLocators.dpCalendar.monthYear
                )
            );
            const targetDateObj = new Date(targetDate);
            if (
                currentDate.getMonth() === targetDateObj.getMonth() &&
                currentDate.getFullYear() === targetDateObj.getFullYear()
            ) {
                break;
            }
            if (currentDate > targetDateObj) {

                await this.click(
                    DatePickerLocators.dpCalendar.previousButton
                );
            } else {

                await this.click(
                    DatePickerLocators.dpCalendar.nextButton
                );
            }
        }
    }

    async openCalendar() {
        await this.click(
            DatePickerLocators.dpCalendar.button
        );
    }

    async selectCalendarDate(date) {
        await this.click(
            DatePickerLocators.dpCalendar.dayButton(date)
        );
    }

    async selectDateFromCalendar(date) {
        await this.openCalendar();
        await this.navigateToMonth(date);
        await this.selectCalendarDate(date);
    }

    // Non-Async
    getButtonsLocator(button) {
        const buttons = {
            afternoon: DatePickerLocators.dpCards.afternoonButton,
            dynamic: DatePickerLocators.dpDynamic.button,
            evening: DatePickerLocators.dpCards.eveningButton,
            morning: DatePickerLocators.dpCards.morningButton,
            next: DatePickerLocators.dpMonthNav.nextButton,
            previous: DatePickerLocators.dpMonthNav.previousButton
        };
        return buttons[button];
    }

    getInputsLocator(input) {
        const inputs = {
            appointment: DatePickerLocators.dpSibling.appointmentDateInput,
            basicInput: DatePickerLocators.dpBasicInput.dateInput,
            constraints: DatePickerLocators.dpConstraints.dateInput,
            rangeEnd: DatePickerLocators.dpRange.endDateInput,
            rangeStart: DatePickerLocators.dpRange.startDateInput,
            return: DatePickerLocators.dpSibling.returnDateInput
        };
        return inputs[input];
    }

    getResultsLocator(section) {
        const sections = {
            basicInput: DatePickerLocators.dpBasicInput.result,
            calendar: DatePickerLocators.dpCalendar.result,
            cards: DatePickerLocators.dpCards.result,
            constraints: DatePickerLocators.dpConstraints.result,
            dynamic: DatePickerLocators.dpDynamic.result,
            monthNav: DatePickerLocators.dpMonthNav.result,
            range: DatePickerLocators.dpRange.result,
            sibling: DatePickerLocators.dpSibling.result
        };
        return sections[section];
    }

}

module.exports = { DatePickerPage };