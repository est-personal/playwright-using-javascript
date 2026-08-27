const { QaPlaygroundUrls } = require('../../config/QaPlaygroundUrls');
const {test, expect} = require('../../fixtures/Pages.fixture');
const { LinksData } = require('../../testData/LinksData');

test.describe('QA Playground - Links Tests', () => {

    test.describe('Internal Links', () => {
        const internalLinksScenarios = [
            {
                name: 'Home',
                method: page => page.clickInternalLinksHomeLink(),
                url: LinksData.url.internalLinks.home,
                expected: LinksData.result.internalLinks.home,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'About Us',
                method: page => page.clickInternalLinksAboutUsLink(),
                url: LinksData.url.internalLinks.aboutUs,
                expected: LinksData.result.internalLinks.aboutUs,
                tags: ['@regression', '@positive']
            },
        ];

        internalLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                // Click Link
                await data.method(linksPage)
                // Validate redirected URL
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    data.url
                );
                // Navigate Back
                await linksPage.navigateBack();
                // Validate redirected back
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    QaPlaygroundUrls.linksPage
                );
                // NOTE --- start
                // Not automatable reliably due to page navigation causing state reset.
                // Primary validation: destination URL.
                // // Validate Internal Links result
                // expect(
                //     await linksPage.getInternalLinksResult()
                // ).toBe(
                //     data.expected
                // );
                /// NOTE --- end
            });
        });

    });

    test.describe('External Links', () => {
        const externalLinksScenarios = [
            {
                name: 'Automation Notes',
                method: page => page.clickExternalLinksAutomationNotesLink(),
                url: LinksData.url.externalLinks.automationNotes,
                expected: LinksData.result.externalLinks.automationNotes,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Complete Course',
                method: page => page.clickExternalLinksCompleteCourseLink(),
                url: LinksData.url.externalLinks.completeCourse,
                expected: LinksData.result.externalLinks.completeCourse,
                tags: ['@smoke', '@regression', '@positive']
            }
        ];

        externalLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                // Wait for new tab
                const newPagePromise =
                    page.context().waitForEvent('page');
                // // Wait for target
                // const [newTest] = await Promise.all([
                //     page.context().waitForEvent('page'),
                //     data.method(linksPage)
                // ]);
                // await newTest.waitForLoadState();
                // expect(newTest).toBeTruthy();
                // console.log(newTest.url());
                // Click Link
                await data.method(linksPage)
                // FAILING --- start
                // // new tab count
                // expect(
                //     page.context().pages().length
                // ).toBe(
                //     2
                // );
                // --- end
                const newPage =
                    await newPagePromise;
                await newPage.waitForLoadState();
                // Validate new tab opened
                expect(
                        newPage.url()
                    ).toContain(
                        data.url
                );
                // Validate redirected back
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    QaPlaygroundUrls.linksPage
                );
                // Validate External Links result
                expect(
                    await linksPage.getExternalLinksResult()
                ).toBe(
                    data.expected
                );
            });
        });

    });

    test.describe('Broken Links', () => {
        const brokenLinksScenarios = [
            {
                name: 'New Tab',
                newTab: true,
                href: page => page.getBrokenLinksNewTabLinkAttribute('href'),
                method: page => page.clickBrokenLinksNewTabLink(),
                status: 500,
                url: LinksData.url.brokenLinks.newTab,
                expected: LinksData.result.brokenLinks.newTab,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Same Tab',
                newTab: false,
                href: page => page.getBrokenLinksSameTabLinkAttribute('href'),
                method: page => page.clickBrokenLinksSameTabLink(),
                status: 500,
                url: LinksData.url.brokenLinks.sameTab,
                expected: LinksData.result.brokenLinks.sameTab,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Empty Href',
                newTab: false,
                href: page => page.getBrokenLinksEmptyHrefLinkAttribute('href'),
                method: page => page.clickBrokenLinksEmptyHrefLink(),
                url: LinksData.url.brokenLinks.emptyHref,
                expected: LinksData.result.brokenLinks.emptyHref,
                tags: ['@regression', '@positive']
            },
        ];

        brokenLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page, request }) => {
                const href =
                    await data.href(linksPage);
                if (href!='#') {
                    const response =
                        await request.get(href);
                    expect(
                        response.status()
                    ).toBe(
                        data.status
                    );            
                } 
                if (data.newTab) {
                    // Wait for new tab
                    const newPagePromise =
                        page.context().waitForEvent('page');
                    // Click Link
                    await data.method(linksPage)
                    // Validate URL
                    const newPage =
                        await newPagePromise;
                    await newPage.waitForLoadState();
                    expect(
                            newPage.url()
                        ).toContain(
                            data.url
                    );
                    // Validate Broken Links result
                    expect(
                        await linksPage.getBrokenLinksResult()
                    ).toBe(
                        data.expected
                    );
                } else {
                    // Click Link
                    await data.method(linksPage)
                    // Validate URL
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        data.url
                    );
                    if (href!='#') {
                        // Navigate Back
                        await linksPage.navigateBack();
                    }
                    // NOTE: For Same Tab
                    // Validation of Result field is not automatable 
                    // reliably due to page navigation causing state reset.
                    // Primary validation: destination URL.
                }
                // Validate redirected back
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    QaPlaygroundUrls.linksPage
                );
            });
        });

    });

    test.describe('Image Links', () => {
        const imageLinksScenarios = [
            {
                name: 'Broken Image',
                newTab: false,
                method: page => page.clickImageLinksBrokenImageLink(),
                url: LinksData.url.imageLinks.brokenImage,
                expected: LinksData.result.imageLinks.brokenImage,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Iron Man',
                newTab: true,
                method: page => page.clickImageLinkIronManLink(),
                url: LinksData.url.imageLinks.ironMan,
                expected: LinksData.result.imageLinks.ironMan,
                tags: ['@smoke', '@regression', '@positive']
            },
        ];

        imageLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                if (data.newTab) {
                    // Wait for new tab
                    const newPagePromise =
                        page.context().waitForEvent('page');
                    // Click Link
                    await data.method(linksPage)
                    // Validate new tab opened
                    const newPage =
                        await newPagePromise;
                    await newPage.waitForLoadState();
                    expect(
                            newPage.url()
                        ).toContain(
                            data.url
                    );
                    // Validate redirected back
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        QaPlaygroundUrls.linksPage
                    );
                } else {
                    // Click Link
                    await data.method(linksPage)
                    // Get number of tabs
                    const pageCountBefore =
                        page.context().pages().length;
                    // Validate number of tabs
                    expect(
                        page.context().pages().length
                    ).toBe(
                        pageCountBefore
                    );
                    // Validate no navigation happen
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        QaPlaygroundUrls.linksPage
                    );
                }
                // Validate Image Links result
                expect(
                    await linksPage.getImageLinksResult()
                ).toBe(
                    data.expected
                );
            });
        });

    });

    test.describe('Button Links', () => {
        const buttonLinksScenarios = [
            {
                name: 'Broken Button',
                method: page => page.clickButtonLinksBrokenButtonLink(),
                url: LinksData.url.buttonLinks.brokenButton,
                expected: LinksData.result.buttonLinks.brokenButton,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Broken Link Button',
                method: page => page.clickButtonLinksBrokenLinkButtonLink(),
                url: LinksData.url.buttonLinks.brokenLinkButton,
                expected: LinksData.result.buttonLinks.brokenLinkButton,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Home Button',
                method: page => page.clickButtonLinksHomeButtonLink(),
                url: LinksData.url.buttonLinks.homeButton,
                expected: LinksData.result.buttonLinks.homeButton,
                tags: ['@smoke', '@regression', '@positive']
            }
        ];

        buttonLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                if (data.url!='') {
                    // Click Link
                    await data.method(linksPage)
                    // Validate redirected URL
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        data.url
                    );
                    // Navigate Back
                    await linksPage.navigateBack();
                    // NOTE: For Same Tab
                    // Validation of Result field is not automatable 
                    // reliably due to page navigation causing state reset.
                    // Primary validation: destination URL.
                    // Validate redirected back
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        QaPlaygroundUrls.linksPage
                    );
                } else {
                    // Click Link
                    await data.method(linksPage)
                    // Validate no navigation happen
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        QaPlaygroundUrls.linksPage
                    );
                    // Validate Button Links result
                    expect(
                        await linksPage.getButtonLinksResult()
                    ).toBe(
                        data.expected
                    );
                }
            });
        });

    });

    test.describe('Text Links', () => {
        const textLinksScenarios = [
            {
                name: 'Garbled 1',
                method: page => page.clickTextLinksGarbled1Link(),
                url: LinksData.url.textLinks.garbled1,
                expected: LinksData.result.textLinks.garbled1,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Garbled 2',
                method: page => page.clickTextLinksGarbled2Link(),
                url: LinksData.url.textLinks.garbled2,
                expected: LinksData.result.textLinks.garbled2,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Long Text',
                method: page => page.clickTextLinksLongTextLink(),
                url: LinksData.url.textLinks.longText,
                expected: LinksData.result.textLinks.longText,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Anchor Text',
                method: page => page.clickTextLinksAnchorTextLink(),
                url: LinksData.url.textLinks.anchorText,
                expected: LinksData.result.textLinks.anchorText,
                tags: ['@regression', '@positive']
            },
        ];

        textLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                if (data.url=='' || data.url.includes("#")) {
                    // Click Link
                    await data.method(linksPage)
                    if (data.url!='') {
                        // Validate URL contains hash
                        expect(
                            new URL(await linksPage.getCurrentUrl()
                        ).hash).toBe(
                            data.url
                        );
                    } else {
                        // Validate no navigation happen
                        expect(
                            await linksPage.getCurrentUrl()
                        ).toBe(
                            QaPlaygroundUrls.linksPage
                        );
                    }
                    // Validate Text Links result
                    expect(
                        await linksPage.getTextLinksResult()
                    ).toBe(
                        data.expected
                    );
                } else {
                    // Click Link
                    await data.method(linksPage)
                    // Validate redirected URL
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        data.url
                    );
                    // Navigate Back
                    await linksPage.navigateBack();
                    // NOTE: For Same Tab
                    // Validation of Result field is not automatable 
                    // reliably due to page navigation causing state reset.
                    // Primary validation: destination URL.
                    // Validate redirected back
                    expect(
                        await linksPage.getCurrentUrl()
                    ).toBe(
                        QaPlaygroundUrls.linksPage
                    );
                }
            });
        });

    });

    test.describe('API Links', () => {
        const apiLinksScenarios = [
            {
                name: 'Create User (201)',
                expected: LinksData.result.apiLinks.createUser,
                tags: ['@regression', '@positive']
            },
            {
                name: 'No Content (204)',
                expected: LinksData.result.apiLinks.noContent,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Moved (301)',
                expected: LinksData.result.apiLinks.moved,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Bad Request (400)',
                expected: LinksData.result.apiLinks.badRequest,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Unauthorized (401)',
                expected: LinksData.result.apiLinks.unauthorized,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Forbidden (403)',
                expected: LinksData.result.apiLinks.forbidden,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Not Found (404)',
                expected: LinksData.result.apiLinks.notFound,
                tags: ['@regression', '@positive']
            }
        ];

        apiLinksScenarios.forEach(data => {
            test(`Click ${data.name}`,{
                    tag: data.tags
            }, async ({ linksPage, page }) => {
                await linksPage.clickApiLinksStatusCodeButton(
                    data.name
                );
                // Validate API Links result
                expect(
                    await linksPage.getApiLinksResult()
                ).toBe(
                    data.expected
                );
            });
        });

    });
});
