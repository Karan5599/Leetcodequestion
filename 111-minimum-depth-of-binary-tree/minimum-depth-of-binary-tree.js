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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let minDepth = Infinity;

    function traversal(curr, depth) {
        if(!curr.left && !curr.right){
            minDepth = Math.min(depth,minDepth)
        }
        curr.left && traversal(curr.left, depth + 1);
        curr.right && traversal(curr.right, depth + 1)
    }
    traversal(root, 1);
    return minDepth;
};