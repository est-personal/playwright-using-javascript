const { ButtonsLocators } = require('../locators/ButtonsLocators');

const ButtonsActions = {
    navigateHome: {
        button: ButtonsLocators.navigateHomeButton,
        result: ButtonsLocators.navigateHomeResult
    },
    getCoordinates: {
        button: ButtonsLocators.getCoordinatesButton,
        result: ButtonsLocators.getCoordinatesResult
    },
    getColor: {
        button: ButtonsLocators.getColorButton,
        result: ButtonsLocators.getColorResult
    },
    getSize: {
        button: ButtonsLocators.getSizeButton,
        result: ButtonsLocators.getSizeResult
    },
    disabled: {
        button: ButtonsLocators.disabledButton,
        result: ButtonsLocators.disabledResult
    },
    clickHold: {
        button: ButtonsLocators.clickHoldButton,
        result: ButtonsLocators.clickHoldResult
    },
    doubleClick: {
        button: ButtonsLocators.doubleClickButton,
        result: ButtonsLocators.doubleClickResult
    },
    rightClick: {
        button: ButtonsLocators.rightClickButton,
        result: ButtonsLocators.rightClickResult
    }
};

module.exports = { ButtonsActions };