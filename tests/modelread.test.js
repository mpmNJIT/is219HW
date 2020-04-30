const csvRead = require('../CSV/csvRead.js');
const City = require('../Models/city.js');
const Car = require('../Models/Car.js');

test('Expect csvRead to return Mexico City info', () => {
    let csvFile = './Data/mexCityTest.csv';
    expect(csvRead.create_list(csvFile, City)).toEqual([{"admin_name": "Ciudad de México", "capital": "primary",
        "city": "Mexico City", "city_ascii": "Mexico City", "id": "1484247881", "iso2": "MX", "iso3": "MEX",
        "lat": "19.4424", "lng": "-99.1310"}]);
});

test('Expect csvRead to return array with 5 objects', () => {
    let csvFile = './Data/5LineTest.csv';
    let returned = csvRead.create_list(csvFile, City);
    expect(returned.length).toBe(5);
});

test('Expect csvRead to return error if wrong model used', () => {
    let csvFile = './Data/5LineTest.csv';
    expect(csvRead.create_list(csvFile, Car)).toBe("ERROR! csvReader returned objects with undefined values. Make sure your Model is correct!");
});