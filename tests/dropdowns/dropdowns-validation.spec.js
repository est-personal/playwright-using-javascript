const {test, expect} = require('../../fixtures/Pages.fixture');
const { DropdownsData } = require('../../testData/DropdownsData');

const optionsTests = [
    {
        name: 'Select Fruit',
        getOptions: page => page.getSelectFruitOptions(),
        expected: DropdownsData.options.fruit
    },
    {
        name: 'Select Country',
        getOptions: page => page.getSelectCountryOptions(),
        expected: DropdownsData.options.country
    },
    {
        name: 'Select Language',
        getOptions: page => page.getSelectLanguageOptions(),
        expected: DropdownsData.options.language
    },
    {
        name: 'Multi-Select Heroes',
        getOptions: page => page.getMultiSelectHeroesOptions(),
        expected: DropdownsData.options.heroes
    },
    {
        name: 'Custom Priority',
        getOptions: page => page.getCustomPriorityOptions(),
        expected: DropdownsData.options.priority
    },
    {
        name: 'Searchable City',
        getOptions: page => page.getSearchableCityOptions(),
        expected: DropdownsData.options.city,
        // partialMatch: true
    }
];

test.describe('QA Playground - Dropdowns Options Validation', () => {

    optionsTests.forEach(data => {
        test(`${data.name} options`, {
            tag: ['@regression', '@positive']
        }, async ({ dropdownsPage }) => {
            const actualOptions =
                await data.getOptions(dropdownsPage);
            const normalizedOptions =
                actualOptions.map(option =>
                    option.replace(/[A-Z]{2}$/, '')
                );
            if (data.partialMatch) {
                data.expected.forEach(expected => {
                    expect(
                        normalizedOptions.some(actual =>
                            actual.startsWith(expected)
                        )
                    ).toBeTruthy();
                });
            } 
            else {
                expect(normalizedOptions).toEqual(
                    expect.arrayContaining(data.expected)
                );
            }
        });
    });

});

const defaultValueTests = [
    {
        name: 'Select Fruit Result',
        locator: page => page.getSelectFruitResult(),
        expected: DropdownsData.defaultValue.selectFruitResult
    },
    {
        name: 'Select Country Result',
        locator: page => page.getSelectCountryResult(),
        expected: DropdownsData.defaultValue.selectCountryResult
    },
    {
        name: 'Select Language Result',
        locator: page => page.getSelectLanguageResult(),
        expected: DropdownsData.defaultValue.selectLanguageResult
    },
    {
        name: 'Multi-Select Heroes Result',
        locator: page => page.getMultiSelectHeroesResult(),
        expected: DropdownsData.defaultValue.multiSelectHeroesResult
    },
    {
        name: 'Custom Priority Result',
        locator: page => page.getCustomPriorityResult(),
        expected: DropdownsData.defaultValue.customPriorityResult
    },
    {
        name: 'Search City Result',
        locator: page => page.getSearchCityResult(),
        expected: DropdownsData.defaultValue.searchCityResult
    }
];

test.describe('QA Playground - Dropdowns Default Value Validation', () => {

    defaultValueTests.forEach(data => {
        test(`${data.name}`, {
            tag: ['@regression', '@positive']
        }, async ({ dropdownsPage }) => {
            await expect(
                data.locator(dropdownsPage)
            ).toHaveText(
                data.expected
            );
        });
    });

});