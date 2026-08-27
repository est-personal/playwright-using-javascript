// Arrange Alphabetically
// Test Data for QA Playground - Links Page
const { QaPlaygroundUrls } = require("../config/QaPlaygroundUrls");

const LinksData = {
    href: {
        brokenLinks: {
            emptyHref:
                '#',
            newTab:
                'https://the-internet.herokuapp.com/status_codes/500',
            sameTab:
                'https://the-internet.herokuapp.com/status_codes/500'
        },
        buttonLinks: {
            brokenButton:
                '#',
            brokenLinkButton:
                '#',
            homeButton:
                '/'
        },
        externalLinks: {
            automationNotes:
                'https://www.javatpoint.com/selenium-tutorial',
            completeCourse:
                'https://www.udemy.com/course/selenium-real-time-examplesinterview-questions/'
        },
        internalLinks: {
            aboutUs: 
                '/about-us',
            home:
                '/'
        },
        imageLinks: {
            brokenImage:
                '#',
            ironMan:
                'https://ashisheditz.com/?s=iron+man'
        },
        textLinks: {
            anchorText:
                '#anchor-target',
            garbled1:
                '/',
            garbled2:
                '/about-us',
            longText:
                '#'
        }
    },
    placeholder: {
        apiLinks:
            'Click an API link',
        brokenLinks:
            'Click a broken link',
        buttonLinks:
            'Click a button link',
        externalLinks:
            'Click an external link',
        internalLinks:
            'Click an internal link',
        imageLinks:
            'Click an image link',
        textLinks:
            'Click a text or anchor link'
    },
    result: {
        apiLinks: {
            badRequest:
                'Status Code: 400 (Bad Request)',
            createUser:
                'Status Code: 201 (Create User)',
            forbidden:
                'Status Code: 403 (Forbidden)',
            moved:
                'Status Code: 301 (Moved)',
            noContent:
                'Status Code: 204 (No Content)',
            notFound:
                'Status Code: 404 (Not Found)',
            unauthorized:
                'Status Code: 401 (Unauthorized)'
        },
        brokenLinks: {
            emptyHref:
                'Clicked empty href',
            newTab:
                'Clicked broken link (new tab)',
            sameTab:
                'Clicked broken link (same tab)'
        },
        buttonLinks: {
            brokenButton:
                'Clicked Broken Button',
            brokenLinkButton:
                'Clicked Broken Link Button',
            homeButton:
                'Navigating Home via Button'
        },
        externalLinks: {
            automationNotes:
                'Opened Selenium Tutorial in new tab',
            completeCourse:
                'Opened Course in new tab'
        },
        internalLinks: {
            aboutUs:
                'Navigating to About Us...',
            home:
                'Navigating to Home...'
        },
        imageLinks: {
            brokenImage:
                'Clicked broken image link',
            ironMan:
                'Clicked Iron Man image link'
        },
        textLinks: {
            anchorText:
                'Navigated to #anchor-target',
            garbled1:
                'Clicked Garbled Link 1',
            garbled2:
                'Clicked Garbled Link 2',
            longText:
                'Clicked Long Text Link'
        }
    },
    target: {
        brokenLinks: {
            newTab:
                '_blank'
        },
        externalLinks: {
            automationNotes:
                '_blank',
            completeCourse:
                '_blank'
        },
        imageLinks: {
            ironMan:
                '_blank'
        }
    },
    url: {
        brokenLinks: {
            emptyHref:
                QaPlaygroundUrls.linksPage,
                // QaPlaygroundUrls.linksPage,
            newTab:
                'https://the-internet.herokuapp.com/status_codes/500',
            sameTab:
                'https://the-internet.herokuapp.com/status_codes/500'
        },
        buttonLinks: {
            brokenButton:
                '',
            brokenLinkButton:
                '',
            homeButton:
                QaPlaygroundUrls.homePage
        },
        externalLinks: {
            automationNotes:
                'chrome-error://chromewebdata/',
            completeCourse:
                'https://www.udemy.com/course/selenium-real-time-examplesinterview-question'
        },
        internalLinks: {
            aboutUs:
                QaPlaygroundUrls.aboutUs,
            home:
                'https://qaplayground.com/'
        },
        imageLinks: {
            brokenImage:
                '',
            ironMan:
                'https://ashisheditz.com/?s=iron+man'
        },
        textLinks: {
            anchorText:
                // `${QaPlaygroundUrls.linksPage}#anchor-target`,
                '#anchor-target',
            garbled1:
                QaPlaygroundUrls.homePage,
            garbled2:
                QaPlaygroundUrls.aboutUs,
            longText:
                ''
        }
    }
};

module.exports = { LinksData };