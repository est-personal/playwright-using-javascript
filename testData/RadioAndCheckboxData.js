// Arrange Alphabetically
// Test Data for QA Playground - Radio and Checkbox Page
const RadioAndCheckboxData = {
    option: {
        cards: {
            enterprise:
                'enterprise',
            price: {
                enterprise:
                    '$49 / mo',
                pro:
                    '$12 / mo',
                starter:
                    'Free'
            },
            pro:
                'pro',
            starter:
                'starter'
        },
        checkboxGroup: {
            cypress:
                'Cypress',
            playwright:
                'Playwright',
            selenium:
                "Selenium",
            webdriverIo:
                'WebdriverIO'
        },
        sibling: {
            marketingEmails:
                'Marketing emails',
            smsAlerts:
                'SMS alerts',
            weeklyDigest:
                'Weekly digest'
        },
    },
    placeholder: {
        assertState:
            'State not asserted',
        basicCheckbox:
            'Not checked',
        cards:
            'Card not selected',
        checkboxGroup:
            'No skills selected',
        disabled:
            'Disabled state not tested',
        dynamic:
            'Dynamic list not interacted',
        radioGroup:
            'No option selected',
        sibling:
            'Sibling control not located'
    },
    result: {
        assertState: {
            checked:
                'Checked (re-subscribed)',
            unchecked:
                'Unchecked (unsubscribed)'
        },
        basicCheckbox: {
            checked:
                'Checked ✓',
            unchecked:
                'Unchecked'
        },
        cards: {
            enterprise:
                'enterprise',
            pro:
                'pro',
            starter:
                'starter'
        },
        checkboxGroup: {
            all: [
                'Playwright',
                'Selenium',
                'Cypress',
                'WebdriverIO'
            ].join(', '),
            cypress:
                'Cypress',
            selenium:
                'Selenium',
            playwright:
                'Playwright',
            webdriverIo:
                'WebdriverIO'
        },
        disabled:
            'Both controls confirmed disabled',
        dynamic: {
            allRead: [
                'Read Users',
                'Read Reports',
                'Read Billing'
            ].join(', '),
            readBilling:
                'Read Billing',
            readReports:
                'Read Reports',
            readUsers:
                'Read Users',
            writeOrDelete:
                'No read perms selected'
        },
        radioGroup: {
            business:
                'Business',
            pro:
                'Pro',
            starter:
                'Starter'
        },
        sibling: {
            checkedMarketingEmails:
                'Marketing emails: on',
            checkedSmsAlerts:
                'SMS alerts: on',
            checkedWeeklyDigest:
                'Weekly digest: on',
            uncheckedMarketingEmails:
                'Marketing emails: off',
            uncheckedSmsAlerts:
                'SMS alerts: off',
            uncheckedWeeklyDigest:
                'Weekly digest: off'
        }    
    },
    static: {
        off:
            ': off',
        on:
            ': on',
        readPerms:
            'Read perms: ',
        selected:
            'Selected: ',
        selectedPlan:
            'Selected plan: '
    }
}

module.exports = { RadioAndCheckboxData };