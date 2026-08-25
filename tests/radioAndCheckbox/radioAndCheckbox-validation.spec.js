const {test, expect} = require('../../fixtures/Pages.fixture');
const { RadioAndCheckboxData } = require('../../testData/RadioAndCheckboxData');

const placeholderScenarios = [
    {
        name: 'Basic Checkbox',
        locator: page => page.getRcBasicCheckboxResult(),
        value: RadioAndCheckboxData.placeholder.BasicCheckbox,
        type: 'value'
    },
    {
        name: 'Radio Group',
        locator: page => page.getRcRadioGroupResult(),
        value: RadioAndCheckboxData.placeholder.RadioGroup,
        type: 'value'
    },
    {
        name: 'Checkbox Group',
        locator: page => page.getRcCheckboxGroupResult(),
        value: RadioAndCheckboxData.placeholder.CheckboxGroup,
        type: 'value'
    },
    {
        name: 'Assert State',
        locator: page => page.getRcAssertStateResult(),
        value: RadioAndCheckboxData.placeholder.AssertState,
        type: 'value'
    },
    {
        name: 'Disabled',
        locator: page => page.getRcDisabledResult(),
        value: RadioAndCheckboxData.placeholder.Disabled,
        type: 'value'
    },
    {
        name: 'Sibling',
        locator: page => page.getRcSiblingResult(),
        value: RadioAndCheckboxData.placeholder.Sibling,
        type: 'value'
    },
    {
        name: 'Cards',
        locator: page => page.getRcCardsResult(),
        value: RadioAndCheckboxData.placeholder.Cards,
        type: 'value'
    },
    {
        name: 'Dynamic',
        locator: page => page.getRcDynamicResult(),
        value: RadioAndCheckboxData.placeholder.Dynamic,
        type: 'value'
    }
];

test.describe('QA Playground - Radio And Checkbox - Default Result Text Validations', () => {
    placeholderScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
                tag: ['@regression', '@positive']
        }, async ({ radioAndCheckboxPage }) => {
            // Validate result
            if (data.type === 'placeholder') {
                expect(
                    await data.locator(radioAndCheckboxPage)
                ).toHaveAttribute(
                    'placeholder',
                    data.value
                );
            } 
            else {
                expect(
                    await data.locator(radioAndCheckboxPage)
                ).toBe(
                    data.value
                );
            }
        });
    });
});

const radioAndCheckboxTextScenarios = [
    {
        name: 'Basic Checkbox',
        locator: page => page.getRcBasicCheckboxLabel(),
        expected: [
            'I accept the terms and conditions'
        ]
    },
    {
        name: 'Radio Button Group',
        locator: page => page.getRcRadioGroupLabel(),
        expected: [
            'Starter',
            'Pro',
            'Business'
        ]
    },
    {
        name: 'Checkbox Group',
        locator: page => page.getRcCheckboxGroupLabel(),
        expected: [
            'Playwright',
            'Selenium',
            'Cypress',
            'WebdriverIO'
        ]
    },
    {
        name: 'Assert Checked State',
        locator: page => page.getRcAssertStateLabel(),
        expected: [
            'Subscribe to newsletter (pre-checked)'
        ]
    },
    {
        name: 'Disabled Controls',
        locator: page => page.getRcDisabledLabel(),
        expected: [
            'Disabled checkbox',
            'Disabled radio'
        ]
    },
    {
        name: 'Sibling Located Controls',
        locator: page => page.getRcSiblingLabel(),
        expected: [
            'Marketing emails',
            'SMS alerts',
            'Weekly digest'
        ]
    },
    {
        name: 'Scoped Card Controls',
        locator: page => page.getRcCardsLabel(),
        expected: [
            'Starter',
            'Pro',
            'Enterprise'
        ]
    },
    {
        name: 'Dynamic Checkbox List',
        locator: page => page.getRcDynamicLabel(),
        expected: [
            'Read Users',
            'Write Users',
            'Read Reports',
            'Write Reports',
            'Read Billing',
            'Delete All'
        ]
    }
];

test.describe('QA Playground - Radio And Checkbox - Option Label Validations', () => {
    radioAndCheckboxTextScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
                tag: ['@regression', '@positive']
        }, async ({ radioAndCheckboxPage }) => {
            // Validate option label
            expect(
                    await data.locator(radioAndCheckboxPage)
                ).toEqual(
                    data.expected
                );
           
        });
    });
});