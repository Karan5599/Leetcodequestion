/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return [];

    let ans = [];
   let q = [root];
    while (q.length) {
        let res = [];
        let sum= 0;
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            sum += curr.val;
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            res.push(curr.val)
        }
        let avg = (sum/res.length)
        ans.push(avg)
    }
    return ans;
};