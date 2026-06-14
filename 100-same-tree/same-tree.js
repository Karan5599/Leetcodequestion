/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let curr = [p, q];
    while (curr.length) {
        let p1 = curr.shift();
        let p2 = curr.shift();
        if (p1 === null && p2 === null) {
            continue;
        }
        if (p1 === null || p2 === null) {
            return false;
        }
        if (p1.val !== p2.val) {
            return false;
        }
        curr.push(p1.left, p2.left)
        curr.push(p1.right, p2.right)
    }
    return true;
};