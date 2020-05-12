const Calculator = require('./Calculator.js');
const Sanitize = require('./Sanitize');
const SeedRandom = require('seedrandom');
class Randomizer extends Calculator{

    RandNum(min, max, IntOrDec, seed){
        Sanitize.checkIfString(min, max);
        let random;
        if (seed === undefined){
            random = Math.random();
        } else {
            Sanitize.checkIfNotString(seed);
            const seedrng = SeedRandom(seed);
            random = seedrng();
        }
        let result;
        if (IntOrDec === "Int"){
            result = ( (random * (max - min + 1)) + min);
            return Math.floor(result);
        } else if (IntOrDec === "Dec"){
            result = ( (random * (max - min)) + min);
            return Number(result.toFixed(2));
        } else{
            throw new Error('This requires "Int" or "Dec" as input.')
        }
    }

}
module.exports = Randomizer;