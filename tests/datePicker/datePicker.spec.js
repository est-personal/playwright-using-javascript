const {test, expect} = require('../../fixtures/Pages.fixture');
const { DatePickerData } = require('../../testData/DatePickerData');

test.describe('QA Playground - Date Picker Tests', () => {
    test.describe('Scenario: Date Input', () => {
        test('Enter Valid Date', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ datePickerPage }) => {
            // Enter Date
            await datePickerPage.enterDate(
                'basicInput',
                DatePickerData.input.dpBasicInput
            );
            // Validate result
            expect(
                await datePickerPage.getResult('basicInput')
            ).toBe(
                DatePickerData.input.dpBasicInput
            );
        });
    });

    test.describe('Scenario: Calendar Select', () => {
        test('Select Date', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ datePickerPage }) => {
            // Select Date from calendar
            await datePickerPage.selectDateFromCalendar(
                DatePickerData.input.dpCalendar
            );
            // Validate result
            expect(
                await datePickerPage.getResult('calendar')
            ).toBe(
                `${DatePickerData.static.selected}${DatePickerData.input.dpCalendar}`
            );
        });
    });

    test.describe('Scenario: Month Navigation', () => {
        const monthNavScenarios = [
            {
                name: 'Next',
                direction: DatePickerData.input.dpMonthNav.next,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Previous',
                direction: DatePickerData.input.dpMonthNav.previous,
                tags: ['@regression', '@positive']
            }
        ];

        monthNavScenarios.forEach(data => {
            test(`Select ${data.name} Month`, {
                tag: data.tags
            }, async ({ datePickerPage }) => {
                // Navigate month
                await datePickerPage.navigateMonth(
                    data.direction
                );
                // Get displayed month
                const displayedMonth =
                    await datePickerPage.getMonthHeader();
                // Validate result
                expect(
                    await datePickerPage.getResult('monthNav')
                ).toBe(
                    `${DatePickerData.static.navigatedTo}${displayedMonth}`
                );
            });
        });
    });

    test.describe('Scenario: Date Range', () => {
        const rangeScenarios = [
            {
                name: 'Start Date And End Date',
                startDate: DatePickerData.input.dpRange.start,
                endDate: DatePickerData.input.dpRange.end,
                expectedResult: `${DatePickerData.static.range}${DatePickerData.input.dpRange.start}${DatePickerData.static.arrow}${DatePickerData.input.dpRange.end}`,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Start Date',
                startDate: DatePickerData.input.dpRange.start,
                expectedResult: `${DatePickerData.static.start}${DatePickerData.input.dpRange.start}${DatePickerData.static.endNotSet}`,
                tags: ['@regression', '@positive']
            },
            {
                name: 'End Date',
                endDate: DatePickerData.input.dpRange.end,
                expectedResult: DatePickerData.placeholder.dpRange,
                tags: ['@regression', '@positive']
            }
        ];

        rangeScenarios.forEach(data => {
            test(`Enter ${data.name}`, {
                tag: data.tags
            }, async ({ datePickerPage }) => {
                // Enter Start Date
                if (data.startDate) {
                    await datePickerPage.enterDate(
                        'rangeStart',
                        data.startDate
                    );
                }
                if (data.endDate) {
                    await datePickerPage.enterDate(
                        'rangeEnd',
                        data.endDate
                    );
                }
                // Validate result
                expect(
                    await datePickerPage.getResult('range')
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });

    test.describe('Scenario: Min-Max Dates', () => {
        const constraintScenarios = [
            {
                name: 'Minimum Date',
                date: DatePickerData.input.dpConstraints.minDate,
                expectedResult: `${DatePickerData.static.validDate}${DatePickerData.input.dpConstraints.minDate}`,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Maximum Date',
                date: DatePickerData.input.dpConstraints.maxDate,
                expectedResult: `${DatePickerData.static.validDate}${DatePickerData.input.dpConstraints.maxDate}`,
                tags: ['@regression', '@positive']
            },
            {
                name: 'In-Range Date',
                date: DatePickerData.input.dpConstraints.inRangeDate,
                expectedResult: `${DatePickerData.static.validDate}${DatePickerData.input.dpConstraints.inRangeDate}`,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Out-Range Date',
                date: DatePickerData.input.dpConstraints.outRangeDate,
                expectedResult: `${DatePickerData.static.invalid}${DatePickerData.input.dpConstraints.outRangeDate}${DatePickerData.static.outOfRange}`,
                tags: ['@regression', '@positive']
            },
        ];

        constraintScenarios.forEach(data => {
            test(`Enter ${data.name}`, {
                tag: data.tags
            }, async ({ datePickerPage }) => {
                // Enter Date
                await datePickerPage.enterDate(
                    'constraints',
                    data.date
                );
                // Validate result
                expect(
                    await datePickerPage.getResult('constraints')
                ).toBe(
                    data.expectedResult
                );
            });
        });
        
        test('Validate Attribute', 
        {
            tag: ['@regression', '@positive']
        },
        async ({ datePickerPage }) => {
            // Validate Min Attribute
            expect(
                await datePickerPage.getDateInputAttribute(
                    'constraints',
                    'min'
                )
            ).toBe(
                DatePickerData.attribute.dpConstraints.min
            );
            // Validate Max Attribute
            expect(
                await datePickerPage.getDateInputAttribute(
                    'constraints',
                    'max'
                )
            ).toBe(
                DatePickerData.attribute.dpConstraints.max
            );
        });
    });

    test.describe('Scenario: Sibling Date Field', () => {
        const siblingScenarios = [
            {
                name: 'Appointment Date',
                appointment: DatePickerData.input.dpSibling.appointment,
                appointmentResult: `${DatePickerData.static.appointment}${DatePickerData.input.dpSibling.appointment}`,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Return Date',
                return: DatePickerData.input.dpSibling.return,
                returnResult: `${DatePickerData.static.return}${DatePickerData.input.dpSibling.return}`,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Appointment Date And Return Date',
                appointment: DatePickerData.input.dpSibling.appointment,
                return: DatePickerData.input.dpSibling.return,
                appointmentResult: `${DatePickerData.static.appointment}${DatePickerData.input.dpSibling.appointment}`,
                returnResult: `${DatePickerData.static.return}${DatePickerData.input.dpSibling.return}`,
                tags: ['@smoke', '@regression', '@positive']
            },
        ];

        siblingScenarios.forEach(data => {
            test(`Enter ${data.name}`, {
                tag: data.tags
            }, async ({ datePickerPage }) => {
                // Enter Start Date
                if (data.appointment) {
                    await datePickerPage.enterDate(
                        'appointment',
                        data.appointment
                    );
                    // Validate result
                    expect(
                        await datePickerPage.getResult('sibling')
                    ).toBe(
                        data.appointmentResult
                    );
                }
                if (data.return) {
                    await datePickerPage.enterDate(
                        'return',
                        data.return
                    );
                    // Validate result
                    expect(
                        await datePickerPage.getResult('sibling')
                    ).toBe(
                        data.returnResult
                    );
                }
            });
        });
    });

    test.describe('Scenario: Date Cards', () => {
        const cardScenarios = [
            {
                name: 'Morning',
                slot: 'morning',
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Afternoon',
                slot: 'afternoon',
                tags: ['@regression', '@positive']
            },
            {
                name: 'Evening',
                slot: 'evening',
                tags: ['@regression', '@positive']
            },
        ];

        cardScenarios.forEach(data => {
            test(`Select ${data.name}`, {
                tag: data.tags
            }, async ({ datePickerPage }) => {
                // Get card details
                const booking = 
                    await datePickerPage.getBookCard(
                        data.slot
                    );
                // Select Slot
                await datePickerPage.clickScenarioButton(
                    data.slot
                );
                // Validate result
                expect(
                    await datePickerPage.getResult('cards')
                ).toBe(
                    `${DatePickerData.static.booked}${booking}`
                );
            });
        });
    });

    test.describe('Scenario: Dynamic Datet', () => {
        test('Click Assert Date', 
        {
            tag: ['@smoke', '@regression', '@positive']
        },
        async ({ datePickerPage }) => {
            // Get system date
            const systemDate = 
                new Date().toLocaleDateString('en-US');
            // Get Date
            const displayedDate = await datePickerPage.getDisplayDate();
            // Validate date
            expect(displayedDate).toBe(systemDate);
            // Click Assert button
            await datePickerPage.clickScenarioButton(
                'dynamic'
            );
            // Validate result
            expect(
                await datePickerPage.getResult('dynamic')
            ).toBe(
                `${DatePickerData.static.asserted}${displayedDate}`
            );
        });
    });
});