module.exports = class Car {
    constructor(data = null) {
        if(data) {
            this.id = data.id;
            this.brand = data.brand;
            this.color = data.color;
            this.price = data.price;
        }

    }
    //Factory Method to Create a Car
    static create(data) {
        return new Car(data);
    }
};