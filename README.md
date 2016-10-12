# Normal

> A stupid simple (random) normal(gaussian) distribution number generator.

## Install

```
$ npm install github.com/unsalted/normal --save
```

## How to use

```
const Normal = require('normal')

/**
 * @param  {Number} mean  mean value
 * @param  {Number} stdev standard deviation
 */
const normal = new Normal(15, 100)

 /**
 * Return single random number within the standard deviation of the mean value.
 * @return {Number}
 */
console.log(normal.value)

/**
 * Return an array of values within the standard deviation of the mean value.
 * @param  {Number} n array length
 * @return {Array}
 */
console.log(normal.values(10))

```

## NPM Test command

npm run test

## Build

npm run build

### NPM build command

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2016 by Nick Meehan
