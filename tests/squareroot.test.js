const squareroot = require('../squareroot');

test('gets square root of 64. Expects 8', () => {
    expect(squareroot.root(64)).toBe(8);
});