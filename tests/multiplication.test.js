const multiplication = require('../multiplication');

test('multiplies 3 x 3 to equal 9', () => {
    expect(multiplication.multiply(3, 3)).toBe(9);
});