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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let ans = null;

    function isBts(curr,lo,hi){
       if(!curr) return true;
       if(lo !== null && curr.val <= lo){
        return false;
       }
       if(hi !== null && curr.val >= hi){
        return false;
       }
       let isLeftBts = isBts(curr.left,lo,curr.val);
       let isRightBts = isBts(curr.right,curr.val,hi);
       return isLeftBts && isRightBts;
    }
    ans = isBts(root,null,null);
    return ans;
};