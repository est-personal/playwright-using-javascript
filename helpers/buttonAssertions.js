const { expect } = require('@playwright/test');

const COLOR_TOLERANCE = 8;
const SIZE_TOLERANCE = 2;

function expectColorWithinTolerance(
    actual,
    expected,
    tolerance = COLOR_TOLERANCE
) {
    expect(
        Math.abs(actual.r - expected.r)
    ).toBeLessThanOrEqual(tolerance);

    expect(
        Math.abs(actual.g - expected.g)
    ).toBeLessThanOrEqual(tolerance);

    expect(
        Math.abs(actual.b - expected.b)
    ).toBeLessThanOrEqual(tolerance);
}

function expectCoordinatesNear(
    actual,
    expected,
    tolerance = 2
) {
    expect(
        Math.abs(actual.x - expected.x)
    ).toBeLessThanOrEqual(tolerance);

    expect(
        Math.abs(actual.y - expected.y)
    ).toBeLessThanOrEqual(tolerance);
}

function expectSizeWithinTolerance(
    actual,
    expected,
    tolerance = SIZE_TOLERANCE
) {
    expect(
        Math.abs(actual.width - expected.width)
    ).toBeLessThanOrEqual(tolerance);

    expect(
        Math.abs(actual.height - expected.height)
    ).toBeLessThanOrEqual(tolerance);
}

function expectValidCoordinates(coordinates) {
    expect.soft(coordinates.x).toBeGreaterThan(0);
    expect.soft(coordinates.y).toBeGreaterThan(0);
}

function expectValidRgb(color) {
    [color.r, color.g, color.b].forEach(component => {
            expect.soft(component).toBeGreaterThanOrEqual(0);
            expect.soft(component).toBeLessThanOrEqual(255);
    });
}

function expectValidSize(size) {
    expect.soft(size.width).toBeGreaterThan(0);
    expect.soft(size.height).toBeGreaterThan(0);
}

module.exports = {
    expectColorWithinTolerance,
    expectCoordinatesNear,
    expectSizeWithinTolerance,
    expectValidCoordinates,
    expectValidRgb,
    expectValidSize
};