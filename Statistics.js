const Calculator = require('./Calculator.js');
const Sanitize = require('./Sanitize');
const SeedRandom = require('seedrandom');
class Statistics extends Calculator {
    Mean(values){
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum, numValues)
    }

    Quartiles(values, quart){
        Sanitize.checkIfString(values, quart);
        if (quart !== 1 && quart !== 2 && quart !== 3){
            throw new Error('Quartile value provided must be number 1, 2, or 3')
        }
        let sortValues = values.sort(function(a, b){return a-b});
        let numValues = sortValues.length;
        let quartval = (quart/4);
        let quartindex = (quartval * (numValues + 1)) - 1;
        if (Number.isInteger(quartindex) === false){
            let indexlow = Math.floor(quartindex);
            let indexhigh = Math.ceil(quartindex);
            return this.Divide(sortValues[indexlow] + sortValues[indexhigh], 2);
        } else {
            return sortValues[quartindex];
        }

    }

    Median(values){
        return this.Quartiles(values, 2);
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

    Variance(values, SampOrPop) {
        let valMean = this.Mean(values);
        let dividend = 0;
        let divisor;
        if (SampOrPop === "Samp"){
            divisor = (values.length - 1);
        } else if (SampOrPop === "Pop"){
            divisor = (values.length);
        } else{
            throw new Error('You must specify Sample or Population Variance with string "Samp" or "Pop" .')
        }
        for (let i=0; i< values.length; i++){
            dividend += Math.pow((values[i] - valMean), 2)
        }
        return (dividend/divisor);
    }

    StanDev(values, SampOrPop){
        let variance = this.Variance(values, SampOrPop);
        return this.Squareroot(variance);
    }

    Skewness(values, SampOrPop){
        let mean = this.Mean(values);
        let median = this.Median(values);
        let standev = this.StanDev(values, SampOrPop);
        return ((3 * (mean - median)) / standev);
    }

    Covariance(xvalues, yvalues, SampOrPop){
        Sanitize.checkIfString(xvalues, yvalues);
        Sanitize.checkIfUnequal(xvalues, yvalues);
        let divisor;
        if (SampOrPop === "Samp"){
            divisor = (xvalues.length - 1);
        } else if (SampOrPop === "Pop"){
            divisor = (xvalues.length);
        } else{
            throw new Error('You must specify Sample or Population Covariance with string "Samp" or "Pop" .')
        }
        let dividend = 0;
        let meanx = this.Mean(xvalues);
        let meany = this.Mean(yvalues);
        for (let i=0; i < xvalues.length; i++ ){
            dividend += ((xvalues[i] - meanx) * (yvalues[i] - meany));
        }
        return (dividend / divisor);
    }

    Correlation (xvalues, yvalues, SampOrPop){
        let dividend = this.Covariance(xvalues, yvalues, SampOrPop);
        let divisor = (this.StanDev(xvalues, SampOrPop) * this.StanDev(yvalues, SampOrPop));
        return (dividend/divisor);
    }

    Zscore (values, score){
        Sanitize.checkIfString(score);
        let mean = this.Mean(values);
        let standev = this.StanDev(values, "Pop");
        let dividend = (score - mean);
        return (dividend / standev)
    }

    MeanDev (values){
        let mean = this.Mean(values);
        let divisor = values.length;
        let dividend = 0;
        for(let i = 0; i<values.length ; i++){
            dividend += Math.abs((values[i] - mean));
        }
        return (dividend / divisor);
    }

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

    SimpleSamp(values, sample, seed){
        Sanitize.checkIfString(values, sample);
        return this.SelItem(values, sample, seed);

    }

}
module.exports = Statistics;