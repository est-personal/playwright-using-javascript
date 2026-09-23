// Arrange Alphabetically
// Test Data for QA Playground - Date Picker Page
const DatePickerData = {
    attribute: {
        dpConstraints: {
            min:
                '2025-06-01',
            max:
                '2025-12-31'
        }
    },
    input: {
        dpBasicInput:
            '2022-04-25',
        dpCalendar:
            '2025-07-20',
        dpCards:
            'Card date not booked',
        dpConstraints: {
            inRangeDate:
                '2025-10-22',
            maxDate:
                '2025-12-31',
            minDate:
                '2025-06-01',
            outRangeDate:
                '2025-05-11'
        },
        dpDynamic:
            'Dynamic date not asserted',
        dpMonthNav: {
            next:
                'next',
            previous:
                'previous'
        },
        dpRange: {
            end:
                '2023-04-25',
            start:
                '2022-04-25'
        },
        dpSibling: {
            appointment:
                '2024-09-21',
            return:
                '2024-10-25'
        }
    },
    placeholder: {
        dpBasicInput:
            'No date selected',
        dpCalendar:
            'Calendar not opened',
        dpCards:
            'Card date not booked',
        dpConstraints:
            'Constraints not tested',
        dpDynamic:
            'Dynamic date not asserted',
        dpMonthNav:
            'Month not navigated',
        dpRange:
            'Range not set',
        dpSibling:
            'Sibling date not filled'
    },
    result: {
        dpBasicInput:
            'No date selected',
        dpCalendar:
            'Calendar not opened',
        dpCards:
            'Card date not booked',
        dpConstraints:
            'Constraints not tested',
        dpDynamic:
            'Dynamic date not asserted',
        dpMonthNav:
            'Month not navigated',
        dpRange:
            'Range not set',
        dpSibling:
            'Sibling date not filled'
    },
    static: {
        appointment:
            'Appointment: ',
        asserted:
            'Asserted: ',
        arrow:
            ' → ',
        booked:
            'Booked: ',
        endNotSet:
            ' (end not set)',
        invalid:
            'Invalid: ',
        navigatedTo:
            'Navigated to: ',
        outOfRange:
            ' is out of range',
        range:
            'Range: ',
        return:
            'Return: ',
        selected:
            'Selected: ',
        start:
            'Start: ',
        validDate:
            'Valid date: '
    }
};

module.exports = { DatePickerData };