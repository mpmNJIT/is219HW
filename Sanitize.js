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
}
module.exports = Sanitize;