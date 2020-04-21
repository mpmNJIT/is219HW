class csvRead {
    static create_list(csvFile, Model) {
        const file = require('../FilePath/File');
        const fs = require('fs');
        const parse = require('csv-parse');
        let absolutePath = file.getAbsolutePath(csvFile);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let fileContents = fs.readFileSync(absolutePath);
        const records = parse(fileContents, options)
        let list = Array();
        records.forEach(function (data) {
            list.push(Model.create(data));
        })

        return list;

    }

}
module.exports = csvRead;