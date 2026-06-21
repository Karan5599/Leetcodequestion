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
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function traversal(curr){
        if(!curr) return 0;
      let maxleft = Math.max(0, traversal(curr.left));
      let maxright = Math.max(0, traversal(curr.right));
      let currMax = curr.val + maxleft + maxright;

      maxSum = Math.max(currMax, maxSum);
      return curr.val + Math.max(maxleft, maxright)

    }
    traversal(root);
    return maxSum;
};