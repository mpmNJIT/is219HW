const square = require('../squaring');

test('squares 5 to equal 25', () => {
    expect (square(5)).toBe(25);
});