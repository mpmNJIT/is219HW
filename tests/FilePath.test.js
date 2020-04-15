const file = require('../filePath/File');

test('Can find absolute filepath', () => {
    const fs = require('fs');
    let filename  = 'Data/5LineTest.csv';
    let absolutePath = file.getAbsolutePath(filename);

    //search if file exists
    fs.access(absolutePath, fs.F_OK, (err) => {
        let fileExists;
        if (err) {
            fileExists = false
        } else {
            fileExists = true;
        }
        expect(fileExists).toBeTruthy();
    });

});