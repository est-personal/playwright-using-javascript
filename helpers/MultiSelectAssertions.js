const { expect } = require('@playwright/test');

export class MultiSelectAssertions {
    // static async validateOptionsRemoved(
    //     multiSelectPage,
    //     options
    // ) {
    //     const optionList = Array.isArray(options)
    //         ? options
    //         : [options];

    //     for (const option of optionList) {
    //         await expect(
    //             multiSelectPage.getSelectedOption(option)
    //         ).toHaveCount(0);
    //     }
    // }

    // static async validateOptionsSelected(multiSelectPage, options) {
    //     const optionList = Array.isArray(options)
    //         ? options
    //         : [options];

    //     for (const option of optionList) {
    //         await expect(
    //             multiSelectPage.getSelectedOption(
    //                 option
    //             )
    //         ).toBeVisible();
    //     }
    // }

    static async validateRemoved(multiSelectPage, section, tags) {
        const tagList = Array.isArray(tags)
            ? tags
            : [tags];

        for (const tag of tagList) {
            await expect(
                multiSelectPage.getTagsOption(section, tag)
            ).toHaveCount(0);
        }
    }

    static async validateDisplayed(multiSelectPage, section, tags) {
        const tagList = Array.isArray(tags)
            ? tags
            : [tags];

        for (const tag of tagList) {
            await expect(
                multiSelectPage.getTagsOption(section, tag)
            ).toBeVisible();
        }
    }

}