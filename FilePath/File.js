class File {

    static getAbsolutePath(filename) {
        const path = require('path');
        let fullPath = path.resolve(filename);
        return fullPath;
    }

}
module.exports = File;