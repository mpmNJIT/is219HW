const squareroot = require('../squareroot');

test('gets the square root of 64, expects 8', () => {
    expect (squareroot(64)).toBe(8);
});