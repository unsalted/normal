const Normal = require('../dist/normal')
/**
 * @param  {Number} mean  mean value
 * @param  {Number} stdev standard deviation
 */
const normal = new Normal(15, 100)

console.log(Normal)

 /**
 * Return single random number within the standard deviation of the mean value.
 * @return {Number}
 */
console.log(normal.value())

/**
 * Return an array of values within the standard deviation of the mean value.
 * @param  {Number} n array length
 * @return {Array}
 */
console.log(normal.values(10))