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

    function traversal(curr) {
        ans.push(curr.val);
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root)
    return ans;
};