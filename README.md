# Normal

> A stupid simple normal (gaussian) distribution – random number generator.

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
const normal = new Normal(100, 15)

 /**
 * Return single random number within the standard deviation of the mean value.
 * @return {Number}
 */

console.log(normal.value())

/*
119.74043550816609
/*

/**
 * Return an array of values within the standard deviation of the mean value.
 * @param  {Number} n array length
 * @return {Array}
 */

console.log(normal.values(5))

/*
[ 86.71858776443933, 95.22331093866198, 102.19432591648552, 92.34748920475664, 119.04194408354127 ]
 */

```

## NPM Test command

npm run test

## Build

npm run build

### NPM build command

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2016 by Nick Meehan
