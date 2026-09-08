const {test, expect} = require('../../fixtures/Pages.fixture');
const { ModalWindowsData } = require('../../testData/ModalWindowsData');
const { ModalWindowsAssertions } = require('../../helpers/ModalWindowsAssertions');

const scenarios = [
    {
        name: 'Simple Modal',
        section: 'simple',
        expectedResult: ModalWindowsData.placeholder.modalSimple,
        title: ModalWindowsData.title.modalSimple,
        content: ModalWindowsData.content.modalSimple
    },
    {
        name: 'Modal from Repeated Card',
        section: 'card',
        cardTitle: 'Advanced Locators',
        expectedResult: ModalWindowsData.placeholder.modalCard,
        title: ModalWindowsData.title.modalCard,
        content: ModalWindowsData.content.modalCard
    },
    {
        name: 'Dynamic ID Modal',
        section: 'dynamic',
        expectedResult: ModalWindowsData.placeholder.modalDynamic,
        title: ModalWindowsData.title.modalDynamic,
        content: ModalWindowsData.content.modalDynamic
    },
    {
        name: 'Missing Locator Modal',
        section: 'challenge',
        expectedResult: ModalWindowsData.placeholder.modalChallenge,
        title: ModalWindowsData.title.modalChallenge,
        content: ModalWindowsData.content.modalChallenge
    },
];

test.describe('QA Playground - Modal Windows - Default Value Validation', () => {
    scenarios.forEach(data => {
        test(`Scenario: ${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ modalWindowsPage }) => {
            // Validate default value of result
            await expect(
                await modalWindowsPage.getResult(data.section)
            ).toBe(
                data.expectedResult
            );
        });
    });
});

test.describe('QA Playground - Modal Windows - Modal Content Validations', () => {
    scenarios.forEach(data => {
        test(`${data.name} Section`, {
            tag: ['@regression', '@positive']
        }, async ({ modalWindowsPage }) => {
            // Click button
            await modalWindowsPage.clickScenarioButton(
                data.section,
                data.cardTitle
            );
            // Validate Modal contents
            await ModalWindowsAssertions.validateModalContent(
                modalWindowsPage,
                modalWindowsPage.getModalTitleLocator(
                    data.section
                ),
                data.title,
                modalWindowsPage.getModalContentLocator(
                    data.section
                ),
                data.content
            );
        });
    });
});