const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 
  let ArrG = [];
  Object.assign(ArrG, arr);
  if(Array.isArray(arr)) {
    for (let i = 0; i < ArrG.length; i++) {
      if (typeof(ArrG[i]) !== 'number'){
        if (ArrG[i] === "--discard-next") {
          // ArrG.splice(i, 2);
          if (i === ArrG.length - 1) {ArrG.splice(i, 1, undefined);} else {ArrG.splice(i, 2, undefined)}
        } else {
          if (ArrG[i] === "--discard-prev") {
            if (i > 0) {ArrG.splice((i - 1), 2, undefined)} else {ArrG.splice(i, 1, undefined)}
          } else {
            if (ArrG[i] === "--double-next") {
              // ArrG.splice(i, 1, ArrG[i + 1]);
              if (i === ArrG.length - 1) {ArrG.splice(i, 1);} else {ArrG.splice(i, 1, ArrG[i + 1])}
            } else {
              if (ArrG[i] === "--double-prev") {
                // ArrG.splice(i, 1, ArrG[i - 1]);
                if (i > 0) {ArrG.splice(i, 1, ArrG[i - 1])} else {ArrG.splice(i, 1)}
              } else {
                if (ArrG[i] === undefined) {ArrG.splice(i, 1, 88)}
              }
            }
          }
        }
      }
    }
  } else {
    throw new TypeError("'arr' parameter must be an instance of the Array!")}
    let Arrt = [];
    ArrG.forEach((item) => {
      if (item !== undefined) {Arrt.push(item)};
    })
    return Arrt;
    
}

module.exports = {
  transform
};
