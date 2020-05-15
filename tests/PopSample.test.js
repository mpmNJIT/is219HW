const Statistics = require('../Statistics.js');
const expect = require("expect");

test('Get a simple random sample of 5 items from a list of 50 items.', () => {
    let Stat = new Statistics();
    let randlist = Stat.RandList(50, 0, 100, "Dec", "jest");
    let simplesamp = Stat.SimpleSamp(randlist, 5, "jest");

    expect(simplesamp).toStrictEqual([62.26, 66.79, 82.9, 46.74, 84.07]);
});

test('Get a systemic random sample of 5 items from a list of 50 items.', () => {
    let Stat = new Statistics();
    let randlist = Stat.RandList(50, 0, 100, "Dec", "jest");
    let simplesamp = Stat.SimpleSamp(randlist, 5, "jest");

    expect(simplesamp).toStrictEqual([62.26, 66.79, 82.9, 46.74, 84.07]);
});
