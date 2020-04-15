const fs = require("fs");
const parse = require("csv-parse");
const City = require('./Models/city');
const output = [];
let csvFile = "./Data/5LineTest.csv";

fs.createReadStream(csvFile)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record;
            while (record = this.read()) {
                //console.log(record);
                let city = City.create(record);
                //console.log(city);
                output.push(city);
            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){

             console.log(output);

        }));