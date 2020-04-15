const csvRead = require('../CSV/csvRead.js');
const City = require('../Models/city.js');
let csvFile = "./Data/5LineTest.csv";

test('Expect csvRead to return x', () => {
    expect(csvRead.create_list(City, csvFile)).toBe('test');
});