var fs = require("fs");
var parse = require("csv-parse");

var csvFile = "data.csv";

class City {
    constructor(city, city_ascii, lastName, lat, lng, country, iso2, iso3, admin_name, capital, population, id) {
        this.city = city;
        this.city_ascii = city_ascii;
        this.lastName = lastName;
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
}

const processData = (err, data) => {
    if (err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }


    const cityList = data.map(row => new City(...row));

};

fs.createReadStream(csvFile)
    .pipe(parse({ delimiter: ',' }, processData));