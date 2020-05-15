const Calculator = require('./Calculator.js');
const Sanitize = require('./Sanitize');
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
}
module.exports = Statistics;