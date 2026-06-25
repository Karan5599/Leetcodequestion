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
var preorderTraversal = function (root) {
    if (!root) return [];

    let ans = [];
    let q = [root];
    while (q.length) {

        let curr = q.pop();
        ans.push(curr.val)

        if (curr.right) {
            q.push(curr.right)
        }
        if (curr.left) {
            q.push(curr.left)
        }
    }
    return ans;
};