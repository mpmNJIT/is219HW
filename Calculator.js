const MathOperations = require('./MathOperations');

class Calculator {
    Add(x = null, y = null) {
        if (Array.isArray(x)) {
            return this.Result = MathOperations.sum(x);

        } else {
            return this.Result = MathOperations.sum(x, y);
        }
    }
    Subtract(x = null, y = null) {
        if (Array.isArray(x)) {
            return this.Result = MathOperations.sub(x);

        } else {
            return this.Result = MathOperations.sub(x, y);
        }
    }
    Multiply(x = null, y = null) {
        if (Array.isArray(x)) {
            return this.Result = MathOperations.multiply(x);

        } else {
            return this.Result = MathOperations.multiply(x, y);
        }
    }
    Divide(x = null, y = null) {
        if (Array.isArray(x)) {
            return this.Result = MathOperations.divide(x);

        } else {
            return this.Result = MathOperations.divide(x, y);
        }
    }
    Square(x = null) {
        return this.Result = MathOperations.square(x);
    }
    Squareroot(x = null) {
        return this.Result = MathOperations.root(x);
    }
}
module.exports = Calculator;