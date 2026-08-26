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
            first:
                'Clicked Garbled Link 1',
            fourth:
                'Navigated to #anchor-target',
            second:
                'Clicked Garbled Link 2',
            third:
                'Clicked Long Text Link'
        }
    },
    target: {
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
    url: {
        apiLinks:
            'Click an API link',
        brokenLinks: {
            emptyHref:
                QaPlaygroundUrls.linksPage,
                // QaPlaygroundUrls.linksPage,
            newTab:
                'https://the-internet.herokuapp.com/status_codes/500',
            sameTab:
                'https://the-internet.herokuapp.com/status_codes/500'
        },
        buttonLinks:
            'Click a button link',
        externalLinks: {
            automationNotes:
                'chrome-error://chromewebdata/',
            completeCourse:
                'https://www.udemy.com/course/selenium-real-time-examplesinterview-question'
        },
        internalLinks: {
            aboutUs:
                'https://qaplayground.com/about-us',
            home:
                'https://qaplayground.com/'
        },
        imageLinks:
            'Click an image link',
        textLinks:
            'Click a text or anchor link'
    }
};

module.exports = { LinksData };