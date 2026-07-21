// Arrange Alphabetically
// Test Data for QA PLayground - Buttons Page
const ButtonsData = {
    backgroundText:
        'Background: ',
    clickHoldButtonText:
        'Click and Hold!',
    colorText:
        'Color: —',
    contextMenuTriggered:
        'Context menu triggered!',
    coodinatesText:
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
    get getClickAndHoldValue() {
        return  this.heldForText + this.expectedSeconds;
    },
    get getColorValue() {
        return  this.xText + this.expectedYCoordinate + ',' + this.yText + this.expectedYCoordinate;
    },
    get getCoordinatesValue() {
        return  this.backgroundText + this.expectedColor;
    },
};

module.exports = { ButtonsData };