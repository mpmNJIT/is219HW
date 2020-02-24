const squaring = require('../squaring');

test('squares 5 to equal 25', () => {
    expect(squaring.square(5)).toBe(25);
});