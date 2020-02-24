const subtraction = require('../subtraction');

test('subtracts 2 from 2 to equal 0', () => {
    expect (subtraction.sub(2,2)).toBe(0);
});