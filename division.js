class division{
    static divide(x = null, y = null){
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = division.divide(result, item);
            });
        }
        if(y === 0) {
            result = "Error! Cannot divide by zero!"
        }
        else {
            result = x / y;
        }
        return result;
    }
}
module.exports = division;