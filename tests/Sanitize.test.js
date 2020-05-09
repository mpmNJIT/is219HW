const Sanitize = require('../Sanitize');



test('Check if variable is not string', () => {
    let a = 1;
    expect(Sanitize.checkIfString(a)).toBeFalsy();
});

test('Throw error for string variables', () => {

    let a = "test";

    expect(() => Sanitize.checkIfString(a)).toThrow();

});