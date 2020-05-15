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

    expect(randlist).toStrictEqual([9, 6, 10, 8, 8]);
});

test('Randomly Retrieve 1 item from list (without seed)', () => {
    let list = [1,2,3,4,5];
    let Rand = new Randomizer();
    let selitem = Rand.SelItem(list, 1);

    expect(list).toContain(selitem);
});

test('Randomly select item from list (with seed)', () => {
    let list = [1,2,3,4,5];
    let seed = "jest";
    let Rand = new Randomizer();
    let selitem = Rand.SelItem(list,1, seed);

    expect(selitem).toBe(4);
});

test('Randomly Retrieve 3 items from list (without seed)', () => {
    let list = [1,2,3,4,5,6,7,8,9,10];
    let Rand = new Randomizer();
    let selitem = Rand.SelItem(list, 3);

    expect(list).toContain(selitem[0]);
    expect(list).toContain(selitem[1]);
    expect(list).toContain(selitem[2]);
});

test('Randomly Retrieve 3 items from list (with seed)', () => {
    let list = [1,2,3,4,5,6,7,8,9,10];
    let Rand = new Randomizer();
    let seed = "jest";
    let selitem = Rand.SelItem(list, 3, seed);

    expect(selitem).toStrictEqual([8, 3, 10]);
});