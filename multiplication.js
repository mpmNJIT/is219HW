class multiplication{
    static multiply(x = null, y = null){
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = multiplication.multiply(result, item);
            });
        }
        else {
            result = x * y;
        }
        return result;
    }
}
module.exports = multiplication;