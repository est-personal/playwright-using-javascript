// Arrange Alphabetically
// Test Data for QA Playground - Buttons Page
const ButtonsData = {
    backgroundText:
        'Background: ',
    clickHoldButtonText:
        'Click and Hold!',
    colorText:
        'Color: —',
    contextMenuTriggered:
        'Context menu triggered!',
    coordinatesText:
        'Coordinates: —',
    disabledButtonText:
        'Disabled',
    disabledText:
        'Button is disabled — no action fires',
    doubleClickButtonText:
        'Double Click Me',
    doubleClickText:
        'Double clicked!',
    expectedColor:
        'rgb(237, 233, 254)',
    expectedSeconds:
        '1.5s',
    expectedXCoordinate:
        '193px',
    expectedYCoordinate:
        '594px',
    getColorButtonText:
        'Find my color?',
    getCoordinatesButtonText:
        'Find Location',
    getSizeButtonText:
        'Do you know my size?',
    heldForText:
        'Held for ',
    holdingText:
        'Holding... keep pressing',
    hText:
        'H: ',
    navigatedToHomePageText:
        'Navigated to Home Page',
    navigateHomeButtonText:
        'Go To Home',
    noActionPerformedText:
        'No action performed yet',
    noNavigationYetText:
        'No navigation yet',
    notDoubleClickYetText:
        'Not double-clicked yet',
    notHoldYetText:
        'Not held yet',
    releasedTooEarlyText:
        'Released too early - hold for 1.5s',
    rightClickButtonText:
        'Right Click Me',
    rightText:
        'right',
    sizeText:
        'Size: —',
    wText:
        'W: ',
    xText:
        'X: ',
    yText:
        'Y: ',

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