const { expect } = require('@playwright/test');

const COLOR_TOLERANCE = 8;

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

function expectValidCoordinates(coordinates) {
    expect(coordinates.x).toBeGreaterThan(0);
    expect(coordinates.y).toBeGreaterThan(0);
}

function expectValidSize(size) {
    expect(size.width).toBeGreaterThan(0);
    expect(size.height).toBeGreaterThan(0);
}

module.exports = {
    expectColorWithinTolerance,
    expectValidCoordinates,
    expectValidSize
};