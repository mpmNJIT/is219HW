const Calculator = require('../Calculator');

test('Calculator divide 2 by  2 to equal 1', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(2, 2)).toBe(1);
    expect(Calc.Result).toBe(1);

});
test('Calculator Add 2 by  2 to equal 4', () => {
    let Calc = new Calculator();
    expect(Calc.Add(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});
test('Calculator Subtract 2 by  2 to equal 0', () => {
    let Calc = new Calculator();
    expect(Calc.Subtract(2, 2)).toBe(0);
    expect(Calc.Result).toBe(0);

});
test('Calculator Multiply 2 by  2 has a result equal to 4', () => {
    let Calc = new Calculator();
    expect(Calc.Multiply(2, 2)).toBe(4);
    expect(Calc.Result).toBe(4);

});

test('Calculator add array of 1,2,3,4 and get result 10', () => {
    let Calc = new Calculator();
    let myArray = [1,2,3,4];
    expect(Calc.Add(myArray)).toBe(10);
    expect(Calc.Result).toBe(10);

});

test('Calculator divide by 0 and get error', () => {
    let Calc = new Calculator();
    expect(Calc.Divide(1, 0)).toBe("Error! Cannot divide by zero!");
    expect(Calc.Result).toBe("Error! Cannot divide by zero!");

});