class subtraction {
    static sub(x = null, y = null) {
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = subtraction.sub(result, item);
            });
        }
        else {
            result = x - y;
        }
        return result;
    }
}
module.exports = subtraction;