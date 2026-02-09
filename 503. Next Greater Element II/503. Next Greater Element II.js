/*
 * Problem: 503. Next Greater Element II
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/next-greater-element-ii/description/
 * Language: javascript
 * Date: 2026-02-09
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let arr = [...nums, ...nums]
    let s = [];
    let n = arr.length;
    s.push(arr[n - 1]);
    let ans = Array(n).fill(-1);

    for (let i = n - 2; i >= 0; i--) {
        while (s.length) {
            let top = s[s.length - 1];
            if (arr[i] < top) {
                ans[i] = top;
                break;
            }
            else {
                s.pop()
            }
        }
        s.push(arr[i])
    }
    return ans.slice(0, n / 2)
};
