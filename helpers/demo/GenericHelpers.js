const { test } = require('@playwright/test');

class GenericHelpers {

    static markKnownDefect(bugId) {
        if (bugId) {
            test.fail(
                true,
                `Known defect: ${bugId}`
            );
        }
    }
}

module.exports = { GenericHelpers };