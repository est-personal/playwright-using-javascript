const {test, expect} = require('../../fixtures/Pages.fixture');
const { LinksData } = require('../../testData/LinksData');

const placeholderScenarios = [
    {
        name: 'Internal Links',
        locator: page => page.getInternalLinksResult(),
        value: LinksData.placeholder.internalLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'External Links',
        locator: page => page.getExternalLinksResult(),
        value: LinksData.placeholder.externalLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'Broken Links',
        locator: page => page.getBrokenLinksResult(),
        value: LinksData.placeholder.brokenLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'Image Links',
        locator: page => page.getImageLinksResult(),
        value: LinksData.placeholder.imageLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'Button Links',
        locator: page => page.getButtonLinksResult(),
        value: LinksData.placeholder.buttonLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'Text Links',
        locator: page => page.getTextLinksResult(),
        value: LinksData.placeholder.textLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
    {
        name: 'API Links',
        locator: page => page.getApiLinksResult(),
        value: LinksData.placeholder.apiLinks,
        type: 'value',
        tags: ['@regression', '@positive']
    },
];

test.describe('QA Playground - Links - Default Result Text Validations', () => {
    placeholderScenarios.forEach(data => {
        test(`Scenario ${data.name}`, {
                tag: data.tags
        }, async ({ linksPage }) => {
            // Validate result
            if (data.type === 'placeholder') {
                expect(
                    await data.locator(linksPage)
                ).toHaveAttribute(
                    'placeholder',
                    data.value
                );
            } 
            else {
                expect(
                    await data.locator(linksPage)
                ).toBe(
                    data.value
                );
            }
        });
    });
});

const hrefScenarios = [
    {
        name: 'Internal Links',
        link: 'Home',
        locator: page => page.getInternalLinksHomeLinkHref(),
        value: LinksData.href.internalLinks.home,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Internal Links',
        link: 'About Us',
        locator: page => page.getInternalLinksAboutUsLinkHref(),
        value: LinksData.href.internalLinks.aboutUs,
        tags: ['@regression', '@positive']
    },
    {
        name: 'External Links',
        link: 'Automation Notes',
        locator: page => page.getExternalLinksAutomationNotesLinkHref(),
        value: LinksData.href.externalLinks.automationNotes,
        tags: ['@regression', '@positive']
    },
    {
        name: 'External Links',
        link: 'Complete Course',
        locator: page => page.getExternalLinksCompleteCourseLinkHref(),
        value: LinksData.href.externalLinks.completeCourse,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Broken Links',
        link: 'New Tab',
        locator: page => page.getBrokenLinksNewTabLinkHref(),
        value: LinksData.href.brokenLinks.newTab,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Broken Links',
        link: 'Same Tab',
        locator: page => page.getBrokenLinksSameTabLinkHref(),
        value: LinksData.href.brokenLinks.sameTab,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Broken Links',
        link: 'Empty Href',
        locator: page => page.getBrokenLinksEmptyHrefLinkHref(),
        value: LinksData.href.brokenLinks.emptyHref,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Image Links',
        link: 'Broken Image',
        locator: page => page.getImageLinksBrokenImageLinkHref(),
        value: LinksData.href.imageLinks.brokenImage,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Image Links',
        link: 'Iron Man',
        locator: page => page.getImageLinksIronManLinkHref(),
        value: LinksData.href.imageLinks.ironMan,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Button Links',
        link: 'Broken Button',
        locator: page => page.getButtonLinksBrokenButtonHref(),
        value: LinksData.href.buttonLinks.brokenButton,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Button Links',
        link: 'Broken Link Button',
        locator: page => page.getButtonLinksBrokenLinkButtonHref(),
        value: LinksData.href.buttonLinks.brokenLinkButton,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Button Links',
        link: 'Home Button',
        locator: page => page.getButtonLinksHomeButtonHref(),
        value: LinksData.href.buttonLinks.homeButton,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Text Links',
        link: 'Garbled 1',
        locator: page => page.getTextLinksGarbled1LinkHref(),
        value: LinksData.href.textLinks.garbled1,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Text Links',
        link: 'Garbled 2',
        locator: page => page.getTextLinksGarbled2LinkHref(),
        value: LinksData.href.textLinks.garbled2,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Text Links',
        link: 'Long Text',
        locator: page => page.getTextLinksLongTextLinkHref(),
        value: LinksData.href.textLinks.longText,
        tags: ['@regression', '@positive']
    },
    {
        name: 'Text Links',
        link: 'Anchor Text',
        locator: page => page.getTextLinksAnchorTextLinkHref(),
        value: LinksData.href.textLinks.anchorText,
        tags: ['@regression', '@positive']
    }
];

test.describe('QA Playground - Links - Href Attribute Validations', () => {
    hrefScenarios.forEach(data => {
        test(`Scenario ${data.name}: ${data.link}`, {
                tag: data.tags
        }, async ({ linksPage }) => {
            // Validate Href
            expect(
                await data.locator(linksPage)
            ).toBe(
                data.value
            );
        });
    });
});
