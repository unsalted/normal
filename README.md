# Normal

> A stupid simple normal (gaussian) distribution – random number generator.

## Install

```
$ npm install https://github.com/unsalted/normal.git --save
```

## How to use

```
const Normal = require('normal')

/**
 * @param  {Number} mean value
 * @param  {Number} standard deviation
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
 * @param  {Number} array length
 * @return {Array}
 */
console.log(normal.values(5))

/*
[ 86.71858776443933, 95.22331093866198, 102.19432591648552, 92.34748920475664, 119.04194408354127 ]
 */

```

## NPM commands

- `npm run build`
- `npm run lint`
- `npm run test`

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2016 by Nick Meehan
