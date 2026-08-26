// Arrange Alphabetically
// Keywords for QA Playground - Links Page
const { QaPlaygroundUrls } = require('../config/QaPlaygroundUrls');
const { LinksLocators } = require('../locators/LinksLocators');
const { BasePage } = require('./BasePage');

class LinksPage extends BasePage {

    constructor(page) {
        super(page);
    }

    // Async
    async clickApiLinksStatusCodeButton(buttonName) {
        await this.getApiLinksStatusCodeButton(
            buttonName
        )
        .click();
    }

    async clickBrokenLinksEmptyHrefLink() {
        await this.click(
            LinksLocators.brokenLinksEmptyHrefLink
        );
    }

    async clickBrokenLinksNewTabLink() {
        await this.click(
            LinksLocators.brokenLinksNewTabLink
        );
    }

    async clickBrokenLinksSameTabLink() {
        await this.click(
            LinksLocators.brokenLinksSameTabLink
        );
    }

    async clickExternalLinksAutomationNotesLink() {
        await this.click(
            LinksLocators.externalLinksAutomationNotesLink
        );
    }

    async clickExternalLinksCompleteCourseLink() {
        await this.click(
            LinksLocators.externalLinksCompleteCourseLink
        );
    }

    async clickInternalLinksAboutUsLink() {
        await this.click(
            LinksLocators.internalLinksAboutUsLink
        );
    }

    async clickInternalLinksHomeLink() {
        await this.click(
            LinksLocators.internalLinksHomeLink
        );
    }

    async getApiLinksResult() {
        return await this.getText(
            LinksLocators.apiLinksResult
        );
    }

    async getBrokenLinksEmptyHrefLinkHref() {
        return await this.getAttribute(
            LinksLocators.brokenLinksEmptyHrefLink,
            'href'
        );
    }

    async getBrokenLinksNewTabLinkHref() {
        return await this.getAttribute(
            LinksLocators.brokenLinksNewTabLink,
            'href'
        );
    }

    async getBrokenLinksResult() {
        return await this.getText(
            LinksLocators.brokenLinksResult
        );
    }

    async getBrokenLinksSameTabLinkHref() {
        return await this.getAttribute(
            LinksLocators.brokenLinksSameTabLink,
            'href'
        );
    }

    async getButtonLinksBrokenButtonHref() {
        return await this.getAttribute(
            LinksLocators.buttonLinksBrokenButton,
            'href'
        );
    }

    async getButtonLinksBrokenLinkButtonHref() {
        return await this.getAttribute(
            LinksLocators.buttonLinksBrokenLinkButton,
            'href'
        );
    }

    async getButtonLinksHomeButtonHref() {
        return await this.getAttribute(
            LinksLocators.buttonLinksHomeButton,
            'href'
        );
    }

    async getButtonLinksResult() {
        return await this.getText(
            LinksLocators.buttonLinksResult
        );
    }

    async getExternalLinksAutomationNotesLinkHref() {
        return await this.getAttribute(
            LinksLocators.externalLinksAutomationNotesLink,
            'href'
        );
    }

    async getExternalLinksCompleteCourseLinkHref() {
        return await this.getAttribute(
            LinksLocators.externalLinksCompleteCourseLink,
            'href'
        );
    }

    async getExternalLinksResult() {
        return await this.getText(
            LinksLocators.externalLinksResult
        );
    }

    async getImageLinksBrokenImageLinkHref() {
        return await this.getAttribute(
            LinksLocators.imageLinksBrokenImageLink,
            'href'
        );
    }

    async getImageLinksIronManLinkHref() {
        return await this.getAttribute(
            LinksLocators.imageLinksIronManLink,
            'href'
        );
    }

    async getImageLinksResult() {
        return await this.getText(
            LinksLocators.imageLinksResult
        );
    }

    async getInternalLinksAboutUsLinkHref() {
        return await this.getAttribute(
            LinksLocators.internalLinksAboutUsLink,
            'href'
        );
    }

    async getInternalLinksHomeLinkHref() {
        return await this.getAttribute(
            LinksLocators.internalLinksHomeLink,
            'href'
        );
    }

    async getInternalLinksResult() {
        return await this.getText(
            LinksLocators.internalLinksResult
        );
    }

    async getLinkUrl(linkLocator) {
        return await this.getAttribute(
            linkLocator,
            'href'
        );
    }

    async getTextLinksAnchorTextLinkHref() {
        return await this.getAttribute(
            LinksLocators.textLinksFourthLink,
            'href'
        );
    }

    async getTextLinksGarbled1LinkHref() {
        return await this.getAttribute(
            LinksLocators.textLinksFirstLink,
            'href'
        );
    }

    async getTextLinksGarbled2LinkHref() {
        return await this.getAttribute(
            LinksLocators.textLinksSecondLink,
            'href'
        );
    }

    async getTextLinksLongTextLinkHref() {
        return await this.getAttribute(
            LinksLocators.textLinksThirdLink,
            'href'
        );
    }

    async getTextLinksResult() {
        return await this.getText(
            LinksLocators.textLinksResult
        );
    }

    async navigateToLinks() {
        await this.navigate(
            QaPlaygroundUrls.linksPage
        );
    }

    // Non-Async
    getApiLinksStatusCodeButton(buttonName) {
        return this.page.getByRole('button', {
            name: buttonName
        });
        }
    }

module.exports = { LinksPage };