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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;
    function traversal(curr, sum) {
        let totalsum = curr.val + sum;
        if (!curr.left && !curr.right) {
            if (totalsum === targetSum) {
                ans = true;
            }
            else{
                return ans;
            }
        }
        curr.left && traversal(curr.left, totalsum)
        curr.right && traversal(curr.right, totalsum)
    }
    traversal(root, 0)
    return ans;
};