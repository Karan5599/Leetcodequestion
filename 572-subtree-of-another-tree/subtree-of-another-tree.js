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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let hashRoot = serial(root);
    let hashSubroot = serial(subRoot);

    return hashRoot.includes(hashSubroot);
};

function serial(root) {
    let hash = "";
    var traversal = (curr) => {
        if (!curr) {
            hash = hash + "-#"
            return;
        }
        hash = hash + "-"+ curr.val;
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return hash;
}