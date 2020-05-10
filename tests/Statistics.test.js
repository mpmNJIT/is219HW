const Statistics = require('../Statistics.js');
const expect = require("expect");
test('Determine mean of an array.', () => {
    let a = [20,5,5];
    let Stat = new Statistics();
    let mean = Stat.Mean(a);

    expect(mean).toBe(10);
});

test('Determine median of an odd array.', () => {
    let a = [6,10,7];
    let Stat = new Statistics();
    let median = Stat.Median(a);

    expect(median).toBe(7);
});

test('Determine median of an even array.', () => {
    let a = [6,7,9,10];
    let Stat = new Statistics();
    let median = Stat.Median(a);

    expect(median).toBe(8);
});

test('Determine mode of an array.', () => {
    let a = [6,7,7,7,8,9,10];
    let Stat = new Statistics();
    let mode = Stat.Mode(a);

    expect(mode).toBe(7);
});

test('Get mode and expect multiple values. (returns as array)', () => {
    let a = [6,7,7,8,9,9,10];
    let Stat = new Statistics();
    let mode = Stat.Mode(a);

    expect(mode).toStrictEqual([7,9]);
});

test('Get Variance of array (Population)', () => {
    let a = [5,7,9,11,14];
    let Stat = new Statistics();
    let variance = Stat.Variance(a);

    expect(variance).toBe(9.76)
});

test('Get Standard Deviation of array (Population)', () => {
    let a = [1,2,3,4,5];
    let Stat = new Statistics();
    let standev = Stat.StanDev(a);

    expect(standev).toBe(1.4142135623730951)
});