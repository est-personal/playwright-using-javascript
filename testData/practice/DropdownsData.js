// Arrange Alphabetically
// Test Data for QA Playground - Dropdowns Page
const DropdownsData = {
    defaultValue: {
        customPriorityDropdown:
            'Choose priority',
        customPriorityResult:
            'Priority not selected',
        multiSelectHeroesResult:
            'No heroes selected',
        searchCityDropdown:
            'Search city',
        searchCityResult:
            'No city selected',
        selectCountryDropdown:
            'Select Country',
        selectCountryResult:
            'No country selected',
        selectFruitDropdown:
            'Select Fruit',
        selectFruitResult:
            'No fruit selected',
        selectLanguageDropdown:
            'Python',
        selectLanguageResult:
            'Languages available: 4',
    },

    input: {
        city: {
            bengaluru:
                'Bengaluru',
            delhi:
                'Delhi',
            hyderabad:
                'Hyderabad',
            mumbai:
                'Mumbai',
            pune:
                'Pune',
        },
        country: {
            argentina:
                'Argentina',
            india:
                'India',
            japan:
                'Japan',
            unitedStates:
                'United States',
        },
        fruit:
            'Banana',
        heroes: [
            'Ant-Man',
            'Aquaman',
            'Batman',
        ],
        language: {
            java:
                'Java',
            javaScript:
                'JavaScript',
            python:
                'Python',
            typeScript:
                'TypeScript',
        },
        priority: {
            highPriority:
                'High Priority',
            lowPriority:
                'Low Priority',
            mediumPriority:
                'Medium Priority',
        },
        remainingHeroes: [
            'Aquaman',
            'Batman',
        ],
        removedHeroes: [
            'Ant-Man',
        ],
        get heroesCount() {
            return this.heroes.length;
        },
    },

    options: {
        city: [
            'Bengaluru',
            'Delhi',
            'Hyderabad',
            'Mumbai',
            'Pune',
        ],
        country: [
            'Select Country',
            'Argentina',
            'India',
            'Japan',
            'United States',
        ],
        fruit: [
            'Select Fruit',
            'Apple',
            'Banana',
            'Orange',
        ],
        heroes: [
            'Ant-Man',
            'Aquaman',
            'The Avengers',
            'Batman',
        ],
        language: [
            'Python',
            'Java',
            'JavaScript',
            'TypeScript',
        ],
        priority: [
            'Low Priority',
            'Medium Priority',
            'High Priority',
        ],
    },

    result: {
        citySelected:
            'City selected: ',
        prioritySelected:
            'Priority selected: ',
        selected:
            'Selected ',
        selectedCountry:
            'Selected country: ',
        selectedFruit:
            'Selected fruit: ',
        selectedHeroes:
            'Selected heroes: ',
        selectedLanguage:
            'Selected language: ',
        //     'Python, Java, JavaScript, TypeScript',
        get multiSelectHeroesResult() {
            return  this.selectedHeroes + DropdownsData.input.heroes.join(', ');
        },
        get selectLanguageAllResult() {
            return  this.selected + DropdownsData.input.language.typeScript +
                '; options: ' + this.selectedLanguageOptions;
        },
        get selectedLanguageOptions() {
            return DropdownsData.options.language.join(', ');
        },
    },

    valueAttribute: {
        city: {
            bengaluru:
                'city-bengaluru',
            delhi:
                'city-delhi',
            hyderabad:
                'city-hyderabad',
            mumbai:
                'city-mumbai',
            pune:
                'city-pune',
        },
        country: {
            argentina:
                'argentina',
            india:
                'india',
            japan:
                'japan',
            unitedStates:
                'united-states',
        },
    },

};

module.exports = { DropdownsData };