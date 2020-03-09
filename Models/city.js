
class City {
    //Constructor Method (City.constructor())
    constructor(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        this.city = city;
        this.city_ascii = city_ascii;
        this.lat = lat;
        this.lng = lng;
        this.country = country;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.admin_name = admin_name;
        this.capital = capital;
        this.population = population;
        this.id = id;
    }
    //Factory Method to create a new City (City.create())
    static create(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id){
        return new City(city, city_ascii, lat, lng, country, iso2, iso3, admin_name, capital, population, id)
    }
}
module.exports = City;