const Statistics = require('../Statistics.js');
const expect = require("expect");

test('Get a simple random sample of 5 items from a list of 50 items.', () => {
    let Stat = new Statistics();
    let randlist = Stat.RandList(50, 0, 100, "Dec", "jest");
    let simplesamp = Stat.SimpleSamp(randlist, 5, "jest");

    expect(simplesamp).toStrictEqual([62.26, 66.79, 82.9, 46.74, 84.07]);
});

test('Get a systemic random sample of 5 items from a list of 10 items.', () => {
    let Stat = new Statistics();
    let list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let syssamp = Stat.SysSamp(list, 5);

    expect(syssamp).toStrictEqual([4, 8, 12, 16, 20]);
});

test('Get Confidence intervals of values (assume 95% confidence with normal distribution)', () => {
    let Stat = new Statistics();
    let list = [16, 84, 63, 62, 43, 75, 56, 88, 39, 74];
    let confint = Stat.ConfInt(list);

    expect(confint).toStrictEqual([46.88702871199666, 73.11297128800334]);
});

test('Get margin of error for a list of 30 values (seeded)', () => {
    let Stat = new Statistics();
    let list = Stat.RandList(30, 0, 100, "Int", "jest");
    let marginerr = Stat.MarginErr(list);

    expect(marginerr).toBe(50.13587371223213);
});

test('Get sample size from cochran formula (assuming 95% confidence)', () => {
    let Stat = new Statistics();
    let proportion = 0.5;
    let cochran = Stat.Cochran(proportion);

    expect(cochran).toBe(385);
});

test('unknown population standard deviation (assuming 95% confidence)', () => {
    let Stat = new Statistics();
    let percent = 0.41;
    let width = 0.06;
    let upsd = Stat.Upsd(percent, width);

    expect(upsd).toBe(1033);
});

test('known population standard deviation (assuming 95% confidence)', () => {
    let Stat = new Statistics();
    let standev = 2.9;
    let margin = 0.5;
    let kpsd = Stat.Kpsd(standev, margin);

    expect(kpsd).toBe(129.231424);
});