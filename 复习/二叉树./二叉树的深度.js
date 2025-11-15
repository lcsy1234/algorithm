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
var maxDepth = function (root) {
//   let maxDepth = 0;
  const dfs = (node) => {
    if (!root) return;
    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);
    return Math.max(leftDepth,rightDepth)+1
  };
  return dfs(root);
};
