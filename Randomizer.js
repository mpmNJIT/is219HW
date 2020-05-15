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

    RandList(items, min, max, IntOrDec, seed){
        Sanitize.checkIfString(items);
        let list = [];
        let num;
        for (let i=0; i< items; i++){
            num = this.RandNum(min, max, IntOrDec, seed + i.toString());
            list.push(num);
        }
        return list;

    }

    SelItem(list, num, seed){
        Sanitize.checkIfString(list, num);
        if (num < 1 || num > list.length || Number.isInteger(num) === false){
            throw new Error('Must include amount of items selected, and number must be at least 1 and less than or equal to list length')
        }
        let max = (list.length) - 1;
        let i = 0;
        let indexlist = [];
        let itemlist = [];
        let index;
        while (i < num){
            if (seed === undefined){
                index = this.RandNum(0, max, "Int");
            } else {
                index = this.RandNum(0, max, "Int", seed + i.toString());
            }
            if (indexlist.includes(index)){
                continue
            }
            i += 1;
            indexlist.push(index);
            itemlist.push(list[index]);
        }
        if (itemlist.length === 1){
            return itemlist[0];
        } else {
            return itemlist;
        }
    }


}
module.exports = Randomizer;