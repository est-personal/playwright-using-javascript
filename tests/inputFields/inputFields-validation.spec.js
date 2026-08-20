const {test, expect} = require('../../fixtures/Pages.fixture');
const { InputFieldsPage } = require('../../pages/InputFieldsPage');
const { InputFieldsData } = require('../../testData/InputFieldsData');

const defaultValueTests = [
    {
        name: 'Type Movie',
        inputLocator: page => page.getMovieNameInput(),
        inputValue:
            InputFieldsData.placeholderMovieNameInput,
        resultLocator: page => page.getMovieNameResult(),
        resultValue:
            InputFieldsData.defaultMovieNameResult,
        type: 'placeholder'
    },
    {
        name: 'Append Tab',
        inputLocator: page => page.getAppendTabInput(),
        inputValue:
            InputFieldsData.defaultAppendTabInput,
        resultLocator: page => page.getAppendTabResult(),
        resultValue:
            InputFieldsData.defaultAppendValueTextResult,
        type: 'value'
    },
    {
        name: 'Read Value',
        inputLocator: page => page.getReadValueInput(),
        inputValue:
            InputFieldsData.defaultReadValueInput,
        resultLocator: page => page.getReadValueResult(),
        resultValue:
            InputFieldsData.defaultReadValueResult,
        type: 'value'
    },
    {
        name: 'Clear Field',
        inputLocator: page => page.getClearFieldInput(),
        inputValue:
            InputFieldsData.defaultClearFieldInput,
        resultLocator: page => page.getClearFieldResult(),
        resultValue:
            InputFieldsData.defaultClearFieldResult,
        type: 'value'
    },
    {
        name: 'Disabled Input',
        inputLocator: page => page.getDisabledFieldInput(),
        inputValue:
            InputFieldsData.defaultDisabledFieldInput,
        resultLocator: page => page.getDisabledFieldResult(),
        resultValue:
            InputFieldsData.defaultDisabledFieldResult,
        type: 'value'
    },
    {
        name: 'Read-only Input',
        inputLocator: page => page.getReadonlyFieldInput(),
        inputValue:
            InputFieldsData.defaultReadonlyFieldInput,
        resultLocator: page => page.getReadonlyFieldResult(),
        resultValue:
            InputFieldsData.defaultReadonlyFieldResult,
        type: 'value'
    }
];

test.describe('QA Playground - Input Fields Default Value Validations', () => {

    defaultValueTests.forEach(data => {
        test(`Default Value of Scenario ${data.name}`, {
                tag: ['@regression', '@positive']
        }, async ({ inputFieldsPage }) => {
            if (data.type === 'placeholder') {
                await expect(
                    data.inputLocator(inputFieldsPage)
                ).toHaveAttribute(
                    'placeholder',
                    data.inputValue
                );
            } 
            else {
                await expect(
                    data.inputLocator(inputFieldsPage)
                ).toHaveValue(
                    data.inputValue
                );
            }
            await expect(
                data.resultLocator(inputFieldsPage)
            ).toHaveText(
                data.resultValue
            );
        });
    });

});