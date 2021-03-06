class squareroot{
    static root(x = null){
        let result = 0;
        if(Array.isArray(x)) {
            x.forEach(function (item) {
                result = squareroot.root(item);
            });
        }
        else {
            result = Math.sqrt(x);
        }
        return result;
    }
}
module.exports = squareroot;