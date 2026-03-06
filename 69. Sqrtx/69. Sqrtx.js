/*
 * Problem: 69. Sqrt(x)
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/sqrtx/submissions/1939922784/
 * Language: javascript
 * Date: 2026-03-06
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        // let m = Math.floor((l + r) / 2);

        let m = Math.floor(l+(r-l)/2)
        if (x === m ** 2) {
            return m;
        }
        else if (x < m ** 2) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }

    }
    return r;
};
