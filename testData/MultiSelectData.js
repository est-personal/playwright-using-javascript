// Arrange Alphabetically
// Test Data for QA Playground - Multi-Select Page
const MultiSelectData = {
    button: {
        // msCustom:
        //     'No options checked',
        msDeselect: {
            selected:
                '✓ All pre-selected',
            unselected:
                '▶ Pre-select All'
        },
        // msGrouped:
        //     'Group not targeted',
        // msMulti:
        //     ' selected',
        // msSearchable:
        //     'Search not performed',
        // msSelectAll:
        //     'Select-all not used',
        // msSingle:
        //     ' selected',
        // msTagRemove:
        //     'Tag removal not attempted'
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
        msCustom:
            'No options checked',
        msDeselect:
            'Remaining selected: ',
        msGrouped:
            'Group not targeted',
        msMulti:
            ' selected',
        msSearchable:
            'Search not performed',
        msSelectAll:
            'Select-all not used',
        msSingle:
            ' selected',
        msTagRemove:
            'Tag removal not attempted'
    }
}

module.exports = { MultiSelectData };