// Arrange Alphabetically
// Test Data for QA Playground - Multi-Select Page
const MultiSelectData = {
    button: {
        msDeselect: {
            selected:
                '✓ All pre-selected',
            unselected:
                '▶ Pre-select All'
        }
    },
    options: {
        msCustom: {
            React:
                'React',
            Vue:
                'Vue.js',
            Angular:
                'Angular',
            Svelte:
                'Svelte'
        },
        msSearchable: {
            nonExisting:
                'Html'
        },
        msSelectAll:
            [
                'React',
                'Vue.js',
                'Angular',
                'Svelte'
            ],
        msTagRemove: {
            JavaScript:
                'JavaScript',
            TypeScript:
                'TypeScript',
            Python:
                'Python',
            Java:
                'Java'
        }
    },
    placeholder: {
        msCustom:
            'No options checked',
        msDeselect:
            'Deselect not attempted',
        msGrouped:
            'Group not targeted',
        msMulti:
            'No options selected',
        msSearchable:
            'Search not performed',
        msSelectAll:
            'Select-all not used',
        msSingle:
            'No option selected',
        msTagRemove:
            'Tag removal not attempted'
    },
    result: {
        msCustom: {
            selected:
                ' selected',
            unselected:
                'Nothing selected'
        },
        msDeselect:
            'Remaining selected: ',
        msGrouped:
            'Group not targeted',
        msMulti:
            ' selected',
        msSearchable:
            ' chosen',
        msSelectAll: {
            clear:
                'Cleared — nothing selected',
            select:
                'All selected'
        },
        msSingle:
            ' selected',
        msTagRemove:
            'Tag removal not attempted'
    },
    static: {
        noResults:
            'No results',
        oneRemaining:
            '1 remaining',
        selected:
            'Selected: ',
        tagRemoved:
            ' tag removed — ',
        threeRemaining:
            '3 remaining',
        twoRemaining:
            '2 remaining',
        zeroRemaining:
            '0 remaining'
    }
};

MultiSelectData.allMsTagsRemove = Object.values(
    MultiSelectData.options.msTagRemove
);

module.exports = { MultiSelectData };