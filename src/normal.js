/* global console */

export
default class Normal {
  /**
   * @param  {Number} mean  mean value
   * @param  {Number} stdev standard deviation
   */
  constructor(mean, stdev) {
    this.mean = mean
    this.stdev = stdev
    this.standard = () => {
      let y2
      let useLast = false
      let y1
      if (useLast) {
        y1 = y2
        useLast = false;
      } else {
        let x1, x2, w
        do {
          x1 = (2.0 * Math.random()) - 1.0
          x2 = (2.0 * Math.random()) - 1.0
          w = (x1 * x1) + (x2 * x2)
        } while (w >= 1.0)
        w = Math.sqrt((-2.0 * Math.log(w)) / w)
        y1 = x1 * w
        y2 = x2 * w
        useLast = true
      }

      const retval = mean + (stdev * y1)
      if (retval > 0)
        return retval
      return -retval
    }
  }
  /**
   * Return single random number within the standard deviation of the mean value.
   * @return {Number}
   */
  value() {
    return this.standard()
  }
  /**
   * Return an array of values within the standard deviation of the mean value.
   * @param  {Number} n array length
   * @return {array}
   */
  values(n) {
    let i
    const arr = []
    for (i = 0; i < n; i++) {
      arr.push(this.standard())
    }
    return arr
  }

}
