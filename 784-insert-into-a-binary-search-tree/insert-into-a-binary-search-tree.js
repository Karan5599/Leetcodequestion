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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    function traversal(curr) {
        if (curr.val < val) {
            if (curr.right) {
                traversal(curr.right);
            }
            else {
                curr.right = new TreeNode(val)
            }
        }
        if (curr.val > val) {
            if (curr.left) {
                traversal(curr.left);
            }
            else {
                curr.left = new TreeNode(val)
            }
        }

    }
    traversal(root)
    return root;
};