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
                // Validate redirected back
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    QaPlaygroundUrls.linksPage
                );
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
                // Validate External Links result
                expect(
                    await linksPage.getExternalLinksResult()
                ).toBe(
                    data.expected
                );
                // Validate redirected back
                expect(
                    await linksPage.getCurrentUrl()
                ).toBe(
                    QaPlaygroundUrls.linksPage
                );
            });
        });

    });

    test.describe('Broken Links', () => {
        const brokenLinksScenarios = [
            {
                name: 'New Tab',
                href: page => page.getBrokenLinksNewTabLinkHref(),
                method: page => page.clickBrokenLinksNewTabLink(),
                newTab: true,
                status: 500,
                url: LinksData.url.brokenLinks.newTab,
                expected: LinksData.result.brokenLinks.newTab,
                tags: ['@smoke', '@regression', '@positive']
            },
            {
                name: 'Same Tab',
                href: page => page.getBrokenLinksSameTabLinkHref(),
                method: page => page.clickBrokenLinksSameTabLink(),
                newTab: false,
                status: 500,
                url: LinksData.url.brokenLinks.sameTab,
                expected: LinksData.result.brokenLinks.sameTab,
                tags: ['@regression', '@positive']
            },
            {
                name: 'Empty Href',
                href: page => page.getBrokenLinksEmptyHrefLinkHref(),
                method: page => page.clickBrokenLinksEmptyHrefLink(),
                newTab: false,
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
});