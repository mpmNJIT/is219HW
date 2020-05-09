const Calculator = require('./Calculator.js');
const Sanitize = require('./Sanitize');
class Statistics extends Calculator {
    Mean(values){
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum, numValues)
    }

    Median(values){
        Sanitize.checkIfString(values);
        let sortValues = values.sort(function(a, b){return a-b});
        let numValues = sortValues.length;
        let midpoint = Math.ceil(this.Divide(numValues, 2));
        if (numValues % 2 === 0) {
            let val1 = sortValues[midpoint];
            let val2 = sortValues[midpoint - 1];
            return ((val1 + val2) / 2)
        } else{
            return (sortValues[midpoint - 1]);
        }
    }

    Mode(values) {
        Sanitize.checkIfString(values);
        let sortValues = values.sort(function (a, b) {
            return a - b
        });
        let numcounter = {};
        let maxnum = 0;
        sortValues.forEach(function (num) {
            if (numcounter[num] === undefined) {
                numcounter[num] = 0
            }
            numcounter[num] += 1;
            if (numcounter[num] > maxnum) {
                maxnum = numcounter[num];
            }
        });
        let modecounter = [];
        for (const object in numcounter)
            if (numcounter.hasOwnProperty(object)) {
                if (numcounter[object] === maxnum) {
                    modecounter.push(Number(object));
                }
            }
        if (modecounter.length === 1) {
            return modecounter[0];
        } else {
            return modecounter;
        }
    }
}
module.exports = Statistics;