const multiply = require('../multiply');

test('multiplies 4 by 4 to equal 16.', () => {
    expect (multiply(4,4)).toBe(16);
});