/*
 * Problem: 496. Next Greater Element I
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/next-greater-element-i/
 * Language: javascript
 * Date: 2026-02-09
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let s = [];
    let n = nums2.length;
    let map = {};

    map[nums2[n - 1]] = -1;
    s.push(nums2[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (s.length) {
            let top = s[s.length - 1]
            if (nums2[i] > top) {
                map[nums2[i]] = -1;
                s.pop();
            }
            else {
                map[nums2[i]] = top;
                break;
            }
        }
        s.push(nums2[i]);
    }
    let ans = [];
    for (let j = 0; j < nums1.length; j++) {
        ans.push(map[nums1[j]]);
    }
    return ans;
};
