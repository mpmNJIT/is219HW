module.exports = class csvRead {
    static create_list(csvFile, Model) {
        const file = require('../FilePath/File');
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync');
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
        //For item in list, check if object...
        for (const item of list) {
            if (typeof(item) === 'object'){
                //Create array of object values...
                const keylist = Object.values(item);
                //And throw error if undefined value is found in array.
                if (keylist.includes(undefined)){
                    return "ERROR! csvReader returned objects with undefined values. Make sure your Model is correct!"
                }
            }
        }

        return list;

    }

};