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

    async clickButtonLinksBrokenButtonLink() {
        await this.click(
            LinksLocators.buttonLinksBrokenButton
        );
    }

    async clickButtonLinksBrokenLinkButtonLink() {
        await this.click(
            LinksLocators.buttonLinksBrokenLinkButton
        );
    }

    async clickButtonLinksHomeButtonLink() {
        await this.click(
            LinksLocators.buttonLinksHomeButton
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

    async clickImageLinksBrokenImageLink() {
        await this.click(
            LinksLocators.imageLinksBrokenImageLink
        );
    }

    async clickImageLinkIronManLink() {
        await this.click(
            LinksLocators.imageLinksIronManLink
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

    async clickTextLinksAnchorTextLink() {
        await this.click(
            LinksLocators.textLinksAnchorTextLink
        );
    }

    async clickTextLinksGarbled1Link() {
        await this.click(
            LinksLocators.textLinksGarbled1Link
        );
    }

    async clickTextLinksGarbled2Link() {
        await this.click(
            LinksLocators.textLinksGarbled2Link
        );
    }

    async clickTextLinksLongTextLink() {
        await this.click(
            LinksLocators.textLinksLongTextLink
        );
    }

    async getApiLinksResult() {
        return await this.getText(
            LinksLocators.apiLinksResult
        );
    }

    async getBrokenLinksEmptyHrefLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.brokenLinksEmptyHrefLink,
            attribute
        );
    }

    async getBrokenLinksNewTabLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.brokenLinksNewTabLink,
            attribute
        );
    }

    async getBrokenLinksResult() {
        return await this.getText(
            LinksLocators.brokenLinksResult
        );
    }

    async getBrokenLinksSameTabLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.brokenLinksSameTabLink,
            attribute
        );
    }

    async getButtonLinksBrokenButtonAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.buttonLinksBrokenButton,
            attribute
        );
    }

    async getButtonLinksBrokenLinkButtonAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.buttonLinksBrokenLinkButton,
            attribute
        );
    }

    async getButtonLinksHomeButtonAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.buttonLinksHomeButton,
            attribute
        );
    }

    async getButtonLinksResult() {
        return await this.getText(
            LinksLocators.buttonLinksResult
        );
    }

    async getExternalLinksAutomationNotesLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.externalLinksAutomationNotesLink,
            attribute
        );
    }

    async getExternalLinksCompleteCourseLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.externalLinksCompleteCourseLink,
            attribute
        );
    }

    async getExternalLinksCompleteCourseTargetAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.externalLinksCompleteCourseLink,
            'target'
        );
    }

    async getExternalLinksResult() {
        return await this.getText(
            LinksLocators.externalLinksResult
        );
    }

    async getImageLinksBrokenImageLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.imageLinksBrokenImageLink,
            attribute
        );
    }

    async getImageLinksIronManLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.imageLinksIronManLink,
            attribute
        );
    }

    async getImageLinksResult() {
        return await this.getText(
            LinksLocators.imageLinksResult
        );
    }

    async getInternalLinksAboutUsLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.internalLinksAboutUsLink,
            attribute
        );
    }

    async getInternalLinksHomeLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.internalLinksHomeLink,
            attribute
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
            attribute
        );
    }

    async getTextLinksAnchorTextLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.textLinksAnchorTextLink,
            attribute
        );
    }

    async getTextLinksGarbled1LinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.textLinksGarbled1Link,
            attribute
        );
    }

    async getTextLinksGarbled2LinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.textLinksGarbled2Link,
            attribute
        );
    }

    async getTextLinksLongTextLinkAttribute(attribute) {
        return await this.getAttribute(
            LinksLocators.textLinksLongTextLink,
            attribute
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