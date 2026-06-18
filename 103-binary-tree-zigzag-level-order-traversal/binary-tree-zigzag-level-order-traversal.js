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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let q = [root]
    while (q.length) {
        let res = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            res.push(curr.val)
        }
        ans.push(res)
    }
    for(let i=0; i< ans.length; i++){
        if(i % 2 !== 0){
            ans[i] = ans[i].reverse();
        }
         else{
            ans[i]
         }
    }
    return ans;
};