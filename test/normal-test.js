/* global it, describe, before, after */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import test from 'tape';
import math from 'mathjs';
import Normal from '../src/normal';

test('normal value test', (t) => {
    const normal = new Normal(100, 15)
    const values = normal.values(1000)
    const mean = math.mean(values)
    const variance = math.var(values)
    const stdev = Math.sqrt(variance)

    t.plan(4);
    console.log('mean is', mean)
    t.equal(mean <= 101 && mean >= 99, true);
    console.log('standard deviation is', stdev)
    t.equal(stdev <= 16 && stdev >= 14, true)
    console.log('values length is', values.length)
    t.equal(values.length === 1000, true)
    console.log('test if .value returns a number')
    t.equal(typeof normal.value(), 'number')
});
