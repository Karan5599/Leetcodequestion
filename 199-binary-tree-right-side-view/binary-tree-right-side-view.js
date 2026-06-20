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
var rightSideView = function (root) {
    if(!root) return [];
    let ans = [];
    let q = [root];
    while (q.length) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            curr = q.shift();
            if (i === 0) {
                ans.push(curr.val);
            }
            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }
    return ans;
};