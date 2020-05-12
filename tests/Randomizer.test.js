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

