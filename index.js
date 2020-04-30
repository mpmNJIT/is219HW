const file = require('./FilePath/File');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const Model = require('./Models/car');
let csvFile = './Data/5LineTest.csv';
let absolutePath = file.getAbsolutePath(csvFile);
const options = {
    columns: true,
    delimiter: ',',
    trim: true,
    skip_empty_lines: true
};
let fileContents = fs.readFileSync(absolutePath);
const records = parse(fileContents, options);
let list = Array();
records.forEach(function (data) {
    list.push(Model.create(data));
});

for (const item of list) {
    if (typeof(item) === 'object'){
        const keylist = Object.values(item);
        console.log(keylist);
        if (keylist.includes(undefined)){
            console.log("Error!")
        }
    }
}