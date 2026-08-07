const { test, expect } = require('@playwright/test');
const { FormsPage } = require('../pages/FormsPage');
const { FormsData } = require('../testData/FormsData');
const { GenericData } = require('../testData/GenericData');

const placeholderScenarios = [
    {
        name: 'Login Section Placeholder',
        fields: [
            {
                locator: page => page.getEmailInput(),
                expected: FormsData.placeholder.emailPlaceholder
            },
            {
                locator: page => page.getLoginPasswordInput(),
                expected: FormsData.placeholder.loginPasswordPlaceholder
            }
        ]
    },
    {
        name: 'Personal Details Section Placeholder',
        fields: [
            {
                locator: page => page.getFirstNameInput(),
                expected: FormsData.placeholder.firstNamePlaceholder
            },
            {
                locator: page => page.getLastNameInput(),
                expected: FormsData.placeholder.lastNamePlaceholder
            },
            {
                locator: page => page.getPhoneInput(),
                expected: FormsData.placeholder.phonePlaceholder
            }
        ]
    },
    {
        name: 'Address Section Placeholder',
        fields: [
            {
                locator: page => page.getCityInput(),
                expected: FormsData.placeholder.cityPlaceholder
            },
            {
                locator: page => page.getAboutYouInput(),
                expected: FormsData.placeholder.aboutYouPlaceholder
            }
        ]
    },
    {
        name: 'Account Setup Section Placeholder',
        fields: [
            {
                locator: page => page.getPasswordInput(),
                expected: FormsData.placeholder.passwordPlaceholder
            },
            {
                locator: page => page.getConfirmPasswordInput(),
                expected: FormsData.placeholder.confirmPasswordPlaceholder
            }
        ]
    }
];

test.describe('QA Playground - Form Reset Validations', () => {
    
    let formsPage;

    test.beforeEach(async ({ page }) => {
        formsPage = new FormsPage(page);
        await formsPage.navigateToForms();
    });

    placeholderScenarios.forEach((scenario) => {
        test(scenario.name, {
            tag: ['@regression', '@positive']
        }, async () => {
            for (const field of scenario.fields) {
                await expect(
                    field.locator(formsPage)
                ).toHaveAttribute(
                    GenericData.placeholder,
                    field.expected
                );
            }
        });
    });

});