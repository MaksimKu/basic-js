const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let min = 1
    let sub = 0;
    for (let arrsub of arr) {
      if (Array.isArray(arrsub)) {
        // let subsub = this.calculateDepth(arrsub);
        // if (subsub < sub) {
        //  sub = subsub;
        // } else {sub = sub}
        sub = Math.max(this.calculateDepth(arrsub), sub);
        // sub = sub > this.calculateDepth(arrsub) ? sub : this.calculateDepth(arrsub);
      }
    }
    return min + sub;
  }
}

module.exports = {
  DepthCalculator
};
