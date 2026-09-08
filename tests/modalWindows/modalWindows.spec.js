const {test, expect} = require('../../fixtures/Pages.fixture');
const { ModalWindowsData } = require('../../testData/ModalWindowsData');
const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');

test.describe('QA Playground - Modal Windows Tests', () => {
    test.describe('Scenario: Simple Modal', () => {
        const simpleScenarios = [
            {
                name: 'Click Confirm',
                modalButton: 'modalConfirm',
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Click X',
                modalButton: 'modalX',
                tags: ['@regression', '@positive']
            }
        ];

        simpleScenarios.forEach(data => {
            test(`${data.name} On Simple Modal`, {
                    tag: data.tags
            }, async ({ modalWindowsPage }) => {
                // Click Open Simple Modal button
                await modalWindowsPage.clickScenarioButton(
                    'simple'
                );
                // Click Simple Modal button
                await modalWindowsPage.clickModalButton(
                    'simple',
                    data.modalButton
                );
                // Validate result
                await expect(
                    await modalWindowsPage.getResult('simple')
                ).toBe(
                    ModalWindowsData.result.modalSimple
                );
            });
        });
    });
    
    test.describe('Scenario: Card Modal', () => {
        const cardScenarios = [
            {
                name: 'Click Playwright basics',
                cardTitle: 'Playwright Basics',
                expectedResult: ModalWindowsData.result.modalCard.beginnerCourse,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Click Advanced Locators',
                cardTitle: 'Advanced Locators',
                expectedResult: ModalWindowsData.result.modalCard.hardCourse,
                tags: ['@smoke', '@regression', '@positive']
            }
        ];

        cardScenarios.forEach(data => {
            test(`${data.name}`, {
                    tag: data.tags
            }, async ({ modalWindowsPage }) => {
                // Click Details button
                await modalWindowsPage.clickScenarioButton(
                    'card',
                    data.cardTitle
                );
                // Click Card Modal button
                if (data.cardTitle=='Advanced Locators') {
                    await modalWindowsPage.clickModalButton(
                        'card',
                        'modalClose'
                    );
                }
                // Validate result
                await expect(
                    await modalWindowsPage.getResult('card')
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });
    
    test.describe('Scenario: Dynamic Modal', () => {
        const dynamicScenarios = [
            {
                name: 'Click Confirm Action',
                modalButton: 'modalConfirm',
                expectedResult: ModalWindowsData.result.modalDynamic.confirmAction,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Click Cancel',
                modalButton: 'modalCancel',
                expectedResult: ModalWindowsData.result.modalDynamic.cancel,
                tags: ['@regression', '@positive']
            }
        ];

        dynamicScenarios.forEach(data => {
            test(`${data.name} On Dynamic Modal`, {
                    tag: data.tags
            }, async ({ modalWindowsPage }) => {
                // Click Open Dynamic Modal button
                await modalWindowsPage.clickScenarioButton(
                    'dynamic'
                );
                // Click Dynamic Modal button
                await modalWindowsPage.clickModalButton(
                    'dynamic',
                    data.modalButton
                );
                // Validate result
                await expect(
                    await modalWindowsPage.getResult('dynamic')
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });

    test.describe('Scenario: Challenge Modal', () => {
        const challengeScenarios = [
            {
                name: 'Click Accept',
                modalButton: 'modalAccept',
                expectedResult: ModalWindowsData.result.modalChallenge.accept,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Click Decline',
                modalButton: 'modalDecline',
                expectedResult: ModalWindowsData.result.modalChallenge.decline,
                tags: ['@regression', '@positive']
            }
        ];

        challengeScenarios.forEach(data => {
            test(`${data.name} On Challenge Modal`, {
                    tag: data.tags
            }, async ({ modalWindowsPage }) => {
                // Click Open Challenge Modal button
                await modalWindowsPage.clickScenarioButton(
                    'challenge'
                );
                // Click Dynamic Modal button
                await modalWindowsPage.clickModalButton(
                    'challenge',
                    data.modalButton
                );
                // Validate result
                await expect(
                    await modalWindowsPage.getResult('challenge')
                ).toBe(
                    data.expectedResult
                );
            });
        });
    });
});

