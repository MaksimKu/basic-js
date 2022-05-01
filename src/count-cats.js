const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let i = 0;
  let j = 0;
  let cat = 0;
  
  for (i; i < matrix.length; i++){
            let arr = matrix[i];
            j = 0;
            for (j; j < arr.length; j++) {
              if (arr[j] === '^^') {cat++};
            }
          }
          return cat
}

module.exports = {
  countCats
};
