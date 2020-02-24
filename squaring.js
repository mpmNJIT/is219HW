class squaring{
    static square(x = null){
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = squaring.square(item);
            });
        }
        else {
            result = x * x;
        }
        return result;
    }
}
module.exports = squaring;