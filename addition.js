class addition {
    static sum(x = null, y = null) {
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = addition.sum(result, item);
            });
        }
        else {
            result = x + y;
        }
        return result;
    }
}
module.exports = addition;