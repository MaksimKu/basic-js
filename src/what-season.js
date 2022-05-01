const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let montsString;
  if (date === undefined) {return 'Unable to determine the time of year!'};
  // if (Object.prototype.toString.call(date) !== "[object Function]") {throw new TypeError("Invalid date!")};
  if (date instanceof Date) {
  try {date.getMonth()} catch (error) {
    throw new Error ('Invalid date!');
  } ;
  try {date.getTime()} catch (error) {
    throw new Error ('Invalid date!');
  } ;
  let monts = date.getMonth()
  if (typeof(monts) !== 'number') {throw new TypeError("Invalid date!")};

if ((monts === 0) || (monts === 1) || (monts === 11)) {
  montsString = 'winter';
} else {
  if ((monts === 2) || (monts === 3) || (monts === 4)) {
    montsString = 'spring';
  } else {
    if ((monts === 5) || (monts === 6) || (monts === 7)) {
      montsString = 'summer';
    } else {
        montsString = 'autumn';
}
}
}} else {
  throw new TypeError("Invalid date!")
}
if (typeof(montsString) === 'string') {return montsString} else {throw new TypeError("Invalid date!")}}

module.exports = {
  getSeason
};
