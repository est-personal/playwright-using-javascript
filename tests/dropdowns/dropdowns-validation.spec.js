const {test, expect} = require('../../fixtures/Pages.fixture');
const { DropdownsData } = require('../../testData/DropdownsData');

const scenarios = [
    {
        name: 'Select Fruit',
        getOptions: page => page.getDropdownOptions('fruit'),
        options: 'fruit',
        expectedOption: DropdownsData.options.fruit,
        expectedResult: DropdownsData.defaultValue.selectFruitResult
    },
    {
        name: 'Select Country',
        getOptions: page => page.getDropdownOptions('country'),
        options: 'country',
        expectedOption: DropdownsData.options.country,
        expectedResult: DropdownsData.defaultValue.selectCountryResult
    },
    {
        name: 'Select Language',
        getOptions: page => page.getDropdownOptions('language'),
        options: 'language',
        expectedOption: DropdownsData.options.language,
        expectedResult: DropdownsData.defaultValue.selectLanguageResult
    },
    {
        name: 'Multi-Select Heroes',
        getOptions: page => page.getMultiSelectHeroesOptions(),
        options: 'heroes',
        expectedOption: DropdownsData.options.heroes,
        expectedResult: DropdownsData.defaultValue.multiSelectHeroesResult
    },
    {
        name: 'Custom Priority',
        getOptions: page => page.getCustomPriorityOptions(),
        options: 'priority',
        expectedOption: DropdownsData.options.priority,
        expectedResult: DropdownsData.defaultValue.customPriorityResult
    },
    {
        name: 'Searchable City',
        getOptions: page => page.getSearchableCityOptions(),
        options: 'city',
        expectedOption: DropdownsData.options.city,
        expectedResult: DropdownsData.defaultValue.searchCityResult
        // partialMatch: true
    }
];

test.describe('QA Playground - Dropdowns Options Validation', () => {
    scenarios.forEach(data => {
        test(`${data.name} options`, {
            tag: ['@regression', '@positive']
        }, async ({ dropdownsPage }) => {
            // Get dropdown options
            const actualOptions =
                await data.getOptions(dropdownsPage);
            const normalizedOptions =
                actualOptions.map(option =>
                    option.replace(/[A-Z]{2}$/, '')
                );
            // Validate dropdown options
            if (data.partialMatch) {
                data.expectedOption.forEach(expected => {
                    expect(
                        normalizedOptions.some(actual =>
                            actual.startsWith(expected)
                        )
                    ).toBeTruthy();
                });
            } 
            else {
                expect(normalizedOptions).toEqual(
                    expect.arrayContaining(data.expectedOption)
                );
            }
        });
    });

});

test.describe('QA Playground - Dropdowns - Default Value Validation', () => {
    scenarios.forEach(data => {
        test(`${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ dropdownsPage }) => {
            // Validate default value of result
            await expect(
                dropdownsPage.getResult(data.options)
            ).toHaveText(
                data.expectedResult
            );
        });
    });

});