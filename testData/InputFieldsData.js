// Arrange Alphabetically
// Test Data for QA Playground - Input Fields Page
const InputFieldsData = {
    // Static Data
    appendText: 
        " Endgame",
    currentValueText: 
        "Current value: ",
    defaultAppendTabInput: 
        "Avengers",
    defaultClearFieldInput: 
        "Inception",
    defaultDisabledFieldInput: 
        "You can't type here",
    defaultDisabledFieldResult: 
        "Input is disabled — typing is blocked",
    defaultMovieNameResult: 
        "No input yet",
    defaultMovieNameResultNoneEntered: 
        "Please type a movie name first",
    defaultReadonlyFieldInput: 
        "Read-only content",
    defaultReadonlyFieldResult: 
        "Readonly — value can be read but not edited",
    defaultReadValueInput: 
        "The Matrix",
    defaultReadValueResult: 
        "Value: —",
    enteredMovieName: 
        "Hulk",
    fieldClearedText: 
        "Field cleared ✓",
    fieldContainsText: 
        "Field contains: ",
    placeholderMovieNameInput: 
        "Enter a movie name…",
    readOnly: 
        "readonly",
    sampleText: 
        "Justice League",
    valueText: 
        "Value: ",    
    youEnteredText: 
        "You entered: ",

    // Dynamic Data
    get appendValue() {
        return  this.defaultAppendTabInput + this.appendText;
    },
    get appendValueText() {
        return  this.currentValueText + this.defaultAppendTabInput + this.appendText;
    },
    get defaultAppendValueTextResult() {
        return  this.currentValueText + this.defaultAppendTabInput;
    },
    get defaultClearFieldResult() {
        return  this.fieldContainsText + this.defaultClearFieldInput;
    },
    get defaultReadValueInputInputTextResult() {
        return  this.valueText + this.defaultReadValueInput;
    },
    get movieValueText() {
        return this.youEnteredText + this.enteredMovieName;
    },

};

module.exports = { InputFieldsData };