/*
 * Problem: 27. Remove Element
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-element/
 * Language: javascript
 * Date: 2026-03-06
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x = 0;
    for(let i=0; i<nums.length; i++){

        if(nums[i] !== val){
          nums[x] = nums[i];
          x = x+1;
        }
    }
    return x;
};
