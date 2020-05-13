const Randomizer = require('../Randomizer.js');

test('Create random decimal without seed', () => {
    let min = 5;
    let max = 10;
    let Dec = "Dec";
    let Rand = new Randomizer();
    let randnum = Rand.RandNum(min, max, Dec);

    expect(randnum).toBeGreaterThanOrEqual(5);
    expect(randnum).toBeLessThanOrEqual(10);
    expect(Number.isInteger(randnum)).toBe(false);
});

test('Create random Integer without seed', () => {
    let min = 5;
    let max = 10;
    let Int = "Int";
    let Rand = new Randomizer();
    let randnum = Rand.RandNum(min, max, Int);

    expect(randnum).toBeGreaterThanOrEqual(5);
    expect(randnum).toBeLessThanOrEqual(10);
    expect(Number.isInteger(randnum)).toBe(true);
});

test('Create random decimal with seed', () => {
    let min = 5;
    let max = 10;
    let Dec = "Dec";
    let seed = "jest";
    let Rand = new Randomizer();
    let randnum = Rand.RandNum(min, max, Dec, seed);

    expect(randnum).toBe(9.48);
});

test('Create random integer with seed', () => {
    let min = 5;
    let max = 10;
    let Dec = "Int";
    let seed = "jest";
    let Rand = new Randomizer();
    let randnum = Rand.RandNum(min, max, Dec, seed);

    expect(randnum).toBe(10);
});

test('Create random list of n decimals with seed', () => {
    let items = 5;
    let min = 5;
    let max = 10;
    let Dec = "Dec";
    let seed = "jest";
    let Rand = new Randomizer();
    let randlist = Rand.RandList(items, min, max, Dec, seed);

    expect(randlist).toStrictEqual([8.59, 6.18, 9.77, 7.79, 7.59]);
});

test('Create random list of n integers with seed', () => {
    let items = 5;
    let min = 5;
    let max = 10;
    let Dec = "Int";
    let seed = "jest";
    let Rand = new Randomizer();
    let randlist = Rand.RandList(items, min, max, Dec, seed);

    expect(randlist).toStrictEqual([8.59, 6.18, 9.77, 7.79, 7.59]);
});

test('Retrieve item from list', () => {
    let list = [1,2,3,4,5];
    let Rand = new Randomizer();
    let selitem = Rand.SelItem(list);

    expect(list).toContain(selitem);
});

test('Create random list from seed and select random item from list.', () => {
    let items = 5;
    let min = 5;
    let max = 10;
    let Int = "Int";
    let seed = "jest";
    let Rand = new Randomizer();
    let randlistsel = Rand.RandListSel(items, min, max, Int, seed);

    expect(Rand.RandList(items, min, max, Int, seed)).toContain(randlistsel);
});

