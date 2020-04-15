const fs = require("fs");
const parse = require("csv-parse");

class csvRead {
    static create_list(Model, csvFile) {
        let output = [];
        fs.createReadStream(csvFile)
            .pipe(parse({
                columns: true,
                delimiter: ',',
                trim: true,
                skip_empty_lines: true
            })
                .on('readable', function () {
                    let record;
                    while (record = this.read()) {
                        //console.log(record);
                        let model = Model.create();
                        //console.log(city);
                        output.push(model);
                    }
                })
                // When we are done, test that the parsed output matched what expected
                .on('end', function () {

                    //console.log(output);

                }));

        return output;
    }
}
module.exports = csvRead;