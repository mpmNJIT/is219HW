const addition = require('./addition');
const subtraction = require('./subtraction');
const multiplication = require('./multiplication');
const division = require('./division');
const squaring = require('./squaring');
const squareroot = require('./squareroot');

class MathOperations {
    static sum(x = null, y = null) {
        if(Array.isArray(x)) {
            return addition.sum(x);
        } else {
            return addition.sum(x,y);
        }
    }
    static sub(x = null, y = null) {
        if(Array.isArray(x)) {
            return subtraction.sub(x);
        } else {
            return subtraction.sub(x,y);
        }
    }
    static multiply(x,y) {
        if(Array.isArray(x)) {
            return multiplication.multiply(x);
        } else {
            return multiplication.multiply(x, y);
        }
    }
    static divide(x,y) {
        if (Array.isArray(x)) {
            return division.divide(x);
        } else {
            return division.divide(x, y);
        }
    }
    static square(x) {
        return squaring.square(x);
    }
    static root(x) {
        return squareroot.root(x);
    }
}

module.exports = MathOperations;