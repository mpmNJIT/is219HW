class Sanitize{
    static checkIfString(a) {
        let check = true;
        if (typeof a === 'string' || a instanceof String) {
            throw new Error('Variable is String');
        } else {
            check = false;
        }
        return check
    }
    static checkIfNotString(a) {
        let check = true;
        if (typeof a === 'string' || a instanceof String) {
            check = false;
        } else {
            throw new Error('Variable is String');
        }
        return check
    }
    static checkIfUnequal(a,b) {
        let check = true;
        if (a.length !== b.length) {
            throw new Error('Must provide array inputs of equal length!');
        } else {
            check = false;
        }
        return check;
    }
}
module.exports = Sanitize;