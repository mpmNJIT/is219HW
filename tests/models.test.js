const City = require('../Models/City');
const Car = require('../Models/Car');

test('Create City', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('create City by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});
test('Create Car', () => {
    let car = new Car();
    expect(car).toBeInstanceOf(Car);
});
test('create Car by factory', () => {
    let car = Car.create();
    expect(car).toBeInstanceOf(Car);
});