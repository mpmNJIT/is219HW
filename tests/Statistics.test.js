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
    let variance = Stat.Variance(a, "Pop");

    expect(variance).toBe(9.76);
});

test('Get Standard Deviation of array (Population)', () => {
    let a = [1,2,3,4,5];
    let Stat = new Statistics();
    let standev = Stat.StanDev(a, "Pop");

    expect(standev).toBe(1.4142135623730951);
});

test('Get skewness of array (alt Pearson Mode Skewness)', () => {
    let a = [1,2,10,10,10,15];
    let Stat = new Statistics();
    let skewness = Stat.Skewness(a);
    let mean = Stat.Mean(a);
    let median = Stat.Median(a);
    let standev = Stat.StanDev(a);

    expect(skewness).toBe(-1.2163272811190748);
    expect(skewness).toBe((3 * (mean - median)) / standev);
});

test('Get sample covariance of 2 array sets (x and y)', () => {
    let x = [2.1,2.5,3.6,4.0];
    let y = [8, 10, 12, 14];
    let Stat = new Statistics();
    let covariance = Stat.Covariance(x, y, "Samp");

    expect(covariance).toBe((6.8/3));
});

test('Get sample correlation coefficient of 2 array sets (x and y)', () => {
    let x = [2,11,6,8,10,15];
    let y = [10,13,11,18,25,15];
    let Stat = new Statistics();
    let covariance = Stat.Correlation(x, y, "Samp");

    expect(covariance).toBe(0.4105410039953163);
});

test('Get population correlation coefficient of 2 array sets (x and y)', () => {
    let x = [2,11,6,8,10,15];
    let y = [10,13,11,18,25,15];
    let Stat = new Statistics();
    let covariance = Stat.Correlation(x, y, "Pop");

    expect(covariance).toBe(0.4105410039953164);
});

test('Get Z score given a set of values', () => {
    let values = [5,10,15,20,25];
    let score = 15;
    let Stat = new Statistics();
    let zscore = Stat.Zscore(values, score);

    expect(zscore).toBe(0);
});