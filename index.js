const fs = require("fs");
const parse = require("csv-parse");

const filepath = "./example_data.csv";

fs.createReadStream(filepath)
    .on('error', () => {
        // handle error
    })

    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })

    .on('end', () => {
        // handle end of CSV
    });

