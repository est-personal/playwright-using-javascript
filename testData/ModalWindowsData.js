// Arrange Alphabetically
// Test Data for QA Playground - Tabs and Windows Page
const ModalWindowsData = {
    content: {
        modalCard:
            'Course details go here...',
        modalChallenge:
            'Please accept the terms. The buttons lack test ids! Use ARIA or text content.',
        modalDynamic:
            'The button below has a dynamic ID. Find it using a partial match!',
        modalSimple:
            'This is a beginner-friendly modal with stable locators.'
    },
    placeholder: {
        modalCard:
            'Not opened yet',
        modalChallenge:
            'Not opened yet',
        modalDynamic:
            'Not opened yet',
        modalSimple:
            'Not opened yet'
    },
    result: {
        modalCard: {
            beginnerCourse:
                'Wrong card clicked',
            hardCourse:
                'Closed Advanced Course'
        },
        modalChallenge: {
            accept:
                'Accepted',
            decline:
                'Opened'
        },
        modalDynamic: {
            cancel:
                'Opened',
            confirmAction:
                'Confirmed'
        },
        modalSimple:
            'Closed'
    },
    title: {
        modalCard:
            'Advanced Locators',
        modalChallenge:
            'Terms of Service',
        modalDynamic:
            'Confirm Action',
        modalSimple:
            'Simple Modal'
    },
}

module.exports = { ModalWindowsData };