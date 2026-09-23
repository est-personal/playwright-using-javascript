// Arrange Alphabetically
// Test Data for QA Playground - Buttons Page
const ButtonsData = {
    buttonText: {
        clickHoldButtonText:
            'Click and Hold!',
        disabledButtonText:
            'Disabled',
        doubleClickButtonText:
            'Double Click Me',
        getColorButtonText:
            'Find my color?',
        getCoordinatesButtonText:
            'Find Location',
        getSizeButtonText:
            'Do you know my size?',
        navigateHomeButtonText:
            'Go To Home',
        rightClickButtonText:
        'Right Click Me',
    },
    placeholder: {
        clickHold:
            'Not held yet',
        disabled:
            'Button is disabled — no action fires',
        doubleClick:
            'Not double-clicked yet',
        getColor:
            'Color: —',
        getCoordinates:
            'Coordinates: —',
        getSize:
            'Size: —',
        navigateHome:
            'No navigation yet',
        rightClick:
            'No action performed yet'
    },
    result: {
        clickHold: {
            clickAndHold:
                'Held for 1.5s',
            holdingText:
                'Holding... keep pressing',
            tooEarly:
                'Released too early - hold for 1.5s'
        },
        doubleClick:
            'Double clicked!',
        navigateHome:
            'Navigated to Home Page',
        rightClick:
            'Context menu triggered!'
    },
    static: {
        backgroundText:
            'Background: ',
        hText:
            'H: ',
        rightText:
            'right',
        wText:
            'W: ',
        xText:
            'X: ',
        yText:
            'Y: ',
    },
    expectedColor:
        'rgb(237, 233, 254)',
    expectedSeconds:
        '1.5s',
    expectedXCoordinate:
        '193px',
    expectedYCoordinate:
        '594px',
    // Dynamic Data
    get expectedClickAndHoldValue() {
        return  `${this.heldForText}${this.expectedSeconds}`;
    },
    get expectedColorValue() {
        return  `${this.backgroundText}${this.expectedColor}`;
    },
    get expectedCoordinatesValue() {
        return  `${this.coordinatesText}${this.expectedXCoordinate},${this.expectedYCoordinate}`;
    },
};

module.exports = { ButtonsData };