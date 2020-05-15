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
            let val2 = sortValues[this.Subtract(midpoint, 1)];
            return (this.Divide((this.Add(val1, val2)), 2));
        } else{
            return (sortValues[this.Subtract(midpoint, 1)]);
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

    Variance(values) {
        let valMean = this.Mean(values);
        let dividend = 0;
        for (let i=0; i< values.length; i++){
            dividend += Math.pow((values[i] - valMean), 2)
        }
        return (dividend/(values.length))
    }

    StanDev(values){
        let variance = this.Variance(values);
        return this.Squareroot(variance);
    }

    Skewness(values){
        let mean = this.Mean(values);
        let median = this.Median(values);
        let standev = this.StanDev(values);
        return ((3 * (mean - median)) / standev);
    }

    Covariance(xvalues, yvalues){
        Sanitize.checkIfString(xvalues, yvalues);
        Sanitize.checkIfUnequal(xvalues, yvalues);
        let divisor = (xvalues.length - 1);
        let dividend = 0;
        let meanx = this.Mean(xvalues);
        let meany = this.Mean(yvalues);
        for (let i=0; i < xvalues.length; i++ ){
            dividend += ((xvalues[i] - meanx) * (yvalues[i] - meany));
        }
        return (dividend / divisor);
    }
}
module.exports = Statistics;