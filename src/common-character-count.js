const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = 0;
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  // for (let i=0; i<s1Arr.length; i++) {
  //   let j = i;
  //   let ind = s1Arr.indexOf(s1Arr[i], ++j);
  //   console.log(ind);
  //   if (ind > 0) {s1Arr.splice(ind, 1);
  //   i--;};

  //   // console.log(s1Arr.splice(ind, 1));
  // }
  // for (let k=0; k < s2Arr.length; k++) {
  //   let j2 = k;
  //   let ind2 = s2Arr.indexOf(s2Arr[k], ++j2);
  //   if (ind2 > 0) {s2Arr.splice(ind2, 1);
  //   k--};
  // }
  // for (let d=0; d<s1Arr.length; d++) {
  //   if (s2Arr.includes(s1Arr[d])) {result++}
  // }
  for (let d=0; d<s1Arr.length; d++) {
    if (s2Arr.includes(s1Arr[d])) {
      result++;
      s2Arr.splice((s2Arr.indexOf(s1Arr[d])), 1)
      
    }
  }
  // console.log(s1Arr);
  // console.log(s2Arr);
  return result;
}

module.exports = {
  getCommonCharacterCount
};
